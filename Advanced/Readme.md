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

![State Storing Places](https://github.com/rkishore1207/React-Advanced/assets/146698138/d5cc52f8-8fe7-4fcc-9bb9-ec18b3f0c95f).

## Performance, Optimization and reduce wasted renders
![Performance increase tools](https://github.com/rkishore1207/React-Advanced/assets/146698138/5881c72c-4ba7-4577-8bc0-c67a6613db20)

* While **states get update**, **context changes** and **Parent component re-renders**, those particular component will re-render.
* But while rerendering, browser DOM won't get update, just **virtual DOM** only update and based on the virtual DOM's changes browser DOM get update.
### Optimization Trick
* If one component have another component in it, and if this component get updates surely that component also get **rerender**. This is not we want.
* So the fix is, we can pass that component as **child component** to it (`component composition`), in this case child component get rendered first, after then parent component execute, so that child component won't re-render again.

## Memoization
* It is optimization techniques, which executes a **pure function once**, and saves that in **memory**.
* If again the same function with same inputs are given, it won't run the **entire function again**, instead of it get back the **previous result** from the cache.
* Regularly, if the parent component changed, all child components which are receive props should do re-rendering.
* But with `useMemo`, the child component won't re-render,<u> if the props value didn't change</u>.
* Only if the props from parent were change, the child component will re-render.
* If we pass **primitive** value to the funtion which gonna execute **slow component**, then if it goes again then it knows that it's redundant, hence memo get back the **previous component** from the `cache`.
* But if that would be a **object**, then it could not compare with the new one, because every time if the component re-render, **objects and functions** are computed `newly`. 
* **Memoize component** cannot recognize the new object, fix is we need to memoize that object also by `useMemo()`;
* Same things for functions also but by `useCallback()`.
* But if we pass the **useState function** then memo function can recognize, why? because that state function will execute **only once** while component gets mount, and for all other rendering it would pass that `same state function` right?.
* We should `memoize` the context values also using **useMemo()**, to restrict *wasted re-renders* while passing the same value in the **context**.
* If one useEffect is running **infinite times** because of dependency array, we can achieve that by using `useCallBack()` for the items present in the useEffect's dependency array.
### Lazy Loading
* Change the import by `lazy()`, and wrap which components or page should come under **lazy loading**.
* At first time, the request was made all the code from the server are came to the browser as **whole bundle**.
* And then based on our action, it will render within that bundle and show that particular component.
* But Lazy loading is, **divided our whole bundle into chunks**, and based on that particular component request it will get back the page from **server**.
![Do's and Don't of Optimization](https://github.com/rkishore1207/React-Advanced/assets/146698138/20069e2f-1e0f-4f7f-afdb-68e7bcb4f1d8)

## Strategies for UseEffect() Hook
* Don't use the `entire object` in the dependency array, because it usually **changes between renders** and results to execute the **useEffect regularly** like -> (useEffect with zero dependency).
* But if we want to use, we could `memoize` it and use.
* If any function that have **reactive state**, we need to include that function at dependency array.
* **Reactive state** means which are the variables or functions that depends on <u>hooks, props, contexts or reducer</u>.
* If one function has multiple reactive values, we can go for `reducer`.
* Didn't use **setState() or dispatch** on dependency, because that things are *rendered only once*, that also during initial rendering.
* We could not use **useEffect() frequently**, if none of the other choices are there, then we can go for useEffect().
* In react it is called as <u>**`Escape hatch`**</u>.

## Redux
* npm i redux
* npm install -D @types/redux
* npm i react-redux
* npm i redux-thunk
* **Redux Thunk** is the `middleware`, to perform certain operations `asynchronously` and replace the dispatched payload, then only it will reach the reducer and update the state.
* That is, some async actions were happening between dispatch and state updation (at store).
* Regularly thunk should return a `function` and if function are there then redux identified that as a **Thunk function**.