import Category from "./Category";

const Categories = ({categories, searchItem}) => {
  
  const filterData = categories?.filter((item) => {
    if (item && item.category_name) {
      return item.category_name.toLowerCase().includes(searchItem.toLowerCase())
    }
    return false;
  });


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 px-10">
      {filterData ?.map((category) => (
        <Category key={category.id} category={category}></Category>
      ))}
    </div>
  );
};

export default Categories;
