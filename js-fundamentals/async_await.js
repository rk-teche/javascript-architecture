// async : it always returns Promise
// await : it is also always returns Promise

const getTodos = async () => {

}

getTodos().then() // async returning promise


const getData =  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todoss/")
    if(response.status !== 200) {
        throw new Error("can't fetch data")
    }
    return await response.json()
}

getData()
.then(res => console.log('res', res))
.catch(err => console.error(err))