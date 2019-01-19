import React from 'react';
import { Field, reduxForm } from 'redux-form';

 class StreamForm extends React.Component {


    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    renderError = ({error, touched}) => {
        
        if (touched && error) 
            return <div className='ui error message'>
                        <div className='header'>
                            {error}
                        </div>
                   </div>
        return null;    
    }


    renderInput = ({input, meta}) => {
        const errorClass = `field ${meta.error && meta.touched ? 'error' : ''}`
        return  (<div className={errorClass}>
                    <input {...input} autoComplete='off' />
                    {this.renderError(meta)}
                </div>)
    } 

    render() {
        return (
            <div className={'stream-create'}>
                <form 
                    className='ui form error'
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                    >
                    <div className='field-container'>
                        <label>Enter name:</label>
                        <Field 
                            name='title'
                            component={this.renderInput}
                        />
                    </div>
                    <div className='field-container'>
                        <label>Enter description:</label>
                        <Field 
                            name='description'
                            component={this.renderInput}
                        />
                    </div>
                    <button type='submit'>submit</button>
                </form>
            </div>
        )
    }

}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) 
        errors.title = "You must enter a value";
    if(!formValues.description)
        errors.description = "You must enter a value";
    return errors;
}



export default reduxForm({
    form: 'streamForm',
    validate,
    enableReinitialize: true
})(StreamForm);

