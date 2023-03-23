MERN List Project

Learning how to integrate multiple techs and libraries to fetch data from MongoDB and render it.

### Reference Text

#### package.json scripts

```
  "scripts": {
    "dev:server": "tsnd src/server/server.ts",
    "dev:bundler": "webpack -w --mode=development"
  },
```

#### package.json dependencies

```
  "dependencies": {
    "axios": "^1.3.4",
    "cors": "^2.8.5",
    "ejs": "^3.1.8",
    "express": "^4.18.2",
    "mongodb": "^5.1.0",
    "mongoose": "^7.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "ts-loader": "^9.4.2",
    "typescript": "^4.9.5",
    "webpack": "^5.75.0",
    "webpack-cli": "^5.0.1"
  },
  "devDependencies": {
    "@typescript-eslint/parser": "^5.54.1",
    "eslint": "^8.34.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "prettier": "^2.8.4",
    "ts-node-dev": "^2.0.0"
  }
```

#### Mock Data

```json
{
  "contests": [
    {
      "id": "cognitive-building-bricks",
      "categoryName": "Business/Company",
      "contestName": "Cognitive Building Bricks"
    },
    {
      "id": "educating-people-about-sustainable-food-production",
      "categoryName": "Magazine/Newsletter",
      "contestName": "Educating people about sustainable food production"
    },
    {
      "id": "big-data-analytics-for-cash-circulation",
      "categoryName": "Software Component",
      "contestName": "Big Data Analytics for Cash Circulation"
    },
    {
      "id": "free-programming-books",
      "categoryName": "Website",
      "contestName": "Free programming books"
    }
  ]
}
```

```json
{
  "dbzs": [
    {
    "id": 1,
    "name": "Goku",
    "race": "Saiyan",
    "numOfDeaths": 5,
    "rank": "GOAT"
  },
  {
    "id": 2,
    "name": "Vegeta",
    "race": "Saiyan",
    "numOfDeaths": 3,
    "rank": "Total Badass"
  },
  {
    "id": 3,
    "name": "Gohan",
    "race": "Saiyan/Human",
    "numOfDeaths": 2,
    "rank": "Retired Four-Eyes",
  },
  {
    "id": 4,
    "name": "Picolo",
    "race": "Namekian",
    "numOfDeaths": 5,
    "rank": "Mean Green",
  },
  {
    "id": 5,
    "name": "Krillin",
    "race": "Human",
    "numOfDeaths": 3,
    "rank": "Ashtray",
  },
  {
    "id": 6,
    "name": "Lord Beerus",
    "race": "God",
    "numOfDeaths": 0,
    "rank": "Destroyer",
  }
  ]
```
