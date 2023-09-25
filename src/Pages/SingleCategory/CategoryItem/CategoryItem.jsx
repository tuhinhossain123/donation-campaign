const CategoryItem = ({ category }) => {
  console.log(category);
  const {img, text_color, title, price, description } = category || {};
  return (
    <div className="mt-10">
      <div className="container mx-auto">
        <div className="relative bg-slate-700">
          <img className="w-screen h-[550px] rounded-lg" src={img} alt="" />
        </div>
        <div className="absolute -mt-24 pl-8">
          <button
            style={{ backgroundColor: text_color }}
            className=" text-xl px-6 py-4 rounded text-white font-semibold"
          >
            Donate ${price}
          </button>
        </div>
        <div className="py-10 px-4">
          <h3 className="text-4xl font-bold pb-6">{title}</h3>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
