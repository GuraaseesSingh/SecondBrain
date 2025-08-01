export default function random(num: number) {
let hash=""
let from = "12838383883829103810"
    for (let i=0; i < num; i++){
        hash += from[Math.floor(Math.random()*from.length)] //math.random give b/w 0 to from.length floor gives decimal 
    }
    return hash;
    
}