/*Store Data Using localStorage*/

// let email=document.getElementById("email")
// let password=document.getElementById("password")
// let form=document.querySelector("form")

// let fashoin=JSON.parse(localStorage.getItem("fashoin")) || []
// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
// const userExist=fashoin.find((user)=>user.email==email.value)
// if(userExist && userExist.password==password.value){
//     alert("Hello? Your Welcome")
//     window.location.href="./home.html"
// }else if(userExist && userExist.password!=password.value){
// alert("Please Wrong Password !!!")
// }else{
//     alert("User Not Exist! Please Click Sign-up Now!!!")
// }
// })







const LoginForm=document.querySelector(".login");

LoginForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;

    const data={
        email,
        password
    };
    const api=``
    
})