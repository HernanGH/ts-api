import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('hello world with ts'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
