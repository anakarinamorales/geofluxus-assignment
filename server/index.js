import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import reports from './../src/mock/reports.json' with { type: 'json'};

const app = express();
const port = 3001;
const jsonParser = bodyParser.json();

app.use(cors());

app.get('/', (req, res) => {
  res.send(
    'Sample server application. Please use the /reports endpoint to fetch waste report data'
  );
});

// returns all the reports
app.get('/reports', (req, res) => {
  res.json(reports);
});

// returns report data (based on id)
app.post('/reports/:id', jsonParser, (req, res) => {
  const report = meters.find((report) => report.type === req.params.id);

  if (!report) {
    res.status(404).send(
      JSON.stringify({
        message: `Unable to report with type  ${req.params.id}`,
      })
    );
    return;
  }


  res.send(report);
});

app.listen(port, () => {
  console.log(`Waste report API listening at http://localhost:${port}`);
});
