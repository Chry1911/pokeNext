# Poke Next

Welcome to Poke Next! This project is created with the latest version of Next.js and utilizes the [PokeAPI Promise v2 library](https://github.com/PokeAPI/pokedex-promise-v2) for efficient data fetching and caching.

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
for this project i have used: 
- https://ui.shadcn.com/ for layout components (only buttons and inputs are not shadcn libraries)
- https://commerce.nearform.com/open-source/victory/docs/victory-chart/ (used to create a chart in pikachu page with the pokemon stats)


## Features
The app use this repository: https://github.com/PokeAPI/pokedex-promise-v2 to interrogate API that use a caching (not working on localhost)
So i have changed the logic, using axios, and fetching directly to the api provided in the text.

## Deployment
The app is hosted on Vercel here: https://poke-next-tan.vercel.app/

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
The application use node 20.10.0 (the machine that runs the project is an ubuntu machine, with nvm installed)
The application run with Docker, so you don't need to install anything, only the first npm install.
To build image for docker run this command:
```
sudo docker buildx build -t pokenext-image path-where-project-is-located
```
In my case the project was on this path "/home/chrisdev/Scrivania/pokeNext"

After this run the second command:
```
 sudo docker run -p 3000:3000 pokenext-image
```

It launch it on port 3000.

## Notes
In the first point of the text, the application asks to do a search with minimum 3 characters and i have done this, but if i try to search "pik" or something else, the api returns 404.
The api wants the correct name of the pokemon to search.
I have created a simple cache, to awoid a new reasearch of the same pokemon. 
Deck can be only one, when created it will be saved into the Local Storage. If you add the 11 card, it replace the first one with the new one.
Menu shows 4 items:
- dashboard (it shows only a message)
- pokedex (search pokemon)
- deck (show your deck)
- pikachu (show pika page)
