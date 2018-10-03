# React Redux Service Example

This small example project (bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)) is meant to show a simple example of the usage of React with Redux, using centralized services for API calls, rather than the use of `props` for passing down the actions for updating the Redux store. This was inspired partially with working on a legacy Angular 1 application using a popular API framework called [Restangular](https://github.com/mgonto/restangular), while also maintaining a large React application .

## Pattern Description

Current common patterns for using React with Redux involve using something like [Redux Sagas](https://github.com/redux-saga/redux-saga), or [Redux Thunks](https://github.com/reduxjs/redux-thunk). This involves passing action creators (which may or may not involve API calls) as `props` to the respective components.

There's nothing inherently wrong with this pattern. However, this repo is meant to be a small POC for using centralized services for all API calls, which interact directly with the Redux store in order to update the current global state. The components still use `react-redux`'s `connect` HOC in order to map current Redux state to props, and the components update as the services update the store.

## Benefits for a Service-Based Interaction

There are a couple of reasons for using a pattern like this:

- Centralizing all API logic into services can allow for better API logic reuse across a single application, as well as across multiple client-side repos for an organization
- Reduce code duplication when multiple components might need similar API logic to run (if you have single `saga.js` files for each component)
- Easy testing of components through mocking of services
- Can also expedite the transition from an Angular 1 application to a React application, allowing for code reuse from old Angular `.service.js` files

## Services vs. Resources

Services are meant to contain the API logic for interacting with the backend of an application, as well as the mapping to whatever format your frontend application needs. The actual call is made via a `Resource`.

In this small repo's case, a resource is an `axios` instance mapped specifically to a REST endpoint. This resource (e.g., `User`) can then be called like so:

```javascript
User.get(`/${id}`);
```

This would map to a call to `BASE_URL/users/id`.

## i18n

This small repo also comes with localization built in. However, the way that I've approached implementing i18n is fairly different than most apps. Specifically, I've built in the ability to allow for whitelabeling the app, meaning that there could be multiple `messages` files for a given language. Through the use of an `env` var (`REACT_APP_BRAND`), you select which "brand" you'd like to use, which will affect which `messages` file should be loaded on app-load.

Due to this constraint, I chose to use Alibaba's [react-intl-universal](https://github.com/alibaba/react-intl-universal) package, rather than the more popular [react-intl](https://github.com/yahoo/react-intl). Specifically, `react-intl-universal` utilizes a simple Singleton design pattern for accessing the messages, rather than using a HOC, which allowed for easier selecting of different messages files, and provides the flexibility to access the messages outside of React Components. Also, the resulting code is cleaner, as we don't need to wrap all components in `react-intl`'s HOC, nor wrap our entire application in their `IntlProvider`.

## Contribution

This is meant to be a simple POC. If you have any comments or suggestions about iterating on this pattern, please feel free to open a GitHub issue.
