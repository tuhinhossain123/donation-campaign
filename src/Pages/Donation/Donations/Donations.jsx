const Donations = ({ donation }) => {
  const {
    id,
    img,
    category_name,
    card_bg,
    category_bg,
    text_color,
    title,
    price,
  } = donation || {};
  return (
    <div className="px-">
      <div
        style={{ backgroundColor: card_bg }}
        className="rounded-lg flex gap-2"
      >
        <div>
          <img className="w-[220px] h-[200px] rounded-t-lg" src={img} alt="" />
        </div>
        <div className="py-5 px-4">
          <h3
            style={{ backgroundColor: category_bg, color: text_color }}
            className="px-3 mb-2 py-1  font-semibold text-center rounded"
          >
            {category_name}
          </h3>
          <h1 className="text-xl font-semibold mb-2">{title}</h1>
          <p style={{ color: text_color }} className="font-semibold">
            ${price}
          </p>
          <button
            style={{ backgroundColor: text_color }}
            className="px-4 py-2 rounded text-white font-semibold mt-4"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donations;
