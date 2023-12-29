/* Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space. */

function getFullName(firstName, lastName) {
	// Your code starts here
	if (typeof firstName === 'string' && typeof lastName === 'string') {
		if (firstName.trim() !== '' && lastName.trim() !== '') {
			return firstName + ' ' + lastName;
		} else {
			return '';
		}
	} else if (typeof firstName === 'string' || typeof lastName === 'string') {
		return firstName || lastName;
	}
}

// Example usage:
// Lines For TestCase
// getFullName("GUVI", "GEEK");
// getFullName("GUVI" );
// getFullName( "GEEK");
// getFullName("", ""); 
// */