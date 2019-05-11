const initState =   {
    authError: null
};

const authReducer   =   (state = initState, action) => {
    switch(action.type){
        case "LOGIN_ERROR":
            console.log("Login Error")
            return {
                ...state,
                authError: "Login Failed"
            }
        case "LOGIN_SUCCESS":
            console.log("Login Success")
            return {
                authError: null
            }
        case "SIGNOUT_SUCCESS":
            console.log("Sign Out Success")
            return state
        default:
            return state
    }
}

export default authReducer;
