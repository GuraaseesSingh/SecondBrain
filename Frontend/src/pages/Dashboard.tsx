import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PlusIcon from "../components/Icons/PlusIcon";
import ShareIcon from "../components/Icons/ShareIcon";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreateContentModel } from "../components/ui/CreateContentModel";
import { CardDelete } from "../components/ui/CardDelete";
import { ShareContent } from "../components/ui/ShareContent";
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
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | undefined>(undefined);
  const [shareOpen, setShareOpen] = useState(false);
  const [shareLink, setShareLink] = useState<string>("");
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
      {/* <div className="pl-72 h-screen bg-white-900"> */}
        <div className="md:pl-64 px-2 md:px-6 h-full 
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-2">
          {content.map((item, idx) => (
            <Card
              key={idx}
              id={item._id}
              type={item.type}
              title={item.title}
              link={item.link}
              text={item.text}
              onDelete={(id) => { setDeleteTargetId(id); setDeleteOpen(true); }}
              onShare={(link) => { setShareLink(link); setShareOpen(true); }}
            />
          ))}
        </div>
        {/* Delete Dialog */}
        <CardDelete
          open={deleteOpen}
          onCancel={() => { setDeleteOpen(false); setDeleteTargetId(undefined); }}
          onConfirm={async () => {
            if (!deleteTargetId) return;
            try {
              await axios.delete(`${BackendURL}/delete/${deleteTargetId}`, {
                headers: { authorization: localStorage.getItem("token") },
              });
              setContent((prev) => prev.filter((c) => c._id !== deleteTargetId));
            } finally {
              setDeleteOpen(false); setDeleteTargetId(undefined);
            }
          }}
        />
        {/* Share Dialog */}
        <ShareContent open={shareOpen} link={shareLink} onClose={() => setShareOpen(false)} />
      </div>
    </div>
  );
}
