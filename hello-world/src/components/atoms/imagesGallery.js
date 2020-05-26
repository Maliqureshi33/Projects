import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageThumbnail from './imageThumbnail';


const useStyles = makeStyles((theme) => ({
    ImagesGalleryMain: {
      width: '100%',
      maxWidth: 360,
    },
    bottomImages: {
      width: '100%',
      maxWidth: 360,
      display: "flex"
    },
  }));


export default function ImagesGallery(props) {
    const classes = useStyles();
    const [mainImage, setMainImage] = React.useState();
    const [imagesArray, setimagesArray] = React.useState({});
    const chnageURL = (url) => {
        if(mainImage !== url) {
            setMainImage(url)
        }
    }

    const API = "http://localhost:3001?name=images&productID=";
    var DEFAULT_QUERY = props.produstID;

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
                    setMainImage("/assets/"+result[0].url)
                    setimagesArray(result)
              },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
             (error) => {
               this.setState({
                 isLoaded: true,
                 error
               });
             }
           )
           debugger
        setMainImage("/assets/not-found.png")
    },{})
    
    console.log("imagesArray : "+imagesArray)

    return(
        <div className={classes.ImagesGalleryMain}>
            <div className={classes.topImage}>
                <ImageThumbnail  maxWidth="360px" height="385px" border="none" url={mainImage}/>
            </div>
            <div className={classes.bottomImages}>
            {/* {items.map(item => ( */}

                {imagesArray.length > 0 &&
                    imagesArray.map((imageData , imageIndex) => (
                        <ImageThumbnail 
                            onMouseEnterEvent={() => chnageURL("/assets/"+imageData.url)}
                            maxWidth="60px" 
                            margin="5px 5px 5px 0"
                            url={"/assets/"+imageData.url}
                        />
                    ))
                }
                {/* {
                    imagesArray.length > 1 &&
                        imagesArray.map(image =>{
                            <ImageThumbnail 
                                onMouseEnterEvent={() => chnageURL("/assets/apple.jpg")}
                                maxWidth="60px" 
                                margin="5px 5px 5px 0"
                                url="/assets/apple.jpg"
                            />

                        })
                } */}
            </div>
        </div>
    )
}