import React from 'react'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog'
import Slide from 'material-ui/transitions/Slide'
import Login from './Login'

import '../styles/common.css'

function Transition(props) {
  return <Slide direction="up"{...props} />;
}
class Form extends React.Component{

  constructor(props){
    super(props)
  }

    render() {
      return (
        <div>
        <Dialog 
          maxWidth="xs"
          open={this.props.open} 
          onRequestClose={this.props.closeModel} 
          transition={Transition}
        >
        <Login closeModel={this.props.closeModel}/>
        </Dialog>
      </div>
      )
    }
}

export default Form