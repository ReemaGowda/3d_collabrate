import React, { Component } from 'react';
import PopUp from './component/PopUp';
import Chart from './component/Chart';
import Navbar from './component/Navbar';
import Hero from './component/Hero';

import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      seeMore: false,
      display: false
    }
  }

  componentDidUpdate(){
   
  }

  seeMore = () => {
    this.setState({
      seeMore: true,
      display: true
    })    
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Hero/>
        <PopUp seeMore={this.seeMore}/>  
        <Chart display={this.state.display}/>
      </div>
    );
  }
}

export default App;
