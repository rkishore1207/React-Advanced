# Intermediate

## How to Split up UI into components
1. Logical Separations of content
2. Reusability
3. Responsibilities or complexity
4. Personal Coding Style

## Rules for Components
* Creating new components create **abstractions**. So try not to create components too early. 
* Give meaningful component name about **what is does** or **what is displays**. 
* Don't create new component inside component.
* **Co-locate** nested components into same files.

## Components Categories
1. Stateless or Presentational components -> only have props and can be reusable
2. Stateful components -> have both props and local states and can be reusable
3. Structural components -> having other components and cannot be reusable

## Components Composition
* Instead of passing props into multiple components we can pass components as props (children) to other components.
* because if one bottom most child component want any properties that comes from topmost parent, every component need to pass this props.
* with component composition we could avoid this.

## Creator and Consumer Mindset
* While writing component we should have two mindsets **creator and consumer**.
* Creator should think about how many porps does this component needs and what function it would return.
* Consumer just think how we can use the props and create HTML structure for that.
* We need to balace the low level and high level props.

## Components , Instances and Elements
* We wrote set of code for particular purpose separately called components
* While we call that component inside another component, that place we call Component Instance <Header/>
* React elements are called Elements , eg:-> <div>,<p>

## How React works Internally
-- `RENDER PHASE`
* Triggering is happen by initial rendering or state change.(already our react application have component tree).
* before changing the updates in the UI, react creates **React Element Tree** that is **Virtual DOM**.
* At UI React showing one tree called **Fiber Tree**. This was created **only once** that is during `initial rendering`, after while it just update the **changing components only**.
* Once if any `updates` are occur in **component tree**, its parallel change is occuring in the `virtual DOM` also but with all the child components also, this depth is going till **bottom most child**.
* Then that new virtual DOM is Reconciled by Reconciler (Fiber) and happening Diffing.
-- `COMMIT PHASE`
* If any components added in the VDOM, respected component will add in the **Fiber tree** also, same thing for delete and update also.
* After everthing is updated in the `UI (Browser paint)`, this is not done by **React**.
* React does not touch the DOM, it only renders. React can be used on different platforms (hosts).
* Finally UI updation is done by **Renderers** (ReactDOM).

## Diffing
* Two Scenarios are Same Position and Different Elements and Same Position , same elements.
* If the same Component are in the same position in **DOM tree**, state will be `preserved`.
* If two components are in the 1st and 2nd position of DOM and have some state, if another component will be added in top of that, then those component will goes into 2nd and 3rd position. Hence theirs state also will get lost.
* So to achieve this we can use `Key prop`.
* Because of key prop those position will change but that `reference` won't get change, hence state will be **preseved**.

## Power of Key Props
* For every unique render if we want to change or preserve the state of component we could use `Key prop` to it, because if the key value change it will make it as a `new component instance`.

## Rendering Logics
* During the component rendering, **state declaration and HTML code** will render at first, after then if we click the event handler functions it will trigger the respected method.
* When the function communicates to the outside of the function or it will change something at outside of the function it called as `Side Effects`.
* **Pure Function** -> one function doesn't communicate to outside of the world and whenever given same input it will give the same output.

## Rules for Render Logic
* Components should be **Pure**, because whenever we give same input props it will give same output.
* Render Logics do not perform **API calls**.
* Do not **start timers**.
* Do not update props, if it done it would create **infinite loop**.
* We could use Side effects for Top level elements by **useEffects**.

## Batch Update
* If one function doing **multiple useState update**, then react won't render that much times.
* Instead it will Batch up all the updates and just render **single time only (Render + Commit)**. -> To enhance performance.
* In React 18+ versions -> during eventListener, setTimeOut, promise like all the cases, rendering is happening by Batching manner.
* But before React 18, except **eventHandlerFunctions** all other methods won't use Batching, hence if we want to achieve batching we would use **ReactDOM.flushSync()** -> but it couldn't needed now. 
* `Always remember to use CallBack function to update State`.

## CleanUp function
* This is a return function which executes after the `components unmount` or after the second execution to clear its `previous value`.
* It is helpful while **http requests** continuosly hitting, to break its connection we would use CleanUp functions.
* If one request to any **API and to disconnect** from then, achieve by Clean Up functions.
* There is one javascript concept is there called `Disclosures`, which means all the javascript functions `remember its state value even if it is unmounted`.

## Abort API Calls
* If our request to api is so frequent that is **one after another** we should `abort` all the previous calls, we could took only the last request.
```javascript
const controller = new AbortController();
// Pass one payload as {signal: controller.signal} to the api request
return function(){ // at clean up
    controller.abort();
}
```