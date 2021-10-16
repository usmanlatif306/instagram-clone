import Image from "next/image";
import {
  HeartIcon,
  HomeIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
  const [session] = useSession();
  console.log(session);
  const [open, setOpen] = useRecoilState(modalState);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto relative">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center justify-end space-x-4">
          {session && (
            <>
              {" "}
              <HomeIcon className="navBtn" />
              <MenuIcon className="h-6 md:hidden cursor-pointer" />
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absoulte -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon
                className="navBtn"
                onClick={() => setOpen(true)}
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
            </>
          )}

          {session ? (
            <img
              src={session.user.image}
              alt="Profile Image"
              className="h-10 rounded-full cursor-pointer"
              loading="lazy"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <button
              className="text-blue-400 text-sm font-semibold"
              onClick={() => signIn("google")}
            >
              Signin
            </button>
          )}
          {isOpen && (
            <div className="bg-gray-200 w-32 py-2 px-4 text-right space-y-1 absolute top-16 right-0 rounded-md">
              <button>Profile</button>
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
