import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './pages/Login';
import Landing from './pages/Landing';
import TeachList from './pages/TeacherList';
import TeachForm from './pages/TeacherForm';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeachList} />
            <Route path="/give-classes" component={TeachForm} />
        </BrowserRouter>
    )
}

export default Routes;