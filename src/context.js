import React, { createContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
const AppContext= React.createContext();

const client_id="K92_w2jQzGYqnjeh-jGECCJ90Wmj-yqEpeWVPi6zsMA";

const API=`https://api.unsplash.com/photos/?client_id=${client_id}`;

const initialstate={
    name:"",
    image:"",
    services:""
}


 const AppProvider = ({children})=>{
    const [state,dispatch]=useReducer(reducer,initialstate);

     const updateHome=()=>{
        return dispatch({
            type:"Home_update",
            payload :{
                name:"Eat,Sleep,Capture & Upload",
                image:"./images/code.jpg"
            }
        });
    };
    
    const updateAbout=()=>{
        return dispatch({
            type:"About_update",
            payload :{
                name:"About Us",
                image:"./images/mobile.jpg"
            }
        });
    };

    // api work
    const getServices =async (url)=>{
        try {
            const res=await fetch(url);
            const data= await res.json();
            dispatch({
                type:"get_services",
                payload:data
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getServices(API);
    },[])
    
    return(

        <AppContext.Provider value={{...state,updateHome,updateAbout}}>{children}</AppContext.Provider>
    );
 };


 export {AppContext,AppProvider};