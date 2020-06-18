import React ,{useReducer}from 'react';
import counterReducer from './counterReducer';

function Child2()
{
let [state,dispatch]=useReducer(counterReducer,1);//Destructuring
//userReducer function takes the value  to the reducer function..
//
    return(
        <div>
        <h1>This is the second Child using Reducer </h1>
        <h1>Value of Reducer is{state}</h1>
        <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    );
}
export default Child2;