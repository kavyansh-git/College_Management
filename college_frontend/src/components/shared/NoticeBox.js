import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import NoticeCard from "./NoticeCard";
import NoticeModal from "./NoticeModal"; // your centralized instance

export default function NoticeBox({ batch, branch}) {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get(`/view/notices?batch=${batch}&branch=${branch}`); // adjust endpoint if needed
        setNotices(response.data);
      } catch (error) {
        console.error("Failed to fetch notices:", error.response?.data || error.message);
      }
    };

    fetchNotices();
  }, [ batch, branch ]);

  return (

    <div className="w-full flex flex-col">
      {notices.map((notice) => (
        <NoticeCard key={notice._id} notice={notice} onClick={() => setSelectedNotice(notice)} />
      ))}
      
      {selectedNotice && (
        <NoticeModal notice={selectedNotice} onClose={() => setSelectedNotice(null)} />
      )}
    </div>    
  );
}
