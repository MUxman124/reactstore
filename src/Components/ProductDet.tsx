import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { addToCart } from "../redux/StoreSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

interface Product {
  _id: string;
  title: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  description: string;
  rating: number;
}

const ProductDet = () => {
  const location = useLocation();
  const [item, setItem] = useState<Product>({});
  const [qnt, setQnt] = useState<number>(1);
  const dispatch = useDispatch();

  const cartData = useSelector((state: any) => state.cart.cartData);

  useEffect(() => {
    console.log("ghghghghghg", location.state.item);
    setItem(location.state.item);
  }, [location]);

  return (
    <div className="flex mt-4">
      <div className="w-2/5 flex">
        <img src={item.image} alt="product image" className="w-72 mx-auto mt-10 h-96" />
      </div>
      <div className="w-3/5 flex flex-col justify-start mr-32 ml-10 my-10">
        <span className="text-gray-700 flex gap-2">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <p className="font-semibold text-base">( {item.rating} Reviews)</p>
        </span>

        <h1 className="text-6xl font-semibold text-gray-700 ">{item.title}</h1>
        <p className="my-2 text-sm font-medium">Available in Stock</p>
        <div>
          <span className="text-3xl font-bold text-teal-500">${item.price}</span>

          <span className="ml-32">Catagory: </span>
          <span className="bg-pink-600 px-1 py-0.5 text-white font-semibold rounded-3xl">{item.category}</span>
        </div>
        <p className="mt-10 mb-4 underline">Specification</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi commodi fuga accusantium ex, ratione corrupti esse natus officiis ea ipsa libero doloribus non? Neque excepturi optio iusto asperiores adipisci?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur distinctio nihil molestias nulla doloremque repudiandae est maxime similique, magni fugiat quaerat tenetur consequuntur obcaecati assumenda nobis eaque! Excepturi, accusamus aliquam!
        </p>

        <div className="flex gap-10">
          <div className=" h-12 w-40">
            <div className="flex flex-row h-12 w-full relative bg-transparent mt-5">
              <button
                className="bg-gray-100 text-gray-600  hover:bg-teal-500 h-full w-20 hover:text-white transition duration-300 ease-in-out cursor-pointer outline-none"
                onClick={() => setQnt(qnt > 1 ? qnt - 1 : 1)}
              >
                <span className="m-auto text-2xl font-thin">−</span>
              </button>
              <span
                className="focus:outline-none text-center justify-center w-16 bg-teal-500 font-semibold text-md hover:text-white focus:text-black  md:text-basecursor-default flex items-center text-white  outline-none"
              >
                {qnt}
              </span>
              <button
                className="bg-gray-100 text-gray-600 hover:text-white hover:bg-teal-500 h-full w-20 transition duration-300 ease-in-out cursor-pointer"
                onClick={() => setQnt(qnt + 1)}
              >
                <span className="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>
          <a
            className="group relative inline-block cursor-pointer overflow-hidden border bg-teal-500 px-10 mt-5 py-3 focus:outline-none focus:ring"
            onClick={() => {
              dispatch(
                addToCart({
                  _id: item._id,
                  title: item.title,
                  image: item.image,
                  price: item.price,
                  category: item.category,
                  quantity: qnt,
                  description: item.description,
                  rating: item.rating,
                })
              );
              const alreadyInCart = cartData.find((product: any) => product._id === item._id);

              if (alreadyInCart) {
                toast.warning(`{${item.title}} is already in the cart`)
              } else {
                toast.success(`{${item.title}} is added to the cart`)
              }
            }}

          >
            <span className="absolute inset-y-0 left-0 w-[2px] bg-[#001645] transition-all group-hover:w-full group-active:bg-teal-600"></span>
            <span className="relative text-sm font-medium  transition-colors text-white">Add to Bag</span>
          </a>
        </div>
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
    </div>
  );
};

export default ProductDet;
