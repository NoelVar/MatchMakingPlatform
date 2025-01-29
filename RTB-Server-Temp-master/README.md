# Setup

## 01. Create .env file and create the env variables

## 02. Install dependencies

```bash
npm install
```

If npm is not allowed by the terminal run 
```
Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
```


## 03. Run server

```bash
npm run dev
```

## 04. Testing in Postman
Once logged in (have to do each time when logging in)
Copy the token
Goto postman tab's Autherization header
```
Type -> Bearer token
Token -> paste token
```

## 05. APIs
```
USER
GET: user/email/verify (useremail)
POST: user/profile (useremail, emailVeriCode)
POST: user/login (username, password)
DELETE: user/logout ()

POSTS (only for testing purposes - Only logged in user can get posts)
GET: posts ()

```
