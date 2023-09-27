import { useEffect, useState } from "react";
import Donations from "./Donations/Donations";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [noDonation, setNoDonation] = useState("");
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const addDonation = JSON.parse(localStorage.getItem("donations"));
    if (addDonation) {
      setDonations(addDonation);
    } else {
      setNoDonation("No Donation");
    }
  }, []);

  return (
    <div>{" "} {noDonation ? (<p className="h-[80vh] flex justify-center items-center">
          {noDonation}
        </p>
      ) : (
        <div>
          <div className="grid md:grid-cols-2 px-5 gap-4 mt-10">
            {isShow
              ? donations.map((donation) => (
                  <Donations key={donation.id} donation={donation}></Donations>
                ))
              : donations
                  .slice(0, 4)
                  .map((donation) => (
                    <Donations
                      key={donation.id}
                      donation={donation}
                    ></Donations>
                  ))}
          </div>
          {donations.length > 4 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className={`px-7 py-2 bg-[#009444] text-white rounded block mx-auto mt-4 ${isShow?'hidden' : 'block'}`}
            >
              See All
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;
