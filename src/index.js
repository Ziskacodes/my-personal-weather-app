
function handleSearchInput (event){
    event.preventDefault;
    {
        let searchInput=document.querySelector("#form-input-id");
        let cityElement=document.querySelector("#city-id");
        cityElement.innerHTML = searchInput.value;
    }
}
let searchFormElement= document.querySelector(".formular");
searchFormElement.addEventListener("sunbmit", handleSearchInput);