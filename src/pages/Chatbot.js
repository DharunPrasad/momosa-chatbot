import Svg from "../components/Svg";
import { useFetch } from "../hooks/useFetch";
import hug from "../assets/hugging-face.png"

const Chatbot = () => {
const {data : questions, isPendings, error} = useFetch("http://momosa-api.herokuapp.com/questions")
console.log(questions)
    return ( 
        <div className="relative">
            {isPendings && <p className="centrify">Loading</p>}
            {error && <p className="centrify">{error}</p>}

            <header className="flex justify-between p-4 mb-5">
                <h2 className="text-2xl font-semibold">Momosa</h2>
                <button className="bg-primary text-white py-3 px-2 rounded">English </button>
            </header>

<div className="h-fit">
            <div className=" m-2 w-10/12 ml-auto relative bg-chatbg rounded-lg p-3 text-lg">
                <Svg/>
                <p className="">Hello, my name is Momosa, and I'm here to help you <img src = {hug} className = "inline"/></p>
            </div>
           
            {questions[0] && <div className="">

                 </div>}

</div>
        </div>
    
     );
}
 
export default Chatbot;