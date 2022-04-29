import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleScheme = () => {
  const schemes = useSelector((state) => state.schemeReducer.schemes);

  const { id } = useParams();
  console.log(id);

  const filteredArray = schemes.filter((scheme) => scheme._id.$oid === id);

  return (
    <div className="pb-10">
      {schemes &&
        filteredArray.map((scheme) => (
          <div className="" key={scheme._id.$oid}>
            <h2 className="text-2xl font-semibold m-3">{scheme.title}</h2>

            <div className="bg-chatbg p-3 rounded-lg w-10/12 mx-auto ">
              <h3 className="font-semibold text-lg mb-5">Department :</h3>
              <p className="text-sm">{scheme.department}</p>
            </div>

            <div className="bg-chatbg p-3 rounded-lg w-10/12 mx-auto mt-10">
              <h3 className="font-semibold text-lg mb-5">Scheme Details : </h3>
              <p className="text-sm">{scheme.details}</p>
            </div>

            <div className="bg-chatbg p-3 rounded-lg w-10/12 mx-auto mt-10">
              <h3 className="font-semibold text-lg mb-5">Eligibility : </h3>
              <ul className="flex flex-col">
                {scheme.eligibility.age && (
                  <li className="text-sm">
                    Age : {scheme.eligibility.age.min}
                  </li>
                )}
                {scheme.eligibility.community[0] && (
                  <li className="text-sm">
                    Community :{scheme.eligibility.community[0]}{" "}
                  </li>
                )}

                {scheme.eligibility.disabled_person[0] && (
                  <li className="text-sm">
                    IsDisabled : {scheme.eligibility.disabled_person[0]}
                  </li>
                )}

                {scheme.eligibility.educational_qualification[0] && (
                  <li className="text-sm">
                    Educational Qualification :
                    {scheme.eligibility.educational_qualification[0]}
                  </li>
                )}

                {scheme.eligibility.gender[0] && (
                  <li className="text-sm">
                    Gender :{scheme.eligibility.gender[0]}
                  </li>
                )}

                {scheme.eligibility.income_limit.min && (
                  <li className="text-sm">
                    Income :{scheme.eligibility.income_limit.min}
                  </li>
                )}
                {scheme.eligibility.marital_status[0] && (
                  <li className="text-sm">
                    Marital Status : {scheme.eligibility.marital_status[0]}
                  </li>
                )}

                {scheme.eligibility.occupation[0] && (
                  <li className="text-sm">
                    Occupation : {scheme.eligibility.occupation[0]}
                  </li>
                )}

                {scheme.eligibility.religion[0] && (
                  <li className="text-sm">
                    Religion : {scheme.eligibility.religion[0]}
                  </li>
                )}
              </ul>
            </div>

            {scheme.other && scheme.other.length > 1 && (
              <div className="bg-chatbg p-3 rounded-lg w-10/12 mx-auto mt-10">
                <h3 className="font-semibold text-lg mb-5">
                  Other Eligibility :
                </h3>
                <p className="">{scheme.other}</p>
              </div>
            )}
            {scheme && scheme.documents.length > 1 && (
              <div className="bg-chatbg p-3 rounded-lg w-10/12 mx-auto mt-10">
                <h3 className="font-semibold text-lg mb-5">
                  Documents Required :
                </h3>
                <p className="">
                  {scheme.documents.split("*").map((doc) => (
                    <li className="scheme-li">{doc}</li>
                  ))}
                </p>
              </div>
            )}

            {scheme && scheme.reward.length > 1 && (
              <div className="bg-chatbg p-3 rounded-lg w-10/12 mx-auto mt-10">
                <h3 className="font-semibold text-lg mb-5">Rewards :</h3>
                <p className="">{scheme.reward}</p>
              </div>
            )}
          </div>
        ))}

        <button className="bg-primary text-white mt-3 rounded-md p-2 w-6/12 text-center block mx-auto">Apply</button>
    </div>
  );
};

export default SingleScheme;
