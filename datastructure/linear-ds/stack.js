// Throw error in Javascript

/**
 * Stack - First in Last Out (FILO)
 * Stack methods - push(), pop(), peek(), length(), empty(), search(Algorithm?)
 * 
 * 
 * * Usages of Stack --
 * 1. reverse the string
 * 2. Stacks are also good at keeping track of state as things are pushed on and popped off the stacks (Browser History)
 * 3. Add/remove from back of a structure
 * 
 * * Stacks are not good at -
 * 1. Search and sort items consistently 
 */

 class Stack {
    #top = -1;
    #stack = [];
    constructor(_maxLength = 100){
        this.stackLimit = _maxLength; 
        if(!this.#isInteger(this.stackLimit)){
            throw new Error('Max length must be an integer')
        }
    }

    get length(){
        return this.#top + 1
    }

    push(data){
        if(!data) return this.length;

        if(this.#top < this.stackLimit){
            this.#stack.push(data)
            this.#top++

            return this
       } else {
            throw new Error('stack overflow')
       }
    }

    get getStack(){
        return this.#stack.toString()
    }

    peek(){
        let peerStack = () => this.#stack[this.#top] 
        return this.#isStackEmpty(peerStack);
    }

    empty(){
        this.#stack = []
        this.#top = -1;

        return this.length
    }

    pop(){
        let _popStack = () => {
            const _item = this.#stack.pop()
            this.#top-- 
            return _item;
        }
        return this.#isStackEmpty(_popStack);
    }

    #isStackEmpty(_cb){
        if(this.#top < 0){
           return console.warn('Stack is empty');
        } else {
            return _cb()
        }
    }


    #isInteger(_num){
       return Number.isInteger(_num)
    }

    
}

function reverse(_string){
    if(!_string) return _string

    const stringStack = new Stack(_string.length)
    for(let x of _string){
        stringStack.push(x)// hello
    }
    const string = []
    for(let x of _string){
        string.push(stringStack.pop())
    }

    return string.join('')
}

reverse('hello')// It will reverse the string
