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




function createObservable(subscribe)
{
    return {
        subscribe: subscribe
    };
}

function registerUser(userData)
{
    return createObservable(observer =>
    {
        setTimeout(() =>
        {
            console.log("User registered:", userData.email);
            observer.next(userData);
            observer.complete();
        }, 1000);
    });
}

function sendWelcomeEmail(user)
{
    return createObservable(observer =>
    {
        setTimeout(() =>
        {
            console.log("Welcome email sent to", user.email);
            observer.next(user);
            observer.complete();
        }, 1000);
    });
}

function logRegistration(user)
{
    return createObservable(observer =>
    {
        setTimeout(() =>
        {
            console.log("Registration logged for", user.email);
            observer.next(user);
            observer.complete();
        }, 1000);
    });
}

function chainObservables(...observables)
{
    return createObservable(observer =>
    {
        let currentObservableIndex = 0;

        const processObservable = data =>
        {
            if (currentObservableIndex < observables.length)
            {
                const currentObservable = observables[currentObservableIndex++];
                currentObservable.subscribe({
                    next: processObservable,
                    complete: observer.complete
                });
            }
        };

        processObservable();
    });
}

// Chaining observables
const userRegistrationChain = chainObservables(
    () => registerUser({ email: "user@example.com" }),
    user => sendWelcomeEmail(user),
    user => logRegistration(user)
);

userRegistrationChain.subscribe({
    next: user => console.log("Step completed for", user.email),
    complete: () => console.log("Observable chain is complete.")
});
