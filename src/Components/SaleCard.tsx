const SaleCard = () => {
    return (
      <div>
        <div className="grid grid-cols-1  lg:grid-cols-2 mt-20 mx-10">
          <div>
            <img className="w-full h-64" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
          </div>
          <div className="flex flex-col bg-gray-900">
            <h5 className="mt-5 ml-10 text-gray-300">limited time offer</h5>
            <h1 className="text-5xl mt-5 ml-10 text-white font-bold">
              30% OFF this Sunday and get some Gift
            </h1>
  
            <a className="group inline-flex flex-shrink-0 relative items-center overflow-hidden rounded bg-teal-500 px-8 py-3 ml-3 mt-3 cursor-pointer text-white focus:outline-none focus:ring active:bg-teal-400 active:translate-y-0.5 transition-transform">
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
        </div>
      </div>
    );
  };
  
  export default SaleCard;
  