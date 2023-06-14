import DataApi from "../api/DataApi";
import { useState, useEffect } from "react";
import FeatureProduct from "./FeatureProduct";

interface ProductData {
  title: string;
  price: number;
  rating: number;
  image: string;
}

const FeatureProducts = () => {
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: ProductData[] = await DataApi();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
      <div>
           <h1 className="text-4xl txt-gray-700 font-semibold ml-10 mt-20 mb-10" id="featured-products">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-10">
        {products.slice(3,6).map((data, key) => (
          <FeatureProduct key={key} product={data} />
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
