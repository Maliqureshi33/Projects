
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    productInnerDetailMain: {
        padding:1
    },
    ratingMain: {
        textAlign: "left"
    },
    addToCartSection: {
        textAlign: "left",
        ":nth-child(n) button": {
            marginRight: 10
        }

    },
    buttonClass: {
        marginRight: 10

    },
    priceMain: {
        padding: "20px 0",
        margin: "20px 0",
        borderTop: "1px solid #f9f9f9",
        borderBottom: "1px solid #f9f9f9",
        
    }
  }));

export default function ProductInnerDetail(props) {
    const classes = useStyles();
    return (
      <div className={classes.productInnerDetailMain}>
        <div>
            <Typography  variant="subtitle1" gutterBottom>
                Travis Scotts ASTROWORLD Hoodies Man The Embroidery Letter Print Swag WISH YOU WERE HERE Hoodie Plus US Size S-XXL
            </Typography>
            <div className={classes.ratingMain}>
                <Rating name="size-small" defaultValue={2} size="small" readOnly  />
            </div>
        </div>
        <div className={classes.priceMain}>
            <Typography variant="h6" gutterBottom align="left">
                US $24.00
            </Typography>
        </div>
        <div className={classes.addToCartSection}>
            <Button className={classes.buttonClass} variant="contained" color="primary">
                Buy Now
            </Button>
            <Button className={classes.buttonClass} variant="contained" color="secondary">
                Add to Cart
            </Button>
        </div>
      </div>
    )
  
}

