import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';

const AuthProvider = ({children}) => {



    //  Create User With Email and Password
    
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // Sign in with email and password
    const userSignInWithEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // signin with google
    const provider = new GoogleAuthProvider();
    const googleLogin=()=>{
        return signInWithPopup(auth,provider)
    }
    const userInfo ={
        createUser,
        userSignInWithEmail,
        googleLogin
    }
    return (
       <AuthContext value={userInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;