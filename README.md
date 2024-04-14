# Poke Next

Welcome to Poke Next! This project is created with the latest version of Next.js and it uses the [PokeAPI](https://pokeapi.co/) for fetching pokemon datas.

## Table of Contents

- [Getting Started](#getting-started)
- [Used Components](#used-components)
- [Deployment](#deployment)
- [Login](#login)
- [Docker](#docker)
- [Notes](#notes)

## Getting Started

To run the project locally, follow these steps:

1. Make sure you have Node.js and npm installed on your machine.
2. Clone this repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run the following command to install dependencies:

```bash
npm install
```

## Run the project
When the dependencies are installed, you can run the project by using:
```
npm run dev
```

## Used Components
for this project I have used: 
- https://ui.shadcn.com/ for layout components (only buttons and inputs are not shadcn libraries)
- https://commerce.nearform.com/open-source/victory/docs/victory-chart/ (used to create a chart in pikachu's page with the pokemons stats)


## Features
At first the app would have used this repository: https://github.com/PokeAPI/pokedex-promise-v2 to interrogate API that use a caching, but it didn't work on localhost (SSL problems)
So I have changed the approach, using axios, and fetching directly to the api provided in the text.

## Deployment
The app is hosted on Vercel, here: https://poke-next-tan.vercel.app/

## Login
Username:
```
ash
```
Password:
```
pikachu
```

## Docker
Info for run the application on docker.
The application uses node version 20.10.0 (the machine running the project is an ubuntu machine, with nvm installed)
The application runs with Docker, so is not necessary to install other dependencies, but only the first npm install command.
To build image for docker run this command:
```
sudo docker buildx build -t pokenext-image path-where-project-is-located
```
In my case the project was on this path "/home/chrisdev/Scrivania/pokeNext"

After this run the second command:
```
 sudo docker run -p 3000:3000 pokenext-image
```

It launches it on port 3000.

## Notes
In the point "1 - Search Pokemon" of the exercise , the application asks to do a search with at least minimum 3 characters. Trying do to this function for example  (to search "pik" or "pika" for pikachu), the api returns 404 error (NOT_FOUND). Testing the api on postman and online, it seems api needs the correct and fullname of the pokemon for working.  
I have created a simple cache, to avoid a new research of the same pokemon. 
Deck can be only one, when created, it will be saved into the Local Storage. If you add the 11 card, it replaces the first one with the new one.
Menu shows 4 items:
- dashboard (it shows only a message)
- pokedex (search pokemon)
- deck (show your deck)
- pikachu (show pika page)

