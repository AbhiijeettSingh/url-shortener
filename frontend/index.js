import { isValidUrl } from "./urlChecker.js";
const form = document.querySelector("form");
const input = document.querySelector("input");
const closeButton = document.querySelector(".close");
const errorContainer = document.querySelector(".error-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const longUrl = input.value;
  const validUrl = isValidUrl(longUrl);
  if (!validUrl) {
    alert("enter valid Url");
    return;
  }
  
  fetch('https://url-shortener-8mb3.onrender.com/url',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({longUrl}),
  })
    .then((res) => res.json())
    .then((data) => {
      input.value = '';
      let shortUrl = data.shortUrl;
      let link = document.createElement('a');
      link.href = shortUrl;
      link.textContent = shortUrl
      const shortUrlContainer = document.querySelector('.shortUrl-container');
      shortUrlContainer.append(link);
    }).catch(e=> console.log(e));
});


