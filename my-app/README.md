# Login Decentralization

## Overview: 
    This project is about how we can decentralize an user account when he/she login to web page.
## Details: 
* First we have a matrix about decentralization like this: 

    | Role | Member | / | /manager | /manager/add-member | /manager/delete-member | /information| /information/view-notification  | /information/add-notification | /products | /products/view-products | products/add-new|
    |-----------|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|
    | admin | a-1 | X | X | X | X | X | X | X | X | X | X |
    |  | a-2 | X | X | X | X | X | X | X | X | X | X |
    | user | u-1 | X |||| X | X || X | X | X |
    || u-2 | X |||| X | X || X | X | X |
    || u-3 | X |||| X | X || X | X | X |
    | guest | g-1 | X ||||||| X | X ||
    || g-2 | X ||||||| X | X ||
* About the matrix above: 
    * The first column is a list of all role can access the web.
    * The second column is a list of all member's ids. 
    * Each cells on first row from the third cell is a page's path, each path represents for a page.
    * "X" is mark that a user can access to a path name, empty cells are not.
    * If you login by "admin", you can access all paths.
    * As a member with an id and a role which is not "admin", you can access to all pages thats are mark "X", if not you will be redirected to "/403" is forbidden page (changing URL to access to protected pages is denied).

## What's used to decentralize? 
* Decentralization is executed after navigation bar is rendered.
* Navigation bar's data is a tree data. 
* Class NavBar in **NavBar.tsx** has private attribute is path. "path" is used to store paths which are taken from tree data while rendering NavBar using recursion. These are valid paths that a user can access to a page.
* When we change page by changing URL's path name or click on the navigation bar's cells, we'll have a path name, it can be call by
```js
this.props.location.pathname
```
* After rendering, `componentDidMount` is called, it will check that the current path name is valid or not, if not we will be redirect to "/403". 
```js
componentDidMount() {
    if (!this.path.includes(this.props.location.pathname))
        this.props.history.push("/403")
    }
``` 

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
* Open your project folder, install node_modules before run this app using `npm install`
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
