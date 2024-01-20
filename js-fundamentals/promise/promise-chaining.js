function registerUser(userData)
{
    // Returns a promise that resolves after registering the user
    return new Promise((resolve, reject) =>
    {
        // Simulate async database operation
        setTimeout(() =>
        {
            console.log("User registered");
            resolve(userData); // Pass the user data for the next step
        }, 1000);
    });
}

function sendWelcomeEmail(user)
{
    // Returns a promise that resolves after sending an email
    return new Promise((resolve, reject) =>
    {
        // Simulate async email sending
        setTimeout(() =>
        {
            console.log("Welcome email sent to", user.email);
            resolve(user); // Pass the user data for the next step
        }, 1000);
    });
}

function logRegistration(user)
{
    // Returns a promise that resolves after logging
    return new Promise((resolve, reject) =>
    {
        // Simulate async logging
        setTimeout(() =>
        {
            console.log("Registration logged for", user.email);
            resolve();
        }, 1000);
    });
}

// Using the functions with promise chaining
registerUser({ email: "user@example.com" })
    .then(sendWelcomeEmail)
    .then(logRegistration)
    .then(() =>
    {
        console.log("All steps completed successfully.");
    })
    .catch(error =>
    {
        console.error("An error occurred:", error);
    });
