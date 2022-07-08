import { Fragment, useState } from "react";

import dynamic from "next/dynamic";

import axios from "axios";

import Resizer from "react-image-file-resizer";

import Link from "next/link";

import classes from "./blog.module.css";

import { showSuccessMessage } from "../../../Components/helpers/alert";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

import "react-quill/dist/quill.snow.css";

import { getCookie } from "../../../Components/helpers/auth";

import { BootstrapHead } from "../../../Components/head/head";

export const getServerSideProps = async ({ req, res }) => {
  const token = getCookie("token", req);

  console.log("From serverside props: ", token);

  return { props: { token } };
};

const Module = ({ token }) => {
  const [state, setState] = useState({
    title: "",
    buttonText: "Post Module",
    image: "",
    imgaeUploadText: "Upload Image",
    success: "",
    error: "",
  });

  const [content, setContent] = useState("");

  const { title, buttonText, image, success, error } = state;

  const [imgaeUploadText, setImageUploadState] = useState("Upload Image");

  const handleChange = (name) => (e) => {
    const value = e.target.value;

    setState({ ...state, [name]: value, error: "", success: "", error: "" });
  };

  const handleContent = (e) => {
    setContent(e.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;"));

    setState({ ...state, success: "", error: "" });
  };

  const handleImage = (event) => {
    let fileInput = false;

    if (event.target.files[0]) {
      fileInput = true;

      console.log(event.target.files[0].name);
    }

    setImageUploadState(event.target.files[0].name);

    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          event.target.files[0],
          300,
          300,
          "JPEG",
          100,
          0,

          (uri) => {
            console.log(uri);

            setState({ ...state, image: uri, success: "", error: "" });
          },

          "base64",
          200,
          200
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.table(name,content,image)

    setState({ ...state, buttonText: "Posting Module " });

    try {
      const response = await axios.post(
        `http://localhost:8080/api/content`,
        { title, content, image },

        {
          headers: {
            Authorization: `Bearer ${token}`,
            contentType: "application/json",
          },
        }
      );

      console.log("CATEGORY CREATE RESPONSE", response);

      setState({
        ...state,
        title: "",
        buttonText: "Module Posted",
        imgaeUploadText: "Upload Image",
        success: `${response.data.title} is created!`,
      });

      setContent("");

      setImageUploadState("Upload Image");
    } catch (err) {
      if (err.response) {
        console.log("CATEGORY CREATE ERROR: ", err.response);

        setState({ ...state, buttonText: "Post Module", error: "", success: "" });
      }
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
      ["code-block"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "code-block",
  ];

  const moduleForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="mb-3  offset-md-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
           ModuleTitle
          </label>

          <input
            onChange={handleChange("title")}
            type="text"
            className="form-control"
            placeholder="Module Title"
            aria-label="Username"
            id="exampleFormControlInputName"
            required
          />
        </div>

        <div className="mb-3  offset-md-3">
          <label
            htmlFor="formFile"
            className="btn btn-outline-secondary form-label"
          >
            {imgaeUploadText}

            <input
              onChange={handleImage}
              className="form-control"
              accept="image/*"
              type="file"
              id="formFile"
              hidden
            />
          </label>
        </div>

        <div className={`mb-3 offset-md-3 ${classes.quill__editor}`}>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Content
          </label>

          <ReactQuill
            onChange={handleContent}
            defaultValue={content}
            className={`form-control`}
            placeholder="Write Your Cyber Security Module"
            theme="snow"
            modules={modules}
            formats={formats}
            required
          />
        </div>

        <div className="mb-3 col-md-6 offset-md-3 form-group">
          <button type="submit" className="btn btn-outline-primary btn-sm">
            {buttonText}
          </button>
        </div>
      </form>
    );
  };

  return (
    <Fragment>
      <BootstrapHead title="Create Module" />

      <div className="container p-5 ">
        <div className="mb-3 offset-md-3">

          <h2>Create Module</h2>

          {success && showSuccessMessage(success)}
        </div>
        {moduleForm()}
        <div className="mb-3 offset-md-3">
          {success && (
            <Link href="/">
              <a className="btn btn-outline-danger btn-sm">Home</a>
            </Link>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Module;
