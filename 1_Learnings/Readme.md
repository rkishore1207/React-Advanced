* To install Package.json - `npm init -y`
* To install Node Modules with Jest - `npm install --save-dev jest`
* For Fake User API - `npm i @faker-js/faker`

* To execute every JavaScript file we need to do `npm init --y`
* For Typescript, we have to add extra command that is `tsc --init`
* Then the **run command (start)** in the package.json file should be `tsc && node .dist/index.js`,
* On the **tsc --init** execution, that time **tsconfig.json** file will automatically create.
* We have to configure the output directory on the tsconfig.json as `./dist`.