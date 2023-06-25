import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/StoreSlice";
import { ToastContainer, toast } from "react-toastify";
import { AiFillStar } from "react-icons/ai";
import 'sweetalert2/dist/sweetalert2.min.css';

interface Product {
  _id: string;
  title: string;
  oldPrice: number;
  price: number;
  image: string;
  rating: number;
  description: string;
}

const ProductSingle: React.FC<{ data: Product }> = ({ data }) => {
  const { title, oldPrice, price, image, rating } = data;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartData = useSelector((state: any) => state.cart.cartData);
  const handleClick = () => {
    navigate("/product", {
      state: {
        item: data,
      },
    });
  };


  return (

    <section className="container">

      <div className="max-w-sm bg-white overflow-hidden shadow-2xl hover:translate-y-1 hover:shadow-sm transition duration-500 relative rounded-lg max-h-full pb-8 ">
        <img
          className="max-h-60 w-full hover:scale-105  transition duration-500 cursor-pointer mb-4"
          src={image}
          alt=""
          onClick={handleClick}
        />
        <span className="absolute bg-rose-500  font-semibold text-white text-base top-2 ml-10 right-2 p-1">30% OFF</span>
        <span className="text-sm font-semibold bg-pink-600 px-1 py-0.5 text-white mt-4 rounded-3xl ml-5">
          30% OFF
        </span>
        <span className="text-sm font-semibold bg-gray-600 px-1 mx-3 py-0.5 text-white rounded-3xl">
          New
        </span>
        <span className="text-sm font-semibold bg-purple-600 px-1 py-0.5 text-white rounded-lg">
          CODE643
        </span>
        <span className="flex mx-2 text-amber-500 mt-3 items-center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <span className="underline cursor-pointer ml-2 hover:text-gray-700 transition-colors">({rating} Reviews)</span>
        </span>
        <div className="text-xl font-bold text-gray-700 my-3 px-5">{title}</div>
        <span className="text-gray-500 text-lg font-bold px-3 line-through">${oldPrice}</span>
        <span className="text-pink-700 font-bold text-lg pl-1">{price} $ USD</span>

        <a
          className="group relative inline-flex items-center overflow-hidden rounded bg-teal-500 px-8 py-3 ml-3 mt-3 cursor-pointer text-white focus:outline-none focus:ring active:bg-teal-400 active:translate-y-0.5 transition-transform"
          onClick={() => {
            dispatch(
              addToCart({
                _id: data._id,
                title: data.title,
                image: data.image,
                price: data.price,
                quantity: 1,
                description: data.description,
                rating: data.rating,
            

              })
            );

            const alreadyInCart = cartData.find(
              (item: Product) => item._id === data._id
            );
            if (alreadyInCart) {
              toast.warning(`${data.title} is already in cart`);
            } else {
              toast.success(`${data.title} is added`);
            }
          }}
        >

          <span className="absolute -end-full transition-all group-hover:end-4">
            <svg
              className="h-5 w-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span className="text-sm font-medium transition-all group-hover:me-4">
            Add to Bag
          </span>
        </a>


      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </section>
  );
};

export default ProductSingle;
