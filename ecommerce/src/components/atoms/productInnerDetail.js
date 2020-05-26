
import React , {useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddTocart from './addTocart';



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
    const [productData, setProductData] = React.useState({});

    
  const API = "http://localhost:3001?name=productDetail&productID=";
  var DEFAULT_QUERY = props.productID;

  useEffect(() => {
      fetch(API + DEFAULT_QUERY, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
          },
        })
          .then(res => res.json())
          .then(
            (result) => {
              console.log("result: "+result)
              result.length > 0 &&
                setProductData(result)
            },
           (error) => {
            //  this.setState({
            //    isLoaded: true,
            //    error
            //  });
           }
         )
  },{})
  

    return (
        productData.length > 0 ?
            <div className={classes.productInnerDetailMain}>
                <div>
                    <Typography align="left"  variant="subtitle1" gutterBottom>
                        {productData[0].product_detail}
                    </Typography>
                    <div className={classes.ratingMain}>
                        <Rating precision={0.5} name="size-small" defaultValue={productData[0].rating} size="small" readOnly  />
                    </div>
                </div>
                <div className={classes.priceMain}>
                    <Typography variant="h6" gutterBottom align="left">
                        US ${productData[0].price}
                    </Typography>
                </div>
                <div className={classes.addToCartSection}>
                    <Button className={classes.buttonClass} variant="contained" color="primary">
                        Buy Now
                    </Button>
                    <AddTocart productData={productData} >
                        <Button className={classes.buttonClass} variant="contained" color="secondary">
                            Add to Cart
                        </Button>
                    </AddTocart>
                </div>
            </div>
        : 
            <image src="/assets/loader.gif" />
    )
  
}

