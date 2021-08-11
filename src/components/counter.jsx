import React, { Component } from 'react';

class Counter extends Component {
    // constructor(){
    //     super();
    //     this.clickIncrementButton = this.clickIncrementButton.bind(this);
    //     this.clickDeleteButton = this.clickDeleteButton.bind(this);
    // }

    // Instead of the using the constructor function to bind event handlers, we use an arrow function
    // which is cleaner

    getBadgeClasses() {
        let classes = "badge m-3 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    checkCount() {
        let {value} = this.props.counter
        return value === 0? "Zero": value;
    }

    render() { 
        return (
        <div>
            <span className = {this.getBadgeClasses()}> {this.checkCount()} </span>
            <button onClick= {() => this.props.onIncrement (this.props.counter)} 
                    className = "btn btn-secondary btn-sm btn-rounded m-3"> Increment 
            </button>
            <button 
                onClick= { () => this.props.onDelete (this.props.counter.item) } 
                onDoubleClick={() => this.props.check(this.props.counter.item)}  
                className = "btn btn-danger btn-sm btn-rounded m-3">  Delete 
            </button>
            {/* <ul> {this.state.items.map(item => <li key={item}> {item} </li>)} </ul> */}
        </div>
        );
    }
        
} 

 
export default Counter;