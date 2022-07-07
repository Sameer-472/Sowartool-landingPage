import React from 'react'
import "./Navbar.css"
import TextField from '@mui/material/TextField';
import GroupIcon from '@mui/icons-material/Group';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  
  return (
    <>
        <nav id='nav'>
          <div  >
              <ul className='stageOne'>
                <li> <img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_US-Site/-/Sowa-Webshop_US-smb-responsive/en_US/Sowa.png" id='logo' alt="" /> </li>
                <div style={{display: 'flex' , marginRight: 20}}>
                <li><input type="text" id='input'/></li>
                {/* <SearchOutlinedIcon style={{color: 'white'}}/> */}
                <li> <GroupIcon fontSize='small' id='icon'/> </li>
                <li> <SettingsInputComponentIcon fontSize='small' id='icon'/> </li>
                <li> <FavoriteBorderIcon fontSize='small' id='icon'/> </li>
                <li> <ShoppingBagIcon fontSize='small' id='icon'/></li>
                <li> <FormatAlignRightIcon fontSize='small' id='icon'/> </li>
                </div>
              </ul>
          </div>
          <div >
              <ul className='stageTwo'>
                <li style={{fontSize: 20 , marginTop: -60}}>TOOLING YOUR WORLD</li>
                <li style={{color: '#f4ae1a' , fontWeight: 'bolder'}}>1321-320-20 sales@gmail.com</li>
              </ul>
          </div>
          <div >
              <ul className='stageThree'>
                <div style={{display: 'flex'}}>
                <li className='navContent'>Shop all Product</li>
                <li className='navContent'>Shop By Brand</li>
                <li className='navContent'>Promotions</li>
                <li className='navContent'>Dawnload Center</li>
                <li className='navContent'>Contact us</li>
                <li className='navContent'>Support</li>
                </div>
                <li>Quick Order</li>
              </ul>
          </div>
        </nav>
    </>
  )
}

export default Navbar