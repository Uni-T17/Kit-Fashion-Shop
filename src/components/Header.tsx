import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router";
import { Button } from "./ui/button";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toogleOpen = () => setIsOpen(!isOpen);
  return (
    <header className="bg-sky-400 p-4 text-white">
      <nav className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">
          Kit Fashion Shop
        </Link>
        <Button
          variant="ghost"
          className="lg:hidden hover:bg-white "
          onClick={toogleOpen}
        >
          <Menu />
        </Button>
        {/* For PC */}
        <ul className="hidden gap-6 lg:flex">
          <li>
            <MyNav path={"/shop"} title="Shop" />
          </li>
          <li>
            <MyNav path={"/"} title="Home" />
          </li>
          <li>
            <MyNav path={"/cart"} title="Cart" />
          </li>
        </ul>

        {/* For Mobile */}
        <div
          className={`fixed inset-0 z-50 bg-sky-400 opacity-75 ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-600 ease-in-out `}
        >
          <div className="flex flex-col items-center h-full justify-center gap-8">
            <Link to={"/"} className="text-3xl" onClick={toogleOpen}>
              Home
            </Link>
            <Link to={"/shop"} className="text-3xl" onClick={toogleOpen}>
              Shop
            </Link>
            <Link to={"cart"} className="text-3xl" onClick={toogleOpen}>
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

function MyNav({ path, title }: { path: string; title: string }) {
  return (
    <>
      <NavLink
        to={`${path}`}
        className={({ isActive }) =>
          isActive ? "text-yellow-300 " : "hover:text-gray-300"
        }
      >
        {title}
      </NavLink>
    </>
  );
}
