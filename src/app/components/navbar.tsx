export function Navbar(){
    return(
        <div>
            <header className="text-[#636270] body-font bg-[#E1E3E5]">
  <div className="container  flex flex-wrap p-5 flex-col md:flex-row items-center ">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto text-[14px] font-medium" >
      <a className="mr-5 hover:text-gray-900">Home</a>
      <a className="mr-5 hover:text-gray-900">Shop</a>
      <a className="mr-5 hover:text-gray-900">Product</a>
      <a className="mr-5 hover:text-gray-900">Page</a>
      <a className="hover:text-gray-900">About</a>
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 gap-2">
      <span className="text-[14px] font-medium">Contact:</span>
      <span className="text-black text-[14px] font-bold">0314-033351</span>
    </div>
  </div>
</header>

        </div>
    )
}