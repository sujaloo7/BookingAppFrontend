import { useContext, createContext } from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase";

const Authcontext = createContext()

export const Authcontextprovider = ({ children }) => {

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }
    return (

        <Authcontextprovider value={{ googleSignIn }}>
            {children}
        </Authcontextprovider>
    )
}
export const UserAuth = () => {
    return useContext(Authcontext)
}