import React, { Component } from 'react';
import "./NavBar.css";
import Grid from '@material-ui/core/Grid';
import fblogo from "../../images/logo.png";
import home from "../../images/home.svg";
import page from "../../images/pages.svg";
import watch from "../../images/watch.svg";
import market from "../../images/market.svg";
import group from "../../images/groups.svg";
import dp from "../../images/dp6.png";
import { Avatar } from '@material-ui/core';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
        <div>
            <Grid container className='navbar__main'>
                <Grid item xs ={3}>
                    <div className="navbar__leftbar">
                        <img className="navbar__logo" src = {fblogo} width="40px"/>
                        <input type="text" className="navbar__search" />
                    </div>
                </Grid>
                <Grid item xs ={6}>
                    <div className='Navbar__container'>
                        <div className='navbar__tabs active'>
                            <img src={home} height='35px' width='35px' />
                        </div>
                        <div className='navbar__tabs'>
                            <img src={page} height='35px' width='35px' />
                        </div>
                        <div className='navbar__tabs'>
                            <img src={watch} height='35px' width='35px' />
                        </div>
                        <div className='navbar__tabs'>
                            <img src={market} height='35px' width='35px' />
                        </div>
                        <div className='navbar__tabs'>
                            <img src={group} height='35px' width='35px' />
                        </div>
                    </div>
                </Grid>
                <Grid item xs ={3}>
                    <div className='Navbar__right'>
                        <div className='Navbar__righttab'>
                            <Avatar className='Navbar__rightImg' src={dp}/>
                            <div className='Navbar__profileName'>profileName</div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div> 
        );
    }
}
 
export default NavBar;