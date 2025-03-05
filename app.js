const generatbtn = document.querySelector(".generate-button")
const memetitle = document.querySelector(".meme-title")
const memeimage = document.querySelector(".meme-image")
const authoroutput = document.querySelector(".author")




async function getmeme(){

const fetchapi =  await fetch("https://meme-api.com/gimme/wholesomememes")
const data =await fetchapi.json();
const {author, title, url} = data
memetitle.innerText = title;
memeimage.src = url;
authoroutput.innerText = `meme by:${author}`;
console.log(author, title, url)
}

getmeme()

generatbtn.addEventListener("click" , async ()=>{
    getmeme()
});