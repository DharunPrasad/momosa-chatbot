import { useRef } from "react";

const Community = ({ data, setCommunity, setDisplayEducation }) => {
  const CommunityInput = useRef();
  const CommunityForm = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  const handleOnclick = (id) => {
    CommunityForm.current.classList.add("backdrop");
    setCommunity(id);
    setDisplayEducation(true);
    document.querySelectorAll(".Community-input").forEach(input => {
        input.setAttribute("disabled", "true")
    })

  };
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="bg-chatbg p-4 w-10/12 mx-auto rounded-xl my-5"
      ref={CommunityForm}
    >
      <p className="text-lg font-semibold text-center mb-4">{data.question}</p>
      <div className="w-full border-t border-gray-400"></div>
      {data.options &&
        data.options.map((option, i) => (
          <div className="my-2 ml-3" key={option.id}>
            <label htmlFor={option.text} className = "flex justify-start items-center">
              <input type="radio" ref = {CommunityInput} name = "Community" className="Community-input" onClick={()=> handleOnclick(option.id)} value = {option.text} id = {option.text}/>
              <span className="ml-5"> {option.text}</span>
            </label>
          </div>
        ))}
    </form>
  );
};

export default Community;
