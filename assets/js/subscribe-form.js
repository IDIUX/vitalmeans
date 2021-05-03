// TODO: consider adding form validation in the submit listener

if (!(window.fetch)) {
	console.log('`fetch` is not available in this browser.');
}

async function postForm(form) {
	// send the request, throws an error if could not send the request (eg if the action/url was invalid)
	const response = await fetch(form.action, {
		method: 'POST',
		mode: 'no-cors',
		cache: 'no-cache',
		body: new FormData(form)
	});

	// if the server responded with anything other than success
	if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(errorMessage);
	}

	return response.json(); // `json` will give us a usable object
}

function disableForm(form, disabled) {
	form.querySelectorAll('input, select, button, textarea').forEach(element => {
		element.disabled = disabled;
	});
}

window.addEventListener('submit', async function(submitEvent) {
	// prevent the forms default action
	submitEvent.preventDefault();

	// disable all form child input elements
	disableForm(submitEvent.target, true);
	
	// alternatively if you just want to disable the button:
	//let submitButton = submitEvent.submitter;
	//submitButton.disabled = true;

	// submit the form data
	try {
		let responseData = await postForm(submitEvent.target);
		console.log(responseData);
		//window.location = 'subscribe_confirm.html';
	} catch (error) {
		//console.log(error); // some browsers will already log the error in the console

		// enable the form again
		disableForm(submitEvent.target, false);

		// alternatively just the submit button
		//submitButton.disabled = false;
	}
}, false);
