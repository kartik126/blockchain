import React, { Component } from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import "../Components/header.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";


export class Header extends Component {
  constructor() {
    super();
    this.state = {
      notification: true,
      wallet:true,
    };
  }

  notificationButton = () => {
    this.setState({ notification: !this.state.notification });
  };

  walletButton = ()=>{
    
    this.setState({wallet: !this.state.wallet})
  };
  render() {
    return (
      <div className="header-component">
        <div className="left-div">
          <input placeholder="Search" /> <SearchIcon />
        </div>
        <div className="right-div">
          <button
            className="notification-button"
            onClick={() => this.notificationButton()}
          >
            <NotificationsOutlinedIcon />{" "}
          </button>
          {/* //Notification panel conditon */}
          {this.state.notification ? (
            <div className="notification-container" id="1">
              <p id="noti-heading">notifications </p>
              <p id="noti-content">
                Edit your information in a swipe Sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim. 
                <p id="noti-heading">Feb
                12, 2021 ~ </p>
              </p>
              <hr/>
              <p id="noti-heading">notifications </p>
              <p id="noti-content">
                Edit your information in a swipe Sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim. 
                <p id="noti-heading">Feb
                12, 2021 ~ </p>
              </p>
              <hr/>
              <p id="noti-heading">notifications </p>
              <p id="noti-content">
                Edit your information in a swipe Sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim. 
                <p id="noti-heading">Feb
                12, 2021 ~ </p>
              </p>
              
            </div>
          ) : null}

          <button className="connect-wallet-button" onClick={()=>this.walletButton()}>
            Connect wallet <ArrowDropDownOutlinedIcon />
            {
              this.state.wallet?
              <div className="connect-wallet-container">
                <div className="wallet-small-div">
                <img src="./images/metamask-logo-png-transparent.png"/>
                <h1>Meta Mask</h1>
                </div>
                <div className="wallet-small-div">
                <img src="https://download.logo.wine/logo/Binance/Binance-Icon-Logo.wine.png"/>
                <h1>Binance Chain Wallet</h1>
                </div>
                <div className="wallet-small-div">
              <img src="./images/WalletConnect-icon.png"/>
              <h1>Wallet Connect</h1>
                </div>
                <div className="wallet-small-div">
                <img src="https://dribbble.com/shots/4669247-Portis-io-Logo/attachments/10526732?mode=media"/>
                <h1>Portis</h1>
                </div>
              </div> : null
            }
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
