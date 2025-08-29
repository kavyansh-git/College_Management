import axios from "../utils/axios";
import { toast } from "react-toastify";
import { useState } from "react";

export function usePDFUpload() {
  const [loading, setLoading] = useState(false);

  const uploadPDF = async ({ title, batch, branch, file, label }) => {
  console.log("file received from Modal is:", file);

  try {
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("batch", batch);
    formData.append("branch", branch);

    console.log("File:", file);
    console.log("File type:", file?.type);
    console.log("File name:", file?.name);

    const response = await axios.post(`/upload/pdf/upload/${label}`, formData, {
      timeout: 30000, // Optional: increase for large files
    });
    
    return response.data;
  } catch (error) {
    const serverMessage = error.response?.data?.message || "Upload failed";
    console.error("Upload error:", serverMessage);
    toast.error(`Upload failed: ${serverMessage}`);
  } finally {
    setLoading(false);
  }
};

  return { uploadPDF, loading };
};
