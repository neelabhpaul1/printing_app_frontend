import ConvertApi from "convertapi-js";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import { useParams } from "react-router-dom";
import axios from "axios";
import { urlToFormData } from "../utils/file";

function StepOne({
  currentStep,
  handleStepCounter,
  srcFile,
  setSrcFile,
  handleDataChange,
}) {
  const {
    phoneNo,
    setPhoneNo,
    setShopId,
    networkError,
    setNetworkError,
    setAccountId,
  } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(false);
  const [checkPhoneNo, setCheckPhoneNo] = useState(false);
  const [checkFile, setCheckFile] = useState(false);
  const [checkId, setCheckId] = useState(false);
  const [idPresent, setIdPresent] = useState(false);
  const [idError, setIdError] = useState(false);
  const pattern = new RegExp(
    "(?:(?:\\+|0{0,2})91(\\s*[\\- ]\\s*)?|[0 ]?)?[789]\\d{9}|(\\d[ -]?){10}\\d",
    "g"
  );

  const { id } = useParams();

  const handleFileChange = async (e) => {
    setLoading(true);
    setCheckFile(true);
    setSrcFile({
      ...srcFile,
      loading: true,
    });
    let src = URL.createObjectURL(e.target.files[0]);
    let ext = e.target.files[0].name.split(".").pop();
    let file = e.target.files[0];

    handleDataChange("file", e.target.files[0]);

    if (
      ext === "doc" ||
      ext === "docx" ||
      ext === "jpg" ||
      ext === "png" ||
      ext === "pptx"
    ) {
      let convertApi = ConvertApi.auth("qNB6RrPfr7AVwiNj");
      let params = convertApi.createParams();
      params.add("File", e.target.files[0]);
      let result = await convertApi.convert(ext, "pdf", params);
      src = result.files[0].Url;
      file = await urlToFormData(src);
      ext = "pdf";
    }

    setSrcFile({
      src,
      file,
      ext,
      loading: false,
    });
    setLoading(false);
  };

  const handlePhoneNoValidation = (e) => {
    if (!pattern.test(e.target.value)) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 500);
    }
    setPhoneNo(e.target.value);
    setCheckPhoneNo(true);
  };

  const handleNextButton = () => {
    if (checkId) {
      if (checkPhoneNo && checkFile) {
        handleStepCounter(1);
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    } else {
      setIdError(true);
      setTimeout(() => {
        setIdError(false);
      }, 2000);
    }
  };

  const checkShopId = async () => {
    try {
      if (id !== undefined) {
        await axios
          .post(`${process.env.REACT_APP_API_URL}/api/v1/shop/checkshopId`, {
            shopId: id,
          })
          .then((res) => {
            if (res.data.status === "200") {
              setAccountId(res.data.accountId);
              setShopId(id);
              setCheckId(true);
              localStorage.setItem("shopId", id);
            }

            if (res.data.status === "404") {
              setIdError(true);
              setTimeout(() => {
                setIdError(false);
              }, 2000);
            }
          });
      } else {
        setIdPresent(true);
      }
    } catch (error) {
      setNetworkError(true);
      setTimeout(() => {
        setNetworkError(false);
      }, 2000);
    }
  };

  useEffect(() => {
    checkShopId();
  }, [id]);

  return (
    <>
      {idPresent ? (
        <div className="min-h-screen flex justify-center items-center absolute w-full bg-white z-10">
          <p className="md:text-3xl">Please Enter Valid Shop ID in the URL</p>
        </div>
      ) : null}
      {networkError ? (
        <div
          className="alert alert-danger fixed z-10 top-0 w-full font-semibold text-sm md:text-md"
          role="alert"
        >
          !! Server Problem !!
        </div>
      ) : null}
      {idError ? (
        <div
          className="alert alert-danger fixed z-10 top-0 w-full font-semibold text-sm md:text-md"
          role="alert"
        >
          !! Shop id doesn't exist !!
        </div>
      ) : null}
      {error ? (
        <div
          className="alert alert-danger fixed z-10 top-0 w-full font-semibold text-sm md:text-md"
          role="alert"
        >
          !! Phone number or file is missing !!
        </div>
      ) : null}
      <div
        className={` w-full mx-3 h-fit  py-5 px-10 mt-5 step-one ${
          currentStep !== 1 ? "hide" : ""
        } md:w-96`}
      >
        <h1 className="text-4xl mb-2">RTP</h1>
        <div className="input-field flex flex-col">
          <input
            name="text"
            type="text"
            placeholder="Enter phone number"
            id="phone"
            value={phoneNo}
            maxLength={10}
            onChange={handlePhoneNoValidation}
            required
            className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          {isError ? (
            <p className="text-red-600 text-start inline-block text-sm">
              Invalid Phone number
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="input-field">
          <div className="col-span-full cursor-pointer">
            <div className="mt-2 flex justify-center rounded-lg border border-dashed shadow-sm border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4  flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload document Here</span>
                    <input
                      id="file"
                      name="file-upload"
                      type="file"
                      accept=".pdf,.doc,.docx,.png,.jpg,.pptx,.ppt"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  ( Pdf, doc, docx, png, jpg, pptx)
                </p>
              </div>
            </div>
          </div>
          <div className="text-sm mt-1">
            {loading ? (
              <>
                <div className="spinner-border w-5 h-5 mt-1" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </>
            ) : (
              <p className="text-start">{srcFile.file.name}</p>
            )}
          </div>
        </div>

        <button onClick={handleNextButton}>Next</button>
      </div>
    </>
  );
}

export default StepOne;
