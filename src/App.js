import React from 'react';
import style from './app.module.scss';
import BreadCrumbs from './components/blocks/Breadcrumbs/breadcrumbs'
import Sidebar from './components/blocks/sidebar/sidebar'
import Main from './components/pages/main/main'
import Users from './components/pages/users/users'
import BlackLists from './components/pages/blackLists/blackLists'
import CallCenter from './components/pages/callCenter/callCenter'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className="app">
        <BreadCrumbs />
        <div className={style.main}>
          <Sidebar />
          <div className={style.content}>
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/blackLists">
                <BlackLists />
              </Route>
              <Route path="/callCenter">
                <CallCenter />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
