import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import Aux from './hoc/Aux'
import Navigation from './Components/Navigation/Navigation'
import ChannelList from './Components/ChannelList/ChannelList'
import Add from './Components/Add/Add'
import Info from './Components/Info/Info'
import axios from './axios'
// import axios from 'axios'

export class App extends Component {
  

  state = {
    showList: false,
    showHome: true,
    showInfo: false,
    inputHolder: ""
  }

  showListHandler = () =>{
    this.setState({
      showList: true,
      // showHome: false
      showInfo: false
    })
  }

  showHomeHandler = () =>{
    this.setState({
      showList: false,
      showHome: true,
      showInfo: false
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
    axios.post("/link.json", link)
      .then(responce=>{
        console.log(responce)
        this.setState({
          inputHolder: ""
        })
      })
      .catch(error=>{
        console.log(error.request)
      })
    
  }

  render() {
    const {showList, showHome, showInfo} = this.state
    return (
      <Aux>
        <Navigation 
          showListHandler={this.showListHandler}
          showInfoHandler={this.showInfoHandler}
          showHomeHandler={this.showHomeHandler}
        />
        <Grid container spacing={3}>
          <Grid item xs={2}>
            {showList?<ChannelList/>:null}
          </Grid>
          <Grid item xs={8}>
            {showHome?
              <Add 
              inputHolder={this.state.inputHolder}
              inputHandler={this.inputHandler}
              submitHandler={this.submitHandler}
              />:null}
          </Grid>
          <Grid item xs={2}>
            {showInfo?<Info/>:null}
          </Grid>
        </Grid>
      </Aux>
    )
  }
}

export default App
