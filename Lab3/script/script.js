const title = document.querySelectorAll("h1");
const btn = document.getElementById("btn");
const table = document.getElementById("table");
const fio = document.getElementById("fio");
const age = document.getElementById("age");
const gen = document.getElementById("gen");
const height = document.getElementById("height");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const form = document.getElementById("form");
const error = document.getElementById("error");


const isFieldFull = (val)=>{
    return Boolean(val.length);
}


form.addEventListener("submit", (event) => {
event.preventDefault();

if(!isFieldFull(fio.value)){
    error.innerText = "oshibka";
    return;
}
    table.innerHTML += `<tr class="active2"><td class="active">${fio.value}</td><td class="active">${age.value}</td><td class="active">${gen.value}</td><td class="active">${height.value}</td><td class="active"><a href=${phone.value}>${phone.value}</td><td class="active"><a href=${email.value}>${email.value}</a></td></tr>`
form.reset();
})

const images = document.querySelectorAll('.slider img');
let i = 0;

const buttonL = document.getElementById('buttonL');
const buttonR = document.getElementById('buttonR');


function showImage(j) {
  images[i].classList.remove('active');
  images[j].classList.add('active');
  i = j;
}

buttonL.addEventListener('click', function (event) 
    {
      let j = i - 1;
      if (j < 0) {
        j = images.length - 1;
      }
      showImage(j);
    } )
    
    buttonR.addEventListener('click', function (event) 
    {
      let j = i + 1;
      if (j >= images.length) {
        j = 0;
      }
      showImage(j);
    }
  )

showImage(i);