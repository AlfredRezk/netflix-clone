"use client";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {

       const {currentUser, logout } =  useAuth()
       console.log(currentUser.photoURL)

  return (
    <nav className="main-nav">
      <Link href="/">
        <img src="/images/logo.png" alt="Logo" className="h-4 lg:h-7" />
      </Link>

      <Menu as="div" className="relative">
        <Menu.Button className="btn-profile">
          <img
            className="rounded-full w-8 h-8"
            src={currentUser?.photoURL || "/images/default-slate.png"}
          />
        </Menu.Button>

        <Transition as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opactity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opactity-0 scale-95"
     
        >
          <Menu.Items className="main-nav-menu">

            {!currentUser&&(
                <>
            <Menu.Item >
                {({active})=>(
              <Link href="/login" className={`${active && "bg-gray-100"} main-nav-link`}>Login</Link>

                )}
            </Menu.Item>
            <Menu.Item>
            {({active})=>(
              <Link href="/register" className={`${active && "bg-gray-100"} main-nav-link`}>Register</Link>

                )}
            </Menu.Item>
                </>
            )}

            {currentUser&&(
                <>
            <Menu.Item >
                {({active})=>(
              <Link href="/profile" className={`${active && "bg-gray-100"} main-nav-link`}>Profile</Link>

                )}
            </Menu.Item>
            <Menu.Item>
            {({active})=>(
              <span onClick={()=>logout()} className={`${active && "bg-gray-100"} main-nav-link cursor-pointer`}>Logout</span>

                )}
            </Menu.Item>
                </>
            )}
           
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
}
