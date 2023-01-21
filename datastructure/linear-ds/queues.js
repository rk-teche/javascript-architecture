/**
 * Queues: First in First Out (FIFO)
 * * Usages: In operating system queues are often used for controlling access of shared system resource such as printer, files, communications lines
 * * -- also used in multi threading and concurrency situation --> to keep track what tasks are waiting to be performed and making sure them in that order
 * Note - Ruby uses queues for synchronizing communication across threads
 * Methods :
 * 1. Enqueue -- add an items into queue
 * 2. Dequeue -- remove an item into queue
 * 3. Peek -- see the first item in queue without removing it
 * 
 * 
 * Some Specialized queues
 * 1. Priority Queue - Each element has priority associated with it, which means, dequeue --> always remove item with highest priority
 * 2. D-E-Q-U-E-K (Double Ended Queue) -> having stack and queue at the same time, that means --> items can be added and removed from either end.
 */

 class Queue {
    #top = -1;
    #queue = [];
    constructor(_maxLength = 100){
        this.queueLimit = _maxLength; 
        if(!this.#isInteger(this.queueLimit)){
            throw new Error('Max length must be an integer')
        }
    }

    get length(){
        return this.#top + 1
    }

    enqueue(data){
        if(!data) return this.length;

        if(this.#top < this.queueLimit){
            this.#queue.push(data)
            this.#top++

            return this.length
       } else {
            throw new Error('Queue overflow')
       }
    }

    getQueue(){
        return this.#queue.toString()
    }

    peer(){
        let _peerQueue = () => this.#queue[0] 
        this.#isQueueEmpty(_peerQueue);
    }

    empty(){
        this.#queue = []
        this.#top = -1;

        return this.length
    }

    dequeue(){
        let _dQueue = () => {
            const _item = this.#queue.splice(0, 1)
            this.#top-- 
            return _item;
        }
        this.#isQueueEmpty(_dQueue);
    }

    #isQueueEmpty(_cb){
        if(this.#top < 0){
           return console.warn('Queue is empty');
        } else {
            return _cb()
        }
    }


    #isInteger(_num){
       return Number.isInteger(_num)
    }

    
}

let q = new Queue()