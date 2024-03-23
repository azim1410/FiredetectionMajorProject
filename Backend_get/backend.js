const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hello, World! This is my Node.js backend.');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const connection = mysql.createConnection({
    host: 'your_host',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');

    connection.query('SELECT * FROM your_table', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return;
        }
        console.log('Fetched data:', results);

        // Close the connection
        connection.end((err) => {
            if (err) {
                console.error('Error closing connection:', err);
                return;
            }
            console.log('Connection closed');
        });
    });
});
