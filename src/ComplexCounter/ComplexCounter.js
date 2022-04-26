import React, { useReducer } from 'react';

const ComplexCounter = () => {
    const initialState = {
        counter:0,
        counter2:0
    }
    const reducer = (state,action)=>{
        switch(action.type){
            case 'increment':
                return {...state,counter:state.counter + action.value} ;
            
            case 'decrement':
                return {...state,counter: state.counter - action.value } ;
            
            case 'increment5':
                return {...state,counter2:state.counter2 + action.value} ;
            
            case 'decrement5':
                return {...state,counter2:state.counter2 - action.value} ;

            default: return state ;
        }
    }
    const [count,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <div>
                <h5>Count = <span style={{fontSize:'25px'}}>{count.counter}</span></h5>

                <h5>Count = <span style={{fontSize:'25px'}}>{count.counter2}</span></h5>

                <button onClick={()=> dispatch({type:'increment',value:1})} style={{padding:'10px',margin:'10px'}}>inCrement</button>
                <button onClick={()=> dispatch({type:'decrement',value:1})} style={{padding:'10px',margin:'10px'}}>deCrement</button>
                <button onClick={()=> dispatch({type:'increment5',value:5})} style={{padding:'10px',margin:'10px'}}>increment by 5</button>
                <button onClick={()=> dispatch({type:'decrement5',value:5})} style={{padding:'10px',margin:'10px'}}>deCrement by 5</button>
            </div>
    
        </div>
    );
};

export default ComplexCounter;