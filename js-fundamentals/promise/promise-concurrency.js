const urls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3'
    // more URLs
];

Promise.all(urls.map(url => fetch(url)))
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(data =>
    {
        console.log("All data fetched successfully:", data);
    })
    .catch(error =>
    {
        console.error("An error occurred:", error);
    });



Promise.allSettled(urls.map(url => fetch(url)))
    .then(results =>
    {
        results.forEach((result, index) =>
        {
            if (result.status === 'fulfilled')
            {
                console.log(`Data from ${urls[index]}:`, result.value);
            } else
            {
                console.error(`Error fetching from ${urls[index]}:`, result.reason);
            }
        });
    });
