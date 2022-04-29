import { useNavigate } from "react-router-dom";

const Modal = ({setDisplayModal}) => {
const navigate = useNavigate()
    const handleClick = () => {
        setDisplayModal(false);
    }

  return (
    <div className="">
      <div className="fixed top-0 left-0 bg-gray-700 opacity-90 w-screen h-screen z-20" onClick={handleClick}></div>
      <div className="bg-white border h-fit w-8/12 centrify z-30 rounded-lg p-3">
        <h3 className="text-xl font-semibold">Are you sure ?</h3>
        <p className="my-2">This action will lead to end the whole session</p>
        <div className="flex justify-end">
          <button className="text-primary" onClick={handleClick}>Cancel</button>
          <button className="ml-2 bg-btnRed p-2 rounded-lg shadow-lg text-white" onClick={() => navigate("/") }>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
