import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
const Schemes = () => {
  const schemes = useSelector((state) => state.schemeReducer.schemes);
  const bens = useSelector((state) => state.benReducer.bens);

  const [errorMsg, setErrorMsg] = useState("Loading...");
  const [displayLink, setDisplayLink] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  console.log(bens);
  console.log(schemes);

  useEffect(() => {
    setTimeout(() => {
      if (schemes && schemes.length < 1) {
        setErrorMsg("Sorry there are no schemes available for you now 😔");
        setDisplayLink(true);
      }
    }, 3000);
  }, []);

  const handleSession = () => {
    setDisplayModal(true);
  };

  return (
    <div className="min-h-screen w-full">
        {displayModal && <Modal setDisplayModal={setDisplayModal}/>}
      {schemes && schemes.length < 1 && (
        <div className="centrify w-full">
          <p className="text-lg text-black w-10/12 mx-auto text-center">
            {errorMsg}
          </p>
          {displayLink && (
            <Link
              to="/chatbot"
              className="bg-primary text-center px-4 py-2 w-4/12 block mt-5 mx-auto text-white rounded-md"
            >
              Retry
            </Link>
          )}
        </div>
      )}

      {schemes && schemes.length > 0 && (
          <h2 className="text-xl font-semibold p-3">The Best Match For You</h2>
      )}

      {schemes &&
        schemes.map((scheme) => (
          <div className="bg-chatbg p-3 m-3 rounded-lg " key={scheme._id.$oid}>
            <Link to={`${scheme._id.$oid}`}>
              <p className="text-primary font-semibold">{scheme.title}</p>
              <p className="">beneficiary</p>
            </Link>
          </div>
        ))}
         <button
            className="bg-btnRed text-white rounded-md p-2 block mx-auto mt-10"
            onClick={handleSession}
          >
            End Sesstion
          </button>
    </div>
  );
};

export default Schemes;
