
function Header() {
  return (
    <>
        <div className="2xl:container">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-3 bg-cyan-600 h-[10vh]">
                <div className="logo h-[10vh] flex items-center ml-6">
                    <img src="../../../public/icons8-logo-50.png" className="bg-white" alt="Image"/>
                </div>
                <div className="flex justify-center items-center gap-2 h-[10vh]">
                    <input type="text" className="rounded-md border border-rose-500 px-16 py-1 " />
                    <button className="">
                          <svg
                              fill="white"
                              viewBox="0 0 16 16"
                              height="1em"
                              width="1em"
                              className="h-[15px]"
                          >
                              <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
                          </svg></button>
                </div>
                <ul className="flex justify-evenly items-center h-[10vh] text-white">
                        <li>Home</li>
                        <li>About</li>
                        <li>Products</li>
                        <li>Cart </li>
                    
                </ul> 
                
            </div>
        </div>
    </>
  )
}

export default Header