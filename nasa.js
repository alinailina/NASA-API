document.querySelector("#nasa button").addEventListener("click", loadNasaAPI);

function loadNasaAPI(e) {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.nasa.gov/planetary/apod?api_key=NhxtMmNfgdctBuewfe3ssP0XF7KyDhfEF0id58oP",
    true
  );

  xhr.onload = function() {
    if (this.status === 200) {
      let nasaAPI = JSON.parse(this.responseText);
      console.log(nasa);

      let author = nasaAPI.copyright;
      console.log(author);
      document.querySelector(
        ".nasa-output #author"
      ).innerHTML = `Author: ${author}`;

      let date = nasaAPI.date;
      console.log(date);
      document.querySelector(".nasa-output #date").innerHTML = `Date: ${date}`;

      let text = nasaAPI.explanation;
      console.log(text);
      document.querySelector(".nasa-output #text").innerHTML = text;

      let image = nasaAPI.url;
      console.log(image);
      document.querySelector(
        ".nasa-output #img"
      ).innerHTML = `<img src="${image}">`;
    }
  };
  xhr.send();
}
