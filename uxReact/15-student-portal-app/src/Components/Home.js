import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardContent, CardMedia, Typography, IconButton} from '@material-ui/core';
import '../App.css';
import carouselData from "../config/home";
import KeyboardArrowUpSharpIcon from '@material-ui/icons/KeyboardArrowUpSharp';
import Home3 from "./Home3";
import Students from "../Components/studentsData";


const useStyles = makeStyles({
   
    media: {
      height: 600,
      width: 'auto ',
      marginTop: 20,
      marginLeft:20,
      // justifyContent: 'stretch',
      // display:'flex'
    },
  });
  

function Home() {
    const classes = useStyles();
   const handleClick=()=>{
      window[`scrollTo`]({top:0,behavior:`smooth`})
    }
  return (
    <div>
            <marquee style={{scrollamount: "15", marginTop: '10px', textAlign: "center"}} className="wpanel_marquee" id="message">
                  <p style={{color:'red'}}>Dear students,Due to Covid 19 All mid exams postponed.
                    <span style={{color:'blue'}}> * Contact HOD for latest updates and visit our college webisite for dailyupdates.
                    </span> &nbsp;&nbsp;|&nbsp;&nbsp;  
                    <span  style={{color:'green'}}> Please email all your assignments to your concerned department official email ids to enroll your mid marks to our examination Portal.
                    </span> &nbsp;
                    <span style={{color: "#EE6E73"}}>For Online lectures latest syllabus check from college webiste on or after 05.05.2021.| Stay safe</span>
                  </p>
            </marquee>
            <h1 style={{ textAlign: "center" }}>Welcome to Student portal</h1>

            <div style={{ textAlign: "center" }} >
          <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="http://www.giet.ac.in/img_external/slider/HomeSlide3.JPG"
                  title="Locaton image"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2"><i>Come to Learn Go to Serve</i></Typography>
                </CardContent>
              </CardActionArea>
          </Card>
    </div>
      <div className="App">
        <Carousel >
        {carouselData.carouselImages.map(item => {
          return (
            <div>
            <img src={item.url} alt='image' style={{width:'100%', height:"380px"}}/>
            <h3>{item.title}</h3>
            </div>
          )
        })}
        </Carousel>
      </div>
      <br/>
      <br/>
      <IconButton className = 'top-arrow-last' onClick={handleClick}><KeyboardArrowUpSharpIcon style = {{fontSize: '3.5rem'}} className = 'top-arrow-last'/></IconButton>

      <hr/>
     
      <p style={{display:'inline', marginLeft:'92px'}}>Copyright @2021 GIET Auntonomus Engineering college | Allrights reserved |Site best viewed at 1024 x 768 resolution in I.E 10+, Mozilla 40+, Google Chrome 50+</p>
    <Students/>
    <Home3/>
      </div>
  );
}

export default Home;
