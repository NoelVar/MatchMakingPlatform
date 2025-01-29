# 1. Install dependencies - Frontend

## 1.1 First navigate to the front end folder
```bash
    cd frontend
```

## 1.2 Then install dependencies
```bash
    npm install
```

# 2. Start the front end

## 2.1 Make sure the backend is running (see README.md for backend)

## 2.2 Make sure you are in the frontend directory (See Section 1.1)
```bash
    npm start
```

# 3. Routes

The base URL Root is: *http://localhost:3000*

The following routes are available at the moment:
    - **'/'** *=> This route takes the user to the Home page where they can logout. The route is only available if the user is logged in, otherwise the user is redirected to '/login'*
    - **'/login'** *=> This route take the user to the login page where you can log in. This page isn't restricted.*
    - **'/signup'** *=> The route take the user to the register page (currently just a template and not funtional)*
    - **'/verify'** *=> This route is to verify the users email address, while the page is functional and send the email verification code, it is not finished yet*
    - **/profile** *=> Takes the user to a page with a form and input fields (currently not operational), additionally this page is restricted to logged in users only*
    - **/ANYTHING** *=> If the user enters any Route that doesn't exists it will lead them to a 404 NOT FOUND page*
