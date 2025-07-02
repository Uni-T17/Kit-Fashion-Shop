import { Button } from "../ui/button";
interface ProductType {
  name: string;
  id: number;
  image: string;
  price: number;
}

function ProductCard({ product }: { product: ProductType }) {
  return (
    <div key={product.id} className="flex flex-col p-2 shadow">
      <img className="h-40 w-40 self-center" src={product.image} alt="" />
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
