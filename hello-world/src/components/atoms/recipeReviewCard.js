import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "31.33%",
    float: "left",
    margin: "1%",
    maxWidth: "220px"

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  bottomSection: {
    display: "flex",
    justifyContent: "space-between"
  },
  productDetail: {
    textAlign: "left"
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const handleProductClick = (event) => {  }

  return (
    <Link to={"/productDetail/"+props.item.id}>
      <Card 
        className={classes.root} 
        onClick={()=>handleProductClick()}
      >      
        <CardMedia
          className={classes.media}
          image="/assets/apple.jpg"
          image={"assets/"+props.item.image}
          title={props.item.name}
        />
        <CardContent  className={classes.productDetail}>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price : $ {props.item.price}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
