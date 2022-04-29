import { useEffect, useRef, useState } from "react";
import Splash from "../pages/Splash";

const Abled = ({ data, setAbled, finalSubmit}) => {
  const [displaySplash, setDisplaySplash] = useState(false)
  const AbledInput = useRef();
  const AbledForm = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  const handleOnclick = (id) => {
    AbledForm.current.classList.add("backdrop");
    setAbled(id);
    document.querySelectorAll(".Abled-input").forEach(input => {
        input.setAttribute("disabled", "true")
        setDisplaySplash(true)

    })
  
    setTimeout(() => {
        finalSubmit(id)
        setDisplaySplash(false)
    }, 2000);

  };



  return (
    <>
    {displaySplash && <Splash caption = "Finding the best mathc for you"/>}
    {!displaySplash && 
    <form
      action=""
      onSubmit={handleSubmit}
      className="bg-chatbg p-4 w-10/12 mx-auto rounded-xl my-5"
      ref={AbledForm}
    >
      <p className="text-lg font-semibold text-center mb-4">{data.question}</p>
      <div className="w-full border-t border-gray-400"></div>
      {data.options &&
        data.options.map((option, i) => (
          <div className="my-2 ml-3" key={option.id}>
            <label htmlFor={option.id} className = "flex justify-start items-center">
              <input type="radio" ref = {AbledInput} name = "Abled" className="Abled-input" onClick={() => handleOnclick(option.id)} value = {option.id} id = {option.id}/>
              <span className="ml-5"> {option.text}</span>
            </label>
          </div>
        ))}
    </form>
}
    </>
  );
};

export default Abled;
