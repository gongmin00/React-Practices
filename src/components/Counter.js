import React, {useState} from "react"
import {useSelector,useDispatch} from "react-redux"
import {increment, decrement} from "../redux/actionCreator"

const Counter =()=>{
    const counterValue = useSelector(state=>state.counter)
    const dispatch = useDispatch()
    // const onIncrement =()=>{
    //     return dispatch(increment())
    // }
    const [enterValue, setEnterValue]=useState()
    const getEnterValue =(event)=>{
        setEnterValue(event.target.value)
    }
    return (
        <div>
            <h3>Current value: {counterValue}</h3>
            <h3>You have entered: {enterValue}</h3>
            <input onChange={getEnterValue}/>
            <button onClick={()=>dispatch(increment(Number(enterValue)))}>INCREMENT</button>
            <button onClick={()=>dispatch(decrement(Number(enterValue)))}>DECREMENT</button>
        </div>
    )
}

export default Counter