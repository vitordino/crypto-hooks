# wip: crypto-hooks

this repo is just a playground to explore the new [hooks api](https://reactjs.org/docs/hooks-intro.html). This feature is still on beta and may change untill final release, so please don't use it on production (at least that's what they said, nobody seems to care much :fire:)

the app itself is pretty simple, but may be already breaking some [rules](https://reactjs.org/docs/hooks-rules.html), no efforts were made to keep it understandable, feature-rich, stable or fast (this may change in the future).


## Development Guide
```bash
# install project dependencies
$ yarn

# development server
$ yarn dev # starts dev server

# build static site
$ yarn build # outputs to ./build directory
```

## Tech Stack
> This project started with [create-react-app](https://github.com/facebook/create-react-app)

#### Front-End Packages

| name | license | description |
|:-----|:-------:|:------------|
| [`react`](https://reactjs.org/) | [`MIT`](https://api.github.com/repos/facebook/react/license) | declarative, component-based, functional approach to user interfaces |
| [`emotion`](https://emotion.sh/) | [`MIT`](https://github.com/emotion-js/emotion/blob/master/LICENSE) | style as a function of state |
| [`victory`](https://emotion.sh/) | [`MIT`](https://github.com/FormidableLabs/victory/blob/master/LICENSE.txt) | A collection of composable React components for building interactive data visualizations |



#### System Dependencies
| name   | min. version |
|:-------|-------------:|
| `node` |      `8.0.0` |
| `yarn` |      `1.0.0` |
