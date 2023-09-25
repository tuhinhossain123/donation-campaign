
import { useLoaderData, useParams } from "react-router-dom";
import CategoryItem from "./CategoryItem/CategoryItem";
import { useEffect, useState } from "react";

const SingleCategory = () => {
        const [category, setCategory]=useState();
        const {id} = useParams();
       const idInt =parseInt(id)
        const categories = useLoaderData();
        console.log(categories)
        useEffect(()=>{
            const findCategory = categories?.find(category => category.id == idInt);
            setCategory(findCategory);

        },[categories, idInt])
  

  
  return (
    <div className="flex justify-center">
    <CategoryItem category={category}></CategoryItem>
    </div>
  );
};

export default SingleCategory;
