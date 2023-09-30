"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function page() {
	const router = useRouter();
  
  const submitHandler = (e : any) => {
    e.preventDefault();
    router.push('/auth/verify/email')
  }
	
	return (
		<form onSubmit={submitHandler}>
      <input type="text" name="" id="" />
      <input type="search" name="" id="" />
      <input type="submit" value="" />
		</form>
	);
}

export default page;
