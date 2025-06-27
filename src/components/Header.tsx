import { Menu } from "lucide-react";
import { Link } from "react-router";

function Header() {
  return (
    <header className="bg-sky-400 p-4 text-white">
      <nav className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">
          Kit Fashion Shop
        </Link>
        <button className="lg:hidden">
          <Menu />
        </button>

        <div className="hidden gap-1 lg:flex">
          <Link to="/shop">Shop</Link>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
