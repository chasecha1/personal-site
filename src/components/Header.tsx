'use client'
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 bg-light-gray dark:bg-deep-navy">
      <div className="px-2 sm:px-8 lg:container text-navy-text dark:text-white text-sm sm:text-lg relative flex flex-row justify-between">
        <Link href={`/`} className="custom-continer py-2 flex justify-start items-center text-sm sm:text-lg lg:text-xl lg:justify-between">
          Chase Cha
        </Link>
        <div className="custom-continer py-2 flex justify-end items-center lg:justify-between">
            <Link href={`/`} className="pr-2">
              Home
            </Link>
            <Link href={`/posts`} className="px-2">
              Posts
            </Link>
            <Link href={'/guestbook'} className="px-2">
              Guest Book
            </Link>
            <div className="pl-2">
                <ThemeToggle/>
            </div>
        </div>
      </div>
    </header>
  );
};

export { Header };