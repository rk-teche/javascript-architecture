const { of } = require('rxjs');
const { delay, switchMap } = require('rxjs/operators');

function registerUser(userData)
{
    // Simulate an async operation using delay
    return of(userData).pipe(
        delay(1000),
        switchMap(user =>
        {
            console.log("User registered:", user.email);
            return of(user);
        })
    );
}

function sendWelcomeEmail(user)
{
    return of(user).pipe(
        delay(1000),
        switchMap(user =>
        {
            console.log("Welcome email sent to", user.email);
            return of(user);
        })
    );
}

function logRegistration(user)
{
    return of(user).pipe(
        delay(1000),
        switchMap(user =>
        {
            console.log("Registration logged for", user.email);
            return of(user);
        })
    );
}

// Chaining observables
registerUser({ email: "user@example.com" })
    .pipe(
        switchMap(sendWelcomeEmail),
        switchMap(logRegistration)
    )
    .subscribe({
        next: (user) => console.log("All steps completed for", user.email),
        error: (err) => console.error("An error occurred:", err),
        complete: () => console.log("Observable chain is complete.")
    });
