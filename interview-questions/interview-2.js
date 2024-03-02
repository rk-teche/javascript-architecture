



const { _, ...age } = { name: 'John', age: 25, test:12 };


function result()
{
    return Promise.reject({name:"abc", id: 1})
}

const cal = async () => {
    const response = await result() // async function or task
    return response
 }

 cal().then(empObj => {
    console.log("empObj", empObj)
}).catch(e => {
    console.log("e", e)
})

const { _, ...age } = { name: 'John', age: 25, test:12 };

[1, 2, 3, 4, 5]

// for() -> number
// reduce

function addition1(numsArray = [])
{
    let sum = 0;
    for(let i = 0; i < numsArray.length; i++)
    {
        sum += numsArray[i]
    }

    return sum;
}


function addition2(numsArray = [])
{
    // complexity ->
    return numsArray.reduce((acc, value) => {
        return acc+value
    })
}


function handleMe() {
    return console.log( " Executes "); // console obj
    throw Error(`Handle Me `)
  }
  
  function execMe() {
    handleMe();
  }()


function a()
{

}

let a = {
    val:1,
    val2: () => {
        console.log("this", this)
    }
}

let b = {
    val: 2
}

const methodA = a.bind(b)

methodA().val2


  let arrowFun = () => {

  }



  type empObj = {
    name: String;
    id: number
  }

  interface IEmp = {
    name: String;
    id?: number
  }


1. final bundle
2. local bundle

index.html -> <script></script>



main.js -> main application code, 
polyfills.js -> 
assets

<ng-template $call$="call"></ng-template>

<input type="text" [(ngModel)]="value" />

<></>p
child

DBFactory = (isValue) => {
    if(isValue) ? new ORACLE() : new CASSANDRA()
}
provider: {SERVICENAME: SERVICEA, useFactory: DBFactory }
privder: [SERVICENAME]

@Injectable({
    providedIn: "root",
    provider: [DBFactory],

})
abstract DBSERVICE.js

