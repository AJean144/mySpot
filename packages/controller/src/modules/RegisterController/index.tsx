import * as React from 'react'
import { graphql, ChildMutateProps } from 'react-apollo'
import { registerMutation } from '../../queries/registerMutation'
import { RegisterMutation, RegisterMutationVariables } from './RegisterMutation';

interface Props {
    children: (data: { submit: (values: RegisterMutationVariables) => Promise<null> }) => JSX.Element | null;
    mutate: any;
}

class Controller extends React.PureComponent<ChildMutateProps<Props, RegisterMutation, RegisterMutationVariables>> {
    constructor(props: Props) {
        super(props)
    }
    submit = async (values: RegisterMutationVariables) => {
        const res = await this.props.mutate({
            variables: values
        })
        console.log({ res })
        return null;
    }

    render() {
        return (
            this.props.children({ submit: this.submit })
        );
    }
}

export const RegisterController = graphql<Props, RegisterMutation, RegisterMutationVariables>(registerMutation)(Controller);