// filter_worker.js

// Function to apply a simple grayscale filter to the image data
function applyGrayscaleFilter(imageData) {
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg;      // Red channel
        data[i + 1] = avg;  // Green channel
        data[i + 2] = avg;  // Blue channel
    }
    return imageData;
}

// Listen for messages from the main thread
self.onmessage = function(event) {
    const { imageData, startY, endY } = event.data;

    // Create a copy of the image data to work on
    const dataCopy = new Uint8ClampedArray(imageData.data);

    // Apply the grayscale filter to the specified portion of the image data
    const filteredData = applyGrayscaleFilter({
        data: dataCopy,
        width: imageData.width,
        height: imageData.height
    });

    // Send the filtered data back to the main thread
    self.postMessage({ startY, filteredData: filteredData.data.subarray(startY * imageData.width * 4, endY * imageData.width * 4) });
};
