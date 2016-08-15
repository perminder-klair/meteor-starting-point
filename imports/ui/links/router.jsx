import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '../core/layouts/App.jsx';
import LinksListPage from './pages/LinksListPage.jsx';
import LinksCreatePage from './pages/LinksCreatePage.jsx';
import LinksViewPage from './pages/LinksViewPage.jsx';
import LinksUpdatePage from './pages/LinksUpdatePage.jsx';

FlowRouter.route('/links', {
    name: 'Links.list',
    action() {
        mount(App, {
            main: <LinksListPage/>
        });
    }
});

FlowRouter.route('/links/create', {
    name: 'Links.create',
    action() {
        mount(App, {
            main: <LinksCreatePage/>
        });
    }
});

FlowRouter.route('/link/update/:id/', {
    name: 'Links.update',
    action(params) {
        mount(App, {
            main: <LinksUpdatePage id={params.id}/>
        });
    }
});

FlowRouter.route('/link/:id/', {
    name: 'Links.view',
    action(params) {
        mount(App, {
            main: <LinksViewPage id={params.id}/>
        });
    }
});