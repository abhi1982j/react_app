import React from 'react';
import Page from '../pages/Page';
import AppContainer from '../containers/App';
import { title, meta, link } from './assets';

const App = (props) => {
    return (
        <Page title={title} meta={meta} link={link}>
            <AppContainer {...props} />
        </Page>
    )
};

export default App;
