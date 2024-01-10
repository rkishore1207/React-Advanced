# Fundamentals of React
## Why we don't go for other frameworks?
* Initially web was developed by complete javascript with j query library.
* In that, there arises two big problems.
    1. Requires lots of DOM manipulation and traversing.
    2. Data(state) is usally stored in the DOM and very hard to use and create lot of bugs.
## Why do frontend frameworks exists?
* Keeping a user interface to **sync with the data** is realy hard and requires lot of work.
## VS cose Extensions
1. **Prettier**
* To make our code looks good, give correct intendations, remove extra spaces or lines.
2. **EsLint**
* Check all the errors and indicate instantially.
3. **Mateial Icons** -> for giving good looking icons for the folders in the source tab.
-----
* To make this work, in the settings type **default formatter** and select `prettier`.
* Type **eslint run** and select `onSave`. 
## Creating new react app
* `npx create-react-app` is the old command to create new react app and it doesn't have updated packages.
* So, we go for `vite` it would include all the updated packages and ask the recommandation for some of the extensions such as ESlint, prettier, etc.
* And also HMR and bundling process are also fast when compared with the old command procedure.
* Hence, it recommanded to use **VITE** for real time application and **create-react-app** for tutorials or learnings.