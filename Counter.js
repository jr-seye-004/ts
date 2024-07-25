// // code JS
// import React, { Component } from 'react'; 

// class Counter extends Component { 
//     state = {
//         count: 0
//     }; 

//     increment = () => {
//         this.setState({ count: this.state.count + 1 }); 
//     }; 

//     render() { 
//         return (
//             <div> 
//                 <p>Count: {this.state.count}</p> 
//                 <button onClick={this.increment}>Increment</button> 
//             </div>
//         );
//     }
// } 

// export default Counter;

// code TS
import React, { Component } from 'react';

// Définir une interface pour l'état
interface CounterState {
    count: number;
}

// Composant de classe avec état typé
class Counter extends Component<{}, CounterState> {
    state: CounterState = {
        count: 0
    };

    increment = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;

