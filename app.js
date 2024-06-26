const accessKey ="v-xai_7DKx4GCh6DNA-BLOHysxOS2IpMOk8ViSNuKyw";
const form = document.querySelector("form");
const searchResult = document.querySelector(".search-result");
const input = document.getElementById("inp");
const show = document.getElementById("btn2");


let inputData = "";
let page = 1;

const searchImages = async () =>{
    inputData = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

const response = await fetch(url);
const data = await response.json();

const results = data.results;

if(page ===1){
    searchResult.innerHTML ="";
}

results.map((result) => {
    const Storage = document.createElement("div");
    Storage.classList.add("res1");


    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html ;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;


    Storage.appendChild(image);
    Storage.appendChild(imageLink);
    searchResult.appendChild(Storage);



});

page++;
if(page >1 ){
    show.style.display = "block";
}

}

form.addEventListener("submit" ,(event) =>{
    event.preventDefault();
    page = 1;
    searchImages();
    
})


show.addEventListener("click" ,() =>{
    searchImages();

});