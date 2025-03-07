# Securenote 3

An experimental implementation of Securenote in NextJS. 

## Development process

I made initial research on NextJS by talking to a GPT about it and about the NextJS assignement. I asked a lot of questions about authentication, persistence, ORMs and authorisation. I ended up with the following technology stack:

- NextJS for both frontend, backend and RESTful API.
- NextAuthJS for authentication and authorisation. 
- SQLite for database.
- Prisma for ORM.
- Typescript (bvadr) as language. 

## Project plan 

I wanted to find a suited boilerplate app, but unfortunately, I could not find a good match. 

So I am manually bootstrapping the project instead.

1. [Beggining with a Next Auth JS](https://next-auth.js.org/getting-started/example)
2. [Setting up Prism with SQLite](https://www.prisma.io/docs/guides/nextjs)
3. [Building the API part](https://nextjs.org/blog/building-apis-with-nextjs)
4. Adding the UI
5. Making ends meet 

## Software architecture

![alt text](docs/Architecture.png)

Here is the current draft for the architecture. ([Link](https://online.visual-paradigm.com/app/diagrams/#diagram:proj=0&id=3&type=ArchiMateDiagram&width=11&height=8.5&unit=inch))