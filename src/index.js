import './styles.css';
import debounce from 'lodash.debounce';
import getCountries from './fetchCountries' 
import markupSite from './markup'
import  {layoutListCountries}  from './markup'
import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
defaultModules.set(PNotifyMobile, {});

// --------------------------------
import '@pnotify/core/dist/BrightTheme.css';


// ----------------------------------

const inputRef = document.querySelector('.input-value');
const listCountriesRef = document.querySelector('.country');
const articlesContainerRef = document.querySelector('.js-name-country');

// listCountriesRef.addEventListener('click', layoutListCountries(data));

inputRef.addEventListener('input', debounce((evt) => {
    const country = evt.target.value

    articlesContainerRef.innerHTML = ''

    getCountries(country).then(data => {
      if (data) {
        if (data.length > 10) {
          alert('Too many mathces found. Please enter a more specific query!');
        } else if (data.length < 2) {
          markupSite(data);
        } else {
            layoutListCountries(data);
            const listCountriesRef = document.querySelector('.country');
            listCountriesRef.addEventListener('click', (evt) => {
                console.log(evt.target);
            });
        }
      }
    })
}), 2000)









// (data => {
//         console.log(data.lenght);
//         console.log(data);
//         if (data.lenght < 2) {
//             markupSite(data)
//         }
        
//     });