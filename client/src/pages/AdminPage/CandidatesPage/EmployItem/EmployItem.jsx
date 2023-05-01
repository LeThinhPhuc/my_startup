import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useRoutes } from "react-router-dom";
import Tooltip from "../../../../components/Tooltip/Tooltip";
const EmployItem = (props) => {
  const navigate = useNavigate();
  const bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  // console.log(personal.lastName.split(" ").reduce((acc, cur) => acc += cur[0], ""))
  const { employee } = props;
  const { personal, profile, experience, teamLead, _id, status, salary } = employee;
  const onViewDetail = () => {
    navigate(`/admin/candidates/${_id}/edit`);
  };

  const onViewResume = () => {
    const {resumeLink} = profile;
    const {firstName} = personal;
    console.log({firstName,resumeLink});
  }

  let fullName = personal?.lastName + " " + personal?.firstName;

  return (
    <tr className="border-b-[1px] border-sky-200 dark:bg-gray-200 dark:border-gray-700 hover:bg-sky-50 dark:hover:bg-gray-600">
      <td
        scope="row"
        className="flex items-center px-4 py-2 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div
          className={`w-12 h-12 flex justify-center items-center rounded-full text-xl text-white uppercase`}
          style={{
            background: bgColor,
          }}
        >
          {fullName?.split(" ").reduce((acc, cur) => {
            // console.log("cur", cur);
            if (cur == "") return acc;
            else return (acc += cur[0]);
          }, "")}
        </div>
        {/* cho-nay-chua-hieu-tai-sao-sai */}

        <div className="w-3/8 text-xs font-semibold pl-3">
          {personal?.lastName + " " + personal?.firstName}
        </div>
      </td>
      <td className="w-1/8 px-4 py-2 text-xs">
        {experience ? experience.title : "Non title"}
      </td>
      <td className="w-1/8 px-4 py-2">
        <div className="text-xs ">{teamLead ? teamLead : "None TeamLead"}</div>
      </td>
      <td className="w-1/8 px-6 py-4">
        <div className="text-xs ">{salary}</div>
      </td>
      <td className="text-xs w-1/8 px-2 py-4">
        {status ? (
          status == "ONBOARDING" ? (
            <mark className="px-3 py-2 font-semibold bg-sky-100 text-sky-600 rounded-md">
              {status}
            </mark>
          ) : (
            <mark className="px-3 py-2 bg-orange-100 text-orange-600 font-semibold rounded-md">
              {status}
            </mark>
          )
        ) : (
          "None Status"
        )}
      </td>
      <td className="flex w-1/8 px-3 py-3 justify-center gap-2">
        <Tooltip message="View Detail">
          <FontAwesomeIcon
            icon={faEye}
            size="md"
            className="cursor-pointer text-sky-400 hover:text-sky-600"
            onClick={() => onViewDetail()}
          />
        </Tooltip>
        <Tooltip message="View Resume">
          <FontAwesomeIcon
            icon={faFilePdf}
            size="md"
            className="cursor-pointer text-sky-400 hover:text-sky-600"
            onClick={() => onViewResume()}
          />
        </Tooltip>
      </td>
    </tr>
  );
};
export default EmployItem;
