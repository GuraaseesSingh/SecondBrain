// // import type { ReactElement } from "react";
import ShareIcon from "../Icons/ShareIcon"
interface CardProps{
 text ?: string;
 type: string;
 title:string;
 link :string;
  //?. or ?: makes attribute to be optional 
//  onClick: ()=> void;
}
export function Card({type,title,link,text}: CardProps){
    return <div>
        <div className="pt-2 shadow-md bg-white-900 rounded-md max-w-72 border border-gray-200">
            <div className=" p-1 m-1 flex justify-between">
                <div className="flex p-2 items-center text-md"> 
                   <div className="p-2 text-gray-500"> 
                    <ShareIcon size="md"></ShareIcon>
                   </div>
                     {type}
                </div>
                <div className="flex items-center">
                    <div className="p-2 text-gray-500"> 
                    <ShareIcon size="md"></ShareIcon>
                   </div>
                    <div className="p-2 text-gray-500"> 
                    <ShareIcon size="md"></ShareIcon>
                   </div>
                </div>


            </div>
            <div className="p-4 flex flex-col items-center">
                {text}
                <div className="font-2xl italic font-mono m-2">
                    {title.toLocaleUpperCase()}
                </div>
                {/* //Youtube Embed  */}
                {type==='Youtube Video' &&  <iframe className="w-full m-2" src={link.replace('youtu.be/','www.youtube.com/').replace('watch?v=','embed/').replace('live/','embed/').replace('?feature=shared','')} title="YouTube video player" frameBorder="0" allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                }  
                {/* Tweet */}
                {type=== 'Tweet' && <blockquote className="twitter-tweet">
                 <a href={link.replace('x.com/', 'twitter.com/')}></a> 
                </blockquote>
                }
            </div>
        </div>
    </div>
}