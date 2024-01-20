function getTodos(callback) {
    // previsouly it was used to handle only XML type request but now we can use handle any XML, JSON, Plain text request
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // to learn more about ready state : https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
        console.log(request.readyState);
        if (request.readyState === 4) {
            callback(request)
        }
    })

    request.open('GET', "https://jsonplaceholder.typicode.com/todos/");
    request.send()
}

getTodos((req) => {
    // status code reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses
    if (req.status === 200) {

        console.log(req.responseText);
    }
    else {
        throw 'could not fetch data'
    }
})