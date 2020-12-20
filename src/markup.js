import nameCountry from './templates/name-country.hbs'
const articlesContainerRef = document.querySelector('.js-name-country');

export default function markupSite (data) {
    const markup = nameCountry(data)
    articlesContainerRef.insertAdjacentHTML('beforeend', markup)
}