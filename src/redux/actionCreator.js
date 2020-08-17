export const increment =(enterValue)=>{
    return {
        type:"INCREMENT",
        payload: enterValue
    }
}

export const decrement =(enterValue)=>{
    return {
        type:"DECREMENT",
        payload: enterValue
    }
}