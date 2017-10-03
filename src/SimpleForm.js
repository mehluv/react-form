import React from 'react';
import { Field, reduxForm } from 'redux-form';
import DatePicker from 'react-datepicker';
import { required, email, numericality} from 'redux-form-validators'
import {SubmissionError} from 'redux-form'
import { bootstrap, interfaces } from "redux-bootstrap";
import moment from 'moment';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
  <div>
        <DatePicker {...input}  selected={input.value ? moment(input.value) : null} showYearDropdown={true} />
        {touched && error && <span>{error}</span>}
  </div>
);

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting} = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
            
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />
            {' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />
            {' '}
            Female
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Hobbies</label>
        <div>
          <Field name="hobbies[Sports]" id="daob" component="input" type="checkbox" value="Monday" />Sports
          <Field name="hobbies[Reading]" id="daob" component="input" type="checkbox" value="Tuesday" />Reading
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
          <label>Date of birth:-</label> 
            <Field name="birthdate" component={renderDatePicker}/>
        </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" validate={[required()]}/>
         
        </div>
      </div>
      <div>
        <label>Phone number</label>
        <div>
          <Field
            name="phonenum"
            id="phonenum"
            component="input"
            type="text"
            validate={[numericality()]}
          />
         
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabledonClick={reset}>
          Clear Values
        </button>     
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);
