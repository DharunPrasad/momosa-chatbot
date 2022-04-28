import Svg from "../components/Svg";
import { useFetch } from "../hooks/useFetch";
import hug from "../assets/hugging-face.png";
import SearchList from "../components/SearchList";
import { useEffect, useRef, useState } from "react";
import Splash from "../pages/Splash";
import Age from "../components/Age";
import Income from "../components/Income";
import Gender from "../components/Gender";
import Religion from "../components/Religion";
import Community from "../components/Community";
import Education from "../components/Education";
import Occupation from "../components/Occupation";
import Marital from "../components/Marital";
import Abled from "../components/Abled";

const Chatbot = () => {
  //For Data aloccation
  const [list, setList] = useState("");
  const [age, setAge] = useState("");
  const [income, setIncome] = useState("");
  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState("");
  const [community, setCommunity] = useState("");
  const [education, setEducation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [marital, setMarital] = useState("");
  const [abled, setAbled] = useState("");

const [finalArray, setFinalArray] = useState(null)

  /*For display Purpose*/
  const [displaySearchList, setDisplaySearchlist] = useState(true);
  const [showChatPage, setShowChatPage] = useState(false);
  //   For GENDER
  const [displayAge, setDisplayAge] = useState(false);
  //   For INCOME
  const [displayIncome, setDisplayIncome] = useState(false);
  //For GENDER
  const [displayGender, setDisplayGender] = useState(false);
  //for RELIGION
  const [displayReligion, setDisplayReligion] = useState(false);

  //for COMMUNITY
  const [displayCommunity, setDisplayCommunity] = useState(false);

  //for Education
  const [displayEducation, setDisplayEducation] = useState(false);

  //for Ocupation
  const [displayOccupation, setDisplayOccupation] = useState(false);

  //for MARITAL
  const [displayMarital, setDisplayMarital] = useState(false);

  //   for ABLED
  const [displayAbled, setDisplayAbled] = useState(false);

  const finalSubmit = () => {
  const  finalData = {
      list,
      age,
      income,
      gender,
      religion,
      community,
      education,
      occupation,
      marital,
      abled : localStorage.getItem("abled")
    };
    console.log(finalData)

    setFinalArray(finalData)

  };

  console.log(finalArray)

  // refs
  const view = useRef();

  useEffect(() => {
    view.current.scrollIntoView();
  }, [
    age,
    income,
    gender,
    religion,
    community,
    education,
    occupation,
    marital,
    abled,
  ]);

  const handleChangeList = (e) => {
    setList(e.target.value);
    setShowChatPage(true);
    setDisplaySearchlist(false);
    setDisplayAge(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowChatPage(false);
    }, 1000);
  }, [handleChangeList]);

  const listInput = useRef();

  const {
    data: questions,
    isPendings,
    error,
  } = useFetch("http://momosa-api.herokuapp.com/questions");
  const {
    data: searchList,
    isPendings: isPending2,
    error: error2,
  } = useFetch("http://momosa-api.herokuapp.com/searchlist");

//   console.log(questions && questions[2]);

  //   console.log(questions);
  return (
    <div className="pb-56">
      {showChatPage && <Splash caption={`Your session has started`} />}
      {!showChatPage && (
        <>
          {isPendings && <p className="centrify">Loading</p>}
          {error && <p className="centrify">{error}</p>}

          <header className="flex justify-between p-4 mb-5">
            <h2 className="text-2xl font-semibold">Momosa</h2>
            {displaySearchList ? (
              <button className="bg-primary text-white py-3 px-2 rounded">
                English
              </button>
            ) : (
              <button className="bg-btnRed text-white rounded-md p-2">
                End Sesstion
              </button>
            )}
          </header>

          <div className="h-fit">
            <div className=" m-2 w-10/12 ml-auto relative bg-chatbg rounded-lg p-3 text-lg">
              <Svg />
              <p className="">
                Hello, my name is Momosa, and I'm here to help you
                <img src={hug} className="inline" />
              </p>
            </div>

            <div className="w-10/12 relative ml-auto mt-10 mx-2 bg-chatbg rounded-md p-3">
              <Svg />
              What are you looking for ?
            </div>

            {displaySearchList && (
              <form className="w-10/12 relative ml-auto mt-2 mx-2 bg-chatbg rounded-md p-3">
                <select
                  name=""
                  id=""
                  className="bg-transparent w-full outline-none"
                  ref={listInput}
                  onChange={handleChangeList}
                >
                  {" "}
                  <option className="text-black">Select One</option>
                  {isPending2 && <p className="text-lg">Loading....</p>}
                  {searchList &&
                    searchList.map((list) => (
                      //   <option value = {list.title.en}>{list.title.en}</option>
                      <SearchList
                        list={list}
                        key={list._id.$oid}
                        error={error2}
                      />
                    ))}
                </select>
              </form>
            )}
            {!displaySearchList && (
              <p className="w-10/12 ml-auto m-2 text-center rounded-l-md rounded-br-md p-2 text-white bg-primary">
                {list}
              </p>
            )}

            {questions && questions[0] && displayAge && (
              <div className="">
                <Age
                  data={questions[0]}
                  setAge={setAge}
                  age = {age}
                  setDisplayIncome={setDisplayIncome}
                />
              </div>
            )}

            {questions && questions[1] && displayIncome && (
              <Income
                data={questions[1]}
                setIncome={setIncome}
                income = {income}
                setDisplayGender={setDisplayGender}
              />
            )}

            {questions && questions[2] && displayGender && (
              <Gender
                data={questions[2]}
                setGender={setGender}
                setDisplayReligion={setDisplayReligion}
              />
            )}

            {questions && questions[3] && displayReligion && (
              <Religion
                data={questions[3]}
                setReligion={setReligion}
                setDisplayCommunity={setDisplayCommunity}
              />
            )}

            {questions && questions[4] && displayCommunity && (
              <Community
                data={questions[4]}
                setCommunity={setCommunity}
                setDisplayEducation={setDisplayEducation}
              />
            )}

            {questions && questions[5] && displayEducation && (
              <Education
                data={questions[5]}
                setEducation={setEducation}
                setDisplayOccupation={setDisplayOccupation}
              />
            )}

            {questions && questions[6] && displayOccupation && (
              <Occupation
                data={questions[6]}
                setOccupation={setOccupation}
                setDisplayMarital={setDisplayMarital}
              />
            )}

            {questions && questions[7] && displayMarital && (
              <Marital
                data={questions[7]}
                setMarital={setMarital}
                setDisplayAbled={setDisplayAbled}
              />
            )}
           

            {questions && questions[8] && displayAbled && (
              <Abled
                data={questions[8]}
                setAbled={setAbled}
                finalSubmit={finalSubmit}
              />
            )}
          </div>

          <div ref={view}></div>
        </>
      )}
    </div>
  );
};

export default Chatbot;
