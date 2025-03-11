const mysql = require('mysql2');

// Create a connection pool to MySQL
const pool = mysql.createPool({
  host: 'localhost',    // MySQL server host
  user: 'root',         // MySQL user
  password: '',         // MySQL password
  database: 'mqtt_data_db',  // Your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Promisify the database queries for easy async/await usage
const promisePool = pool.promise();

// Function to insert data into the database
async function insertData(topic, message) {
  try {
    const [result] = await promisePool.query('INSERT INTO mqtt_data (topic, message) VALUES (?, ?)', [topic, message]);
    console.log('Data inserted into DB:', result);
  } catch (err) {
    console.error('Error inserting data into DB:', err);
  }
}

// Function to get sensor data from the database
/*async function getSensorData(callback) {
  try {
    const [rows] = await promisePool.query('SELECT * FROM mqtt_data ORDER BY timestamp');
    callback(null, rows);
  } catch (err) {
    console.error('Error fetching data from DB:', err);
    callback(err, null);
  }
}
*/
// ✅ Function to get sensor data from the database (without callback)
async function getSensorData() {
  try {
    const [rows] = await promisePool.query('SELECT * FROM mqtt_data ORDER BY timestamp');
    return rows;  // ✅ Return data directly
  } catch (err) {
    console.error('❌ Error fetching data from DB:', err);
    throw err;  // ✅ Throw error instead of using a callback
  }
}

//module.exports = { getSensorData };

module.exports = {
  insertData,
  getSensorData
};

