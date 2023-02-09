document.addEventListener(`DOMContentLoaded`,function(); {
    function liveSearch (){
        let contents = document.querySelectorAll(`article`);
        let search_query =document.querySelector(`#search`)
        .value;
        //Loop through the contents
        for (var i=0;i<contents.length;i++) {
            //If the text is within the content...
            if(contents[i].innerText.toLowerCase()
            //and the text matches the search query
            .includes(search_query.toLowerCase())){
                contents[i].classList.remove(`is-hidden`);
            } else{
                contents[i].classList.add(`is-hidden`);

            }
        }
    }
    let typingTimer;
    let typingInterval =500;
    let searchInput = document.querySelector(`#search`);
    searchInput.addEventListener(`keyup`,()=>{
        clearTimeout(typingTimer);
        typingTimer= setTimeout(lieSearch, typeInterval);
    })
}