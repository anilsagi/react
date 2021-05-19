import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions/action';
import '../App.css';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import c from "classnames";
import { Button, Paper, IconButton } from '@material-ui/core';
import KeyboardArrowUpSharpIcon from '@material-ui/icons/KeyboardArrowUpSharp';


const ButtonStyle = { backgroundColor: '#3F51B8', color: 'white', marginLeft:'20px' }


export class Faq extends Component {
    state = {
        Question: "",
        Answer: "yet to be answered",
        like: '3',
        dislike: '1',
        likeActive: false,
        dislikeActive: false
    };
    setDislike() {
        this.setState({
            dislikeActive: !this.state.dislikeActive,
            dislike: this.state.dislikeActive
                ? this.state.dislike - 1
                : this.state.dislike + 1
        });
    }
    setLike() {
        this.setState({
            likeActive: !this.state.likeActive,
            like: this.state.likeActive ? this.state.like - 1 : this.state.like + 1
        });
    }

    handleLike() {
        if (this.state.dislikeActive) {
            this.setLike();
            this.setDislike();
        }
        this.setLike();
    }

    handleDislike() {
        if (this.state.likeActive) {
            this.setDislike();
            this.setLike();
        }
        this.setDislike();
    }

    handleChange = (e) => {
        console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
      };


    render() {
        console.log(this.props)
        const paperStyle = { padding: '20px', height: 'auto', width: 'auto', margin: '30px auto' }

        const frequentQA = this.props.frequentQA.map((question, index) => {
            return <div key={question.id}>
                <p><b>{index + 1}. Question:{question.Question} <ThumbUpOutlinedIcon onClick={() => this.props.addLike(index)} className={c({ ["active"]: this.state.likeActive })}
                /><sup>{question.like === true ? '1' : "0"}</sup> <ThumbDownAltOutlinedIcon
                        onClick={() => this.props.addDisLike(index)} className={c({ ["active"]: this.state.dislikeActive })} /><sup>{question.like === false ? '1' : "0"}</sup></b></p>
                <p><b>Answer</b>:{question.Answer}</p>
            </div>
        })

        return (
            <div className='faqContainer'>
                <h2 style={{ textAlign: "center", padding:'20px' }}>Frequently Answered Questions </h2>
                <h5 className="blinkedText" style={{ textDecorationLine: 'underline' }}><i>*Post your question, and feel free to interact*</i></h5>
                <Paper elevation={6} style={paperStyle}>
                    <p><b>Total Number of questions {this.props.frequentQA.length}</b></p>
                    {frequentQA}
                    <p className="questionText"><b>Question</b><input type="text" name="Question" placeholder="Enter your question" onChange={this.handleChange} style={{ lineHeight: '30px', marginBottom: '10px',width:'80%',borderBottomStyle: 'double' }} /><Button style={ButtonStyle} type='submit' variant="contained" onClick={() => this.props.postQuestion(this.state)} >Submit</Button></p>
                    {/*<p><b>Answer</b><input type = "text"  name = "Answer"  placeholder= "Yet to be answered" onChange ={this.handleChange} disabled/></p>*/}
                    {/* <button onClick={() => this.props.postQuestion(this.state)}>Submit</button> */}
                <h3 style={{textAlign:'center', color:'green', marginTop:'20px'}}><i>*** Thankyou ***</i></h3>

                </Paper>
                <IconButton className='top-arrow-last' onClick={this.handleClick}><KeyboardArrowUpSharpIcon style={{ fontSize: '3.0rem' }} className='top-arrow-last' /></IconButton>
                <hr /> 
                <p style={{marginLeft:'92px', marginTop:'15px'}}>Copyright @2021 GIET Auntonomus Engineering college | Allrights reserved |Site best viewed at 1024 x 768 resolution in I.E 10+, Mozilla 40+, Google Chrome 50+</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        frequentQA: state.faq.faqQuestions,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postQuestion: (value) => dispatch({ type: actions.ADDQUESTION, payload: value }),
        addLike: (value) => dispatch({ type: actions.ADDLIKE, payload: value }),
        addDisLike: (value) => dispatch({ type: actions.DISLIKE, payload: value })
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Faq);
