const initState = {

}

const authReducer = (state = initState, action) => {

    console.log("authReducer ~ action", action)
    console.log("authReducer ~ state", state)

    return state;

}

export default authReducer;