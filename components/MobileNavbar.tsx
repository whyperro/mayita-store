"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import IconButton from "./ui/icon-button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import NavbarActions from "./navbar-actions";

interface MobileNavbarProps {
  data: Category[];
}

const MobileNavbar = ({ data }: MobileNavbarProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  const onClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Button
        onClick={onClick}
        className="bg-transparent p-2 text-black hover:scale-110 hover:bg-black hover:text-white"
      >
        <Menu size={25} />
      </Button>

      <nav
        className={cn(
          "bg-white rounded-md shadow-2xl absolute right-0 top-0 px-5 mr-4 space-y-6 flex flex-col m-0 h-[400px] justify-center transition-opacity duration-200 ease-in-out",
          open ? "opacity-100 z-40" : "opacity-0 z-[-1]"
        )}
      >
        <IconButton
          onClick={onClick}
          icon={<X size={15} />}
          className="relative bg-black text-white hover:bg-slate-100 hover:text-black"
        />
        <NavbarActions />
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-lg font-medium transition-colors hover:text-black",
              route.active ? "text-black" : "text-neutral-500"
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileNavbar;
