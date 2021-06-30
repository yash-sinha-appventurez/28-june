import React, { Component } from 'react'

export default class Audio extends Component {
    state={car:{color:'red'},counter:1,msg:'hello yash',ar:[]}
  myref=React.createRef()
  handleClick=()=>{
      this.myref.current.focus()
  }
    render() {

        var device =navigator.mediaDevices.getUserMedia({audio:true})
        var items=[]
        device.then(stream=>{
            var recorder =new MediaRecorder(stream)
            recorder.ondataavilable=e=>{
                items.push(e.data)
                if(recorder.state==='inactive'){
                    var blob=new Blob(items,{type:'audio/webm'})
                    var audio=document.getElementById('audio')
                   var minaudio=document.createElement('audio')
                    minaudio.setAttribute('controls','controls')
                    audio.appendChild(minaudio)
                    minaudio.innerHtml=`<source src="`+URL.createObjectURL(blob)+`"type="video.webm"/>`
                }
            }
            recorder.start(100)
            setTimeout(() => {
                recorder.stop() 
            }, 5000);
        })

     

console.log(this.state)


        return (
            <div className='container-5'>
                <h1> hello from Audio recording</h1>
                <div className='audio ' id='audio' ref={'audio'}></div>
                <input type='text' ref={this.myref}></input>
                <button onClick={this.handleClick}>Focus</button>
             
            </div>
        )
    }
}
