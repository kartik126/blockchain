import React, { Component } from "react";
import "../Components/navbar.css";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AddModeratorOutlinedIcon from "@mui/icons-material/AddModeratorOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Header from "./Header";
import Transactiontable from "./Transactiontable";
export class Navbar extends Component {
  render() {
    return (
      <div className="main-div">
        {this.props.showMenu ? (
          <div className="navbar-container">
            <div className="hide-button">
              <button onClick={this.props.toggleMenu}>
                <ArrowBackOutlinedIcon />
              </button>
            </div>
            <div className="logo-div">
              <div className="w-12 h-12 bg-primary rounded-full"></div>
              <div className="logo-name">
                <h1>logo</h1>
              </div>
            </div>
            <div className="wallet-div">
              <button className="wallet-button">
                <AccountBalanceWalletOutlinedIcon />
                Wallet
              </button>
            </div>
            <div className="middle-buttons-div">
              <button className="dvdx-button">
                {" "}
                <AddModeratorOutlinedIcon /> DVDX Price
              </button>
              <button className="signup-updates-button">
                <AddCircleOutlineOutlinedIcon />
                Sign Up Updates
              </button>
            </div>
            <div className="user-media-div">
              <div className="first-row">
                <button>
                  <LanguageOutlinedIcon />
                </button>
                <button>
                  <TelegramIcon />
                </button>
                <button>
                  <TwitterIcon />
                </button>
              </div>
              <div className="second-row">
                <button>
                  <GitHubIcon />
                </button>
                <button>
                  <DescriptionOutlinedIcon />
                </button>
                <button>
                  <AddToDriveIcon />
                </button>
              </div>
            </div>
            <div className="bottom-buttons-div">
              <button>Privacy Policy</button>
              <button>Disclaimer</button>
            </div>
          </div>
        ) : (
          <div className="minimise-bar">
            <div className="show-button">
              <button onClick={this.props.toggleMenu}>
                <ArrowForwardIcon />
              </button>
            </div>
            <div className="min-logo-div">
              <div className="w-12 h-12 bg-primary rounded-full"></div>
            </div>
            <button className="min-wallet-button">
              <AccountBalanceWalletOutlinedIcon />
            </button>
          </div>
        )}
        <div className="content-component">
         <Header/>
         <h1>List of Wallets</h1>
         <Transactiontable/>
        </div>
      
        
      </div>
     

    );
  }
}

export default Navbar;
