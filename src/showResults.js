import {SubmissionError} from 'redux-form'
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500); // simulate server latency
if (!['priya', 'paul', 'george', 'ringo'].includes(values.firstName)) {
	              	alert('Please enter a valid name');
      //throw new SubmissionError({
       // firstName: 'User does not exist',
       // _error: 'Login failed!',

     // })
      } 

      else {

window.alert(`You submitted:\n\n${JSON.stringify(values, null, 1)}`);
console.log(`You submitted:\n\n${JSON.stringify(values, null, 1)}`)
}
});

