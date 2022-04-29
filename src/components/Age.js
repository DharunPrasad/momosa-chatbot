import { useEffect, useRef } from "react";

const Age = ({ data, setAge, setDisplayIncome, age }) => {
    const ageInput = useRef()
    const ageForm = useRef();
    const handleSubmit = (e) => {
        e.preventDefault()
        ageInput.current.setAttribute("disabled", "true")
        ageForm.current.classList.add("backdrop")
        setDisplayIncome(true);
    }

    const handleChange = (e) => {
        setAge(e.target.value)

    }


    useEffect(() => {
      ageInput.current.focus()
    },[])
 
    return (
      
    <form action="" onSubmit={handleSubmit} className="bg-chatbg p-4 w-10/12 mx-auto rounded-xl my-5" ref = {ageForm}>
      <p className="text-lg font-semibold text-center mb-4">Enter Your Age</p>
      <div className="w-full border-t border-gray-400"></div>
      <input
        type="number"
        value={age}
        ref = {ageInput}
        onChange = {handleChange}
        className="block mx-auto rounded-md m-3 text-center w-3/12 h-10 outline-none p-2 border"
      />

    </form>
  );
};

export default Age;
