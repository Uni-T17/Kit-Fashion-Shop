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
  ];
  return (
    <section className="flex grow flex-col">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </section>
  );
}
