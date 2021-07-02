import React, { Component } from "react";
import MicRecorder from "mic-recorder-to-mp3";
import { Button } from "react-bootstrap";
import { getLocalstorage, setLocalstorage } from "../utils/isAuth";
import {toppings} from '../utils/toppings'
import { Link } from "react-router-dom";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });
export default class Audio extends Component {
  state = {
    isRecording: false,
    blobURL: "",
    isBlocked: true,
    mp3URL: "",
  };
  componentDidMount() {
    console.log(this.state)
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
    console.log("clicked");
    if (this.state.isBlocked) {
      console.log("Permission Denied");
      alert("you have denied the permission ! Please allow for mic recording");
    } else {
      Mp3Recorder.start()
        .then(() => {
          this.setState({ isRecording: true });
        })
        .catch((e) => console.error(e));
    }
  };
  stop = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const file = new File(buffer, "me-at-mp3", {
          // changing the format to mp3
          type: "audio/mpeg",
          lastModified: Date.now(),
        });
        const blobURL = URL.createObjectURL(blob);
        this.setState({ blobURL, isRecording: false });
       // console.log(file);
        const player = URL.createObjectURL(file);
        this.setState({ mp3URL: player });
       // console.log(player);
        //getLocalstorage();
      })
      .catch((e) => console.log(e));
  };

  componentDidUpdate() {
   // console.log(this.state.checkedState)
    if (this.state.mp3URL) {
      const ch = getLocalstorage();
      ch.audio = this.state.mp3URL;
      setLocalstorage(ch);
    }
  }


  render() {
    return (
      <div className="container-5">
        <h1>hello from audio recording</h1>
        <div className="audio-box-1">
          <div className="audio-box-2">
            <Button
              variant={this.state.isRecording ? "primary" : "light"}
              onClick={() => {
                this.start();
              }}
              // disabled={this.state.isBlocked}
            >
              Record{" "}
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                this.stop();
              }}
              disabled={!this.state.isRecording}
            >
              Stop
            </Button>
            <audio src={this.state.mp3URL} controls="controls" />
          </div>
        </div>
        <div className="audio-box-3">
              <Link to='/checklist'><Button>Go to checklist</Button></Link>
            {/* <div className='toppings-list'>
                {toppings.map(({name,price},index)=>(
                  <li key={index}>
                      <div className='toppings-list-item'>
                        <input
                        id={`custom-checkbox-${index}`}
                        type='checkbox'
                        name={name}
                        value={name}
                        checked={this.state.checkedState[index]}
                        onChange={()=>this.handleonChange(index)}
                        
                        />
                        <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                      </div>
                  </li>
                ))}
            </div>
        */}

        </div>
      </div>
    );
  }
}
