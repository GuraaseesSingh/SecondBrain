import { useState } from "react";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@components/ui/dialog";

import { Button } from "./Button";
import { Input } from "./Input";
import { dialog } from "framer-motion/client";

export default function ShareBrain() {
  const [open, setOpen] = useState(false);
  const [shareLink, setShareLink] = useState<string>("");

  const handleShare = async () => {
    setOpen(true);

    try {
      // Example API call (adjust URL)
      const res = await fetch("http://localhost:5000/api/brain/share", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ brainId: "12345" }), // pass current brainId
      });

      const data = await res.json();
      if (data?.link) {
        setShareLink(data.link);
      }
    } catch (err) {
      console.error("Error generating share link:", err);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    alert("Link copied to clipboard!");
  };

  return (
    <>
      <Button onClick={handleShare}>Share Brain</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share Your Brain</DialogTitle>
          </DialogHeader>

          {shareLink ? (
            <div className="flex gap-2 items-center">
              <Input value={shareLink} readOnly />
              <Button onClick={handleCopy}>Copy</Button>
            </div>
          ) : (
            <p>Generating link...</p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
