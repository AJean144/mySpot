import * as React from 'react'
import { graphql, ChildMutateProps } from 'react-apollo'
import { registerMutation } from '../../queries/registerMutation'

interface Props {
    children: (data: { submit: (values: any) => Promise<null> }) => JSX.Element | null
}

class Controller extends React.PureComponent<ChildMutateProps<Props, any, any>> {
    constructor(props: any) {
        super(props)
    }

    submit = async (values: any) => {
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

export const RegisterController = graphql(registerMutation)(Controller);