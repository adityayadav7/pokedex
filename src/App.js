import React ,{ Component} from 'react';
import List from './List.js';
import View from './View';
import PO from './PO';
import './App.css';
//import logo from './logo.svg';


class App extends Component {
  constructor(){
    super();
    this.state={
      po:{}
    };
    this.handleOnClick=this.handleOnClick.bind(this);
  }
  handleOnClick(id){
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res=> res.json())
    .then(data =>{
      const po=new PO(data);
      console.log(po);
    })
    .catch(err=>console.log(err));
  }
  render(){
  return (
    <div className="App">
         <List handleOnClick={this.handleOnClick}/>
         <View po={this.state.po}/>
    </div>
  );
  }
}

export default App;
