import React from 'react';
import "./App.css";
import Link from "./components/Link";
import axios from "axios";
import TransactionsContainer from './components/TransactionsContainer'
import { Route, withRouter, Switch } from 'react-router-dom';

class App extends React.Component {


  render(){
    return (
      <>
      <div className="App">
        <Link/>
      </div>
      </>
    );
  }
}

export default withRouter(App);
