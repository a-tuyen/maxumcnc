import Link from "next/link";
import React from "react";

const success = () => {
  return (
    <>
    <div className="flex flex-col items-center text-center p-[10%]">
      <h1 className="font-heading text-2xl">Thank you for contacting us!</h1>

      <p className="py-6 text-xl">We will review your submission and respond shortly.</p>
      <Link href="/" className="hover:text-accent2"> Return to Home Page </Link>
    </div>

    </>
    );
};

export default success;
