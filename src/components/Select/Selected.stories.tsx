import { action } from '@storybook/addon-actions';
import { useState } from 'react';
import { Select } from './Select';

export default {
  title: 'Select',
  component: Select,
}

export const WithValue = () => {
  const [value, setValue] = useState("2");


  return <>
    <Select onChange={setValue}
      value={value}
      items={[
        { value: "1", title: "Kiev" },
        { value: "2", title: "Moldova" },
        { value: "3", title: "Rumunia" }
      ]} />
  </>

}

export const WithoutValue = () => {
  const [value, setValue] = useState(null);

  return <>
    <Select onChange={setValue}
      value={null}
      items={[
        { value: "1", title: "Kiev" },
        { value: "2", title: "Moldova" },
        { value: "3", title: "Rumunia" }
      ]} />
  </>
}