import { useState } from "react";
import { makeUnauthenticatedPOSTRequestForUpload } from "../utils/serverHelpers";

export function useNoticeUpload() {
  const [loading, setLoading] = useState(false);

  const uploadNotice = async ({ title, batch, branch, file }) => {

    console.log("file received from Modal is :", file);
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", title);
      formData.append("batch", batch);
      formData.append("branch", branch);

      return await makeUnauthenticatedPOSTRequestForUpload("/upload/notice", formData, {
        headers: {  },
      });
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setLoading(false);
    }

  };

  return { uploadNotice, loading };
}
