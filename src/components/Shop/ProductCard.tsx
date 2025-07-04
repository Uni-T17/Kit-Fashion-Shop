import { useState } from "react";
import { Button } from "../ui/button";
interface ProductType {
  name: string;
  id: number;
  image: string;
  price: number;
}

function ProductCard({ product }: { product: ProductType }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const handleImageLoad = () => {
    setImgLoaded(true);
  };
  return (
    <div key={product.id} className="flex flex-col p-2 shadow">
      <div className="h-40 w-full rounded-lg relative">
        {!imgLoaded && (
          <div className="animate-pulse absolute inset-0 rounded-md bg-gray-300"></div>
        )}
        <img
          className={`h-full w-full object-contain absolute transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          src={product.image}
          alt=""
          onLoad={handleImageLoad}
        />
      </div>

      <div className="flex justify-between m-2">
        <div className="">
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
        <Button className="bg-sky-400 hover:bg-sky-600">Add to Cart</Button>
      </div>
    </div>
  );
}

export default ProductCard;
