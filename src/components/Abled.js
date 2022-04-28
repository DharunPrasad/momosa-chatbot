import { useEffect, useRef } from "react";

const Abled = ({ data, setAbled, finalSubmit}) => {
  const AbledInput = useRef();
  const AbledForm = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  const handleOnclick = (e) => {
    AbledForm.current.classList.add("backdrop");
    setAbled(e.target.value);
    localStorage.getItem("abled", `${e.target.value}`)
    document.querySelectorAll(".Abled-input").forEach(input => {
        input.setAttribute("disabled", "true")
    })
finalSubmit()
  };



  return (
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
              <input type="radio" ref = {AbledInput} name = "Abled" className="Abled-input" onClick={handleOnclick} value = {option.id} id = {option.id}/>
              <span className="ml-5"> {option.text}</span>
            </label>
          </div>
        ))}
    </form>
  );
};

export default Abled;
