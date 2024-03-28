import { action } from '@storybook/addon-actions';
// import React, { useState } from 'react';
import { Clock } from './Clock';


export default {
  title: "Clock",
  component: Clock,
};


export const BaseAnalogExmple = () => {
  return <Clock mode={"analog"} />
}


export const BaseDigitalExmple = () => {
  return <Clock mode={"digital"} />
}

