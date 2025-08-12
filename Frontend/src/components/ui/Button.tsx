import type { ReactElement } from "react";
interface ButtonProps {
 variant: "primary"|"secondary";
 text: string;
 size: "sm"| "md" | "lg";
 startIcon ?: ReactElement;
 endIcon ?: ReactElement;  //?. makes attribute to be optional 
 onClick?: ()=> void;
}
const variantStyles = {
    "primary":"bg-black-900 hover:bg-black-500  text-grey-200",
    "secondary":"bg-white-900 hover:text-black-900 text-grey-900"
}
const defaultStyles="rounded-lg border-2 border-gray-300 hover:border-gray-700  m-8 cursor-pointer border-solid flex items-center  border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"

const sizeStyles={
    "lg":"px-12 py-4 text-lg",
    "md":"px-8 py-2 text-md",
    "sm":"px-4 py-2"
}
//to do startIcon and endIcon 
//use svg = scalable vector graphics doesn't fattna on zooming as it has path and eveything to know what's image unlike jpex jgeg and png which gets pixelated
export const Button=(props:ButtonProps)=>{
    return <div>
<button onClick={props.onClick} className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size] || sizeStyles.md} `} >
   {props.startIcon ? <div className="pr-2"> {props.startIcon}</div> : null} 
   {props.text} 
   {props.endIcon}
</button>
</div>
}