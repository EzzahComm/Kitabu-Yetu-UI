"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { BrandLogo } from "./BrandLogo";
import {
  Disclosure,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { navigation } from "./navigation";
import { signUpUrl } from "@/lib/app-links";

export const Navbar = () => {

  return (
    <div className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm dark:bg-trueGray-900/90">
      <nav className="container relative flex flex-wrap items-center justify-between py-8 lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <BrandLogo size={32} priority />
            <span>Kitabu Yetu</span>
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto xl:ml-0 xl:order-2">
            <ThemeChanger />
            <div className="hidden mr-3 lg:flex nav__item">
              <a href={signUpUrl()} className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
                Get Started
              </a>
            </div>
        </div>
                
        <Disclosure>
          {({ open }) => (
            <>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="p-2.5 text-gray-500 rounded-md xl:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 overflow-y-auto max-h-[calc(100vh-8rem)] xl:hidden">
                  <>
                    {navigation.map((item) => (
                      <div key={item.href} className="w-full">
                        <Link href={item.href} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                            {item.name}
                        </Link>
                        {item.children?.map((child) => (
                          <Link key={child.href} href={child.href} className="w-full px-4 py-2 text-sm text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                              {child.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                    <a href={signUpUrl()} className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:hidden">
                        Get Started
                    </a>
                  </>
                </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
        {/* menu  */}
        <div className="hidden text-center xl:flex xl:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none xl:pt-0 xl:flex">
            {navigation.map((menu) => (
              <li className="mr-1 nav__item xl:mr-3" key={menu.href}>
                {menu.children ? (
                  <Popover className="relative">
                    <PopoverButton className="inline-flex items-center px-2 py-2 text-base font-normal text-gray-800 no-underline whitespace-nowrap rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 xl:px-3 xl:text-lg">
                        {menu.name}
                        <ChevronDownIcon className="w-4 h-4 ml-1" />
                    </PopoverButton>
                    <PopoverPanel className="absolute right-0 z-20 w-64 py-2 mt-1 text-left bg-white rounded-md shadow-lg dark:bg-trueGray-800">
                      {menu.children.map((child) => (
                        <Link key={child.href} href={child.href} className="block px-4 py-2 text-base font-normal text-gray-500 no-underline rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                            {child.name}
                        </Link>
                      ))}
                    </PopoverPanel>
                  </Popover>
                ) : (
                  <Link href={menu.href} className="inline-block px-2 py-2 text-base font-normal text-gray-800 no-underline whitespace-nowrap rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 xl:px-3 xl:text-lg">
                      {menu.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </div>
  );
}

