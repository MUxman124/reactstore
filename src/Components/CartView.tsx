import { useDispatch, useSelector } from "react-redux";
import { decrementQnt, incrementQnt, removeFromCart } from "../redux/StoreSlice";
import { useEffect, useState } from 'react'
import { FaRegSadCry } from 'react-icons/fa'
import { ImHappy } from 'react-icons/im'
import { Link } from 'react-router-dom'
import{toast, ToastContainer  } from 'react-toastify'
const CartView = () => {
  const cartData = useSelector((state: any) => state.cart.cartData);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [mode, setMode] = useState("sad");

  const handleMouseEnter = () => {
    setMode("happy");
  }

  const handleMouseLeave = () => {
    setMode("sad");
  }

  useEffect(() => {
    let price: number = 0;
    cartData.map((data: any) => {
      price += data.price * data.quantity;
    })
    setTotalPrice(price);
  }, [cartData])
  console.log("hellooo" + cartData.length);

  if (cartData.length === 0) {
    return (
      <div className="flex flex-col items-center mt-20">

        {mode === "sad" ? <FaRegSadCry className="text-9xl text-gray-700" /> : <ImHappy className="text-9xl text-gray-700" />}
        <h1 className="text-5xl font-bold text-gray-700 my-20">
          Your Bag is Empty
        </h1>
        <Link to="/">
          <a href="/" className="text-white bg-teal-500 px-8 py-4 font-smibold hover:bg-teal-700 transition duration-300 ease-in-out"
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}>
            Fill Your Bag
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center text-center">
        <h1 className="text-5xl font-bold  my-10 bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent"> Your Bag</h1>
      </div>


      <div className="grid grid-cols-12 text-lg font-semibold text-gray-700">
        <div className="col-span-6 text-center">
          Description
        </div>
        <div className="col-span-1 text-center">
          Size
        </div>
        <div className="col-span-3 text-center">
          Quantity
        </div>
        <div className="col-span-1">
          Remove
        </div>
        <div className="col-span-1">
          Price
        </div>
      </div>
      <hr className="border border-gray-300 my-4" />
      {cartData.map((data: any) => (

        <div className="grid grid-cols-12 mx-10 place-items-center" key={data.id}>
          <div className="col-span-2 mb-10">
            <img src={data.image} className="w-50 h-40 place-self-center" alt="Product image" />
          </div>
          <div className="col-span-4 align-middle items-center">
            <h2 className="text-3xl font-bold text-gray-600 my-2">{data.title}</h2>
          </div>
          <div className="col-span-1">

            <span className="p-5 bg-cyan-500 text-white">S</span>
          </div>
          <div className="col-span-3 items-center">
            <div className=" h-16 w-40">

              <div className="flex flex-row h-16 w-full relative bg-transparent mt-1">
                <button
                  className="bg-gray-100 text-gray-600  hover:bg-teal-500 h-full w-20 hover:text-white transition duration-300 ease-in-out cursor-pointer outline-none"
                  onClick={
                    () => {
                      dispatch(decrementQnt(data));
                    }
                  }
                >
                  <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <span

                  className="focus:outline-none text-center justify-center w-16 bg-teal-500 font-semibold text-md hover:text-white focus:text-black  md:text-basecursor-default flex items-center text-white  outline-none"
                >
                  {data.quantity}
                </span>
                <button className="bg-gray-100 text-gray-600 hover:text-white hover:bg-teal-500 h-full w-20 transition duration-300 ease-in-out cursor-pointer"
                  onClick={() => dispatch(incrementQnt(data))}>
                  <span className="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <button className="p-5 bg-gray-100 hover:bg-rose-500 transition duration-300 ease-in-out hover:text-white"
              onClick={() => {
                dispatch(removeFromCart(data))
                toast.info(`${data.title} removed from cart`)
              }}
            >x</button>
          </div>
          <div className="col-span-1 mb-5">
            <h2 className="text-xl font-bold  my-2 items-center text-teal-500" >${data.price * data.quantity}</h2>
          </div>
          <hr className="border-2 border-gray-300" />

        </div>

      ))}
      <hr className="border border-gray-300" />
      <div className="flex justify-between space-x-6 mx-20 my-10 ">
        <div className="flex px-10 py-7 border-2 items-center">
          <span className="text-lg font-medium">Discount</span>
          <span className="ml-10 font-bold text-xl">$0.00</span>
        </div>
        <div className="flex px-10 py-4 border-2 items-center">
          <span className="text-lg font-medium">Delvery</span>
          <span className="ml-10 font-bold text-xl">$0.00</span>
        </div>
        <div className="flex px-10 py-4 border-2 items-center">
          <span className="text-lg font-medium">Subtotal</span>
          <span className="ml-10 font-bold text-xl">${totalPrice}</span>
        </div>
        <div className="flex px-10 py-4 border-2 items-center">
          <span className="text-lg font-medium">Total</span>
          <span className="ml-10 font-bold text-xl ">${totalPrice}</span>
        </div>
      </div>

      <div className="flex justify-evenly mb-5">
        <div className="relative">

          <input
            type="email"
            placeholder="Enter Coupon Code"
            className="w-full  border-gray-200 py-3  px-52 shadow-sm sm:text-sm placeholder-gray-400"
          />

          <span className="absolute inset-y-0 end-0 place-content-center">
            <button
              className=" bg-[#001645]  text-white px-20 py-2.5"
            >
              Apply Discount

            </button>
          </span>
        </div>
        <Link to="/checkout">
        <a
          className="group relative inline-block overflow-hidden border bg-teal-500 px-44 py-3 focus:outline-none focus:ring"

        >
          <span
            className="absolute inset-y-0 left-0 w-[2px] bg-[#001645] transition-all group-hover:w-full group-active:bg-teal-600"
          ></span>
    
  <span className="relative text-sm font-medium transition-colors text-white">
    Proceed to Checkout
  </span>


          </a>
          </Link>
      </div>
      <div className="flex justify-end mb-20 mr-12">
        <a
          className="group relative inline-block overflow-hidden border bg-teal-500 px-44 py-3 focus:outline-none focus:ring"

        >
          <span
            className="absolute inset-y-0 left-0 w-[2px] bg-[#001645] transition-all group-hover:w-full group-active:bg-teal-600"
          ></span>

          <span
            className="relative text-sm font-medium  transition-colors text-white"
          >
            Continue Shopping
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
    </div>
  );
};

export default CartView;
