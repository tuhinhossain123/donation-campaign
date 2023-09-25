const Category = ({ category }) => {
  const { id, img, category_name, card_bg, category_bg, text_color, title } =
    category || {};
  return (
    <div>
      <div style={{ backgroundColor: card_bg}} className="rounded-lg">
        <div>
          <img className="w-full rounded-t-lg" src={img} alt="" />
        </div>
        <div className="py-5 px-4">
          <h3
            style={{ backgroundColor: category_bg, color: text_color}}
            className="px-3 mb-3 py-1 w-24 font-semibold text-center rounded text-white"
          >
            {category_name}
          </h3>
          <h1 style={{ color: text_color}} className="text-xl font-semibold">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
