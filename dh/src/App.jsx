import { useState, useEffect} from 'react'
import './App.css'
import Fayez from './Fayez'
import Image from './image.png'

function App() {
  useEffect(() => {
    fetch('file://./json/output.json')
    .then(response => response.json())
    .then(data => {
    
    const name = data.value.name;
    const inp = data.value.inp;
    console.log('Name:', name);
    console.log('Inp:', inp);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  })

  const [showEvent, setShowEvent] = useState(false);

  const handleButtonClick = () => {
    setShowEvent(true);
  };

  const handleButtonClickAgain = () => {
    setShowEvent(false);
  };

  return (
    <>
      <nav className = 'flex space-x-20 m-5 space-x-[10rem]'>
        <div className = ''>

        </div>
        <div className = 'font-bold text-xl '>
          Website Name
        </div>
        <input placeholder = 'Search for another topic...' className = 'border-2 border-black p-4 w-[25rem] h-[2rem] rounded-lg'></input>
      </nav>
        <div className = 'flex'>
        <div>
            <div className = 'px-8 text-xl font-bold'>HISTORY</div>
            <div className = 'font-Outfit bg-blue-900 text-white rounded-r-lg w-[12rem] h-[90rem]'>
              <div className = 'p-4'>
                PAST DATABASES
              </div>
            </div>
        </div>
        <div className = 'mx-20'>
          <div>
            <div className = 'font-bold text-2xl my-2'>
              Database Query Browser
            </div>
            <div className = 'flex'>
              <input className = 'rounded-3xl p-4 border-4 w-[40rem] bg-gray-200' placeholder = "Enter Query..."></input>
              <button onClick = {handleButtonClick} className = 'rounded-2xl py-2 px-5 ml-5 bg-blue-800 text-white'>Execute</button>
            </div>
            <div className = 'bg-gray-200 border-2 border-black rounded-xl mt-5 h-40 p-5'>
            {showEvent ? <Fayez /> : <div></div>}
            </div>
            
            <div className = 'flex my-4'>
              <input className = 'w-[2rem] h-[2rem] border-[1px] border-black'></input>
              <div className = 'mx-4'>Limit SELECT to</div>
              <input className = 'border-2 w-23 border-[1px] border-black'></input>
              <div className = 'ml-4'>Rows</div>
            </div>
            <div className = 'flex mt-5'>
              <a href = ""className = 'rounded-t-2xl border-black border-2 hover:bg-violet-200 bg-gray-200 p-2 pr-20'>
                Result 1
              </a>
              <a href = "" className = 'rounded-t-2xl border-black border-2 hover:bg-gray-200 bg-violet-200 p-2 pr-20'>
                Result 2
              </a>
              <a href = "" className = 'rounded-t-2xl border-black border-2 hover:bg-gray-200 bg-violet-200 p-2 pr-20'>
                Result 3
              </a>
            </div>
            <div className = 'flex border-2 border-black'>
              <div className = 'border-[1px] pr-[10rem] border-black p-2 bg-gray-200'>
                User ID
              </div>
              <div className = 'border-[1px] pr-[3rem] border-black p-2 bg-gray-200'>
                Age
              </div>
              <div className = 'border-[1px] pr-[4rem] border-black p-2 bg-gray-200'>
                Gender
              </div>
              <div className = 'border-[1px] pr-[10rem] border-black p-2 bg-gray-200'>
                Ethnicity
              </div>
              <div className = 'border-[1px] pr-[10rem] border-black p-2 bg-gray-200'>
                Sentiment Analysis
              </div>
              <div className = 'border-[1px] pr-[10rem] border-black p-2 bg-gray-200'>
                Past Queues
              </div>
            </div>
            <div className = 'flex border-2 border-black'>
              <div className = 'border-[1px] border-black p-2 h-[5rem] w-[13rem]'>
                djadDd87dAdj
              </div>
              <div className = 'border-[1px] p-2 border-black h-[5rem] w-[5.3rem]'>
                18
              </div>
              <div className = 'border-[1px] p-2 border-black h-[5rem] w-[8rem]'>
                Male
              </div>
              <div className = 'border-[1px] p-2 order-black h-[5rem] w-[14.5rem]'>
                Key
              </div>
              <div className = 'border-[1px] p-2 border-black h-[5rem] w-[16rem]'>
                3.00
              </div>
              <div className = 'border-[1px] p-2 border-black h-[5rem] w-[15rem]'>
                Key
              </div>
            </div>
            <div className = 'flex border-2 border-black'>
              <div className = 'border-[1px] border-black p-2 h-[5rem] w-[13rem]'>
                djadDd87dAdj
              </div>
              <div className = 'border-[1px] p-2 border-black h-[5rem] w-[5.3rem]'>
                18
              </div>
              <div className = 'border-[1px] p-2 border-black h-[5rem] w-[8rem]'>
                Male
              </div>
              <div className = 'border-[1px] p-2 order-black h-[5rem] w-[14.5rem]'>
                Key
              </div>
              <div className = 'border-[1px] p-2 border-black h-[5rem] w-[16rem]'>
                -1.00
              </div>
              <div className = 'border-[1px] p-2 border-black h-[5rem] w-[15rem]'>
                Key
              </div>
            </div>
            <div className = 'flex border-2 border-black'>
              <div className = 'border-[1px] border-black p-2 h-[5rem] w-[13rem]'>
                djadDd87dAdj
              </div>
              <div className = 'border-[1px] p-2 border-black h-[5rem] w-[5.3rem]'>
                18
              </div>
              <div className = 'border-[1px] p-2 border-black h-[5rem] w-[8rem]'>
                Male
              </div>
              <div className = 'border-[1px] p-2 order-black h-[5rem] w-[14.5rem]'>
                Key
              </div>
              <div className = 'border-[1px] p-2 border-black h-[5rem] w-[16rem]'>
                2.00
              </div>
              <div className = 'border-[1px] p-2 border-black h-[5rem] w-[15rem]'>
                Key
              </div>
            </div>
            <div className = 'flex border-2 border-black'>
              <div className = 'border-[1px] border-black p-2 h-[5rem] w-[13rem]'>
                djadDd87dAdj
              </div>
              <div className = 'border-[1px] p-2 border-black h-[5rem] w-[5.3rem]'>
                18
              </div>
              <div className = 'border-[1px] p-2 border-black h-[5rem] w-[8rem]'>
                Male
              </div>
              <div className = 'border-[1px] p-2 order-black h-[5rem] w-[14.5rem]'>
                Key
              </div>
              <div className = 'border-[1px] p-2 border-black h-[5rem] w-[16rem]'>
                3.00
              </div>
              <div className = 'border-[1px] p-2 border-black h-[5rem] w-[15rem]'>
                Key
              </div>
            </div>
            <div className = 'flex border-2 border-black'>
              <div className = 'border-[1px] border-black p-2 h-[5rem] w-[13rem]'>
                djadDd87dAdj
              </div>
              <div className = 'border-[1px] p-2 border-black h-[5rem] w-[5.3rem]'>
                18
              </div>
              <div className = 'border-[1px] p-2 border-black h-[5rem] w-[8rem]'>
                Male
              </div>
              <div className = 'border-[1px] p-2 order-black h-[5rem] w-[14.5rem]'>
                Key
              </div>
              <div className = 'border-[1px] p-2 border-black h-[5rem] w-[16rem]'>
                1.00
              </div>
              <div className = 'border-[1px] p-2 border-black h-[5rem] w-[15rem]'>
                Key
              </div>
            </div>
          </div>
          <div className = 'flex mt-10'>
            <div className = 'font-bold text-2xl pt-2'>Graph:</div>
            <div className = 'text-2xl ml-10 bg-violet-200 p-2 border-2 border-black rounded-2xl'>Linear Regression</div>
            <button className = 'text-white bg-black ml-5 p-2 px-8 rounded-2xl'>GO</button>
          </div>
          <div className = 'flex justify-center vertical-align mt-10 bg-gray-200 h-[50rem] mb-20 border-[1px] border-black'>
              <img className = 'h-[40rem] w-[60rem]' src = {Image}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
