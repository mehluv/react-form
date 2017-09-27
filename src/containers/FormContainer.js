import React, {Component} from 'react';
import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup';
import SingleInput from '../components/SingleInput';
import TextArea from '../components/TextArea';
import Select from '../components/Select';
import Datetime from 'react-datetime';



class FormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ownerName: '',

			email: '',

			password: '',

			date: '',

			petSelections: [],
			//selectedPets: [],
			ageOptions: [],
			ownerCountrySelection: '',
			genderOptions: [],
			gender: [],
			phone: 0,
			address: ''
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleFullNameChange = this.handleFullNameChange.bind(this);
		
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
		
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		
		this.handleCurrentPetCountChange = this.handleCurrentPetCountChange.bind(this);
		this.handleAgeRangeSelect = this.handleAgeRangeSelect.bind(this);
		//this.handlePetSelection = this.handlePetSelection.bind(this);
		this.handleSiblingsSelection = this.handleSiblingsSelection.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
	}
	componentDidMount() {
		fetch('./fake_db.json')
			.then(res => res.json())
			.then(data => {
				this.setState({
					ownerName: data.ownerName,

					email: data.email,

					password: data.password,

					date:data.date,

					petSelections: data.petSelections,
					//selectedPets: data.selectedPets,
					ageOptions: data.ageOptions,
					ownerCountrySelection: data.ownerCountrySelection,
					genderOptions: data.genderOptions,
					gender: data.gender,
					phone: data.phone,
					address: data.address
				});
			});
	}
	handleFullNameChange(e) {
		this.setState({ ownerName: e.target.value }, () => console.log('name:', this.state.ownerName));
	}
	handleEmailChange(e) {
		this.setState({ email: e.target.value }, () => console.log('email:', this.state.email));
	}

	handlePasswordChange(e) {
		this.setState({ password: e.target.value }, () => console.log('password:', this.state.password));
	}
	

	handleDateChange(e) {
		this.setState({ date: e.target.value }, () => console.log('date:', this.state.date));
	}


	handleCurrentPetCountChange(e) {
		this.setState({ phone: e.target.value }, () => console.log('pet count', this.state.phone));
	}
	handleAgeRangeSelect(e) {
		this.setState({ ownerCountrySelection: e.target.value }, () => console.log('country', this.state.ownerCountrySelection));
	}
	//handlePetSelection(e) {
	//	const newSelection = e.target.value;
	//	let newSelectionArray;
	//	if(this.state.selectedPets.indexOf(newSelection) > -1) {
	//		newSelectionArray = this.state.selectedPets.filter(s => s !== newSelection)
	//	} else {
	//		newSelectionArray = [...this.state.selectedPets, newSelection];
	//	}
	//	this.setState({ selectedPets: newSelectionArray }, () => console.log('pet selection', this.state.selectedPets));
	//}
	handleSiblingsSelection(e) {
		this.setState({ gender: [e.target.value] }, () => console.log('genderOf', this.state.gender));
	}
	handleDescriptionChange(e) {
		// const textArray = e.target.value.split('').filter(x => x !== 'e');
		// console.log('string split into array of letters',textArray);
		// const filteredText = textArray.join('');
		// this.setState({ description: filteredText }, () => console.log('description', this.state.description));
		this.setState({ address: e.target.value }, () => console.log('address', this.state.address));
	}
	handleClearForm(e) {
		e.preventDefault();
		this.setState({
			ownerName: '',
		
			email: '',
			
			password: '',

			date:'',

			//selectedPets: [],
			ownerCountrySelection: '',
			gender: [],
			phone: 0,
			address: ''
		});
	}
	handleFormSubmit(e) {
		e.preventDefault();

		const formPayload = {
			ownerName: this.state.ownerName, email: this.state.email,password: this.state.password,
			date:this.state.date,//selectedPets: this.state.selectedPets,
			ownerCountrySelection: this.state.ownerCountrySelection,
			gender: this.state.gender,
			phone: this.state.phone,
			address: this.state.address
};

		console.log(typeof(formPayload));
	console.log(JSON.stringify(formPayload));

		this.handleClearForm(e);
	}
	render() {
		return (
			<form className="container" onSubmit={this.handleFormSubmit} >
				<h5>Sign Up Form</h5>

				<SingleInput
					inputType={'text'}
					title={'Name'}
					name={'name'}
					controlFunc={this.handleFullNameChange}
					content={this.state.ownerName}
					placeholder={'Type your name'} />

				<SingleInput				
					inputType={'email'}
					title={'Email'}
					name={'email'}
					controlFunc={this.handleEmailChange}
					content={this.state.email}
					placeholder={'Type your Email'} />
				
				<SingleInput				
					inputType={'password'}
					title={'Password'}
					name={'password'}
					controlFunc={this.handlePasswordChange}
					content={this.state.password}
					placeholder={'Type your Password'} />


				<SingleInput				
					inputType={'date'}
					title={'Date'}
					name={'date'}
					controlFunc={this.handleDateChange}
					content={this.state.date}
					/>
				
				<Select
					name={'Country Name'}
					placeholder={'Choose your country'}
					controlFunc={this.handleAgeRangeSelect}
					options={this.state.ageOptions}
					selectedOption={this.state.ownerCountrySelection} />
				<CheckboxOrRadioGroup
					title={'Gender'}
					setName={'siblings'}
					controlFunc={this.handleSiblingsSelection}
					type={'radio'}
					options={this.state.genderOptions}
					selectedOptions={this.state.gender} />
				<SingleInput
					inputType={'text'}
					title={'Phone number'}
					name={'phone'}
					controlFunc={this.handleCurrentPetCountChange}
					content={this.state.currentPetCount}
					placeholder={'Enter your phone no'} />
				<TextArea
					title={'Address Line'}
					rows={2}
					resize={false}
					content={this.state.address}
					name={'currentPetInfo'}
					controlFunc={this.handleDescriptionChange}
					placeholder={'Enter your address here'} />
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
}



export default FormContainer;