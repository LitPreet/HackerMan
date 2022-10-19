// let target = document.getElementById("target").value;
let text = Array.from(document.getElementsByClassName("text"))
let CK = Array.from(document.getElementsByClassName("CHECK"));

const check=()=>
{
   if(CK[2].checked || CK[0].checked || CK[1].checked)
   {

    hackApi();
   }

}


const hackApi = async function(){
    let target = document.getElementById("target").value
// first we have to clear the screen when this function is called
for(let i = 0; i < text.length ; i++){
    text[i].innerHTML = " ";
  }
let first = await new Promise((resolve,reject)=>{
   setTimeout(()=>{
    text[1].innerHTML =  "Initializing Hack tool..."
    resolve(1);
   },1000)

})
let sec = await new Promise((resolve,reject)=>{
    setTimeout(()=>{
     text[1].innerHTML = "Connecting to the server..."
     resolve(1)
    },1000)
 })
let second = await new Promise((resolve,reject)=>{
   setTimeout(()=>{
    text[2].innerHTML = "user located"
    resolve(1)
   },1000)
})
let third = await new Promise((resolve,reject)=>{
    setTimeout(()=>{
     text[2].innerHTML = `username:${target}`;
         resolve(1)
    },1000)
 })
 let four = await new Promise((resolve,reject)=>{
    setTimeout(()=>{
     text[3].innerHTML = `password fetched: XXXXXXX `
     resolve(1)
    },800)
 })
 let five = await new Promise((resolve,reject)=>{
    setTimeout(()=>{
     text[3].innerHTML = `username:${target} || password fetched: XXXXXXX  || Mobile number fetched: +91XXXXXXXXX `
     resolve(1)
    },500)
 })
 let six = await new Promise((resolve,reject)=>{
    setTimeout(()=>{
     text[4].innerHTML = `resetting the password...`
     resolve(1)
    },1000)
 })
 let seven = await new Promise((resolve,reject)=>{
    setTimeout(()=>{
     text[5].innerHTML = `Trying Brute Force...`
     resolve(1)
    },1000)
 })
 
 let eight = await new Promise((resolve,reject)=>{
    setTimeout(()=>{
     text[5].innerHTML = ` Another 200K passwords tried...`
     resolve(1)
    },1000)
 })
 let seco = await new Promise((resolve,reject)=>{
    setTimeout(()=>{
     text[5].innerHTML = "still matching the pattern...."
     resolve(1)
    },2000)
 })
 let secon = await new Promise((resolve,reject)=>{
    setTimeout(()=>{
     text[3].innerHTML = "hijacking the accounts..."
     resolve(1)
    },2000)
 })
//  let nine = await new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      text[6].innerHTML = `facebook hacked...`
   
//      resolve(1)
     
//     },1000)
//  })
 let ten = await new Promise((resolve,reject)=>{
    setTimeout(()=>{
     text[6].innerHTML = `instagram hacked...`
     resolve(1)
    },2000)
})
    let eleven = await new Promise((resolve,reject)=>{
        setTimeout(()=>{
         text[6].innerHTML = `Gmail hacked...`
         resolve(1)
        },2000)
     })
     let twelve = await new Promise((resolve,reject)=>{
        setTimeout(()=>{
         text[7].innerHTML = `hacking status pending...`
         resolve(1)
        },1000)
     })
     let thirteen = new Promise((resolve,reject)=>{
        setTimeout(()=>{
         text[8].innerHTML = `hacked ${target} accounts successfull...`
         resolve(1)
        },1000)
     })


}

