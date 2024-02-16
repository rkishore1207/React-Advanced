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