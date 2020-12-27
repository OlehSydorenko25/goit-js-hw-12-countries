export default function getCountries(searchСountry) { 
  return fetch(`https://restcountries.eu/rest/v2/name/${searchСountry}`)
    .then(res => {
      if (res.ok) {
  return res.json();      
}
throw new Error('Error fetching data');
    });
}



