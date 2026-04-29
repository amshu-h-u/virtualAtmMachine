document.body.style.padding="0%"
document.body.style.margin="0%"
document.body.style.backgroundColor="black"
document.body.style.display="flex"
document.body.style.justifyContent="center"
document.body.style.alignItems="center"
document.body.style.height="100vh"
document.body.style.flexDirection="column"

let h1=document.getElementsByTagName("h1")[0]
h1.innerText="ATM Machine"
h1.style.color="white"
h1.style.fontFamily="sans-serif"
h1.style.textAlign="center"

let container=document.getElementsByTagName("div")[0]
container.style.height="400px"
container.style.width="500px"
container.style.border="2px solid black"
container.style.borderRadius="7px"
container.style.backgroundColor="white"
container.style.display="flex"
container.style.justifyContent="center"
container.style.alignItems="center"
container.style.flexDirection="column"
container.style.gap="50px"

let balance =500
let deposit=0
let WithDraw=0

let btn1=document.getElementsByTagName("button")[0]
btn1.innerText="Balance"
btn1.style.margin="20px"
btn1.style.height="20px"
btn1.style.width="150px"
btn1.style.padding="15px"
btn1.style.display="flex"
btn1.style.alignItems="center"
btn1.style.fontWeight=700
btn1.style.backgroundColor="green"
btn1.style.color="white"
btn1.style.border="2px solid white"
btn1.style.borderRadius="3px"

let btn2=document.getElementsByTagName("button")[1]
btn2.innerText="WithDraw"
btn2.style.margin="20px"
btn2.style.height="20px"
btn2.style.width="150px"
btn2.style.padding="15px 10px 15px 10px"
btn2.style.display="flex"
btn2.style.alignItems="center"
btn2.style.fontWeight=700
btn2.style.backgroundColor="green"
btn2.style.color="white"
btn2.style.border="2px solid white"
btn2.style.borderRadius="3px"
btn2.addEventListener("click",()=>{

      let h2=document.getElementsByTagName("h2")[0]
     let inp=document.createElement("input")
     let btn=document.createElement("button")
     inp.placeholder="Enter amount"
     btn.textContent="draw"
      let p=document.getElementsByTagName("p")[0]

     btn.addEventListener("click",()=>{
         let val=Number(inp.value)
     console.log(val)
        if(isNaN(val)){
        p.textContent="Please enter proper input"
     }
     else{
        if(balance-val<0){
            p.textContent="Insufficient balnce"
        }else{
            if(balance-val>=0){
               p.textContent=`${val} is withdrawed`
               balance-=WithDraw
            }
        }
     }
     })
     
    h2.append(inp)
    h2.append(btn)
})


btn1.addEventListener("click",()=>{
    let h2=document.getElementsByTagName("h2")[0]
    h2.textContent=`Your Balance is ${balance}`
})

let btn3=document.getElementsByTagName("button")[2]
btn3.innerText="Deposit"
btn3.style.margin="20px"
btn3.style.height="20px"
btn3.style.width="150px"
btn3.style.padding="15px"
btn3.style.display="flex"
btn3.style.alignItems="center"
btn3.style.fontWeight=700
btn3.style.backgroundColor="green"
btn3.style.color="white"
btn3.style.border="2px solid white"
btn3.style.borderRadius="3px"