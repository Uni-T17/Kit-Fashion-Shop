import pdimg from "@/assets/images/image.jpg";
import pdimg1 from "@/assets/images/images-1.jpg";

import pdimg2 from "@/assets/images/images-2.jpg";
import pdimg3 from "@/assets/images/images-3.jpg";
import ProductCard from "@/components/Shop/ProductCard";

export default function Shop() {
  const products = [
    { id: 1, name: "T-shirt", price: 20, image: pdimg },
    { id: 2, name: "T-shirt", price: 30, image: pdimg1 },
    { id: 3, name: "T-shirt", price: 20, image: pdimg2 },
    { id: 4, name: "T-shirt", price: 20, image: pdimg3 },
    { id: 5, name: "T-shirt", price: 20, image: pdimg },
    { id: 6, name: "T-shirt", price: 30, image: pdimg1 },
    { id: 7, name: "T-shirt", price: 20, image: pdimg2 },
    { id: 8, name: "T-shirt", price: 20, image: pdimg3 },
  ];
  return (
    <section className="flex grow">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
