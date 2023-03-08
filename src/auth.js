export const isAuthenticated = () => {
    console.log("EEE", localStorage.getItem("app-token"))
    if(localStorage.getItem("app-token")){
        return true
    }   

};