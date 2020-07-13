# Login Decentralization

## Overview: 
    This project is about how we can decentralize an user account when he/she login to web page.
## Details: 
* First we have a matrix about decentralization like this: 

    |  | / | /manager | /information | /products |
    |-----------|:-----------:|:-----------:|:-----------:|:-----------:|
    | admin | X | X | X | X |
    | user | X |  | X | X |
    | guest | X |  |  | X |
* About the matrix above: 
    * The first column is a list of all role can access the web.
    * The first row is all paths, each path represents for a page.
    * "X" is mark that a role can access to a path name, empty cells are not.
    * If you login by "admin", you can access all paths.
    * As "user", if you try to access to "/manager" by changing url, you will be redirected to "/403" (forbidden page)
    * As "guest", if you try to access to "/manager" or "/information" by changing url, you will be redirected to "/403" (forbidden page)

## What's used to decentralize? 
* I use **Route** and **PrivateRoute** to do that, take a look in App.tsx.
    * **Route** is used to render Login, PageNotFound and Forbidden components.
    * **PrivateRoute** is used to render DashBoard, Manager, Information and Products components.
* About **Route** : 
    * A component that is perhaps the most basic and important component of React Router.
    * Used to render UI of a component.
    * Props: path, component. 
    * When the current location match the input path, it'll render the children component (component props). So it can render componet that any user as any role can access to public page.
* About **PrivateRoute**: 
    * Defined in PrivateRoute.tsx .
    * A component which is designed as a function component has basic feature as same as **Route** is render children component when current location match the path. And its props are the same as **Route**. 
    * Advance feature: Can authenticate that user is logged in or not. If they are not logged in, so redirect to /login. If they are logged in, check that if current role is valid, render the children component. If not, it'll redirect to /403 (render Forbidden component).
    * All above features are defined in render funtion of **Route**, this function is included if...else statement to check all requirements.
* Though **PrivateRoute** is as same as **Route**,it's more convenient than **Route** that we can redefined it to render a children component in some requirement.

## What’s Included?
* Reactjs: 
    Learn more at [https://reactjs.org](https://reactjs.org/)
* React Router: Use Browser Router, Route (define a new route: *private route*), NavLink, Switch
    Learn more at [https://reactrouter.com/web/guides/quick-start](https://reactrouter.com/web/guides/quick-start)
* Typescript template
    Learn more at [https://www.typescriptlang.org](https://www.typescriptlang.org/)
* ES6
    Learn more at [http://es6-features.org](http://es6-features.org/#Constants)

## Usage 

#### Run app
* Open your project folder, install node_modules before run this app using `npm i`
*  `cd my-app`
* `npm start`
    - Runs the app in the development mode.
    - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    - The page will reload if you make edits.
    - You will also see any lint errors in the console.
#### Use app
* Login to web page, you can open file data.json in Data to see all accounts can use this web.
* If you login successfully, you wil be redirect exact to Home Page.
* All accounts can access to **Home Page**, **Products page**, there are some page that you can not access if your key role not correct and they are not rendered on the navigation bar. If you try to access those pages by changing the URL, you will be redirect to **Forbidden page!!!**

## Contributing

If you have any report or something new that can help to develope more feature for the app, please contact me via this email: leminhhuy.hcmus@gmail.com
Thanks for using and reporting this project.
