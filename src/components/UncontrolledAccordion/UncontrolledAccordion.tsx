import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";
// import { reducer, TOGGLE_CONSTANT } from "./reducer"
import { reducer, TOGGLE_COLLAPSED } from "./reducer"


type AccordionPropsType = {
   titleValue: string
}

// type ActionType = {
//    type: string
// }



// const TOGGLE_CONSTANT = "TOGGLE COLLOPSED"


// const reducer = (state: boolean, action: ActionType) => {
//    switch (action.type) {
//       case TOGGLE_CONSTANT:
//          return !state;
//       default:
//          throw new Error("Bad action type")
//    }
//    return state;
// }

function UncontrolledAccordion(props: AccordionPropsType) {

   console.log('Accordion render')
   // let [collapsed, setCollapsed] = useState(false);
   let [state, dispatch] = useReducer(reducer, { collapsed: false });

   return <div>
      {/* <AccordionTitle title={props.titleValue} onClick={() => { setCollapsed(!collapsed) }} /> */}
      <AccordionTitle title={props.titleValue} onClick={() => {
         dispatch({ type: TOGGLE_COLLAPSED })
      }} />
      {/* <button onClick={() => { setCollapsed(!collapsed) }} >TOGGLE</button> */}
      {!state.collapsed && <AccordionBody />}
   </div>
}

type AccordionTitlePropsType = {
   title: string
   onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
   console.log('AccordionTitle rendering');

   return <div>
      <h3 onClick={() => { props.onClick() }}> --{props.title}--  </h3>
   </div>
}

function AccordionBody() {
   console.log('AccordionBody rendering');
   return <ul>
      <li>-1-</li>
      <li>-2-</li>
      <li>-3-</li>
   </ul>
}


export default UncontrolledAccordion;

