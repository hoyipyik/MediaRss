import React, {Component}  from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

import axios from '../../axios'




export default class VerticalTabs extends Component {
  state = {
    value: 0,
    channelList:[
      {
        id: '0',
        title: "1",
        icon: "",
        getmsg: '/1'
      },

      {
        id: '1',
        title: "2",
        icon: "",
        getmsg: '/2'
      },


      {
        id: '2',
        title: "3",
        icon: "",
        getmsg: '/3'
      }
    ]
  }

  

  // componentDidMount(){
  //   axios.get("/list.json")
  //     .then(responce=>{
  //       this.setState({
  //         channelList: responce
  //       })
  //     })
  //     .catch(error=>console.log(error))
  // }
  Styles = () => makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: '100%',
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));

  a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue
    })
  };
  

  render(){
    const list = this.state.channelList
    const classes = this.Styles()
    const displayList = list.map((item, index)=>{
      return <Tab label={item.title} {...this.a11yProps(index+1)} onClick={()=>this.props.channelItemMsg(item.getmsg)}/>
    })
    return(
      <div className={classes.root} >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={this.state.value}
          onChange={this.handleChange}
          aria-label="Vertical tabs example"
          lassName={classes.tabs}
        >
        <Tab label="Channels" {...this.a11yProps(0)}/>
          {displayList}
        </Tabs>
      </div>
    );
  }
  
}
