import { useRef } from "react";

const Religion = ({ data, setReligion, setDisplayCommunity }) => {
  const ReligionInput = useRef();
  const ReligionForm = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  const handleOnclick = (e) => {
    ReligionForm.current.classList.add("backdrop");
    setReligion(e.target.value);
    setDisplayCommunity(true);
    document.querySelectorAll(".religion-input").forEach(input => {
        input.setAttribute("disabled", "true")
    })

  };
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="bg-chatbg p-4 w-10/12 mx-auto rounded-xl my-5"
      ref={ReligionForm}
    >
      <p className="text-lg font-semibold text-center mb-4">{data.question}</p>
      <div className="w-full border-t border-gray-400"></div>
      {data.options &&
        data.options.map((option, i) => (
          <div className="my-2 ml-3" key={option.id}>
            <label htmlFor={option.text} className = "flex justify-start items-center">
              <input type="radio" ref = {ReligionInput} name = "Religion" className="religion-input" onClick={handleOnclick} value = {option.text} id = {option.text}/>
              <span className="ml-5"> {option.text}</span>
            </label>
          </div>
        ))}
    </form>
  );
};

export default Religion;
