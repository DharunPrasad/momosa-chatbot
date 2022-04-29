import { useState, useEffect } from "react"

export const usePost = (url) => {
    //State to hold the data
  const [data, setData] = useState(null)
    //State to hold the loading info
  const [isPending, setIsPending] = useState(false)
    //State to hold if there is any error
  const [error, setError] = useState(null)

  useEffect(() => {
      //Controller to abort the component if it is unmounted before the data is been updated
    const controller = new AbortController()

    //ASYNC function to do the data fetching
    const fetchData = async () => {
        //Ispending is set to true so that the loading happens
      setIsPending(true)
      //Try block to check if there is any error
      try {
          //Fetch API                   //Signal Controller for teh abort controller
        const res = await fetch(url,{
             method : "POST",
            headers: {
              'Content-Type': 'application/json'  // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body : JSON.stringify(data)

            })
        if(!res.ok) {
            //Throwing error if response is not ok
          throw new Error(res.statusText)
        }
        //Collecting the data after fetching
        const data = await res.json()

        //Updating loading state, data and eroor message (because there is no error)
        setIsPending(false)
        setData(data)
        setError(null)

      }
      //Catch block is used to catch the error if there is any 
      catch (err) {
          //For abort error
        if (err.name === "AbortError") {
          console.log("the fetch was aborted")

        } 
        //For any othher error
        else {
          setIsPending(false)
          setError('Could not fetch the data')
        }
      }
    }
//Calling the fetchData() within the useEffect with the URL as the dependency
    fetchData()

    //Returning controller.abort() inorder for the abrot controller to work
    return () => {
      controller.abort()
    }

  }, [url])

  //Returning the major values so that it can be imported in other componenets
  return { data, isPending, error }
}


// const res = await fetch(url, {
// 
//     },
//     body : JSON.stringify(data)
// })