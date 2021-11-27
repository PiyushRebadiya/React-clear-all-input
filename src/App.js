import React, { useState } from 'react'
import './App.css';

function App() {
  const [data, setData] = useState({
    SchoolStatus: false,
    UGStatus: false,
    PGStatus: false,
    genderMaleStatus: false,
    genderFemaleStatus: false
  })
  const [dummyData, setDummyData] = useState({ text: "", age: "", School: "", UG: "", PG: "",gender:"" })
  const [blankArr, setBlankArr] = useState([])

  const changeHandler = (e) => {
    console.log("name", { [e.target.name]: e.target.value });
    const { name, value } = e.target;
    console.log("name++++++++++++++++",e.target.checked);
    console.log("eeeeeeeeeeeeeeee",e);
    console.log("[e.target.name]",[e.target.name]);
    console.log("e.target.value",e.target.name);
    if(e.target.name === e.target.value || e.target.name === "gender") {
      console.log("e+++++++++++++++", e.target.checked);
      if(e.target.checked && e.target.name !== "gender") {
        checkboxData({ name: e.target.value })
        
        setDummyData({
          ...dummyData,
          [name]: value,
        })
      } else if(e.target.name === "gender") {
        checkboxData({ name: "gender" ,value:e.target.value})
        setDummyData({
          ...dummyData,
          gender: value,
        })

      } else {
        checkboxData({ name: e.target.value })
        setDummyData({
          ...dummyData,
          [name]: "",
        })

      }
    } else {

      setDummyData({
        ...dummyData,
        [name]: value,
      })
    }

  }

  const checkboxData = (dataSearch) => {
    console.log("data++++++++++++++++++++", dataSearch);
    switch (dataSearch.name) {
      case 'School':
        if (data.SchoolStatus) {
          console.log("falseeeeeee");
          return setData({ ...data, SchoolStatus: false });
        } else {
          console.log("trueeeeeeeeeeeeeee");
         return setData({ ...data, SchoolStatus: true });
        };
      case 'PG':
        if (data.PGStatus) {
          console.log("falseeeeeee");
          return setData({ ...data, PGStatus: false });
        } else {
          console.log("trueeeeeeeeeeeeeee");
          return setData({ ...data, PGStatus: true });
        };
      case 'UG':
        if (data.UGStatus) {
          console.log("falseeeeeee");
          return setData({ ...data, UGStatus: false });
        } else {
          console.log("trueeeeeeeeeeeeeee");
          return setData({ ...data, UGStatus: true });
        };
      case 'gender':
        // if (data.genderStatus) {
          // console.log("falseeeeeee");
          // return setData({ ...data, UGStatus: false });
        // } else {
          // console.log("trueeeeeeeeeeeeeee");
          if(dataSearch.value === "Male") {
            return setData({ ...data, genderMaleStatus: true ,genderFemaleStatus: false });
          } else {
            return setData({ ...data, genderFemaleStatus: true ,genderMaleStatus: false });

          }
        // };
      default:
        return null;
    }
    // if(data.SchoolStatus) {
    //   console.log("falseeeeeee");
    //   setData({...data,SchoolStatus:false});
    // } else {
    //   console.log("trueeeeeeeeeeeeeee");
    //   setData({...data,SchoolStatus:true});
    // }
  }

  const submitHandler = () => {
      setData({
        SchoolStatus: false,
        UGStatus: false,
        PGStatus: false
      })
    console.log("+++++++++++++++");
    console.log("dummyData", dummyData);
    setBlankArr([...blankArr, dummyData])
    setDummyData({ text: "", age: "", School: "", UG: "", PG: "" ,gender:""})
  }
  console.log("blankArr", blankArr);
  return (
    <div className="App">
      <input type="text" placeholder="Enter a text" onChange={(e) => changeHandler(e)} name="text" value={dummyData.text} />
      <br />
      <input type="text" placeholder="Enter a age" onChange={(e) => changeHandler(e)} name="age" value={dummyData.age} />
      <br />
      <label> School </label>
      <input type="checkbox" value="School" checked={data.SchoolStatus} name="School" onChange={(e) => changeHandler(e)} />
      <br />
      <label> UG </label>
      <input type="checkbox" value="UG" checked={data.UGStatus} name="UG" onChange={(e) => changeHandler(e)} />
      <br />
      <label> PG </label>
      <input type="checkbox" value="PG" checked={data.PGStatus} name="PG" onChange={(e) => changeHandler(e)} />
      <br />
      <label> Male </label>
      <input type="radio" value="Male"  name="gender" checked={data.genderMaleStatus} onChange={(e) => changeHandler(e)} />
      <label> Female </label>
      <input type="radio" value="Female"  name="gender" checked={data.genderFemaleStatus} onChange={(e) => changeHandler(e)} />
      <br />
      <input type="button" value="submit" onClick={() => submitHandler()} />

    </div>
  );
}

export default App;
