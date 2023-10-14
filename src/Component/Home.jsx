import React, { useCallback, useEffect, useState } from "react";
import { useSocket } from "../context/SocketProovider";
import { data } from "autoprefixer";
import { useNavigate } from "react-router-dom";

function Home() {
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");
  const socket = useSocket();
  const navigate=useNavigate();

  const SubmitHendler = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, roomId });
    },
    [email, roomId, socket]
  );
 
  useEffect(()=>
  {
socket.on("room:join",(data)=>
{
const {email,roomId}=data;
navigate(`/room/${roomId}`)
});
return()=>
{
  socket.off('room:join')
}
  },[socket,navigate])
  return (
    <div className=" bg-green-950 h-screen flex content-center justify-center ">
      <div className="bg-green-950 flex flex-col content-center justify-center items-center  lg:mr-[2rem] ">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          id="userName"
          placeholder="Enter Your Email"
          className="border-2 border-sky-500 h-10 w-60 lg:h-10 lg:w-64 xl:h-10 xl:w-64 outline-none"
        />
        <input
          type="text"
          onChange={(e) => setRoomId(e.target.value)}
          value={roomId}
          required
          id="userName"
          placeholder="Enter roomId"
          className="border-2 border-sky-500 h-10 w-60 lg:h-10 lg:w-64 xl:h-10 xl:w-64 mt-2 outline-none"
        />
        <button
          onClick={SubmitHendler}
          className="text-white bg-red-600 h-10 w-60 mt-9 text-[29px] lg:w-64 lg:h-10 lg:text-[22px] xl:w-64 xl:h-10  xl:text-[22px] "
        >
          Join Room
        </button>
      </div>
    </div>
  );
}

export default Home;
