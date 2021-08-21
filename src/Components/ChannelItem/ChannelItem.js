import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

import axios from '../../axios'

export class ChannelItem extends Component {
    state =  {
        data: {},
        links: [],
        title: '',
        open: false,
        currentlink:'',
        currenttitle: ''
    }
    
    // componentDidMount(){
    //     axios.get(this.props.channelMsg)
    //         .then(res=>{
    //             console.log(res)
    //             this.setState({
    //                 data: res,
    //                 title: res.title,
    //                 links: res.links
    //             })
    //         })
    //         .catch(error=>console.log(error))
    // }

    Styles = () => makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
          backgroundColor: theme.palette.background.paper,
        },
        imageList: {
          width: 500,
          height: 800,
        },
        icon: {
          color: 'rgba(255, 255, 255, 0.54)',
        },
    }));

    handleClickOpen = (title, link) =>{
        this.setState({
            open: true,
            currentlink: title,
            currenttitle: link
        })
    }
      
    handleClose = () =>{
        this.setState({
            open: false,
            currentlink: "",
            currenttitle: ""
        })
    }

    render() {
        const {title, links} = this.state
        const classes = this.Styles()
        return (
            <div className={classes.root}>
              <ImageList rowHeight={180} className={classes.imageList}>
                <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
                  <ListSubheader component="div">{this.props.channelMsg}</ListSubheader>
                </ImageListItem>
                {links.map((item) => (
                  <ImageListItem key={item.videolink}>
                    <img src={item.videoimage} alt={item.videotitle} />
                    <ImageListItemBar
                      title={item.videotitle}
                    //   subtitle={<span>by: {item.author}</span>}
                      actionIcon={
                        <IconButton 
                            aria-label={`info about ${item.videotitle}`} 
                            className={classes.icon}
                            onClick={()=>this.handleClickOpen(item.videotitle, item.videolink)}
                        >
                          <PlayCircleOutlineIcon />
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                ))}
              </ImageList>

              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">{this.state.currenttitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src={this.state.currentlink} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; 
                        clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture" 
                        allowfullscreen/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Discord
                    </Button>
                    {/* <Button onClick={handleClose} color="primary" autoFocus>
                        Agree
                    </Button> */}
                </DialogActions>
            </Dialog>
            </div>
          );
    }
}

export default ChannelItem
