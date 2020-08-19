import React,{useState} from "react"
import {connect} from "react-redux"
import {increment, decrement} from "../redux/actionCreator"

// class Counter extends React.Component{

//     render(){
//         // const {counterValue, enterValue, onIncrement, onDecrement}=this.props
//         return(
//             <div>
//             <h3>this is counter value {this.props.counterValue.counter}</h3>
//             {/* <h3>this is enter value {enterValue}</h3> */}
//         </div>
//         )
//     }
// }
const Counter=props=>{
    const [enterValue,setEnterValue]=useState()

    const onEnterValue =(event)=>{
        setEnterValue(event.target.value)
    }
    const onIncrement=()=>{
        props.dispatch(increment(Number(enterValue)))
    }
    const onDecrement=()=>{
        props.dispatch(decrement(Number(enterValue)))
    }
    console.log("this is counterValue::", typeof(props.counterValue), typeof(Number(enterValue)))
    return(
        <div>
        <h3>this is counter value {props.counterValue}</h3>
        <input type="text" onChange={onEnterValue}/>
        <h3>this is enter value {enterValue}</h3>
        <button onClick={onIncrement}>increment</button>
        <button onClick={onDecrement}>decrement</button>
    </div>
    )
}

const mapStateToProps = state=>{
    return{
        counterValue: state.counter.initValue,
    }
}
// const mapDispatchToProps = dispatch=>{
//     return{    
//         onIncrement:()=>dispatch(increment(enterValue)),
//         onDecrement:()=>dispatch(decrement)}

// }
export default connect(
    mapStateToProps
)(Counter)