import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadFromApi } from "./actions";
import './App.css';
import {ItemsListContainer} from "./ItemsList";
import {FilterContainer} from './filter';

export class App extends Component {
  componentDidMount() {
    this.props.loadFromApi();
  }
  render() {
    return (
      <div className="App">
        <FilterContainer/>
        {this.props.items?<ItemsListContainer data={this.props.items}></ItemsListContainer>:'loading...'}
      </div>
    );
  }
}
const mapDispatchToProps = { loadFromApi };
const mapStateToProps = state => {
  return {
    items: state.items,
  };
};
export const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);