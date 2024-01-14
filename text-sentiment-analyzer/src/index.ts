import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import path from 'path';
import { getSentiment } from './utils/getSentiment';

const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', __dirname +'/views');
app.use(express.static(path.join(__dirname, '../public')))
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/analyze', (req, res) => {
    const text = req.query.text as string;
    const sentimentScore = getSentiment(text);
    res.json({
        score: sentimentScore || 0
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
