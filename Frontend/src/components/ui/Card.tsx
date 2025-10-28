import { useEffect } from "react";
import ShareIcon from "../Icons/ShareIcon";
import TrashIcon from "../Icons/TrashIcon";
import { TweetIcon } from "../Icons/TweetIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";

interface CardProps {
  text?: string;
  type: string;
  title: string;
  link: string;
  id?: string;
  onDelete?: (id?: string) => void;
  onShare?: (link: string) => void;
}
declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (el?: HTMLElement) => void;
      };
    };
  }
}


export function Card({ type, title, link, text, id, onDelete, onShare }: CardProps) {

  // Ensure Twitter embed script re-runs for new tweets
  useEffect(() => {
    if (type === "Tweet") {
      
      if(window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
      }
    }
  }, [type, link]);
  return (
    <div className="p-2 bg-white-900 shadow-sm">
      <div className="shadow-md bg-white rounded-lg max-w-72 border border-gray-200 transition-transform duration-200 hover:shadow-lg hover:-translate-y-1">
        
        {/* Header */}
        <div className="px-3 py-2 flex justify-between items-center border-b border-gray-100">
          <div className="flex items-center space-x-2 text-sm text-gray-600 font-medium">
           {type === "Youtube Video" && <YoutubeIcon className="cursor-pointer hover:text-gray-700" size="md"/>}
           {type === "Tweet" && <TweetIcon className="cursor-pointer hover:text-gray-700" size="md"/>}
            <span>{type}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span onClick={() => onShare?.(link)}>
              <ShareIcon size="md" className="cursor-pointer hover:text-gray-700" />
            </span>
            <span onClick={() => onDelete?.(id)}>
              <TrashIcon size="md" className="cursor-pointer hover:text-gray-700" />
            </span>
          </div>
        </div>
        {/* Body */}
        <div className="p-4 flex flex-col items-center flex-wrap text-center">
          {text && <p className="text-sm text-gray-500 mb-2">{text}</p>}
          <div className="text-lg font-bold italic font-mono mb-3">
            {title.toLocaleUpperCase()}
          </div>

          {/* YouTube Embed */}
          {type === "Youtube Video" && (
            <iframe
              className="w-full aspect-video rounded-md"
              src={link
                .replace("youtu.be/", "www.youtube.com/")
                .replace("watch?v=", "embed/")
                .replace("live/", "embed/")
                .replace("?feature=shared", "")
              }
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {/* Tweet */}
          {type === "Tweet" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com/", "twitter.com/")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
