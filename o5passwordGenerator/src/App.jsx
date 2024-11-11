import { useCallback, useEffect, useRef } from "react";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  // use ref : used to give reference of selected components in our page so that functions/manipulations can be performed on referenced values
  // kisko select kru kiski value dalu uske lie useRef lgta hein, uske lie ref={passwordRef} pawwsordRef pass karna hota hein ref mien
 
 // line no 14 and line no 66 is hook ki value se baat karpare hein
  const passwordRef = useRef(null);




  // callback function ko memorize krleta hein,maybe part memorize krle,threads memorize krleta hein
  const copyPasswordToClipboard=useCallback( ()=>{

    passwordRef.current?.select();                   //kisko select kru kiski value dalu uske lie useRef lgta hein  // Visually select the input (optional bcz it can be null) blue kardeta hein 
    //passwordRef.current?.setSelectionRange(0,4);   //  Set the visual selection range for the first 4 characters 
    // window.navigator.clipboard.writeText(password.slice(0,4)) // Copy only the first 4 characters
    window.navigator.clipboard.writeText(password) //copy whole text from password field 
  },[password])


  // use Callback: used for optimization it calls the function inside it when the dependencies are changed and returns a memorized function
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!#$%&()*+,-./:;<=>?@[\\]^_{|}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);



  // useeffect: runs the function inside it whenever the page renders for first-time or dependencies arrays values are changed
  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]);



  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4  py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-4">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
