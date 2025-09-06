import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Client } = pkg;

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "myhome@25",
  database: "Testing"
});

client.connect()
  .then(() => {
    console.log("✅ Database Connected Through Client");
  })
  .catch((err) => {
    console.error("❌ Error Connecting to Database:", err.message);
  });

export default client;
