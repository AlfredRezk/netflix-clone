"use client";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";



const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// auth object
const auth = getAuth(app);

const AuthContext = createContext({currentUser: {}, createUser: ()=>{}, signIn: ()=>{}, logout:()=>{}, forgotPassword: ()=>{}, signupProvider:()=>{}});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    userObserver();
  }, []);

  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName });
      router.push("/profile");
      toast.success("Registered Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/profile");
      toast.success("Logged In Successfully");      
        console.log(currentUser);

    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    signOut(auth);
    toast.success("Logged Out Successfully");
  };

  // User observer
  const userObserver = () => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // logged In
        const { email, displayName, photoURL } = currentUser;
        const user = { email, displayName, photoURL };
        setCurrentUser(user);
        sessionStorage.setItem("user", JSON.stringify(user));
        console.log(user);
      } else {
        // Logged out
        setCurrentUser(false);
        sessionStorage.clear();
      }
    });
  };

  const signupProvider = async () => {
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(auth, provider)
        router.push("/profile");
        toast.success("Logged In Successfully");
    
    } catch (error) {
      toast.error(error.message);
    }
  };

  const forgotPassword = async (email) => {
    try{
      await  sendPasswordResetEmail(auth, email)
      toast.success("Please check your mail box!");
    }catch(error){
        toast.error(error.message);
    }
  };
  const value = {
    currentUser, 
    createUser, 
    signIn, 
    logout, signupProvider, forgotPassword
  }

  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
};

export default AuthProvider;
