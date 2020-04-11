import React from 'react';
import MenuList from './menuList/menuList';
import QuizSettings from './quizPages/quizSettings/quizSettings';
import Conditions from './quizPages/conditions'
import Logic from './quizPages/logic'
import Parameters from './quizPages/parameters'
import Questions from './quizPages/questions'
import style from './main.module.scss'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Main = () => {
    return (
        <Router>
            <div>
                <MenuList classes={style.quizNav}></MenuList>
                <Switch>
                    <Route exact path='/'>
                        <p>Добавить опрос</p>
                        <QuizSettings></QuizSettings>
                    </Route>
                    <Route path='/main/parameters'>
                        <Parameters></Parameters>
                    </Route>
                    <Route exact path='/main/questions'>
                        <Questions></Questions>
                    </Route>
                    <Route exact path='/main/logic'>
                        <Logic></Logic>
                    </Route>
                    <Route exact path='/main/conditions'>
                        <Conditions></Conditions>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Main;