

const Banner = ({searchItem, setSearchItem}) => {
  const handleSearch=()=>{
    const searchValue =document.getElementById("input-id").value;
    setSearchItem(searchValue)
  }
 

  return (
    <div className="h-screen mb-10">
      <div
        className="hero w-full min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/tYQVW1t/banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-95"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-10 text-5xl font-bold text-[#0B0B0B]">
              I Grow By Helping People In Need
            </h1>
            <div className="flex justify-center items-center">
              <input  id="input-id"
                type="text"
                placeholder="Search here...."
                className="rounded-l-lg border px-4 py-2"
              />
              <button onClick={handleSearch} className="border bg-[#FF444A] px-2 rounded-r-lg text-white py-2 font-medium">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
