import * as React from 'react';
import { RegisterController } from '@mySpot/controller';
import { RegisterView } from './ui/RegisterView';

export class RegisterConnector extends React.PureComponent {
    render() {
        return (
            <RegisterController>
                {({ submit }: { submit: any }) => <RegisterView submit={submit} />}
            </RegisterController>
        );
    }
}