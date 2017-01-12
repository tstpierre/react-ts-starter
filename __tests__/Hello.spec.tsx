import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';

import { Hello, IHelloProps } from '../src/components/Hello';

jest.dontMock('../src/components/Hello.tsx');

describe('Hello', () => {

    it('props should contain TypeScript and React', () => {
        var expectedFramework = 'React';
        var expectedCompiler = 'TypeScript';

        let hello = TestUtils.renderIntoDocument(
            <Hello framework={expectedFramework} compiler={expectedCompiler} />
        ) as React.Component<IHelloProps, any>;

        expect(hello.props.framework).toBe(expectedFramework);
        expect(hello.props.compiler).toBe(expectedCompiler);
    });
});