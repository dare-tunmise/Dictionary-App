const btn = document.getElementById("search-btn");
const result = document.querySelector(".result-container");
const sound = document.getElementById("sound");



//api end point
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

//search function to fetch word meaning
btn.addEventListener("click", ()=>{
    let wordInput = document.getElementById("input-word").value;
    console.log(wordInput);
    fetch(`${url}${wordInput}`)
        .then((response)=> response.json())
        .then((data)=> {
          console.log(data);
          result.innerHTML = `<div class="word-pronouciation">
                                <div class="word">
                                    <h2>${wordInput}</h2>
                                    <span>${data[0].phonetic}</span>
                                </div>

                                <div class="sound">
                                    <button class="sound-button" onclick="playSound()">
                                        <i class="fa-sharp fa-solid fa-play"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="word-part">
                                <p class="part-of-speech">${data[0].meanings[0].partOfSpeech}</p>
                                <span class="dash"></span>
                            </div>

                            <div class="word-meaning">
                                <p class="meaning">Meaning</p>
                                <ul>
                                    <li>${data[0].meanings[0].definitions[0].definition}</li>


                                </ul>

                                <p class="word-synonyms">Synonyms      <span class="synonyms">${data[0].meanings[0].synonyms}</span></p>
                            </div>
                           

                            <div class="final-dash"></div>
                            <div class="source">
                                <p class="word-source">Source <a href="${data[0].sourceUrls}" class="source-link">${data[0].sourceUrls}</a></p>
                            </div>`;
                            sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
                            sound.setAttribute("src", `${data[0].phonetics[1].audio}`);
                            sound.setAttribute("src", `${data[0].phonetics[2].audio}`);
        })


});

function playSound(){
    sound.play()
}