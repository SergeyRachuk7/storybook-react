import { reducer, StateType, TOGGLE_COLLAPSED } from "./reducer";

test("collopsed should bu  true", () => {
  // data


  const state: StateType = {
    collapsed: false
  }


  // action  
  const newState = reducer(state, { type: TOGGLE_COLLAPSED })


  // expection 
  expect(newState.collapsed).toBe(true);

})




test("collopsed should bu  false", () => {
  // data
  const state: StateType = {
    collapsed: true
  }

  // action  
  const newState = reducer(state, { type: TOGGLE_COLLAPSED })


  // expection 
  expect(newState.collapsed).toBe(false);

})



// test("reducer should throw erorr because action type is  incorrect", () => {
//   // data

//   const state: StateType = {
//     collapsed: true
//   }

//   // action

//   // expection
//   expect(() => {
//     reducer(state, { type: "FAKE" })
//   }).toThrowErorr();
// })





