"use client";
import { Input } from "../components/atoms/Input";

import { redirect } from "next/navigation";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

export default function Home() {
  const {token} = useAuth()
  // it's funny to do this 🙄
  // next middleware resolve this problem , i'll learn soon
  useEffect(()=>{
    if(token){
      redirect('/home')
    }
    else {
      redirect('/login')
    }
  },[token])
  return (
    <main>
    </main>
  );
}
