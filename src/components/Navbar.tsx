import { useCartStore } from "#/store/cartStore";
import { useNavigate } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const cartCount = useCartStore((state) => state.getCartCount());

  return (
    <div className="bg-sky-700 text-white flex justify-between items-center px-12 py-5 ">
      <div
        className="font-semibold cursor-pointer"
        onClick={() => {
          navigate({ to: "/" });
        }}
      >
        Tea Shop
      </div>
      <button
        className="relative p-2 cursor-pointer"
        onClick={() => {
          navigate({ to: "/cart" });
        }}
      >
        <ShoppingCart className="h-6 w-6" />
        {/* The Badge */}
        {cartCount > 0 && (
          <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white transform translate-x-1 -translate-y-1">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
}

export default Navbar;
