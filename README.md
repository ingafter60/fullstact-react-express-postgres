# BUILDING A BLOG USING FULLSTACT REACT AND POSGRESQL

The course: https://www.udemy.com/course/react-fullstack-with-nodeexpress-psql-and-aws/learn/lecture/16146293#overview

Github: https://github.com/ingafter60/fullstact-react-express-postgres


## A. Initial setup

### A.1.1 Initial commit

        new file:   .gitignore
        new file:   README.md

### A.2.2 Creating React App 'client' 

		E:\2021\Fullstack\full-stack-react\client
		λ npx create-react-app client

		Delete:
		.gitignore
		README.md
		.git

        modified:   .gitignore
        modified:   README.md
        new file:   client/package.json
        new file:   client/public/favicon.ico
        new file:   client/public/index.html
        new file:   client/public/logo192.png
        new file:   client/public/logo512.png
        new file:   client/public/manifest.json
        new file:   client/public/robots.txt
        new file:   client/src/App.css
        new file:   client/src/App.js
        new file:   client/src/App.test.js
        new file:   client/src/index.css
        new file:   client/src/index.js
        new file:   client/src/logo.svg
        new file:   client/src/reportWebVitals.js
        new file:   client/src/setupTests.js
        new file:   client/yarn.lock

### A.3.3 Creating express app 'server' 

		> install express globally
		E:\2021\Fullstack\full-stack-react\server
		λ express

        modified:   .gitignore
        modified:   README.md
        new file:   server/app.js
        new file:   server/bin/www
        new file:   server/package-lock.json
        new file:   server/package.json
        new file:   server/public/stylesheets/style.css
        new file:   server/routes/index.js
        new file:   server/routes/users.js
        new file:   server/views/error.jade
        new file:   server/views/index.jade
        new file:   server/views/layout.jade		

## B. Cleaning Up the setup

### B.1.4 Deleting node_modules, routes, views and public folders

        modified:   .gitignore
        modified:   README.md
        deleted:    server/public/stylesheets/style.css
        deleted:    server/routes/index.js
        deleted:    server/routes/users.js
        deleted:    server/views/error.jade
        deleted:    server/views/index.jade
        deleted:    server/views/layout.jade

### B.2.5 Creating new structures in the server

        modified:   README.md
        deleted:    server/app.js
        modified:   server/bin/www
        new file:   server/main/app.js


## C. Making running the fullstact-react app


### C.1.6 Node and npm

		PASS


### C.2.7 (not found http://localhost:3000/hai) Setting up a proxy and making API requests

        new file:   client/package-lock.json
        modified:   client/package.json
        modified:   client/src/App.js
        modified:   server/main/app.js
        new file:   server/main/routes.js
        modified:   server/package-lock.json
        modified:   server/package.json

### C.3.8 Replacing package.json file by the same from the source (tutorial)

        modified:   README.md
        modified:   client/package-lock.json
        modified:   client/package.json
        modified:   client/src/App.js
        modified:   client/src/index.js
        modified:   server/main/routes.js

### C.4.9 Boilerplating Fullstack React-Express

        modified:   README.md
        modified:   server/main/routes.js

### C.5.10 House keeping and gihub repository

        modified:   .gitignore
        modified:   README.md

### C.5.11 Modify README.md 

        modified:   README.md

### C.5.12 Modify README.md 

        modified:   README.md



### 11. Making api requests with axios


### 12. Axios vs fetch


### 13. Axios vs react-router vs express router


### 14. How CORS works


### 15. Why not use an ORM like sequelize


### 16. Why not use Redux Form        