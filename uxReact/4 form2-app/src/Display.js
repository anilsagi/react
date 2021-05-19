import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Lobster'
    },
    card: {
        backgroundColor: '#61dafb'

    }
}

const Display = (props) => {
const {displayData} = (props);
const {classes} = props;
    const displayInfo = displayData.map(info=>
        { 
            return(
                <div>
                    <p>Name:{info.name}</p>
                    <p>dateofBirth:{info.dateofBirth}</p>
                    <p>emailId:{info.emailId}</p>
                    <p>contactNo:{info.name}</p>
                </div>
            )
        });
        return(
        <div>
           <Card className={classes.card} > 
           <CardContent>
           <Typography className={classes.title}>Input Details</Typography>
           <Typography>{displayInfo}</Typography>
           </CardContent>
           </Card>
        </div>
        )
}


export default withStyles(styles)(Display);
