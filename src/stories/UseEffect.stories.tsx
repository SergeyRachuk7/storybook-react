import React, { useMemo, useState, useEffect } from "react"

export default {
  title: "useEffect demo",
}


export const SimpleExmple = () => {
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);
  console.log("SimpleExmple");

  useEffect(() => {
    console.log('useEffect every  render кожен рендер');
    document.title = counter.toString();
  })

  useEffect(() => {
    console.log('useEffect every  first render (componentDidMount перше відтворення компонента');
    document.title = fake.toString();
  })

  useEffect(() => {
    console.log('useEffect first render and everu counter change перший рендер і кожна зміна країни');
    document.title = fake.toString();
  }, [counter])






  return <>
    Hello, {counter}
    <button onClick={() => setFake(fake + 1)}>fake + </button>
    <button onClick={() => setCounter(counter + 1)}>counter +</button>
  </>
}

//  export const SetTimeoutExmple = () => {
//    const [fake, setFake] = useState(1);
//   const [counter, setCounter] = useState(1);
//   const [hous, setHous] = useState(new Date());


//   console.log(hous);

//   console.log("SetTimeoutExmple");

//   useEffect(() => {
//     setInterval(() => {

//     }, 1000);
//   }, [])

//   return <>
//     Hello, counter: {counter}
//     Hello, counter: {hous}

//     {/* <button onClick={() => setFake(fake + 1)}>fake + </button>
//     <button onClick={() => setCounter(counter + 1)}>counter +</button> */}
//   </>

// }



export const SetTimeoutExmple = () => {
  // const [counter, setCounter] = useState(1);
  const [hous, setHous] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setHous(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <div>Hello, counter: {counter}</div> */}
      <div>Hello, counter: {hous.toLocaleTimeString()}</div>
    </>
  );
};



export const ResetEffectExample = () => {
  const [counter, setCounter] = useState(1);
  console.log("Component rendered");

  useEffect(() => {
    console.log("Effect occurred" + counter);


    return () => {
      console.log("Reset effect");
    }
  }, []);

  const increase = () => { setCounter(counter + 1) }
  return (
    <>
      <div>Hello, counter: {counter}  <button onClick={increase}>+</button> </div>
    </>
  );
};




// export const KeysTrackerExample = () => {
//   const [text, setText] = useState("");
//   console.log("Component rendered with" + text);

//   useEffect(() => {

//     const hendler = (e: KeyboardEvent) => {
//       console.log(e.key);
//       setText((state) => state + e.key)
//     }

//     window.document.addEventListener("keypress", hendler)
//     return () => {
//       window.removeEventListener("keypress", hendler)
//     }

//   }, [text]);

//   return <>
//     Types text {text}
//   </>

// };



export const SetTimeautExample = () => {
  const [text, setText] = useState("");
  console.log("Component rendered with" + text);

  useEffect(() => {

    const timeautId = setTimeout(() => {
      console.log("timeout expiped");
      setText("3 seconds passed")
    }, 3000)
    return () => {
      clearTimeout(timeautId)
    }

  }, [text]);

  return <>
    Types text {text}
  </>
};


export const ResetEffectExmpleVanOne = () => {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    return (() => {

    })
  }, [counter])

  const increce = () => setCounter(counter + 1);
  return <> <button onClick={increce}> add number + {counter}</button></>
}






export const KeysTrackerExampleOne = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      console.log(e.key);
      setText(text + e.key)
    };
    window.addEventListener("keypress", handler)
    return () => {
      window.removeEventListener("keypress", handler)
    }

  }, [text])

  return <>  Types: {text} </>
}































