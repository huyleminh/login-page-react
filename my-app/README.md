# Login Decentralization

## Overview: 
    This project is about how we can decentralize an user account when he/she login to web page.
## What’s Included?
---
* Reactjs: 
    Learn more at [https://reactjs.org](https://reactjs.org/)
* React Router: Use Browser Router, Route (define a new route: *private route*), NavLink, Switch
    Learn more at [https://reactrouter.com/web/guides/quick-start](https://reactrouter.com/web/guides/quick-start)
* Typescript template
    Learn more at [https://www.typescriptlang.org](https://www.typescriptlang.org/)
* ES6
    Learn more at [http://es6-features.org](http://es6-features.org/#Constants)

## File structures
---
* **Let's see what we have in this project:**
I will represent main folder and main file only, to read more details, please read the description below the map.
```
my-app
    |-- public
    |-- scr
        |-- assets
        |-- BaseInterfaces
        |-- Data
        |-- Errors
        |-- Images
        |-- Layouts
        |-- App.tsx
        |-- App.test.tsx
        |-- index.tsx
        |-- logo.svg
        |-- NavBar.tsx
        |-- PrivateRoute.tsx
        |-- react-app-env.d.ts
        |-- serviceWorker.ts
    |-- .gitignore
    |-- package.json
    |-- package-lock.json
    |-- README.md
    |--tsconfig.json
```
* **File's description:**
    * **assets**: Stores .css files.
    * **BaseInterface**: Stores file *.ts* that defines base interface for the program.
    * **Data:** Stores your program data.
    * **Errors:** Defines 403 and 404 layouts.
    * **Images:** You can store any type of images in this folder in order to use in .css files.
    * **Layouts:** Stores components that render main pages
    * **NavBar.tsx:** Defines a smart navigation bar. Corresponding to a access role, it will render a navigation bar suitably.
    * **PrivateRoute.tsx:** Defines a wrapper for <Route> that redirects to the login
screen if you're not yet authenticated, if you don't have any permission to access some pages you will be redirect to forbidden page. 
* **Changing structure:** You can reorganize this structure in any ways you like.

## Usage 
---
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
---
If you have any report or something new that can help to develope more feature for the app, please contact me via this email: leminhhuy.hcmus@gmail.com
Thanks for using and reporting this project.
