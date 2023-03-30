export const isAuthenticated = () => {    
    if(localStorage.getItem("app-token")){
        return true
    }   

};