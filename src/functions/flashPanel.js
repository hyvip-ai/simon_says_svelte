export async function flashPanel(panel){
    return new Promise((resolve,reject)=>{
        panel.classList.add('active');
        setTimeout(()=>{
            console.log(`Resolving Promise`)
        panel.classList.remove('active');
        resolve()
        },1000)
    })  

}