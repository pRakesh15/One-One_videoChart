import React,{createContext, useContext, useMemo} from "react";
import { io } from "socket.io-client";

const SocketContext=createContext(null);
const Endpoint='http://localhost:6699';
export const useSocket=()=>
{
    const socket=useContext(SocketContext);
    return socket;
}
export const SocketProvider=(props)=>
{
 const socket=useMemo(()=>io(Endpoint,[]))
return(
    <SocketContext.Provider value={socket}>
    
    {props.children}
    </SocketContext.Provider>
)
}