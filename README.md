# UdaciCards Project
This project was developed using [Create React Native App ](https://github.com/react-community/create-react-native-app).
The goal of this project is to build a flashcards mobile native app. Users will be able to create decks, add cards to a deck, and to take quizzes using their decks.

## TL;DR

To launch the project on your machine:

* make sure you have installed node8+
* install expo using `npm install -g expo-cli`
* install all project dependencies with `npm install`
* start the api server and the development server with `npm start`

This project was tested for **iOS only**.

## What You're Getting
```bash
├── README.md - This file.
├── app.json # app metadata
├── babel.config.js
├── package.json # npm package manager file.
└── src
    ├── App.js # This is the root of the app.
    ├── actions # Redux actions generators.
    │   ├── card.js
    │   ├── deck.js
    │   └── shared.js
    ├── components # Components used by app.
    |   └── Quiz
    |   |   ├── index.js
    |   |   ├── Question.js
    |   |   └── Summary.js
    │   ├── Card.js
    │   ├── DeckInfo.js
    │   ├── DeckItem.js
    │   ├── DeckList.js
    │   ├── Navigator.js .
    │   ├── NewCard.js
    │   └── NewDeck.js
    ├── reducers # Redux reducers.
    │   ├── cards.js
    │   ├── decks.js
    │   ├── index.js
    │   └── loading.js
    ├── store # Redux store.
    │   └── index.js
    └── utils # Helper methods to be use along the app.
        ├── helpers.js # Useful methods that are used by the app.
        └── storage.js # Contains methods for saving and updating decks data.

```

## Contributing

This repository is maintained by Eron Castro, and was developed for the second assignment of Udacity React Nanodegree. Contributions will not likely be accepted.