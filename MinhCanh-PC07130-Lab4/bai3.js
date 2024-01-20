const fs = require('fs').promises;
const axios = require('axios');

async function fetchData() {
    try {
        const data = await fs.readFile('./data.json', { encoding: 'utf8' });
        console.log('Data loaded from disk', data);

        const response = await axios.get('https://catfact.ninja/fact');
        console.log('Data downloaded from URL', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Gọi hàm fetchData để bắt đầu quá trình
fetchData();

