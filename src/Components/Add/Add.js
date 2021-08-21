import React from 'react'
import {Button, Input} from '@material-ui/core/'

const add = (props) => {

    return (
        <div style={{marginRight: "10%"}}> 
            {/* <h1>Media RSS</h1> */}
            <h2>Paste the Link of Channel's Homepage to Subscribe</h2>
            <Input 
                fullWidth='true' 
                onChange={props.inputHandler}
                type="text"
                value={props.inputHolder}
                />
            <Button 
                style={{marginTop:"5px"}} 
                size="large" 
                color="primary" 
                variant="contained"
                onClick={props.submitHandler}
                >Add
            </Button>
        </div>
    )
}

export default add
