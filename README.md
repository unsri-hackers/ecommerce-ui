# Deuvox Frontend

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Netlify Status](https://api.netlify.com/api/v1/badges/54169673-d0bb-4311-857e-bdb5d9a18c4c/deploy-status)](https://app.netlify.com/sites/devoux/deploys)

## Getting Started :rocket:

### Installation :computer:

Start with cloning this repo on your local machine:

```
$ git clone https://github.com/unsri-hackers/ecommerce-ui.git
$ cd ecommerce-ui
```

To install and set up the library, run:

```
$ yarn install
```

### Usage :gear:

#### Serving the app :woman_cook:

```
$ yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### Mock Backend Response

To mock backend response, specify `REACT_APP_USE_MOCK_DATA` environment variable to `true`.

```
$ REACT_APP_USE_MOCK_DATA=true yarn start
```

Then, add/modify the mock response in `mock/data` folder.

#### Running the tests :scientist:

```
$ yarn test
```

#### Building a distribution version :building_construction:

```
$ yarn build
```

#### Run Storybook :book:

```
$ yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) to view it in the browser.
