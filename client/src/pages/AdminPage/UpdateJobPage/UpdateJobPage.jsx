import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CareersContext } from "../../../Context/CareersContext";
import QuillEditor from "../../../components/QuillEditor/QuillEditor";
import { jobTags, jobType } from "../../../constants";
import { MultiSelect } from "react-multi-select-component";
import SwitchButton from "../../../components/SwitchButton/SwitchButton";
import Swal from "sweetalert2";

import "../JobCreatorPage/JobCreatorPage.css";

const UpdateJobPage = () => {
  const param = useParams();
  // context
  const { jobsData } = useContext(CareersContext);
  const jobDetail =
    jobsData.length > 0 && jobsData.find((job) => job._id == param.id);

  // states
  const [jobTitle, setJobTittle] = useState("");
  const [available, setAvailable] = useState(true);
  const [location, setLocation] = useState("");
  const [jobContent, setJobContent] = useState("");
  const [jobTagSelected, setJobTagSelected] = useState([]);
  const [workingSelected, setWorkingSelected] = useState([]);

  const showAlert = (mess) => {
    Swal.fire({
      icon: "success",
      title: "Successful",
      text: mess,
      allowOutsideClick: true,
      allowEscapeKey: true,
      showConfirmButton: false,
      timer: 1500,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  const onContentChange = (value) => {
    setJobContent(value);
  };

  const onJobTittleChange = (e) => {
    const { value } = e.target;
    setJobTittle(value);
  };

  const onLocationChange = (e) => {
    const { value } = e.target;
    setLocation(value);
  };

  const handleSubmitJob = (e) => {
    e.preventDefault();
    const jobDetail = {
      available,
      content: jobContent,
      location,
      tags: [jobTagSelected[0].value, workingSelected[0].value],
      title: jobTitle,
    };
    console.log("jobDetail updated: ", jobDetail);
    /*  try {
      dataServices.postApply(userInfo);
      setUploadError(false);
    }
    catch (err) {
      console.log(err);
      setUploadError(true);
    }
    if(!uploadErr) {
      showAlert("Submit successfully!");
    } */
    showAlert("Job updated successfully!");

    setJobTittle("");
    setJobContent("");
    setJobTagSelected([]);
    setWorkingSelected([]);
    setLocation("");
  };

  useEffect(() => {
    setJobTittle(jobDetail && jobDetail.title);
    setAvailable(jobDetail && jobDetail.available);
    setLocation(jobDetail && jobDetail.location);
    setJobContent(
      jobDetail &&
        jobDetail.descriptions[0].detail.concat(
          "<br/><br/>",
          jobDetail.descriptions[1].detail
        )
    );
    const tag1 =
      jobDetail && jobTags.filter((item) => item.value == jobDetail.tags[1]);
    const tag2 =
      jobDetail && jobType.filter((item) => item.value == jobDetail.tags[0]);
    tag1.length > 0 && setJobTagSelected(tag1);
    tag2.length > 0 && setWorkingSelected(tag2);
  }, [jobDetail]);

  return (
    <div id="#editor-container" className="h-screen w-full mx-auto">
      <div className="job-form w-full h-full mx-auto py-4 md:py-8">
        <form
          className=" w-[90%] md:w-[80%] flex flex-col gap-6 h-full bg-white rounded-xl opacity-85 px-10 py-4 mx-auto"
          onSubmit={handleSubmitJob}
        >
          <div className="w-full flex flex-row flex-wrap justify-between items-center gap-6">
            <div className="flex flex-col grow gap-2">
              <h4 className="text-sm font-medium">Job Title</h4>
              <div className="grow font-light text-xs md:text-sm">
                <input
                  type="tittle"
                  text={jobDetail && jobDetail.title}
                  id="tittle"
                  name="tittle"
                  required="true"
                  autoComplete="off"
                  className={`peer w-full min-h-[auto] text-xs md:text-sm rounded-lg border bg-white py-3 px-3 leading-[1.6] placeholder-gray-500 focus:placeholder-transparent placeholder:text-xs md:placeholder:text-sm outline-none transition-all duration-200 ease-linear motion-reduce:transition-none focus:outline-none focus:shadow-none focus:ring-transparent dark:focus:border-rose-500 focus:border-rose-500"}`}
                  value={jobTitle || ""}
                  placeholder="Senior Developer"
                  onChange={onJobTittleChange}
                />
              </div>
            </div>
            <div className="w-1/3 flex flex-col gap-2">
              <h4 className="text-sm font-medium">Job Available</h4>
              <div className="font-light text-xs md:text-sm">
                <SwitchButton
                  isAvailable={available}
                  handleSwitch={() => setAvailable(!available)}
                />
              </div>
            </div>
          </div>

          <div className="w-full h-full flex flex-col gap-2 grow">
            <h4 className="text-sm font-medium">Job Detail</h4>
            <QuillEditor
              value={jobContent}
              placeholder={"Write description and requirement of jobs..."}
              onEditorChange={onContentChange}
            />
          </div>

          <div className="w-full flex flex-row flex-wrap lg:flex-nowrap gap-6 lg:gap-10">
            <div className="w-full md:w-[48%] flex flex-col gap-2 text-xs md:text-sm">
              <h4 className="text-sm font-medium">Job title tag</h4>
              <MultiSelect
                options={jobTags}
                value={jobTagSelected}
                onChange={setJobTagSelected}
                labelledBy="Select"
              />
            </div>
            <div className="w-full md:w-[48%] flex flex-col gap-2 text-xs md:text-sm">
              <h4 className="text-sm font-medium">Working type tag</h4>
              <MultiSelect
                options={jobType}
                value={workingSelected}
                onChange={setWorkingSelected}
                labelledBy="Select"
              />
            </div>
            <div className="w-full md:w-[48%] flex flex-col gap-2 text-xs md:text-sm">
              <h4 className="text-sm font-medium">Job Location</h4>
              <div className="relative grow font-light text-xs md:text-sm">
                <input
                  type="location"
                  text={location}
                  id="location"
                  name="location"
                  required="true"
                  autoComplete="off"
                  className={`peer w-full min-h-[auto] text-xs md:text-sm rounded-lg border bg-white py-3 px-3 leading-[1.6] placeholder-gray-500 focus:placeholder-transparent placeholder:text-xs md:placeholder:text-sm outline-none transition-all duration-200 ease-linear motion-reduce:transition-none focus:outline-none focus:shadow-none focus:ring-transparent dark:focus:border-rose-500 focus:border-rose-500"}`}
                  value={location || ""}
                  placeholder="TP Ho Chi Minh"
                  onChange={onLocationChange}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="min-w-fit w-fit mx-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-3xl text-base px-5 py-3 text-center"
          >
            Save job
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateJobPage;