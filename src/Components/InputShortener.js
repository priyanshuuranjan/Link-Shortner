import { useState } from "react";
import "./InputShortener.css";
// import { getFirestore } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { collection, addDoc } from "firebase/firestore"; 

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  // To get value and Store data in firebase
  const handleClick = async (e) => {
    e.preventDefault();
    let id = uuidv4();
    // await db.collection("urls").add({
    //   url: value,
    //   id: id,
    // });
    await addDoc(collection(db, "urls"), { url: value, id: id });
    setInputValue(value);
    setValue("");
  };

  return (
    <div className="inputContainer">
      <h1>
        LINK <span>Shortener</span>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>shorten</button>
      </div>
    </div>
  );
};

export default InputShortener;

/* this code works same but this push only link that is provided in input but upper code push both id and shorten link in firebase  */
// import { useState } from "react";
// import { db } from "./firebase";

// const InputShortener = ({ setInputValue }) => {
//   const [value, setValue] = useState("");

//   const handleClick = async (e) => {
//     e.preventDefault();
//     setInputValue(value);
//     // Store the shortened URL in Firebase
//     await  db.collection("shortenedUrls").add({
//       url: value
//     });
//     setValue("");
//   }

//   return (
//     <div className="inputContainer">
//       <h1>LINK <span>Shortener</span></h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Paste a link to shorten it"
//           value={value}
//           onChange={e => setValue(e.target.value)}
//         />
//         <button onClick={handleClick}>shorten</button>
//       </div>
//     </div>
//   )
// }

// export default InputShortener;
