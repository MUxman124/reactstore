import DataApi from "../api/DataApi";
import { useState, useEffect } from "react";
import ProductSingle from "./ProductSingle";

interface ProductData {
  _id: string;
  title: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  description: string;
  rating: number;
  oldPrice: number;
}

const Product: React.FC = () => {
  const [product, setProduct] = useState<ProductData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: ProductData[] = await DataApi();
      setProduct(data);
    };

    fetchData();
  }, []);

  console.log(product);
  return (
    <section className="mx-10 lg:mx-20 my-10 lg:my-20">
      <h1 className="text-5xl text-gray-700 font-bold mb-20">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {product.map((data: ProductData, key: number) => (
          <ProductSingle key={key} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Product;
