import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/footer/Footer';
import GeneralServices from './services/generalService.json'
import { LangType } from './services/languages/LangType';
import NavMain from './components/nav/NavMain';
import NoMatch from './components/nomatch/NoMatch';
import Home from './components/home/Home';


export function changeLanguage(newLang: any) {
  switch (newLang) {
    case GeneralServices.langPt: {
      return require('./services/languages/pt.json');
    }
    case GeneralServices.langUk: {
      return require('./services/languages/uk.json');
    }
    default: {
      return require('./services/languages/uk.json');
    }
  }
}

interface IProps {

}

export const App: React.FC<IProps> = (props) => {

  const [language, setLanguage] = useState<LangType>(require('./services/languages/uk.json'));

  const cbSetLanguageFunction = (newLanguage: any) => {
    setLanguage(changeLanguage(newLanguage));
  }


  return (
    <React.Fragment>
      <NavMain appLanguage={language} cbSetLanguage={cbSetLanguageFunction} />
      <main>
        <Switch>
          <Route path={GeneralServices.homePath} render={(props) => <Home appLanguage={language} {...props} />} />
        </Switch>
      </main>
      <Footer appLanguage={language}/>
    </React.Fragment>
  );
}

export default App;
