
// import React, { ChangeEvent, useRef, useState } from "react";
import { action } from '@storybook/addon-actions';
import { cp } from 'fs/promises';
import { ChangeEvent, useRef, useState } from 'react';

export default {
  title: 'input',
}


export const UncontrolledInput = () => <input />

export const TarckUncontrolledInputValue = () => {
  const [value, setValue] = useState("")

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newNum = event.currentTarget.value;
    setValue(newNum);
  }

  return <><input onChange={onChange} type="text" />--{value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  }
  return <><input ref={inputRef} /><button onClick={save}  >save</button> - actual value: {value}  </>

}



export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => { setParentValue(e.currentTarget.value) }

  return <input value={parentValue} onChange={onChange} />
}




export const ControlleChexbox = () => {

  const [parentValue, setParentValue] = useState(true);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked);
  }

  return <input type={"checkbox"} checked={parentValue} onChange={onChange} />
}



export const ControlledSelect = () => {

  const [parentValue, setParentValue] = useState<string | undefined>("2");

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value);
  }

  return <select value={parentValue} onChange={onChange}>
    <option>NONE</option>
    <option value={"1"} >KIEV</option>
    <option value={"2"} >ITA</option>
    <option value={"3"} >MOL</option>
  </select>

}





























// export const UncontrolledInput = () => <input />

// export const TrackValueUncontrolledInput = () => {
//   const [value, setValue] = useState("");

//   const onChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const actualValue = event.currentTarget.value;
//     setValue(actualValue);
//   }

//   return <><input onChange={onChange} /> - {value} </>
// }








// export const ControlledInputWithFixedValue = () => <input value={"it incubator by"} />;

