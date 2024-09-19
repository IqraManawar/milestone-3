// // get reference to the form and display area
// const form = document.getElementById('resume-form')as HTMLFormElement;
// const resumeDisplayElement = document.getElementById('resume-diplay') as HTMLDivElement;
// //Handle form submission
// form.addEventListener('submit', (event: Event) => {
//     event.preventDefault(); //prevent page reload
//     // collect input values
//     const name = (document.getElementById('name') as HTMLInputElement).value
//     const email = (document.getElementById('email') as HTMLInputElement).value
//     const phone = (document.getElementById('phone') as HTMLInputElement).value
//     const education = (document.getElementById('education') as HTMLInputElement).value
//     const experience = (document.getElementById('experience') as HTMLInputElement).value
//     const skills = (document.getElementById('skills') as HTMLInputElement).value
//     //Generate the resume content dynamiclly
//     const resumeHTML = `
//     <h1><b>Resume</b></h1>
//     <h3>Personal Information</h3>
//     <p><b>Name:</b>${name}</p>
//     <p><b>Email:</b>${email}</p>
//     <p><b>Phone:</b>${phone}</p>
//     <h3>Education</h3>
//     <p>${education}</p>
//     <h3>Experience</h3>
//     <p>${experience}</p>
//     <h3>Skills</h3>
//     <p>${skills}</p>
//     `;
//     // Display the generated resume
//     if (resumeDisplayElement){
//         resumeDisplayElement.innerHTML = resumeHTML;
//     }else {
//         console.error('The resume display element is missing.');
//     }
// });
// Get reference to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n        <h1><b>Resume</b></h1>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>Phone:</b> ").concat(phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
