import React, { useMemo, useState } from "react"

export default {
  title: "useState demo",
}

function genereteDate() {
  console.log("generateData");

  return 1;
}


export const Exampel1 = () => {
  console.log("Exampel1");

  // const initValue = useMemo(genereteDate, [])

  const [counter, setCounter] = useState<number>(genereteDate);
  return <>
    <button onClick={() => setCounter((state) => state + 1)}>+</button>
    {counter}
  </>
}