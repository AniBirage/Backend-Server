import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3002;

app.use(bodyParser.json());

const dbFilePath = path.join(__dirname, 'db.json');

interface Submission {
  name: string;
  email: string;
  phone: string;
  github_link: string;
  stopwatch_time: string;
}

let submissions: Submission[] = [];

if (fs.existsSync(dbFilePath)) {
  const data = fs.readFileSync(dbFilePath, 'utf8');
  submissions = JSON.parse(data);
}

app.post('/submit', (req, res) => {
  const submission: Submission = req.body;
  submissions.push(submission);
  fs.writeFileSync(dbFilePath, JSON.stringify(submissions, null, 2));
  res.status(200).send('Submission saved');
});

app.get('/read-all', (req, res) => {
  res.json(submissions);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
