import { useNavigate } from "react-router-dom";

interface FeatureProductProps {
  product: {
    image: string;
    // Add other properties of the product here
  };
}

const FeatureProduct: React.FC<FeatureProductProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/product", {
      state: {
        item: product,
      },
    });
  };

  return (
    <div>
      <div>
        <img
          className="w-full relative h-96 cursor-pointer opacity-95 hover:-translate-y-1 transition duration-500 hover:shadow-lg hover:shadow-teal-300 mb-10"
          src={product.image}
          alt=""
          onClick={handleClick}
        />
        <span className="absolute bg-rose-500 font-semibold text-white text-base -bottom-[170px] p-1">
          30% OFF
        </span>
      </div>
    </div>
  );
};

export default FeatureProduct;
