import React from "react";
import axios from "axios";

const uploadFile = async (token, file) => {
  const form = new FormData();
  form.append("file", file);

  const metadata = {
    name: "your-file-name",
    mimeType: file.type,
  };
  form.append(
    "metadata",
    new Blob([JSON.stringify(metadata)], { type: "application/json" })
  );

  const res = await axios.post(
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=media&key=<=============apikey=======>&includePermissionsForView=published",
    form,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "media",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  console.log("res.data", res.data);
  return res.data;
};

const createShareableLink = async (token, fileId) => {
  await axios.post(
    `https://www.googleapis.com/drive/v3/files/${fileId}/permissions`,
    { role: "reader", type: "anyone" },
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const res = await axios.get(
    `https://www.googleapis.com/drive/v3/files/${fileId}?fields=webViewLink`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return res.data.webViewLink;
};

const shareOnWhatsApp = (phoneNumber, link) => {
  window.open(
    `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Here is your file: ${link}`,
    "_blank"
  );
};

const FileUploadComponent = ({ token }) => {
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const fileData = await uploadFile(token, file);
      const shareableLink = await createShareableLink(token, fileData.id);
      shareOnWhatsApp("recipient-phone-number", shareableLink);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return <input type="file" onChange={handleFileUpload} />;
};

export default FileUploadComponent;
