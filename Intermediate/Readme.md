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