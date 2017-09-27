import React, {Component} from 'react';  
import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup';  
import SingleInput from '../components/SingleInput';  
import TextArea from '../components/TextArea';  
import Select from '../components/Select';

class FormContainer extends Component {  
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  componentDidMount() {
    fetch('./fake_db.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          ownerName: data.ownerName,
          petSelections: data.petSelections,
          selectedPets: data.selectedPets,
          ageOptions: data.ageOptions,
          ownerAgeRangeSelection: data.ownerAgeRangeSelection,
          siblingOptions: data.siblingOptions,
          siblingSelection: data.siblingSelection,
          currentPetCount: data.currentPetCount,
          description: data.description
        });
    });
  }
  handleFullNameChange(e) {  
  this.setState({ ownerName: e.target.value });
}
  
  handleFormSubmit() {
    // submit logic goes here
  }
  handleClearForm() {
    // clear form logic goes here
  }
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <h5>Pet Adoption Form</h5>
        <SingleInput /> {/* Full name text input */}
       //<Select /> {/* Owner age range select */}
        //<CheckboxOrRadioGroup /> {/* Pet type checkboxes */}
        //<CheckboxOrRadioGroup /> {/* Will you adopt siblings? radios */}
        //<SingleInput /> {/* Number of current pets number input */}
        //<TextArea /> {/* Descriptions of current pets textarea */}
        <input
          type="submit"
          className="btn btn-primary float-right"
          value="Submit"/>
        <button
          className="btn btn-link float-left"
          onClick={this.handleClearForm}>Clear form</button>
      </form>
  );
}