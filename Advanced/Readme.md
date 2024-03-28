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

## Create react project with Vite
* For install => `npm create vite@latest`
* Run => `npm run dev`
* We need to install the dependencies and packages by `npm install`.
* It doesn't support **Eslint extension**, so we need to add that as a `plugin` to it.

## React Router
* We can achieve the `Single Page Application` in react through **React-router**.
* It seamlessly helps react to transition between pages without **refreshing**.
* **NavLink** is helped to instruct user that which you are currently there by including `class="active"` in it.
* If we are at one page and do refresing it won't go to the root page it would still staying on the current page, this scenario is existing while we sending that url to anyone and they will correctly landing to this particular page.

## Css Module
* To avoid the **same name conflicts** we are using CSS Modules.
* In that file, if we have declare className, then it would add some `random key` to those to make not **same name clashes**.
* Inspite of, we have to make some styles for global, we could use **`:global("className")`** into it.

## Params and Query String
* We can store states on `URL` also.
* Why we stores states on URL is that, if we apply some filters on product page and it would show that respected filter applied page bacause we passed those **filters factors on URL**.
* Then if I copy that URL and store as a *bookmark*, after then if i revisit that link it would show what i had done previously (that is retaining the state).
* Params is for **particular page** and Query string is for **Golbal**.

```javascript
    <Navigate replace to="">
    // whild implementing nested routes, during mounting of parent component, we doesn't know which child route will gonna mount
    // for that purpose Navigate to cames and replace is for going back.
```

## Context API
* It is system to pass data through all the components down the tree without manually passing through **Props**.
* It acts as a `Global State`.
* `Provider` -> Gives all child components access to value
* `Value` -> It has the State variables and setter functions
* `Consumer` -> All the components that gonna use context values
* Once the value got changed, all the consumer who used its value got **re-render**.
* We could create out own `custom hook` for consuming context **(useContext(PostContext))**.
* But if we **consume** that context outside of the provider wrapped components, it results `undefined`.

![State Storing Places](https://github.com/rkishore1207/React-Advanced/assets/146698138/d5cc52f8-8fe7-4fcc-9bb9-ec18b3f0c95f)