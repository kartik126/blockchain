import React, { Component } from "react";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import "../Components/header.css";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
export class Header extends Component {
  render() {
    return (
      <div className="header-component">
        <div className="left-div">
          <input placeholder="Search" /> <SearchIcon/>
        </div>
        <div className="right-div">
          <button className="notification-button"><NotificationsOutlinedIcon /> </button>
          <button className="connect-wallet-button">Connect wallet <ArrowDropDownOutlinedIcon /></button>
        </div>
      </div>
    );
  }
}

export default Header;
