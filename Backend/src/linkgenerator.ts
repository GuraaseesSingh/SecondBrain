export default function random(num: number) {
let hash=""
const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abs0192";

    for (let i=0; i < num; i++){
        hash += charset[Math.floor(Math.random()*charset.length)] //math.random give b/w 0 to from.length floor gives decimal 
    }
    return hash;
    
}
//implement crypto security 