import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'

import { Navbar } from './components';
import { CampaignDetails, CreateCampaign, SecondPage, Profile, Homepage } from './pages';

const App = () => {
  return (
    <>
    <div>

      <div>
        <Navbar />

        <Routes>
          <Route path="/" element = {<Homepage />}/>
          <Route path = "/second-page" element = {<SecondPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App