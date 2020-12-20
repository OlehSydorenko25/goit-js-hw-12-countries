import './styles.css';
import debounce from 'lodash.debounce';
import getCountries from './fetchCountries' 
import markupSite from './markup'
const inputRef = document.querySelector('.input-value');
const articlesContainerRef = document.querySelector('.js-name-country');

inputRef.addEventListener('input', debounce((evt) => {
    const country = evt.target.value

    articlesContainerRef.innerHTML = ''

    getCountries(country).then(data => {
        markupSite(data)
    });
}), 500)
