import React from 'react'
import axios from 'axios'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import AccountCircle from 'material-ui-icons/AccountCircle'
import Switch from 'material-ui/Switch'
import { FormControlLabel, FormGroup } from 'material-ui/Form'
import Menu, { MenuItem } from 'material-ui/Menu'
import { ListItemIcon, ListItemText } from 'material-ui/List'
import {SideNav, SideNavItem, Slider, Slide, Parallax} from 'react-materialize'
import Icon from 'material-ui/Icon';
import Form from './Form'

import GoogleIcon from '../images/google.png'
import FacebookIcon from '../images/facebook-box.png'
import LinkedinIcon from '../images/linkedin-box.png'

import '../styles/materialize.css'

import RecipeReviewCard from './RecipeReviewCard'
import Grid from 'material-ui/Grid';

import StackGrid from "react-stack-grid"

import profile_pic from '../images/profile_pic.png'
import config from '../config'
var apiRoot = config.api.root

const signIn = localStorage.getItem("signIn")
const authToken = localStorage.getItem("authToken")

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      anchorElProfileMenu: null,
      anchorElCardMenu: null,
      anchorElShareMenu:null,
      open: false,
      userData:null
    }
  }

  componentDidMount(){
    if(signIn && authToken){
      this.getUserDetails()
    }
  }

  getUserDetails = ()=>{
    axios.get(apiRoot+'/trybotics/getAuthUser?authToken='+authToken)
      .then( (response) =>{
        // console.log(response.data[0])
        this.setState({userData:response.data[0]})
      })
      .catch( (error) => {
        console.log(error);
      })
  }

  handleProfileMenu = (event) => {
    console.log(signIn, authToken)
    if(signIn === "true"){
      this.setState({ 
        anchorElProfileMenu: event.currentTarget
      })
    }else{
      this.setState({
        open: true
      })
    }
  }
  handleCardMenu = event => {
    this.setState({ 
      anchorElCardMenu: event.currentTarget
    })
  }

  handleShareMenu = event => {
    this.setState({ 
      anchorElShareMenu: event.currentTarget
    })
  }

  handleRequestClose = (e,url) => {
    this.setState({ anchorElProfileMenu: null, anchorElCardMenu: null,anchorElShareMenu:null});
    if(url){
      window.open(url)
    }
  }

  openModel = () => {
    this.setState({ open: true });
  }

  closeModel = () => {
    this.setState({ open: false });
  }

  gridSet = () => {
    this.grid.updateLayout();
  }

  SignOut = () =>{
    window.location.reload()
    localStorage.setItem("signIn", false)
    localStorage.setItem("authToken", false)
    this.setState({ anchorElProfileMenu: null})
  }

  render() {

  let sidenav = <SideNav trigger={
      <IconButton color="contrast" aria-label="Menu">
        <Icon>menu</Icon>
      </IconButton>
    } options={{ closeOnClick: true }}
  >
		<SideNavItem userView
			user={{
				background: 'http://img.youtube.com/vi/DWHcA4PH5sc/mqdefault.jpg',
				image: (this.state.userData && this.state.userData.imageUrl)?this.state.userData.imageUrl:profile_pic,
				name: (this.state.userData && this.state.userData.name)?this.state.userData.name:'Your Name',
				email: (this.state.userData && this.state.userData.email)?this.state.userData.email:'you@gmail.com'
			}}
		/>
		<SideNavItem waves href='#' icon='home'>Home</SideNavItem>
		<SideNavItem waves href='#' icon='dashboard'>Hi-Tech News</SideNavItem>
		<SideNavItem waves href='#' icon='event'>Quadcopter</SideNavItem>
		<SideNavItem waves href='#' icon='videocam'>Our Youtube Videos</SideNavItem>
		<SideNavItem waves divider />
		<SideNavItem subheader>Get In Touch</SideNavItem>
		<SideNavItem waves href='#' icon='assignment'>About Us</SideNavItem>
		<SideNavItem waves href='#' icon='phone'>Contact Us</SideNavItem>
  </SideNav>

  let profileMenu =  <Menu
    className="menu"
    anchorEl={this.state.anchorElProfileMenu}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={Boolean(this.state.anchorElProfileMenu)}
    onRequestClose={this.handleRequestClose}
  >
    <MenuItem onClick={this.handleRequestClose}>
      <ListItemIcon>
        <Icon>assignment_ind</Icon>
      </ListItemIcon>
      <ListItemText 
        primary={<div style={{fontSize:'14px'}} >Profile</div>} 
      />
    </MenuItem>
    <MenuItem onClick={this.handleRequestClose}>
      <ListItemIcon>
        <Icon>settings</Icon>
      </ListItemIcon>
      <ListItemText 
        primary={<div style={{fontSize:'14px'}} >Settings</div>} 
      />
    </MenuItem>
    <MenuItem onClick={this.SignOut}>
      <ListItemIcon>
        <Icon>restore</Icon>
      </ListItemIcon>
      <ListItemText 
        primary={<div style={{fontSize:'14px'}} >Logout</div>} 
      />
    </MenuItem>
  </Menu>
    
    return (
      <div className="bodyBgColor">
      {profileMenu}
        <AppBar style={{background:'#2196f3', zIndex:950}}>
          <Toolbar style={{marginLeft:'40px', minHeight: '60px'}}>
            <Typography type="title" color="inherit" className="flex" style={{flex:1}}>
            <Icon className="LogoIcon">accessibility</Icon><span className="logoText">rybotics</span>
            </Typography>
            {true && (
              <div>
                <IconButton
                  aria-haspopup="true"
                  onClick={this.handleProfileMenu}
                  color="contrast"
                >
                  <Icon style={{fontSize:'30px'}}>account_circle</Icon>
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <div className="headerMenuIcon">
          {sidenav}
        </div>

        {(this.state.open)&&
        <Form
          openModel={this.openModel}
          closeModel={this.closeModel}
          open={this.state.open}
        />
        }
        <StackGrid
          gridRef={(grid) => this.grid = grid}
          style={{top: '80px',marginBottom:'15px'}}
          columnWidth={350}
          gutterWidth={15}
          gutterHeight={15}
        >
          <RecipeReviewCard 
            key="1"
            gridSet={this.gridSet} 
            handleCardMenu={this.handleCardMenu}
            handleShareMenu={this.handleShareMenu}
          />
          <RecipeReviewCard
            key="2" 
            gridSet={this.gridSet}  
            handleCardMenu={this.handleCardMenu}
            handleShareMenu={this.handleShareMenu}
          />
          <RecipeReviewCard 
            key="3" 
            gridSet={this.gridSet} 
            handleCardMenu={this.handleCardMenu}
            handleShareMenu={this.handleShareMenu}
          />
          <RecipeReviewCard  
            key="4"
            gridSet={this.gridSet} 
            handleCardMenu={this.handleCardMenu}
            handleShareMenu={this.handleShareMenu}
          />
          <RecipeReviewCard  
            key="5"
            gridSet={this.gridSet} 
            handleCardMenu={this.handleCardMenu}
            handleShareMenu={this.handleShareMenu}
          />
          <RecipeReviewCard 
            key="6"
            gridSet={this.gridSet}  
            handleCardMenu={this.handleCardMenu}
            handleShareMenu={this.handleShareMenu}
          />
        </StackGrid>
      </div>
    );
  }
}

export default Header;