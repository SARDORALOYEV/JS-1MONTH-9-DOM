const userName = prompt("Ismingizni kiriting");
const userSurname = prompt("Familyangizni kiriting");
const userAge = prompt("Yoshingizni kiriting");
const userClr = prompt("Text rangini kiriting (Ingliz tilida:red,green,blue...) ");
const userbgclr = prompt("Box rangini kiriting (Ingliz tilida:red,green,blue...) ");

const namee = document.createElement("h1");
namee.textContent =`Ismingiz: ${userName.toUpperCase()}`;

const nameee = document.createElement("h2");
nameee.textContent = `Familyangiz: ${userSurname.toUpperCase()}`;

const nameeee = document.createElement("h3");
nameeee.textContent = `Yoshingiz: ${userAge.toUpperCase()}`;


const box = document.createElement("div");
box.style.width = "33%";
box.style.padding = "50px";
box.style.display = "flex";
box.style.flexDirection = "column";
box.style.gap = "10px"
if(userClr == userbgclr){
    alert("Bir xil rang kiritsangiz so'z ko'rinmaydi")
    box.style.display = "none";
    confirm("Siteni Refresh qilib qaytadan to'g'ri ma'lomot kiriting")
}
else{
    box.style.color = userClr;
box.style.backgroundColor = userbgclr;
}
document.body.style.backgroundColor = "gray"
if(userName == "" || userSurname == "" || userAge == ""){
    alert("Xato kiritildi");
}
else{
    box.append(namee,nameee,nameeee);
    document.body.append(box);
}