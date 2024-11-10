"use client";

import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/zustand/store";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Home() {
  const {user,setUser} = useStore()
  console.log(user);
  const loggedUser = useUser();
  useEffect(() => {
    if (loggedUser.user?.id && !user.id) {
        setUser({
          id: loggedUser.user.id,
          img: loggedUser.user.imageUrl,
        })
    }
  }, [loggedUser.user]);

  return (
    <div className="">
      <Button>Hello</Button>
    </div>
  );
}
