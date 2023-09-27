import { useLoaderData } from "react-router-dom";
import Categories from "../../componentes/Categories/Categories";
import Banner from "../../componentes/Header/Banner/Banner";
import { useState } from "react";

const Home = () => {
  const categories = useLoaderData();
  const [searchItem, setSearchItem] = useState("");



  return (
    <div>
      <div>
        <Banner searchItem={searchItem} setSearchItem={setSearchItem}></Banner>
      </div>
      <Categories searchItem={searchItem} categories={categories}></Categories>
    </div>
  );
};

export default Home;
