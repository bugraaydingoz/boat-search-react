# Boat Search

![Preview](./images/preview.gif)

Boat search is a single page react application where you can search boats. Server state is fetched from a GraphQL API and the UI state (filters and pagination) is handled by URL queries to keep the application simple.

## See in action

https://boat-search-react.vercel.app

## How to run

Inside the application folder, install `node_modules` and run the dev server:

```
yarn && yarn start
```

## Design

The application is designed by me and Figma was the tool of choice. You can see the raw design here:

[Figma prototype link](https://www.figma.com/proto/dvlY7FAml74qv1bw7TGmS2/Zizoo-Boat-Search?node-id=1%3A2&viewport=679%2C272%2C0.2750151753425598&scaling=scale-down-width&hide-ui=1)

## Technologies

- React (Hooks)
- React Router
- Apollo GraphQL Client
- Styled Components

## Folder Structure

I tried to keep the folder structures as simple as possible. Main folder here is `components` which is divided into smaller folders by feature. All components have their own file and they are exported from `index.js` to keep imports clean. Styled components are kept under a single file called `styles.js`

```
.
├── __tests__
│   ├── Filter.test.js
│   └── ...
├── components
│   ├── boat
│   │   ├── Boat.js
│   │   ├── index.js
│   │   └── styles.js
│   └── ...
├── grapql
│   └── boats.js
├── hooks
│   ├── filter.js
│   └── urlQuery.js
├── App.js
├── index.js
└── index.css
```

## TODOs

- [ ] Migrate to TypeScript
- [ ] Finish tests
- [ ] Validate input
- [ ] Design improvements
