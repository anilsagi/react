import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardActionArea,CardContent,CardMedia,Typography} from '@material-ui/core';
import '../App.css';
// import { GoogleApiWrapper } from 'google-maps-react';
// import Maplocation from '../Components/Map'


const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    // display:inline
    // flexWrap:'wrap',
    // textAlign:'center',
    // display: 'flex'
    alignItems: 'center'
  },
  cardContainer:{
    // textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center'
    // margin:auto
  },
 
  media: {
    height: 200,
    width:300
  },
});

const Contact = () => {
  const classes = useStyles();

  return (
      <div className= {classes.cardContainer}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://techbeacon.scdn7.secure.raxcdn.com/sites/default/files/styles/article_hero_image/public/field/image/google-location-privacy.jpg?itok=hDW88dNj"
          title="Locaton image"
        />
       {/* <Maplocation/>*/}
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Location
      </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://helpdeskgeek.com/wp-content/pictures/2019/04/email.png.webp"
          title="Email image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Email us
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            xxxxxxxx@zzz.com
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://logodix.com/logo/761629.png"
          title="phone contact image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Contact Number
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            +(91) 999999999
           </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
export default Contact;