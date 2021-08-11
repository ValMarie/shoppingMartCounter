import React, { Component } from 'react';
import Counter from "./counter"

class Counters extends Component {

    render() {
        // Destructuring method
        const { onReset, items, onDelete, onIncrement, check } = this.props; 

        return (          
            <div>
                <button onClick= {onReset} 
                    className= "btn btn-info btn-sm"> Reset
                </button>
                { items.map(counter => 
                <Counter 
                    key= {counter.item }                 
                    onDelete= {onDelete} 
                    onIncrement= {onIncrement}
                    check= { check}
                    counter= {counter}
                    /> )
                     }
            </div> 
            );
    }
}
 
export default Counters;