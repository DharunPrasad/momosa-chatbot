import { useRef } from "react";

const Education = ({ data, setEducation, setDisplayOccupation }) => {
  const EducationInput = useRef();
  const EducationForm = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  const handleOnclick = (e) => {
    EducationForm.current.classList.add("backdrop");
    setEducation(e.target.value);
    setDisplayOccupation(true);
    document.querySelectorAll(".Education-input").forEach(input => {
        input.setAttribute("disabled", "true")
    })

  };
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="bg-chatbg p-4 w-10/12 mx-auto rounded-xl my-5"
      ref={EducationForm}
    >
      <p className="text-lg font-semibold text-center mb-4">{data.question}</p>
      <div className="w-full border-t border-gray-400"></div>
      {data.options &&
        data.options.map((option, i) => (
          <div className="my-2 ml-3" key={option.id}>
            <label htmlFor={option.text} className = "flex justify-start items-center">
              <input type="radio" ref = {EducationInput} name = "Education" className="Education-input" onClick={handleOnclick} value = {option.text} id = {option.text}/>
              <span className="ml-5"> {option.text}</span>
            </label>
          </div>
        ))}
    </form>
  );
};

export default Education;
