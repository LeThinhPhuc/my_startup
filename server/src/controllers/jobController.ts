import Job from '../models/jobs.model';
import validationMongoId from '../helper/validationMongoId'

const fetchAllJob = async (req: any, res: any) => {
  try {
    const jobs = await Job.find();

    if (!jobs) {
      res.status(404).json({
        message: 'Not Found',
      });
    }

    res.json({
      message: 'Success Get All Jobs',
      data: jobs,
    })}

    catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const fetchJob = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const isValid = validationMongoId(id);

    if (!isValid) {
      res.status(404).json({
        message: 'Job is valid',
      });
    }

    const job = await Job.findById(id);

    if (!job) {
      res.status(404).json({
        message: 'Not Found',
      });
    }

    res.json({
      message: 'Success Get Job',
      data: job,
    })} 
    catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const createJob = async (req: any, res: any) => {

  try {
    const { 
        title,
        location,
        type,
        tags,
        available,
        descriptions,
        requirements,                                                                                                               
      } = req.body;

    // kiem tra title da ton tai chua
    const existingTitle = await Job.findOne( { title } );

    if (existingTitle) {
      return res.status(400).json({
        msg: 'Applications exists',
      });
    }

    const job = new Job({
        title,
        location,
        type,
        tags,
        available,
        descriptions,
        requirements,
    });

    await job.save();

    res.json({
      message: 'Success Create New Job',
    })} 
    
    catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const updateJob = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const isValid = validationMongoId(id);

    if (!isValid) {
      res.status(404).json({
        message: 'Job is valid',
      });
    }
    const existingJob = await Job.findById(id);

    if (!existingJob) {
      return res.status(400).json({
        msg: 'Job not exists',
      });
    }

    await Job.findByIdAndUpdate(id, req.body);

    res.json({
      message: 'Success Update Job',
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const deleteJob = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const isValid = validationMongoId(id);
    if (!isValid) {
      res.status(404).json({
        message: 'Job is valid',
      });
    }

    await Job.findByIdAndDelete(id);

    res.json({
      message: 'Success Delete Job',
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

export default { fetchAllJob, fetchJob, createJob, updateJob, deleteJob };