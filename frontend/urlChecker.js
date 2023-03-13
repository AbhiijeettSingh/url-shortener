export function isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }
  
//   // Example usage
//   console.log(isValidUrl('https://www.google.com')); // true
//   console.log(isValidUrl('https://www.google.com/search?q=javascript')); // true
//   console.log(isValidUrl('http://localhost:3000')); // true
//   console.log(isValidUrl('invalid url')); // false

