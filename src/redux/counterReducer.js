const initState = {
    initValue: 0,
    enterValue:''
}

export const counterReducer = (state = initState, action) => {
    switch (action.type) {
        case "ENTER":
            return state.enterValue
        case "INCREMENT":
            return {
                initValue: state.initValue + action.payload
            }

            
        case "DECREMENT":
            return {
                initValue: state.initValue - action.payload
            }
        default:
            return state

    }
}
