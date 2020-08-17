const initState = {
    initValue: 0,
    secondValue:2
}

export const counterReducer = (state = initState.initValue, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            return state - action.payload;
        default:
            return state

    }
}
