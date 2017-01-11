import * as React from 'react';

//import "./Hello.less";
//import css from 'Hello.less';
require('./Hello.less');

interface HelloProps {
    compiler: string;
    framework: string;
}

class Hello extends React.Component<HelloProps, undefined> {

    render (): React.ReactElement<HelloProps> {
        
        return (
            <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
        );
    }
}

export default Hello;