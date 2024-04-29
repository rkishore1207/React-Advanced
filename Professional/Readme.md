# Proffesional

> npm i @types/react-router-dom

* We could not use all **hooks** inside *regular function*, only we can use in the `components` only.
* So, for **useParams** there is inbuilt `request` is there and for **useNavigate** there is inbuilt `redirect` function are there.
* At posting to the server, 1st request hit at the respected `action` block and call the api.
* And at the `method` property only takes **POST**,**PATCH** and **PUT** not **GET**.

## For TailWind CSS SetUp
> npm install -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p

```javascript
    //added this lines at content in tailwind.config.js
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    //add this lines to the index.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

> npm install -D prettier prettier-plugin-tailwindcss
```javascript
    //Create prettier.config.cjs file
    //added the below piece of code
    module.exports = {
        "plugins": [require("prettier-plugin-tailwindcss")],
        singleQuote: true
    }
```

> Install **tailwindIntellisense** extension too.

### TailWind
* If we want to use something that is not covered by **Tailwind**, then with the help of `Arbitrary` values, we could achieve that.
```javascript
className="text-xl" => className="text-[4rem]" //Escape Hatch or Arbitrary values
```

> We could not use `Async` funtions in Redux, but with `thunk` we could able to do this, it acts as a **middleware**.