
import mongoose, { Document, Model, Schema } from 'mongoose';
// Variable declaration
export interface IApplicant {
    name: String,
    email: String,
    phone: String,
    dob: Date,
    resumeLink: String
  }
  // Schema is database combination of rules 
  const applicantSchema: Schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    dob: { type: Date, required: true },
    resumeLink: { type: String, required: true }
  });
  
  const Applicant = mongoose.model<IApplicant>('Job', applicantSchema);
  
  export default Applicant;