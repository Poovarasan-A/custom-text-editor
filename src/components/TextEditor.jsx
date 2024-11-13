/* eslint-disable react/prop-types */
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Quill = ReactQuill.Quill;
var Font = Quill.import("formats/font");
Font.whitelist = [
  "sans-serif",
  "Geist",
  "Roboto",
  "Edu-Auvic",
  "Funnel-Display",
];
Quill.register(Font, true);

const Editor = ({ placeholder }) => {
  const [editorHtml, setEditorHtml] = useState("");

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div className="app p-4">
      <ReactQuill
        theme="snow"
        onChange={handleChange}
        value={editorHtml}
        modules={Editor.modules}
        formats={Editor.formats}
        bounds={".app"}
        placeholder={placeholder}
      />
    </div>
  );
};

Editor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: Font.whitelist }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

Editor.formats = [
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
];

export default Editor;
