//declaring global variables
const generate = document.getElementById("generate")
const baseURL = "http://api.openweathermap.org/data/2.5/weather?"
const apiKey = "24ccbcdd2340eb5eefd4e7e8a480842f&units=imperial"
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// get temp variable
const getTemp = async (baseURL, zip, apikey)=>{

    const response = await fetch(`${baseURL}zip=${zip}&appid=${apiKey}`)
    try {

     const data = await response.json();
     console.log(data)
     return data;
    }   catch(error) {
         console.log("error", error);
        };
};

// post data
const postdata = async (url ="", data = {} ) => {
  console.log(data);
  const response = await fetch(url, {
    method : "POST",
    credentials : "same-origin",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(data),
  });
  try {
    const newData = await response.json
    console.log(newData)
  } catch(error) {
    console.log("error", error)
  };
};

// Event listener to add function to existing HTML DOM element
generate.addEventListener("click", async () => {
    const zip = document.getElementById("zip").value
    let data = await getTemp(baseURL, zip, apiKey);
    const feel = document.getElementById("feelings").value
    const temp = data.main.temp;
    const serverData = {
      temp: temp,
      date: d,
      feel: feel
    };

    // send the data to the server using fetch
    await postdata("/add", serverData);
    await retrieveData();
});

/* Function to GET Project Data */
const retrieveData = async () =>{
    const request = await fetch('/all');
    try {
    
    const allData = await request.json()
    console.log(allData)
    //updating data to DOM elements
    document.getElementById("temp").innerHTML = Math.round(allData.temp)+ 'degrees';
    document.getElementById("content").innerHTML = allData.feel;
    document.getElementById("date").innerHTML =allData.date;
    }
    //removing errors
    catch(error) {
      console.log("error", error);
    }
   }


