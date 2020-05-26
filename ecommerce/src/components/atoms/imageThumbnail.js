import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    ImageThumbnail: {
      width: '100%',
      border: "1px solid #dddddd",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    image: {
      width: '100%',
    },
  }));


export default function ImageThumbnail(props) {
  
    const classes = useStyles();
    const onMouseEnterEvent = () => {
      
      if(props.onMouseEnterEvent !== undefined) {
        props.onMouseEnterEvent()
      }
    }
    debugger
    return(
        <div 
          className={classes.ImageThumbnail}  
          style={{
            maxWidth: props.maxWidth,
            width: props.width,
            margin: props.margin,
            border: props.border,
            maxHeight:props.maxHeight,
            height:props.height,
          }}
          onMouseEnter={() => onMouseEnterEvent()}
        >
          <img 
            className={classes.image} 
            src={props.url === "" || props.url === undefined ? "/assets/not-found.png" : props.url} 
            alt="apple" 
          />
        </div>
    )
}