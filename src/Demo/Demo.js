import React, { useReducer } from 'react';

const Demo = () => {

    
    const initialState = 0
    const reducer = (state,action)=>{
        switch(action){
            case 'increment':
                return state + 1 ;
            
            case 'decrement':
                return state -1 ;

            default: return state ;
        }
    }
    const [count,dispatch] = useReducer(reducer,initialState)
    return (

        <div>
            <h5>Count = <span style={{fontSize:'25px'}}>{count}</span></h5>
            <button onClick={()=> dispatch('increment')} style={{padding:'10px',margin:'10px'}}>inCrement</button>
            <button onClick={()=> dispatch('decrement')} style={{padding:'10px',margin:'10px'}}>deCrement</button>
        </div>
    );
};

export default Demo;