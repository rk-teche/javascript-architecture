// main.js

// Create a new worker for WebSocket handling
const wsWorker = new Worker('websocket_worker.js');

// Handle messages from the WebSocket worker
wsWorker.onmessage = function(event) {
    const message = event.data;
    // Process incoming WebSocket message
    console.log('Received message:', message);
};

// Send message to the WebSocket worker
function sendMessageToWorker(message) {
    wsWorker.postMessage(message);
}
