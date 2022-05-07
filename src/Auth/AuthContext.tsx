import React, {createContext, useEffect, useState} from "react";

export const AuthContext = createContext<any | null>(null);
interface IAuthProvider {
    children: React.ReactNode;
}
export const AuthProvider = (props: IAuthProvider) => {
    const {children} = props;
    const [isAuth, setIsAuth] = useState<boolean>(false);

    return (
        <AuthContext.Provider
            value={{isAuth, setIsAuth}}>
            {children}
        </AuthContext.Provider>
    );
};