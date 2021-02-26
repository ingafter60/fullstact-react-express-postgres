# BUILDING A BLOG USING FULLSTACT REACT AND POSGRESQL
https://www.udemy.com/course/react-fullstack-with-nodeexpress-psql-and-aws/learn/lecture/16146293#overview


## A. Initial setup

### 1. Initial commit

        new file:   .gitignore
        new file:   README.md

### 2. Creating React App 'client' 

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

### 3. Creating express app 'server' 

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

### 1. Deleting node_modules, routes, views and public folders

        modified:   .gitignore
        modified:   README.md
        deleted:    server/public/stylesheets/style.css
        deleted:    server/routes/index.js
        deleted:    server/routes/users.js
        deleted:    server/views/error.jade
        deleted:    server/views/index.jade
        deleted:    server/views/layout.jade

### 2. Creating new structures in the server

        modified:   README.md
        deleted:    server/app.js
        modified:   server/bin/www
        new file:   server/main/app.js