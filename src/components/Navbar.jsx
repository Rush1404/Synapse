import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { navlinks } from '../constants';
import { useStateContext } from '../context';
import { CustomButton } from './';
import { logo, menu, search, thirdweb } from '../assets';

const navlinkStyle = {
  width: '48px',
  height: '48px',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '15px', // Add margin to space out the text
 };

 const buttonStyle = {
  width: '460x',
  height: '48px',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px', // Add margin to space out the text
  border: 'none', // Remove default button border
  outline: 'none', // Remove focus outline
  cursor: 'pointer', // Change mouse cursor to pointer

 };
 
 const hoverStyle = {
  ':hover': {
    backgroundColor: '#EEEEEE', // Darken background color on hover
    textDecoration: 'underline',
  },
 };
 
 // Merge styles
 const mergedStyle = {...buttonStyle, ...hoverStyle};

const Navbar = () => {
 const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
 <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
 {!isActive ? (
  <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
 ) : (
  <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
 )}
 </div>
 )
 const navigate = useNavigate();
 const [isActive, setIsActive] = useState('dashboard');
 const [toggleDrawer, setToggleDrawer] = useState(false);
 const [searchValue, setSearchValue] = useState(''); // New state for search input
 const { connect, address } = useStateContext();

 // Perform the search operation
 const handleSearch = (event) => {
 event.preventDefault();
 console.log(`Searching for: ${searchValue}`);
 // TODO: Implement your search logic here
 };

 return (
 <>
    <div className="flex justify-between items-center flex-row sticky top-0" style={{backgroundColor: "#FFFFFF"}}>
    <div> 
      <img src='client\src\assets\logo-delta.png' alt='logo'></img>
      </div>
    <div className="flex-1 flex flex-row justify-center items-center rounded-[20px] w-[76px] py-8">
    <div className="flex flex-row justify-between items-center gap-3">
    {navlinks.map((link) => (
    <button 
      key={link.name}
      style={mergedStyle} 
      onClick={() => {
        if(!link.disabled) {
          setIsActive(link.name);
          navigate(link.link);
        }
      }}
    >
      {link.name}
    </button>
    ))}

    </div>
    <div style={{position:'absolute', right:'110px'}}>
    <CustomButton 
    btnType="button"
    title={address ? 'Create a campaign' : 'Connect'}
    styles={address ? 'bg-[#1dc071]' : 'bg-[#4acd8d]'}
    handleClick={() => {
      if(address) navigate('create-campaign')
      else connect()
    }}
    />
    </div>
    </div>
    </div>
 
 <div className="sm:flex hidden flex-row justify-end gap-4">
 </div>
 <div className="sm:hidden flex justify-between items-center relative">
  <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
    <img src={logo} alt="user" className="w-[60%] h-[60%] object-contain" />
  </div>
  <img 
    src={menu}
    alt="menu"
    className="w-[34px] h-[34px] object-contain cursor-pointer"
    onClick={() => setToggleDrawer((prev) => !prev)}
  />
  <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
    <ul className="mb-4">
      {navlinks.map((link) => (
        <li
          key={link.name}
          className={`flex p-4 ${isActive === link.name && 'bg-[#3a3a43]'}`}
          onClick={() => {
            setIsActive(link.name);
            setToggleDrawer(false);
            navigate(link.link);
          }}
        >
             <img 
               src={link.imgUrl}
               alt={link.name}
               className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
             />
                         <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
              {link.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </div>
 </>
 )
}

export default Navbar;
