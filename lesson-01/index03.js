let student = {
    personalData: {
        firstName: 'Ivan',
        lastName: 'Ivanov'
    },
    address: {
        country: 'France',
        city: 'Paris',
    }
}

student.personalData.firstName = "Uladzimir";
student.personalData.lastName = "Kaniushenka";

document.write('<h1>Personal Data</h1>','<br>');
document.write('<b>First Name: </b>', student.personalData.firstName, '<br>');
document.write('<b>Last Name: </b>', student.personalData.lastName, '<br>');

document.write('<b>Country: </b>', student.address.country, '<br>');
document.write('<b>City: </b>', student.address.city, '<br>');