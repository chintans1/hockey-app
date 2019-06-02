# Hockey Application
###### NOTE: Work in progress
Using React Native to develop a cross platform mobile application for showing NHL game scores and statistics. This requires the Hockey API that I have developed [here](https://github.com/chintans1/hockey-app-api).

<p float="center">
<img src="https://user-images.githubusercontent.com/6274806/58765445-2d3f4380-8541-11e9-8cf8-01f970bfd272.png" width="49%">
<img src="https://user-images.githubusercontent.com/6274806/58765586-1fe78080-8564-11e9-8d66-fbcf0d98be08.png" width="49%">
</p>

## Local Development
### Requirements
 - [Node](https://nodejs.org/en/download/current/)
 - [Yarn](https://yarnpkg.com/en/docs/install)
 - [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli/)

### Getting Started
```sh
yarn install # you can also use: npm instal

cp .env.example .env # sets the environment variables

yarn start # you can also use: npm start
```
This will start the development server for you and then you may use the [Expo](https://expo.io/) client app on your iOS or Android device to open the application.

Make sure `API_BASE_URL` is properly set in `.env` so the mobile application is able to make requests to the API and fetch data to display.

## Plans
### Features implemented
- Show list of games with the game scores for the current date
  - Shows playoff series information as well if the game is a playoff game

### Upcoming
- Show the league standings in a new tabbed view
- Allow user to pick a date to see the games for that specific date
- Add detailed game information screen that users see when selecting a specific game from the games list
