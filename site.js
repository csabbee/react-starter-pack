import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin } from '@uirouter/react';

import Component from './component';
import configureStore from './src/reducers/configure-store';
const store = configureStore();

const helloState = {
    name: 'hello',
    url: '/hello',
    component: () => <h3>Hello World!</h3>
};

const componentState = {
    name: 'component',
    url: '/component',
    component: Component
};

render(
    <Provider store={store}>
        <UIRouter plugins={[pushStateLocationPlugin]} states={[helloState, componentState]}>
            <UISrefActive class="active">
                <UISref to="hello"><a>Hello</a></UISref>
            </UISrefActive>
            <UISrefActive class="active">
                <UISref to="component"><a>About</a></UISref>
            </UISrefActive>
            <AppContainer>
                <div>
                    aaa!!!!!!!!
                    <UIView />
                </div>
            </AppContainer>
        </UIRouter>
    </Provider>,
    document.getElementById('app')
);
