import type { ReactElement } from "react";

interface ButtonProps {
 variant: "primary"|"secondary";
 text: string;
 size: "sm"| "md" | "lg";
 startIcon ?: ReactElement;
 endIcon ?: ReactElement;   //?. makes attribute to be optional 
 onClick: ()=> void;

}
const variantStyles = {
    "primary":"bg-black-900  text-grey-200",
    "secondary":"bg-white-900 text-grey-900"
}
const defaultStyles="rounded-lg  m-8 cursor-pointer border-solid"

const sizeStyles={
    "lg":"px-12 py-4",
    "md":"px-4 py-2",
    "sm":"px-8 py-2"
}
//to do startIcon and endIcon 
//use svg = scalable vector graphics doesn't fattna on zooming as it has path and eveything to know what's image unlike jpex jgeg and png which gets pixelated 
export const Button=(props:ButtonProps)=>{
    
    return <div>
<button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} `} >
    {props.text} 
</button>
    </div>
}