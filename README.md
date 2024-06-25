# Rick and Morty API Frontend

Rick and Morty API frontend made in NextJS 14 and Tailwind. I could've perfectly used SASS or SCSS but tailwind is more than enough for this simple project.

Features:

- Browse character list
- See detailed information about a character, including it's appearing episodes
- Compare two characters

## Running from Source

First, clone the Git repository

```bash
git clone https://github.com/Stay1444/patterson-rick-and-morty
cd patterson-rick-and-morty
```

Download dependencies

```bash
npm install
```

Run in debug mode

```bash
npm run dev
```

## Running from Docker (recommended)

Clone the Git repository, as the image is not hosted in Dockerhub

```bash
git clone https://github.com/Stay1444/patterson-rick-and-morty
cd patterson-rick-and-morty
```

Build the docker image

```bash
docker build -t patterson-rick-and-morty .
```

Start the container

```bash
docker run --rm -p 3000:3000 patterson-rick-and-morty
```

That's it! The website will be accessible on `http://localhost:3000`

## Project structure

I kept the project structure fairly simple since this website is not gonna really scale that much.

- `/api` Things related to the Rick and Morty REST API
- `/app` The Next14 App Router
- `/components` General components, like `Card` or `CharacterCard`

## Key Components

The key components are

- `CharacterCard` that is the character card showed within `CharacterList`.
- `FullCharacter` that is the component used when viewing the full details of a character.
- `CharacterComparison` which is used when comparing two characters.

## Possible Improvements

- Better Styling
- Show search bar on mobile
- More detailed character comparison page
