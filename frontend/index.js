
import { isValidUrl } from "./urlChecker.js";
const form = document.querySelector("form");
const input = document.querySelector("input");
const closeButton = document.querySelector(".close");
const errorContainer = document.querySelector(".error-container");

form.addEventListener("submit", (e) => {
  console.log('form submitted')
  e.preventDefault();
  const longUrl = input.value;
  console.log(longUrl)
  const validUrl = isValidUrl(longUrl);
  if (!validUrl) {
    alert("enter valid Url");
    return;
  }
  
  fetch('http://localhost:5000/url',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({longUrl}),
  })
    .then((res) => res.json())
    .then((data) => {
      input.value = '';
      console.log(data.shortUrl)
      let shortUrl = data.shortUrl;
      let link = document.createElement('a');
      link.href = shortUrl;
      link.textContent = shortUrl
      const shortUrlContainer = document.querySelector('.shortUrl-container');
      shortUrlContainer.append(link);
      console.log(shortUrlContainer, shortUrl, link)
    }).catch(e=> console.log(e));
});


