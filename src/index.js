import './styles.css';
import debounce from 'lodash.debounce';
import getCountries from './fetchCountries' 
import markupSite from './markup'
import  {layoutListCountries}  from './markup'
import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
defaultModules.set(PNotifyMobile, {});
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css'


const inputRef = document.querySelector('.input-value');
const articlesContainerRef = document.querySelector('.js-name-country');

inputRef.addEventListener('input', debounce((evt) => {
    const country = evt.target.value
  articlesContainerRef.innerHTML = ''

  if (!country) {
    return
  }

    getCountries(country).then(data => {
      if (data) {
        if (data.length > 10) {
          alert('Too many mathces found. Please enter a more specific query!');
        } else if (data.length < 2) {
          markupSite(data);
        } else {
            layoutListCountries(data);
          const listCountriesRef = document.querySelector('.country-list');
          
          listCountriesRef.addEventListener('click', (evt) => {
            const selectCounntryBtn = evt.target.textContent
            getCountries(selectCounntryBtn).then(data => {
              markupSite(data)
              listCountriesRef.innerHTML = ''
            })
          });
        }
      }
    })
}, 500))

