import * as React from 'react'
import * as AntD from 'antd'
import { withFormik, FormikErrors, FormikProps, Field, Form } from 'formik'
import { validUserSchema } from '@mySpot/common'
import { InputField } from '../../shared/InputField'

const { Form: AntForm, Icon, Button, Checkbox } = AntD;
const FormItem = AntForm.Item;

interface FromValues {
    email: string;
    password: string;
}

interface Props {
    submit: (values: FromValues) => Promise<FormikErrors<FromValues> | null>;
}

export class C extends React.PureComponent<FormikProps<FromValues> & Props> {
    render() {
        return (
            <Form style={{ display: 'flex' }}>
                <div style={{ margin: 'auto', width: 500 }}>
                    <Field
                        name='email'
                        placeholder="email"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> as any}
                        component={InputField}
                    />

                    <Field
                        name='password'
                        type='password'
                        placeholder="password"
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} /> as any}
                        component={InputField}
                    />

                    <FormItem>
                        <Checkbox>Remember me</Checkbox>
                        <a className="login-form-forgot" href="">Forgot password</a>
                    </FormItem>

                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Register
                        </Button>
                        Or <a href="">register now!</a>
                    </FormItem>
                </div>
            </Form>
        );
    }
}

export const RegisterView = withFormik<Props, FromValues>({
    validationSchema: validUserSchema,
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),
    handleSubmit: async (values, { props, setErrors }) => {
        const errors = await props.submit(values);
        if (errors) {
            setErrors(errors)
        }
    }
})(C);


