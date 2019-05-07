// Created by Alejandro Romero 5/7/2019
import React, { Component } from 'react';
import ProductList from './components/ProductList/ProductList';
import Modal from './components/Modal/Modal';
import SearchBox from './components/SearchBox/SearchBox';
import InfiniteLoader from 'react-infinite-loader'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: [],
      currentItem: null,
      showModal: false,
      offset: 2,
      searchfield: ''
    }
  }

  componentDidMount() {
    this.fetchMoreData();
  }

  fetchMoreData = () => {
    let offset = this.state.offset;
    const token = 'HzyfvEFIO10Y1vzPMR7wowOzVk0FUkyX'; //YourAccessTokenHere
    fetch(`https://api.commercetools.co/nuts-custom-demo-1/products?offset=${offset}&limit=10`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => response.json())
    .then(products => {
    this.setState({
      items: this.state.items.concat(products.results),
      offset: this.state.offset+= 10
      })
    })
  }

  openModalHandler = (id) => {
    this.setState({
        showModal: true,
        currentItem: this.state.items[id]
    });
  }

  closeModalHandler = () => {
    this.setState({
        showModal: false
    });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
  }

  render() {
    const filteredItems = this.state.items.filter(item => { return item.masterData.current.name.en.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className="App">
        <div className="App-header"> 
          <h1>Nuts Shop</h1>
          <SearchBox searchChange={this.onSearchChange}/>
        </div>
        <Modal show={this.state.showModal} closeModalHandler={this.closeModalHandler} content={this.state.currentItem}></Modal>
        <ProductList items={filteredItems} openModalHandler={this.openModalHandler} fetchMoreData={this.fetchMoreData}/>
        <InfiniteLoader onVisited={ () => this.fetchMoreData() } />
      </div>
    );
  }
}

export default App;
