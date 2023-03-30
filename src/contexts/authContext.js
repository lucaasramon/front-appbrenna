import React, {createContext, useState} from "react";

//Função que permite passar dados para consumo global da aplicação
export const AuthContext = createContext()

//Componente para prover valores para os filhos
function AuthProvider({children}) {
    const [userAdm, setUserAdm] = useState(false);


    return (
        <AuthContext.Provider value={{userAdm, setUserAdm}}>
            {children}
        </AuthContext.Provider>
    )
    }
export default AuthProvider;