import express from 'express';
import morgan from 'morgan';

const app = express();

// Use Morgan middleware
// You can choose from predefined formats like 'combined', 'common', 'dev', 'short', 'tiny'
app.use(morgan('combined')); // 'combined' is a commonly used format for detailed logs

// Example route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
