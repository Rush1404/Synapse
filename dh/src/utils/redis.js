
import {createClient, SchemaFieldTypes} from 'redis';
import * as fs from 'fs/promises';

const client = createClient({
    password: 'HW6bjJBHqyHsCNPOvVSkVKiEOMzehIwl',
    socket: {
        host: 'redis-11731.c326.us-east-1-3.ec2.cloud.redislabs.com',
        port: 11731
    }
});
client.on('error', (err) => console.log('Redis Client Error', err));
await client.connect()

client.ft.DROPINDEX('idx:users')

try {
    await client.ft.create('idx:users', {
        '$.name': {
            type: SchemaFieldTypes.TEXT,
            SORTABLE: true
        },
        '$.inp': {
            type: SchemaFieldTypes.TEXT,
            AS: 'inp'
        }
    }, {
        ON: 'JSON',
        PREFIX: 'user:'
    });
} catch (e) {
    if (e.message === 'Index already exists') {
        console.log('Index exists already, skipped creation.');
    } else {
        // Something went wrong, perhaps RediSearch isn't installed...
        console.error(e);
        process.exit(1);
    }
}

async function setJsonFromFile(key, filePath) {
  try {
    // Read the JSON file content
    const jsonContent = await fs.readFile(filePath, 'utf-8');

    // Set the JSON content in Redis
    await client.json.set(key, '$', JSON.parse(jsonContent));

    console.log(`JSON content from file ${filePath} set in Redis with key: ${key}`);
  } catch (error) {
    console.error(`Error setting JSON content in Redis: ${error}`);
  }
}

// Specify the keys and JSON file paths
const key1 = 'user:1';
const jsonFilePath1 = 'dh/src/json/user1.json';

const key2 = 'user:2';
const jsonFilePath2 = 'dh/src/json/user2.json';

const key3 = 'user:3';
const jsonFilePath3 = 'dh/src/json/user3.json';

const key4 = 'user:4';
const jsonFilePath4 = 'dh/src/json/user4.json';

const key5 = 'user:5';
const jsonFilePath5 = 'dh/src/json/user5.json';

// Use Promise.all to set values concurrently
await Promise.all([
  setJsonFromFile(key1, jsonFilePath1),
  setJsonFromFile(key2, jsonFilePath2),
  setJsonFromFile(key3, jsonFilePath3),
  setJsonFromFile(key4, jsonFilePath4),
  setJsonFromFile(key5, jsonFilePath5)
]);

let result = await client.ft.search(
    'idx:users',
    'fayez'
);
console.log(JSON.stringify(result, null, 2));

fs.writeFile('dh/src/json/output.json', JSON.stringify(result, null, 2), err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

await client.quit();