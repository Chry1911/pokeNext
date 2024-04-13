# Poke Next

Welcome to Poke Next! This project is created with the latest version of Next.js and utilizes the [PokeAPI Promise v2 library](https://github.com/PokeAPI/pokedex-promise-v2) for efficient data fetching and caching.

## Table of Contents

- [Getting Started](#getting-started)
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
Info for run the application on docker

## Notes
In the first point of the text, the application asks to do a search with minimum 3 characters and i have done this, but if i try to search "pik" or something else, the api returns 404.
The api wants the correct name of the pokemon to search.
I have created a simple cache, to evitate a new reasearch of the same pokemon. 
Deck can be only one, when created it will be saved into the Local Storage. If you add the 11 card, it replace the first one with the new one.
Menu shows 4 items:
- dashboard (it shows only a message)
- pokedex (search pokemon)
- deck (show your deck)
- pikachu (show pika page)

there is only a little problem on mobile, the menu in portrait mode disappear, if you use the website in landscape all is ok.