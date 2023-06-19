import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BsArrowBarRight } from 'react-icons/bs'
const NavBar = () => {


    const cartData = useSelector((state: any) => state.cart.cartData)
    const handleScroll = () => {
        document.querySelector("#featured-products")?.scrollIntoView({
            behavior: "smooth"
        })
    }

    const handleScrolToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <div className="flex justify-between max-w-screen py-4  sticky top-0 z-50 bg-white border-b-2">
                <div>
                    <Link to='/'>
                        <h2 className=" text-xl ml-10 font-black bg-teal-200 cursor-pointer px-4 py-2"
                        onClick={handleScrolToTop}
                        >Store</h2>
                    </Link>
                </div>
                <div>
                    <nav>
                        <ul className="flex mx-2 ">
                            <li className="mx-3 hover:scale-110 transition duration-300 hover:text-orange-500">
                                <a
                                onClick={handleScrolToTop}
                                >Home</a>
                            </li>
                            <li className="mx-3 hover:scale-110 transition duration-300 hover:text-orange-500">
                                <a href="/">Pages</a>
                            </li>
                            <li className="mx-3 hover:scale-110 transition duration-300 hover:text-orange-500">
                                <a href="/">Blog</a>
                            </li>
                            <li className="mx-3 hover:scale-110 transition duration-300 hover:text-orange-500">
                                <a href="/">Shop</a>
                            </li>
                            <li className="mx-3 hover:scale-110 transition duration-300 cursor-pointer hover:text-orange-500">
                                <a onClick={handleScroll}>Featured</a>
                            </li>
                            <Link to="/cart">
                                <span className="relative ">
                                    <AiOutlineShoppingCart className="mx-2 h-5 w-5 hover:scale-110 transition-transform active:scale-90" />
                                    <span className="absolute -top-2 -right-1 text-white p-1 font-semibold w-5 h-5 bg-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform active:scale-90">
                                        {cartData.length}
                                    </span>
                                </span>

                            </Link>
                        </ul>
                    </nav>
                </div>
                <a className='text-gray-800 rounded-full bg-slate-50 inline-flex place-self-center border-gray-400 hover:bg-teal-400 hover:text-white text-xl py-1 cursor-pointer px-4 mr-5 hover:scale-105 transition-transform active:scale-95'>
                    <BsArrowBarRight />
                    Login</a>
            </div>


            <div className=''>

            </div>
        </>
    )

}

export default NavBar