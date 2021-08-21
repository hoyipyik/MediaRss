import React, { Component } from 'react'
import { Grid, Snackbar } from '@material-ui/core'

import Aux from './hoc/Aux'
import Navigation from './Components/Navigation/Navigation'
import ChannelList from './Components/ChannelList/ChannelList'
import ChannelItem from './Components/ChannelItem/ChannelItem'
import Add from './Components/Add/Add'
// import Info from './Components/Info/Info'
import axios from './axios'
// import axios from 'axios'

export class App extends Component {
  

  state = {
    showList: false,
    showHome: true,
    showInfo: false,
    channelFlag: false,
    inputHolder: "",
    snackbarOpen: false,
    channelMsg: ''
  }

  showListHandler = () =>{
    this.setState({
      showList: true,
      // showHome: false
      showInfo: false,
      channelFlag: false
    })
  }

  showHomeHandler = () =>{
    this.setState({
      showList: false,
      showHome: true,
      showInfo: false,
      channelFlag: false
    })
  }

  showInfoHandler = () =>{
    const Info = this.state.showInfo
    this.setState({
      showInfo: !Info
    })
  }
  
  inputHandler = (event) =>{
    const {value} = event.target
    this.setState({
      inputHolder: value
    })
  }

  submitHandler = () =>{
    const link = [this.state.inputHolder]
    console.log(link)
    if(link[0]!==""){
      axios.get(link)
      .then(responce=>{
        if(responce.status===200){
          axios.post("/link.json", link)
            .then(responce=>{
            console.log(responce)
        
          })
            .catch(error=>{
            console.log(error.request)
          })
        }
          
      })
      .catch(error=>{
        console.log(error)
        this.setState({
          snackbarOpen: true
        })
      })
    }
    this.setState({
      inputHolder: ""
    })
    
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      snackbarOpen: false
    })
    
  };

  channelItemMsg = (msg) =>{
    this.setState({
      channelMsg: msg,
      channelFlag: true
    })
  }

  render() {
    const {showList, showHome,  channelFlag} = this.state
    return (
      <Aux>
        <Navigation 
          showListHandler={this.showListHandler}
          showInfoHandler={this.showInfoHandler}
          showHomeHandler={this.showHomeHandler}
        />
        <Grid container spacing={3}>
          <Grid item xs={2}>
            {showList?
              <ChannelList
                channelItemMsg={this.channelItemMsg}
              />:null}
          </Grid>
          <Grid item xs={9} >
            {channelFlag?
            <ChannelItem
              channelMsg={this.state.channelMsg}
            />
            :<div>
            {showHome?
              <Add 
              inputHolder={this.state.inputHolder}
              inputHandler={this.inputHandler}
              submitHandler={this.submitHandler}
              />:null}
              </div>
            }
          </Grid>
          {/* <Grid item xs={2}>
            {showInfo?<Info/>:null}
          </Grid> */}
        </Grid>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.snackbarOpen}
          autoHideDuration={2000}
          onClose={this.handleClose}
          message="Invalid Channel Link"
        />
      </Aux>
    )
  }
}

export default App
