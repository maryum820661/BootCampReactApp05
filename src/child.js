import React,{useContext} from 'react';
import CounterContext from './CounterContext';
function Child(props)
{
    let counterValue=useContext(CounterContext);
return(
<div>
    <h1>This is the first Child using Context API</h1>
<button onClick={()=>{counterValue[1](++counterValue[0])}}>Increment Context</button>
<h1>The value of the counter is {counterValue[0]} </h1>
</div>

);


}
export default Child;