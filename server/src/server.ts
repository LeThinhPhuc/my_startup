import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose, { ConnectOptions } from "mongoose";
import Job, { IJob } from './job.model';
import Applicant, { IApplicant } from './applicant.model';

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect('mongodb://localhost:27017/joblistings', options)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error(err);
  });
// Routes
app.get('/jobs', async (req, res) => {
  const jobs: IJob[] = await Job.find();
  if (jobs.length === 0) {
    return res.status(404).json({ message: "No jobs found" });
  }
  res.json(jobs);
});

app.post('/jobs', async (req, res) => {
  const { name, requirements, description } = req.body;
  const job = new Job({ name, requirements, description });
  job.save((err, doc) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "An error occurred while saving the job" });
    }
    res.status(202).json(doc);
  });
});

app.get('/applicants', async (req, res) => {
  const applicants: IApplicant[] = await Applicant.find();
  if (applicants.length === 0) {
    return res.status(404).json({ message: "No applicants found" });
  }
  res.json(applicants);
});

app.post('/applicants', async (req, res) => {
  const { name, email, phone, dob, resumeLink } = req.body;
  const applicant = new Applicant({ name, email, phone, dob, resumeLink });
  applicant.save((err, doc) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "An error occurred while saving the applicant" });
    }
    res.status(202).json(doc);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});