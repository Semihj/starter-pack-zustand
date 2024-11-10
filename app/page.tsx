"use client";


import { Button } from "@/components/ui/button";
import { setUser } from "@/lib/redux/user";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const {user} = useSelector((state) => state.user);
  console.log(user);
  const loggedUser = useUser()
  useEffect(() => {
    if(loggedUser.user?.id && !user.id ) {
      dispatch(setUser({
        id:loggedUser.user.id,
        img:loggedUser.user.imageUrl
      }))
    }
  }, [loggedUser.user])
  
  
  return (
 <div className=""><Button>Hello</Button></div>
  );
}
