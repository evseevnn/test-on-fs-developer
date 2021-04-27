# Test for FS Developer

This monorepo of test on FS Developer.

Details of task you can find [here](https://github.com/lokoArt/xanpool-full-stack-assignment).

## Quick start

For start project locally with docker you can use simple command at root of this monorepo.

```
docker-compose up
```

## Frontend

TypeScript + ReactJS + Next.js + React Bootstrap + GraphQL

I not wroted any tests for frontend because of cannot find time for that. Sorry for that =(

Long time I not worked with any project on ReactJS, In general I using Vue.js. So, some part of code may not follow latest best practices.

### How to run frontend part separately?

First what you need it's did import dependencies.
You can just run `yarn` at root folder of project.

Also, project useed library `dotenv` for setup environment variables on start. For starting project locally you may need rename file `.env.example` to `.env` at root folder of project.

For start frontend part locally for development you can need run npm script from frontend project directory.

```
yarn run dev
```

Project will available on http://localhost:3000

## Backend

TypeScript + ExpressJS + GraphQL + Jest

Backend part of this task also not perfect as I think.
But look like that good start. Actually, if I'll have time I will improve some part of code, like directory structure or tests running process.

### How to run backend part separately?

First what you need it's did import dependencies.
You can just run `yarn` at root folder of project.

Also, project useed library `dotenv` for setup environment variables on start. For starting project locally you may need rename file `.env.example` to `.env` at root folder of project.

For start project locally you need compile project by command

```
yarn run build-ts
```

or you can use this command for rebuild project in real time on file change

```
yarn run watch-ts
```

After build project you can start him by command

```
yarn run start
```

PLS, BE SURE WHAT DATABASE AVAILABLE IN THIS MOMENT.
