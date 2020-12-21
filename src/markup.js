import nameCountry from './templates/name-country.hbs'
import nameCountries from './templates/name-countries.hbs'


const articlesContainerRef = document.querySelector('.js-name-country');

const layoutOneCountry = function markupSite (data) {
    const markup = nameCountry(data)
    articlesContainerRef.insertAdjacentHTML('beforeend', markup)
}

const layoutListCountries = function markupList(data) {
    const markup = nameCountries(data)
    articlesContainerRef.insertAdjacentHTML('beforeend', markup)
}

export default layoutOneCountry;

export {
  layoutListCountries
};


