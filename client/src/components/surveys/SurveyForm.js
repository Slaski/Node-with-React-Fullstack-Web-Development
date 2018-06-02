// SurveyForm shows a form for a user add input

import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' }
];

class SurveyForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
        {this.renderFields()}
        <button type="submit">Submit</button>
      </form>
    );
  }

  renderFields() {
    return _.map(FIELDS, ({ label, name }) => (
      <Field
        component={SurveyField}
        type="text"
        label={label}
        name={name}
        key={name}
      />
    ));
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
