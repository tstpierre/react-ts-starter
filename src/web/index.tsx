import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Hello from './components/Hello';

require('./sharedLess/global.less');

class App extends React.Component<undefined, undefined> {

    render(): React.ReactElement<undefined> {
        return (
            <div>
                <Hello framework="React" compiler="TypeScript" />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);