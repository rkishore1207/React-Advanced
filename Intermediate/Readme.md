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