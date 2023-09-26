import { useLoaderData } from "react-router-dom";
import Categories from "../../componentes/Categories/Categories";
import Banner from "../../componentes/Header/Banner/Banner";

const Home = () => {
  const categories = useLoaderData();
    return (
        <div>
        <div className="">
        <Banner></Banner>
        </div>
          <Categories categories={categories}></Categories>
        </div>
    );
};

export default Home;