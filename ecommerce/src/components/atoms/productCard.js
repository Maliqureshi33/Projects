import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Link } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  productCard: {
    width: "calc(20% - 10px)",
    float: "left",
    marginRight: "10px",
    marginBottom: "10px",
    minWidth: "220px"

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
    textAlign: "left",
    textDecoration: "none"
  },
  productDetailMain: {
    textDecoration: "none",
    color: "rgba(0, 0, 0, 0.54)",
  },
  '@global': {
    '.productCardList': {
      width: "98%",
      maxWidth: "100%",
      height: "180px",
      margin: 0,
      display: "flex",
      borderRadius: 0
    },
    '.productCardList .mediaInner': {
      width: "180px",
      margin: 10,
      padding: 0,
      height: "auto",
    },
    '.productCardList .productDetailList': {
      display: "flex"
    },
    
  },
  productDetailInner: {
    maxWidth: "550px",
    paddingRight: "15px"
  }
}));

export default function ProductCard(props) {
  const classes = useStyles();
  const handleProductClick = (event) => { }

  return (
    <Card
      className={`${classes.productCard} ${props.viewType === "list" ? "productCardList" : "productCardGrid"}`}
      
      onClick={() => handleProductClick()}
    >
      <CardMedia
        className={`${classes.media} ${"mediaInner"}`}
        image="/assets/apple.jpg"
        image={"/assets/" + props.item.image}
        title={props.item.name}
      />
      <Link
        to={"/productDetail/" + props.item.id}
        className={`${classes.productDetailMain} ${"productDetailMain"}`}
      >
        <CardContent className={`${classes.productDetail} ${"productDetailList"}`}>
          {
            props.viewType === "list" &&
              <div className={classes.productDetailInner}>
                  <Typography align="left"  variant="subtitle1" gutterBottom>
                      {props.item.product_detail}
                  </Typography>
                  <div className={classes.ratingMain}>
                      <Rating precision={0.5} name="size-small" defaultValue={props.item.rating} size="small" readOnly  />
                  </div>
              </div>
          }
          <div className>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.item.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Price : $ {props.item.price}
            </Typography>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
