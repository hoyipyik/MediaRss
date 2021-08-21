import React, { Component } from 'react'

export class ChannelItem extends Component {
    render() {
        return (
            <div>
              {this.props.channelMsg}  
            </div>
        )
    }
}

export default ChannelItem
