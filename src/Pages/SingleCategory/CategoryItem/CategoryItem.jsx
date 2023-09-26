import swal from "sweetalert";

const CategoryItem = ({ category }) => {
  const { id, img, text_color, title, price, description } = category || {};

  const addToDonation = () => {
    const addedDonationArray = [];
    const addDonation = JSON.parse(localStorage.getItem("donations"));
    if (!addDonation) {
      addedDonationArray.push(category);
      localStorage.setItem("donations", JSON.stringify(addedDonationArray));
      swal("Good job!", "Donation Successfull", "success");
    } else {
      const isExist = addDonation.find((category) => category.id === id);
      if (!isExist) {
        addedDonationArray.push(...addDonation, category);
        localStorage.setItem("donations", JSON.stringify(addedDonationArray));
        swal("Good job!", "Donation Successfull", "success");
      } else {
        swal("Error!", "All Ready Added", "error");
      }
    }
  };

  return (
    <div className="mt-10 px-16">
      <div className="container mx-auto">
        <div className="relative border-2">
          <div className="relative h-[36rem]">
            <img className="w-full h-full rounded-lg" src={img} alt="" />
            <div className=" flex items-center h-28 bg-gradient-to-t from-black to-gray-800 opacity-20 absolute w-full bottom-0"></div>
            <button
              onClick={addToDonation}
              style={{ backgroundColor: text_color }}
              className=" text-xl ml-5 px-6 py-2 opacity-100 rounded text-white font-semibold bottom-7 absolute"
            >
              Donate ${price}
            </button>
          </div>
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
