# Epress

ExpressJS boilerplate (modified and created by myself)

# Demo

[On Heroku](https://aabbbccccc.herokuapp.com/)

# Instruction before running / start this project

1. Before installing, please specify database url in .env file (example env file on .env.example)
2. Install all required things, use install.bat (double click it like executable)
    - OR you can just run these command below (sequentially)
    - `npm i --production=false`
    - `npx prisma migrate reset --schema=./models/schema.prisma -f`
    - `npx prisma db pull --schema=./models/schema.prisma`
    - `npx prisma generate --schema=./models/schema.prisma`
    - Installation will take a while, so please be patient.
    - Make sure Installation is successful or done properly.
3. Then you can run with run.bat (double click it like executable), OR you can just do `npm start`

# Instruction before doing unit test
1. Install all required things, follow the instruction above
2. Open deploy-migration.bat to reset all data inside database
3. Open unit-test.bat (double click it like executable)
    - OR you can just run these command below
    - `npx jest --runTestsByPath=tests`
4. Unit test will take a while, so please be patient.

# Instruction before using gitlab CI/CD
1. Go to gitlab project settings -> CI/CD
2. Expand variables -> Add variables, and add these variables (key=value)
    - DATABASE_URL=postgresql://randomuser:randompassword@postgres:5432/mydb?schema=public
    - HEROKU_API_KEY=REPLACE_WITH_YOUR_KEY
    - HEROKU_APP_NAME=REPLACE_WITH_YOUR_APP_NAME
    - POSTGRES_DB=mydb
    - POSTGRES_USER=randomuser
    - POSTGRES_PASSWORD=randompassword
3. Done, you can now push your code to gitlab and CI/CD runner will run without any problem

# Instruction before using github CI/CD
1. Go to github repo settings -> Secrets -> Actions
2. Add these variables (key=value)
    - DATABASE_URL=postgresql://randomuser:randompassword@localhost:5432/mydb?schema=public
    - HEROKU_API_KEY=REPLACE_WITH_YOUR_KEY
    - HEROKU_APP_NAME=REPLACE_WITH_YOUR_APP_NAME
    - HEROKU_EMAIL=REPLACE_WITH_YOUR_EMAIL
    - POSTGRES_DB=mydb
    - POSTGRES_USER=randomuser
    - POSTGRES_PASSWORD=randompassword
3. Done, you can now push your code to gitlab and CI/CD runner will run without any problem


# Design Pattern

MVC with Router and auto-generated Models

# Folder Structure

```bash
└── root
    ├── bin/
    ├── controllers/
    │   ├── API/
    │   └── web/
    ├── middlewares/
    │   └── index.js
    ├── models/
    │   └── prisma.schema
    ├── public/
    │   ├── css/
    │   ├── js/
    │   └── images/
    ├── routes/
    │   ├── api.js
    │   └── index.js
    └── views/
```

## Folder Structure Explanation

- bin:
  > contains all the executables (you don't need to touch this folder)
- controllers:
  > contains all the controllers

  > separated by API and web
- middlewares:
  > contains all the middlewares

  > register your middlewares here inside function in index.js
- models:
  > contains all the models (you don't need to touch this folder, but you can add your models here)

  > is automatically generated by prisma (see explanation below)
- public:
  > contains all the static files

  > these files are served by the server
- routes:
  > contains all the routes

  > register your API routes in api.js

  > register your web routes in web.js
- views:
  > contains all the views

## Prisma auto-generated models explanation

- prisma automatically generates a model for each table in your database when you run `npx prisma pull`
- the model is automatically generated by prisma (depends on your database)
- generated models are stored inside prisma.schema in models folder
- more https://www.prisma.io/docs/getting-started
