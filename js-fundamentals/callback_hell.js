function getTodos(resource, callback = null) {
    return new Promise(
        (resolve, reject) => {
            // previsouly it was used to handle only XML type request but now we can use handle any XML, JSON, Plain text request
            const request = new XMLHttpRequest();

            request.addEventListener('readystatechange', () => {
                // to learn more about ready state : https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
                console.log(request.readyState);
                if (request.readyState === 4) {
                    if(request.status === 200){
                        resolve(request.responseText)
                    } else {
                        reject('no data')
                    }
                }
            })
        
            request.open('GET', resource);
            request.send()
        }
    )
            
    
}

// getTodos("https://jsonplaceholder.typicode.com/todos", (req) => {
//     // status code reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses
//     if (req.status === 200) {

//         console.log(req.responseText);
//         // getTodos("https://jsonplaceholder.typicode.com/todos", (req) => {})
//         getTodos("https://dummyjson.com/products/categories", (req1) => {
//             console.log(req1.responseText);
//             getTodos("https://dummyjson.com/products", (req2) => {
//                 console.log(req2.responseText);
//             })
//         })
//     }
//     else {
//         throw 'could not fetch data'
//     }
// })

// to fix this above scenario, We will use JS promise

const samplePromise = () => {
    return new Promise(
        (resolve, reject) => {
    
            resolve("some data")
            // reject("some data")
        }
    )
}

samplePromise().then(res => {
    console.log('prmoise complete', res)
}).catch(err => {
    console.error('promise rejected')
})

// chaining the Promise and catch all error in last `catch` method
getTodos("https://jsonplaceholder.typicode.com/todos").then(res => {
    console.log('data', res)
    return getTodos("https://jsonplaceholder.typicode.com/todos")
}).then(res => {
    console.log('data 2', res)
    return getTodos("https://dummyjson.com/products/categories")
}).then(res => {
    console.log('completed')
}).catch((err) => {
    console.error("err", err)
})

const reqestHeader = {
    mode: 'no-cors',
            method: "post",
            headers: {
                 "Content-Type": "application/json"
            }
}


fetch("data/data1.json", reqestHeader).then((res) => {
    console.log('res', res) 
    return res.json()
}).then(data => {
    console.log('data', data)
}).catch(err => {
    console.error(err)
})