let toss=prompt("enter a head or tail");
const result=new Promise((resolve,reject)=>{
    
    if(toss==="head"){
        resolve()

    }
    else{
        reject()
    }
})
result.then(head).catch(tail)
function head(){
    console.log(`success`)
}
function tail(){
    console.log(`failure`);
}