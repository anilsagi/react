import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles ={
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Lobster'
    },
    card:{
        backgroundColor: 'pink'
    }
}

const CardTemplate = (props) =>{
    const {classes} = props;
        return(
        <div>
           <Card className= {classes.card} > 
           <CardContent>
           <Typography className={classes.title}>Form and Form Validation</Typography>
           <Typography component="p" color="textSecondary">Today we learned about how craete form</Typography>
           </CardContent>
           </Card>
        </div>
        )
}

export default withStyles(styles)(CardTemplate);
