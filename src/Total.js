/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import photo from './odea.png';
import pic from './wally.png';
import Ima from './wizard.png';
import logo from './waldo.jpg';
import check from './check.png';
import Modal from "react-animated-modal";
import './App.css';
import { Label } from 'react-konva';

class Total extends React.Component{
    canvas = React.createRef();
    ctx=null;
    state={
        hide:false,
        hider:true,
        hided:true,
        hides:true,
        count:0,
        showModal: false,
        xw1:690,
        xw2:705,
        yw1:450,
        yw2:595,

        xo1:970,
        xo2:1010,
        yo1:525,
        yo2:570,


        xi1:1075,
        xi2:1120,
        yi1:515,
        yi2:590,

        
        wally:false,
        odea:false,
        wizard:false,
    }
    handleClick=(e)=>{
        e.preventDefault();
       this.setState({hide:!this.state.hide})
       this.myInterval = setInterval(()=>{
        this.setState({
            count: this.state.count+1
        })
    },1000)
    }
    drawLine = (info, style = {}) => {
        const { x, y, x1, y1} = info;
        const { color = 'black', width = 0,} = style;
        this.ctx.beginPath();
        this.ctx.moveTo(x,y);
        this.ctx.lineTo(x1,y1);
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = width;
        this.ctx.stroke();
      }
    componentDidMount(){
        const canvasEle = this.canvas.current;
        canvasEle.width = canvasEle.clientWidth;
        canvasEle.height = canvasEle.clientHeight;
        this.ctx = canvasEle.getContext("2d");
    }
    clicking=(e)=>{
        e.preventDefault();
        var {xw1,xw2,yw1,yw2 ,xo1,xo2,yo1,yo2 ,xi1,xi2,yi1,yi2} = this.state;
        var wally = this.state.wally;
        var odea = this.state.odea;
        var wizard = this.state.wizard;
        var a=e.clientX;
        var b=e.clientY;
        if(a>xw1 && a<xw2 && b>yw1 && b<yw2){
            this.drawLine({ x: xw1, y: 595, x1: xw2, y1: 595 },{ color: 'red' , width: 2});
            this.drawLine({ x: xw1, y: 529, x1: xw2, y1: 529 },{ color: 'red' , width: 2});
            this.drawLine({ x: xw2, y: 529, x1: xw2, y1: yw2 },{ color: 'red' , width: 2});
            this.drawLine({ x: xw1, y: yw2, x1: xw1, y1: 529 },{ color: 'red' , width: 2});
            this.setState({hider:!this.state.hider})
            wally = !wally;
        }else if(a>xo1 && a<xo2 && b>yo1 && b<yo2){
            this.drawLine({ x: xo2, y: 570, x1: xo2, y1: 524 },{ color: 'red' , width: 2});
            this.drawLine({ x: xo1, y: 570, x1: xo1, y1: 524 },{ color: 'red' , width: 2});
            this.drawLine({ x: xo2, y: 570, x1: xo1, y1: yo2 },{ color: 'red', width: 2});
            this.drawLine({ x: xo2, y: 525, x1: xo1, y1: yo1 },{ color: 'red', width: 2});
            this.setState({hided:!this.state.hided})
            odea=!odea;
        }else if(a>xi1 && a<xi2 && b>yi1 && b<yi2){
            this.drawLine({ x: xi2, y: 590, x1: xi2, y1: 515 },{ color: 'red' , width: 2});
            this.drawLine({ x: xi1, y: 590, x1: xi1, y1: 515 },{ color: 'red' , width: 2});
            this.drawLine({ x: xi2, y: 590, x1: xi1, y1: yi2 },{ color: 'red', width: 2});
            this.drawLine({ x: xi2, y: 515, x1: xi1, y1: yi1 },{ color: 'red', width: 2});
            this.setState({hides:!this.state.hides})
            wizard=!wizard;
        }else{
           alert("keep looking")
        }
        if(wally && odea && wizard){
            alert("You Are Successful ")
            clearTimeout(this.myInterval);
            this.setState({showModal:true})
        }else if (!wally && odea && wizard){
            alert("you need to find wally")
        }else if (wally && !odea && wizard){
            alert("you need to find odea")
        }else if (wally && odea && !wizard){
            alert("you need to find wizard")
        }else if (wally && !odea && !wizard){
            alert("you need to find odea and wizard")
        }else if (!wally && !odea && wizard){
            alert("you need to find wally and odea")
        }else if (!wally && odea && !wizard){
            alert("you need to find wally and wizard")
        }
        this.setState({wally:wally,odea:odea,wizard:wizard})
    }
    render(){
        const { count} = this.state;
        return(
            <div className="tout">
                <canvas ref={this.canvas} id="canvas"  onClick={this.clicking}></canvas >
                <Modal className="hamza"
                    visible={this.state.showModal}
                    closemodal={() => this.setState({ showModal: false })}
                    type="flipInX"
                >
                    <Label className="label">
                        <h1>Email :</h1>
                        <input type="email" id="email" pattern=".+@globex.com" size="90" required/>
                        <h1>Password :</h1>
                        <input type="password" id="password" name="pwd" minlength="90"/>
                        <a href="#" className="animated-button1">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </a>
                    </Label>
                </Modal>
                <div className="navbar">
                    <div className="wally">
                    <img className="wally1" src={photo} alt="logo" />
                    {!this.state.hider && (<img src={check} alt="logo" id="checking" />)}
                    <p>wally</p>
                    </div>
                     <div className="odea">
                     <img className="odea1" src={pic} alt="logo"  />
                     {!this.state.hided && (<img src={check} alt="logo" id="checking" />)}
                     <p>odea</p>
                     </div>
                     <div className="wizard">
                     <img className="wizard1" src={Ima} alt="logo"/> 
                     {!this.state.hides && (<img src={check} alt="logo" id="checking" />)}
                     <p>wizard</p>
                     </div>
                </div>
                <div className="button">
                    {!this.state.hide && (<button className="glow-on-hover" id='hide' onClick={this.handleClick}>START</button>)}
                    {this.state.hide && (<h2 className="timer" id='stopwatch' >{Math.floor(count/60)+":"+(count%60)}</h2>)}
                    {this.state.hide && (<img src={logo} ref={this.waldo} alt="Logo" id="waldo"/>)}
                </div>
                <div>
            </div>
            </div>
        );
    }
}
export default Total
