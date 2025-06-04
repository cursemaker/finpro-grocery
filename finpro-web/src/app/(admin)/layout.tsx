"use client";
import Link from "next/link";
import * as React from "react";
import { HiHome } from "react-icons/hi";
import { BiSolidReport } from "react-icons/bi";
import { AiFillProduct } from "react-icons/ai";
import { GrUserAdmin } from "react-icons/gr";
import { RiDiscountPercentFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { FaUsersCog } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const bottomNav = [
    { name: "Home", href: "/dashboard", icon: <HiHome /> },
    { name: "Reports", href: "/reports", icon: <BiSolidReport /> },
    { name: "Products", href: "/products", icon: <AiFillProduct /> },
    { name: "Promo", href: "/promos", icon: <RiDiscountPercentFill /> },
    { name: "Admin", href: "/admin", icon: <GrUserAdmin /> },
  ];
  const sideNav = [
    ...bottomNav,
    { name: "Users", href: "/users", icon: <FaUsersCog /> },
    { name: "Settings", href: "/settings", icon: <IoSettings /> },
  ];
  const pathName = usePathname();
  return (
    <div className="relative lg:grid lg:grid-cols-[280px_1fr] overflow-x-hidden h-screen bg-white max-lg:pb-20">
      <div className="hidden px-4 lg:flex lg:flex-col bg-red-700 text-white">
        <div className="uppercase text-white font-bold text-2xl py-4">admin dashboard</div>
        <div>
          <div className="text-xl font-medium">Main Menu</div>
          <div>
            {sideNav.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={
                  "flex items-center gap-2 px-4 py-3 text-white hover:bg-red-500 " +
                  (pathName.includes(item.href) || pathName === item.href
                    ? "bg-red-300 !text-red-600 font-semibold"
                    : "")
                }
              >
                <div className="text-2xl">{item.icon}</div>
                <div>{item.name}</div>
              </Link>
            ))}
          </div>
        </div>
        <div className="">

        </div>
      </div>
      <div className="px-4 bg-amber-300">{children}</div>
      <div className="lg:hidden w-full h-20 bg-red-700 fixed bottom-0 left-0 z-20 flex items-center justify-between">
        {bottomNav.map((item, index) => (
          <div
            key={index}
            className={
              "w-1/5 h-full flex flex-col items-center justify-center " + (pathName === item.href ? "bg-red-500" : "")
            }
          >
            <Link href={item.href} className="text-white text-sm font-medium flex flex-col items-center justify-center">
              <div className="text-3xl">{item.icon}</div>
              <div>{item.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
