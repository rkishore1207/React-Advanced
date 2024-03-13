# React Advanced

## useReducer
* If more than one state updates needs to happen at single time.
* If one state is updated, based on that one or more state needs to update, useReducer is the best way.
```javascript
const[state,dispatch] = useReducer(reducer,initialState);
```
* useReducer have reducer function which have all logics to update state and useReducer have initialState.
* State is like Accumulator, at everytime if the reducer update state, initial state also get update.
- `reducer` -> pure function, and returns the next state.
- `action` -> describes how state gonna update.
- `dispatch` -> used to trigger state updates by sending action to the reducer from the event handler.