import React from 'react'
import {Route, Redirect } from 'react-router'

export const isAuthenticated = () => {
    console.log("EEE", localStorage.getItem("app-token"))
    if(localStorage.getItem("app-token")){
        return true
    }   

};
// Aqui é feita toda a logica de quando um usuario está realmente logado,
// como está como "true", sempre vai dizer que está logado.