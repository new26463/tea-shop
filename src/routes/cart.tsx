import { useCartStore } from "#/store/cartStore";
import { createFileRoute } from "@tanstack/react-router";
import { Plus, Minus, Trash2 } from "lucide-react";

export const Route = createFileRoute("/cart")({
  component: RouteComponent,
});

function RouteComponent() {
  const { cart, getCartTotal, clearCart, addToCart, decreaseQuantity, removeFromCart } = useCartStore();

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 text-white font-mono">
        {/* List Items */}
        <div className="space-y-4 mb-6 text-lg">
          {cart.length === 0 ? (
            <div className="text-center text-gray-300">Your cart is empty</div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col mb-4 p-4 bg-white/10 rounded-xl"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold">{item.name}</span>
                  <span className="font-semibold text-blue-400">
                    {(item.price * item.quantity).toLocaleString()}B
                  </span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">
                    {item.price.toLocaleString()}B / piece
                  </span>
                  
                  <div className="flex items-center space-x-2 bg-black/30 rounded-lg p-1">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="p-1.5 hover:bg-white/20 rounded-md transition-colors cursor-pointer"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-6 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => addToCart(item)}
                      className="p-1.5 hover:bg-white/20 rounded-md transition-colors cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <div className="w-px h-6 bg-gray-500 mx-1"></div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1.5 text-red-400 hover:bg-red-500 hover:text-white rounded-md transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Divider Line */}
        <hr className="border-gray-500 mb-6" />

        {/* Total Section */}
        <div className="flex justify-between text-xl font-semibold mb-10">
          <span>Total</span>
          <span>{getCartTotal().toLocaleString()}B</span>
        </div>

        {/* Checkout Button */}
        <button
          onClick={() => {
            if (cart.length > 0) {
              alert("Checkout successful!");
              clearCart();
            }
          }}
          disabled={cart.length === 0}
          className="w-full py-4 border-2 border-white rounded-2xl text-xl hover:bg-white hover:text-black transition-colors duration-300 disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-white disabled:cursor-not-allowed cursor-pointer"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
