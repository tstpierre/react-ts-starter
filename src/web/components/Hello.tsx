import * as React from 'react';

require('./Hello.less');

export interface IHelloProps {
    compiler: string;
    framework: string;
}

export class Hello extends React.Component<IHelloProps, undefined> {

    render (): React.ReactElement<IHelloProps> {
        
        return (
            <h1>Hello from {this.props.compiler} and {this.props.framework}!!</h1>
        );
    }
}