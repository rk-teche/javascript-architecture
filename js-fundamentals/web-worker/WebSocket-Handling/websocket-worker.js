// websocket_worker.js

// Simulate WebSocket connection
const fakeWebSocket = {
    onmessage: null,
    send: function(message) {
        // Simulate receiving message after 1 second
        setTimeout(() => {
            if (this.onmessage) {
                this.onmessage({ data: message });
            }
        }, 1000);
    }
};

// Listen for messages from the main thread
self.onmessage = function(event) {
    const message = event.data;
    // Forward message to fakeWebSocket
    fakeWebSocket.send(message);
};

// Listen for messages from fakeWebSocket
fakeWebSocket.onmessage = function(event) {
    const message = event.data;
    // Send message back to the main thread
    self.postMessage(message);
};
