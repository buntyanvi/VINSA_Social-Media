"use client"
import Link from "next/link"
import { useState } from "react"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-2 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-10 h-2 bg-blue-500 rounded-sm ${
            isOpen ? "rotate-45" : ""
          } origin-left  ease-in-out duration-500`}
        />
        <div
          className={`w-10 h-2 bg-blue-500 rounded-sm ${
            isOpen ? "opacity-0" : ""
          } ease-in-out duration-500`}
        />
        <div
          className={`w-10 h-2 bg-blue-500 rounded-sm ${
            isOpen ? "-rotate-45" : ""
          } origin-left  ease-in-out duration-500`}
        />

        {isOpen && (
          <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center">
            <Link href="/">Home</Link>
            <Link href="/">Friend</Link>
            <Link href="/">Groups</Link>
            <Link href="/">Stories</Link>
            <Link href="/">Login</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default MobileMenu