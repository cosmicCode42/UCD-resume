function sendMail(contactForm) {
    emailjs.send("service_ba1f2hx","template_sqz6xq9", {
        "to_name": "Gabe",
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;
}