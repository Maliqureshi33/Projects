import React from 'react';
import RecipeReviewCard from './recipeReviewCard';
// const axios = require('axios').default;

const API = "http://localhost:3001?query=";
var DEFAULT_QUERY = "";

class ItemsData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.props.categoryState !== prevProps.categoryState) {
      
      DEFAULT_QUERY = this.props.categoryState;

      fetch(API + DEFAULT_QUERY, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          //     // Note: it's important to handle errors here
          //     // instead of a catch() block so that we don't swallow
          //     // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  }

  componentDidMount() {

    // axios.get(API + DEFAULT_QUERY, {headers: {
    //   'Access-Control-Allow-Origin': '*', 
    //   'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    //   'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE',
    // }})
    // .then((response) => {
    //   console.log(response.data);
    //   console.log(response.status);
    //   console.log(response.statusText);
    //   console.log(response.headers);
    //   console.log(response.config);
    // });
     DEFAULT_QUERY = this.props.categoryState;
     fetch(API + DEFAULT_QUERY, {
       method: 'GET', // *GET, POST, PUT, DELETE, etc.
       headers: {
         'Content-Type': 'application/json'
       },
     })
       .then(res => res.json())
       .then(
         (result) => {
           this.setState({
             isLoaded: true,
             items: result
           });
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
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <img src="/assets/loader.gif" alt="loader" className="loaderImage" />;
    } else {
      return (
        <div className="d-flex">
          {items.map(item => (
              <RecipeReviewCard item={item} />
          ))}
        </div>
      );
    }
  }
}


export default ItemsData