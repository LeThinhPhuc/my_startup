import { useState } from "react";
import ModalEmail from "./ModalEmail";
import ModalInviteInterview from "./ModalInviteInterview";
import renderData from "./RenderData";
const StatusProcess = () => {
  //  const stepStatus = useState(0)
  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }
  const [isReject, setIsReject] = useState(false);
  const stepStatusInit = [
    { step: 0, createAt: new Date() },
    { step: 1, createAt: new Date() },
    { step: 2, createAt: new Date() },
    { step: 3, createAt: new Date() },
    { step: 4, createAt: new Date() },

    // {step:6,
    //   createAt: new Date()
    // }
  ];
  const [stepStatus, setStepStatus] = useState(stepStatusInit);
  const [isShowModalSendTest, setIsShowModalSendTest] = useState(false);
  const [showModalInviteInterview, setIsShowModalInviteInterview] =
    useState(false);
  const nextStepSendTest = (data) => {
    if (data) {
      let newStepStatus = [
        ...stepStatus,
        { step: Number(stepStatus.length - 1), createAt: new Date() },
      ];
      setStepStatus(newStepStatus);
    }
  };

  const handleModalSendTest = (data) => {
    setIsShowModalSendTest(data);
  };
  const handleModalInviteInterview = (data) => {
    setIsShowModalInviteInterview(data);
  };
  const handleBtnUndo = () => {
    if(isReject){
      setIsReject(!isReject)
    }
    else {if(stepStatus.length>1){setStepStatus([...stepStatus.slice(0, -1)]);}}
     

    
  };
  const handleBtnReject=()=>{
    setIsReject(!isReject)
  }
  const handleOnclickBtnNextStep = () => {
    if (stepStatus.length == 2) {
      setIsShowModalSendTest(true);
    } else {
      if (stepStatus.length == 4) {
        setIsShowModalInviteInterview(true);
      } else {
        if (stepStatus.length == 6) {
          setIsShowModalInviteInterview(true);
        } else {
          let newStepStatus = [
            ...stepStatus,
            { step: Number(stepStatus.length - 1), createAt: new Date() },
          ];
          setStepStatus(newStepStatus);
        }
      }
    }
  };

  return (
    <div class="relative">
      <div
        className={` mx-4 relative overflow-x-auto border-[1.5px] rounded-lg min-w-[30%] min-h-[10%]`}
      >
        <table className="w-full  text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-500  bg-gray-100 border-b-[1.5px] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold">
                Manage Applicant Statuses
              </th>
            </tr>
          </thead>
        </table>
        {/* item.idProcess < stepStatus.length */}
        <ol class="items-start lg:flex m-4">
          {renderData.map((item) =>
            true ? (
              <li class="relative mb-10 sm:mb-2">
                <div class="flex items-center">
                  <div
                    class={`relative z-10 flex items-center justify-center w-6 h-6 ${
                      item.idProcess > stepStatus.length - 1
                        ? "bg-blue-50"
                        : " bg-blue-200"
                    } rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0`}
                  >
                    {item.idProcess > stepStatus.length - 1
                      ? item.svg1
                      : item.svg}

                    {item.idProcess == stepStatus.length - 1 ? (
                      <div class={`absolute z-[-1] left-0 top-0 w-6 h-6 bg-blue-200 rounded-full ${isReject?"":"animate-ping"}`}></div>
                    ) : (
                      ""
                    )}
                  </div>
                  {item.idProcess > stepStatus.length - 2 ? (
                    item.idProcess == 7 ? (
                      ""
                    ) : (
                      <div class=" sm:flex w-full bg-blue-100 h-0.5 dark:bg-gray-700"></div>
                    )
                  ) : (
                    <div class=" sm:flex w-full bg-blue-400 h-0.5 dark:bg-gray-700"></div>
                  )}
                </div>
                <div class="mt-3 sm:pr-8">
                  <time class="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                    {item.idProcess > stepStatus.length - 1
                      ? "N/A"
                      : formatDate(stepStatus[item.idProcess].createAt)}
                  </time>
                  <h3
                    class={`text-sm font-semibold ${
                      item.idProcess > stepStatus.length - 1
                        ? "text-gray-300"
                        : "text-gray-900"
                    }  dark:text-white`}
                  >
                    {item.title}
                  </h3>
                  <p
                    class={`text-sm font-normal ${
                      item.idProcess > stepStatus.length - 1
                        ? "text-gray-300"
                        : "text-gray-500"
                    } dark:text-gray-400`}
                  >
                    {item.decr}
                  </p>
                  {isReject? "" :item.idProcess == 7 ? (
                    ""
                  ) : item.idProcess == stepStatus.length - 1 ? (
                    <button
                      onClick={handleOnclickBtnNextStep}
                      class="bg-blue-50 hover:bg-blue-300 text-gray-900 font-bold text-sm py-1 px-4 rounded-lg mt-3"
                    >
                      {item.button}
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </li>
            ) : (
              ""
            )
          )}
        </ol>
        <div class="flex justify-end">
          <button
            onClick={handleBtnUndo}
            class=" z-[150] flex flex-col items-center bg-blue-50 hover:bg-blue-300  text-gray-900 font-bold text-xs mr-5 rounded-lg mt-3 w-[60px] h-[60px]"
          >
            <svg
            class="h-11 w-11"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.7071 4.29289C11.0976 4.68342 11.0976 5.31658 10.7071 5.70711L8.41421 8H13.5C16.5376 8 19 10.4624 19 13.5C19 16.5376 16.5376 19 13.5 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 10.4477 17 11 17H13.5C15.433 17 17 15.433 17 13.5C17 11.567 15.433 10 13.5 10H8.41421L10.7071 12.2929C11.0976 12.6834 11.0976 13.3166 10.7071 13.7071C10.3166 14.0976 9.68342 14.0976 9.29289 13.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289L9.29289 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.29289Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
            {isReject? "Unreject":"Undo"}
          </button>
          <button onClick={handleBtnReject} class={`${isReject? 'hidden' : ''} mr-3 mb-3 flex flex-col items-center bg-blue-50 hover:bg-blue-300 text-gray-900 font-bold text-xs  rounded-lg mt-3 w-[60px] h-[60px]`}>
            <svg
              class="h-7 w-7 ml-1 mb-2 mt-2"
              viewBox="0 -0.5 17 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>799</title> <defs> </defs>{" "}
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <path
                    d="M9.016,0.06 C4.616,0.06 1.047,3.629 1.047,8.029 C1.047,12.429 4.615,15.998 9.016,15.998 C13.418,15.998 16.985,12.429 16.985,8.029 C16.985,3.629 13.418,0.06 9.016,0.06 L9.016,0.06 Z M3.049,8.028 C3.049,4.739 5.726,2.062 9.016,2.062 C10.37,2.062 11.616,2.52 12.618,3.283 L4.271,11.631 C3.508,10.629 3.049,9.381 3.049,8.028 L3.049,8.028 Z M9.016,13.994 C7.731,13.994 6.544,13.583 5.569,12.889 L13.878,4.58 C14.571,5.555 14.982,6.743 14.982,8.028 C14.981,11.317 12.306,13.994 9.016,13.994 L9.016,13.994 Z"
                    fill="#434343"
                    class="si-glyph-fill"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>
            </svg>
            Reject
          </button>
        </div>
      </div>
      <ModalEmail
        isShowModalSendTest={handleModalSendTest}
        isShow={isShowModalSendTest}
        isNextStep={nextStepSendTest}
      />
      <ModalInviteInterview
        isShowModalInviteInterview={handleModalInviteInterview}
        isShow={showModalInviteInterview}
        isNextStep={nextStepSendTest}
        isJobOffer={stepStatus}
      />
      {isReject ? (
        <div class="absolute flex flex-col justify-end items-center top-10 left-0 z-[110] bg-slate-300 opacity-60 mx-4 overflow-x-auto border-[1.5px] rounded-b-lg w-[calc(100%-2rem)] h-[calc(100%-2rem)] ">
          <p class='bg-slate-50 p-5 mb-5 text-center text-orange-700 font-bold rounded-lg w-1/3 max-w-[300px] opacity-100'>This candidate was rejected !</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default StatusProcess;
