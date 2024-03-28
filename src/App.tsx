import { on } from 'events';
import { type } from 'os';
import React, { useState } from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion"
import OnOff from './components/OnOff/OnOff';
import { Rating, RatingValueType } from './components/Rating/Rating';
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOf';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion'
// import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion.stories' ;



// function sum(a: number, b: number ) {
//     alert(a + b);
// }

// sum(62,64);

function App(props: any) {


  console.log("on: " + props.on);
  let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [switchOn, setSwitchOn] = useState<boolean>(false);

  return (
    <div className='App'>

      <Rating value={ratingValue} onClick={setRatingValue} />
      {/* <UncontrolledRating  /> */}

      {/* <Accordion titleValue='Menu' collapsed={accordionCollapsed}
           onChange={() => {(setAccordionCollapsed(!accordionCollapsed))} } />   */}

      {/* <OnOff on={switchOn} onChange={ (on)=>  {setSwitchOn(on)} } />   */}

      <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}
      <UncontrolledAccordion titleValue='vfvfvfv' />
    </div>
  );
}


type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log('  APP Title rendering');
  return <h1> {props.title}</h1>
}



export default App;
