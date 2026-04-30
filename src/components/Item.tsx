import { useCartStore } from "#/store/cartStore";
import React from "react";

interface ItemProps {
  id: number;
  image: string;
  name: string;
  price: number;
}

const Item: React.FC<ItemProps> = ({ id, image, name, price }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {/* Container สำหรับรูปภาพ */}
      <div className="relative h-48 w-full">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* ส่วนข้อมูลสินค้า */}
      <div className="p-5">
        <h3 className="mb-2 text-lg font-bold text-gray-800 line-clamp-1">
          {name}
        </h3>

        <p className="mb-4 text-xl font-semibold text-blue-600">
          ฿{price.toLocaleString()}
        </p>

        <button
          onClick={() => addToCart({ id, image, name, price })}
          className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 active:bg-blue-800 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
