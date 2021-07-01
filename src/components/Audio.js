import React, { Component } from "react";
import MicRecorder from "mic-recorder-to-mp3";
import { Button } from "react-bootstrap";
import     {getLocalstorage, setLocalstorage}       from  '../utils/isAuth'



const Mp3Recorder = new MicRecorder({ bitRate: 128 });
export default class Audio extends Component {
    state={
        isRecording: false,
        blobURL: "",
        isBlocked: false,  
        text:""
    }
  componentDidMount() {
      console.log(getLocalstorage())
      const ch=getLocalstorage()
      console.log(ch.audio)
      
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("Permission Granted");
        this.setState({ isBlocked: false });
      },
      () => {
        console.log("Permission Denied");
        this.setState({ isBlocked: true });
      }
    );
  }
   start = () => {
    console.log("click");

    if (this.state.isBlocked) {
      console.log("Permission Denied");
    } else {
      Mp3Recorder.start()
        .then(() => {
          this.setState({ isRecording: true });
        })
        .catch((e) => console.error(e));
    }
  };
   stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        this.setState({ blobURL, isRecording: false });
        getLocalstorage()
      }).catch((e) => console.log(e));
  };

  componentDidUpdate(){
      if(this.state.blobURL){
         const ch=getLocalstorage()
         ch.audio=this.state.blobURL
         setLocalstorage(ch)
         
      }
  }

  
  render() {
    return (
      <div className='container-5'>
        <h1>hello from audio recording</h1>
        <div className='audio-box-1'>
        <Button onClick={()=>{this.start()}} disabled={this.state.isRecording}>
          Record{" "}
        </Button>
        <Button variant='danger' onClick={()=>{this.stop()}} disabled={!this.state.isRecording}>
          Stop
        </Button>
        <audio src={this.state.blobURL} controls="controls" />
        </div>
        
       
      </div>
      
    );
  }
}
