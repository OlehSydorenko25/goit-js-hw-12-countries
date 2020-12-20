export default function getCountries(searchСountry) { 
  return fetch(`https://restcountries.eu/rest/v2/name/${searchСountry}`)
    .then(res => res.json());
}



