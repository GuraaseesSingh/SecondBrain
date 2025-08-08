// import type { ReactElement } from "react";
interface CardProps{
 text: string;
//  size: "sm"| "md" | "lg";
//  startIcon ?: ReactElement;
//  endIcon ?: ReactElement;   //?. makes attribute to be optional 
//  onClick: ()=> void;
}
export default function Card(props: CardProps){
    return <div>
        <span className="bg-white-900 rounded-md ">
            {props.text} hello
        </span>
    </div>
}