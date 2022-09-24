import React, { Component } from 'react'
import SearchBar from './SearchBar/SearchBar';
import './app.css';
import axios from 'axios';
import İmageList from './imagelist/İmageList';

class App extends Component {
  state = {
    search: '',
    images: []
  }
  onSearchİmage = async (search) => {
    console.log(search);
    const result = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: search,
        per_page: 9
      },
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_AUTH_ID}`
      }
    })
    this.setState({ images: result.data.results });

  }
  
  render() {
    return (
      <div className='container'>
        <SearchBar onSearchİmage={this.onSearchİmage} />
        <İmageList images={this.state.images} />
      </div>
    )
  }
}


export default App;
