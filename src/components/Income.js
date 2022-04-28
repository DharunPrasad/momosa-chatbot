import { useRef } from "react";

const Income = ({data, setIncome, setDisplayGender, income}) => {
    const incomeInput = useRef()
    const incomeForm = useRef();
    const handleSubmit = (e) => {
        e.preventDefault()
        incomeInput.current.setAttribute("disabled", "true")
        incomeForm.current.classList.add("backdrop")
        setDisplayGender(true);
    }

    const handleChange = (e) => {
        setIncome(e.target.value)

    }

    return (
      
    <form action="" onSubmit={handleSubmit} className="bg-chatbg p-4 w-10/12 mx-auto rounded-xl my-5" ref = {incomeForm}>
      <p className="text-lg font-semibold text-center mb-4">{data.question}</p>
      <div className="w-full border-t border-gray-400"></div>
      <input
        type="number"
        value = {income}
        ref = {incomeInput}
        onChange = {handleChange}
        className="block mx-auto rounded-md m-3 text-center w-5/12 h-10 outline-none p-2 border"
      />

    </form>
  );
}
 
export default Income;