import React, { Component } from 'react';
import intl from 'react-intl-universal';

import UserDisplay from '../UserDisplay';
import RetrieveUser from '../RetrieveUser';

import './App.css';

// NOTE: Take care of internationalization, as well as possible whitelabeling.
// Only need to initialize intl once in app, as is singleton
const locales = {
  'en-US': require(`../../branding/${
    process.env.REACT_APP_BRAND
  }/i18n/en.json`),
};

class App extends Component {
  state = { initDone: false };

  componentDidMount() {
    this.loadLocales();
  }

  loadLocales = async () => {
    // init method will load CLDR locale data according to currentLocale
    // react-intl-universal is singleton, so you should init it only once in your app
    await intl.init({
      currentLocale: 'en-US',
      locales,
    });
    this.setState({ initDone: true });
  };

  render() {
    const { initDone } = this.state;
    return (
      initDone && (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">{intl.get('APP_TITLE')}</h1>
            <p>{intl.get('APP_TAGLINE')}</p>
          </header>
          <section>
            <RetrieveUser />
            <UserDisplay />
          </section>
        </div>
      )
    );
  }
}

export default App;
