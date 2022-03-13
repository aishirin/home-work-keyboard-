const timeText=document.querySelector(".header-time")
const date=new Date()
timeText.textContent=`${date.getHours()}:${date.getMinutes()}`
const input1=document.getElementById("input1")
const input2=document.getElementById("input2")
const input3=document.getElementById("input3")
const input4=document.getElementById("input4")
// const input=querySelectorAll(".main-input__item")
const keyboard=document.querySelector(".keyboard")
const keyboardItem=document.querySelectorAll(".keyboard-item")
input1.onclick=()=>{
    keyboard.style.display="block"
}
input2.onclick=()=>{
    keyboard.style.display="block"
}
input3.onclick=()=>{
    keyboard.style.display="block"
}
input4.onclick=()=>{
    keyboard.style.display="block"
}

// const keyboardItem1=document.getElementById("keyboardItem1")
// const keyboardItem2=document.getElementById("keyboardItem2")
// const keyboardItem3=document.getElementById("keyboardItem3")
// const keyboardItem4=document.getElementById("keyboardItem4")
// const keyboardItem5=document.getElementById("keyboardItem5")
// const keyboardItem6=document.getElementById("keyboardItem6")
// const keyboardItem7=document.getElementById("keyboardItem7")
// const keyboardItem8=document.getElementById("keyboardItem8")
// const keyboardItem0=document.getElementById("keyboardItem-")
// const keyboardItem9=document.getElementById("keyboardItem9")
const keyboardItemDelete=document.getElementById("keyboardItemDelete")
const keyboardItem1=document.querySelectorAll(".keyboard-item")
const keyboardBtn=document.querySelector(".keyboard-btn")
const modalTrue=document.querySelector(".modal--true")
const modalFalse=document.querySelector(".modal--false")
let count=0
keyboardItem1.forEach((item)=>{
    item.onclick=()=>{
        ++count
        if(count==1){
            input1.value=item.textContent
            input1.classList.add("item--onclick")
        }else if(count==2){
            input2.value=item.textContent
            input2.classList.add("item--onclick")
        }
        else if(count==3){
            input3.value=item.textContent
            input3.classList.add("item--onclick")
        }
        else if(count==4){
            input4.value=item.textContent
            input4.classList.add("item--onclick")
        }
    }
})
keyboardItemDelete.onclick=()=>{
    input1.value=""
    input2.value=""
    input3.value=""
    input4.value=""
    count=0
}
keyboardBtn.onclick=()=>{
    keyboard.style.display="none"
    if(input1.value==2||input2.value==3||input3.value==6||input4.value==5){
        modalTrue.style.display="block"
    }else{
        modalFalse.style.display="block"
    }
}

