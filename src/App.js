import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Counters from "./components/multicounter";
import './App.css';

class App extends Component {
  state = { 
    items: [ 
        { item: 1, value: 0 },
        { item: 2, value: 0 },
        { item: 3, value: 0 },
        { item: 4, value: 0 },
        { item: 5, value: 0 }

       ]
}

handleIncrement = counter => {
   const items = [...this.state.items];
   const index = items.indexOf(counter);
   items[index] = {...counter};
   items[index].value ++;
   this.setState({items});
}

handleDelete = counterId => {        
   const items = this.state.items.filter( i => i.item !== counterId );
   this.setState({ items });
}

handleReset = ( ) => {
   const items = this.state.items.map( i => {i.value = 0; return i;
   });
   this.setState({ items});
}

hooray = (id) => {
   if (id === 5){
       alert("You have reached "+ id);
   }else{
       console.log("You are not there yet. Remaining", 5-id);
   }
}

  render() { 
    return (
      <React.Fragment>
        <Navbar totalCounter= {this.state.items.filter(i => i.value > 0).length}/>;
        <main className= "container">
          <Counters 
            items= {this.state.items}
            onReset= {this.handleReset} 
            onDelete= {this.handleDelete} 
            onIncrement= {this.handleIncrement}
            check= { this.hooray} 
          />;
        </main>
      </React.Fragment>
      
    );
  }
}
 
export default App;
