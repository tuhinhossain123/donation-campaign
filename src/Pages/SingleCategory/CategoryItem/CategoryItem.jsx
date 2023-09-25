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
      }
      else{
        swal("Error!", "All Ready Added", "error");
      }
    }
  };

  return (
    <div className="mt-10 px-4">
      <div className="container mx-auto">
        <div className="relative">
          <img className="md:w-full md:h-[450px] rounded-lg" src={img} alt="" />
        </div>
        <div className="absolute md:-mt-24 pl-8">
          <button
            onClick={addToDonation}
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
