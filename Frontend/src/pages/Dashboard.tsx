import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PlusIcon from "../components/Icons/PlusIcon";
import ShareIcon from "../components/Icons/ShareIcon";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreateContentModel } from "../components/ui/CreateContentModel";
import { Sidebar } from "../components/ui/Sidebar";
import axios from "axios";
import { BackendURL } from "../config";
// import ShareBrain from "../components/ui/ShareBrain";


interface ContentItem {
  _id?: string;
  type: string;
  title: string;
  link: string;
  text: string;
}

export default function Dashboard() {
  const [modal, setModal] = useState(false);
  const [content, setContent] = useState<ContentItem[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  // const [share, setShare] = useState(false)

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await axios.get(`${BackendURL}/content`, {
          headers: { authorization: localStorage.getItem("token") },
        });
        setContent(response.data);
      } catch (err) {
        console.error("Failed to fetch content:", err);
      }
    }
    fetchContent();
  }, []);

  // Open modal when coming from navbar Add Link action via query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("add") === "1") {
      setModal(true);
      // Clean the query param to avoid reopening on refresh/back
      navigate("/dashboard", { replace: true });
    }
  }, [location.search, navigate]);

  return (
    <div>
      {/* Controlled modal with onAdd callback */}
      {/* <ShareBrain /> */}
      <CreateContentModel
        open={modal}
        onClose={() => setModal(false)}
        onAdd={(newItem) => {
          setContent((prev) => [...prev, newItem]); // optimistic update
          setModal(false);
        }}
      />
      <Sidebar />
      {/* <div className="pl-72 h-screen bg-white-900"> */}
        <div className="pl-72 h-full 
                bg-[radial-gradient(circle,#334155_1px,transparent_1px)] 
                bg-[length:30px_30px] ">
        <div className="flex justify-end">
          <Button
            variant="primary"
            text="Add To Brain"
            size="md"
            onClick={() => setModal(true)}
            startIcon={<PlusIcon size={"md"} />}
          />
          <Button
            variant="secondary"
            text="Share Brain"
            size="md"
            startIcon={<ShareIcon size="md" />}
          />
        </div>
        <div className="flex p-2 m-2 gap-4 flex-wrap">
          {content.map((item, idx) => (
            <Card
              key={idx}
              type={item.type}
              title={item.title}
              link={item.link}
              text={item.text}
              // onDelete={() =>handleDelete(item._id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
