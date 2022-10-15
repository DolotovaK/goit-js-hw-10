import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './js/fetchCountries';
import {
  renderMarkupOneCountryInfo,
  renderMarkupCountriesList,
  clearMarkup,
  countryList,
  countryInfoContainer,
} from './js/renderMarkup';

const DEBOUNCE_DELAY = 300;
const inputField = document.querySelector('#search-box');

inputField.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

function onInputSearch(evt) {
  let countryName = evt.target.value.trim();
  if (countryName !== '') {
    fetchCountries(countryName).then(countryArr => {
      console.log(countryArr);
      if (countryArr.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (countryArr.length >= 2 && countryArr.length < 10) {
        clearMarkup();
        countryList.innerHTML = renderMarkupCountriesList(countryArr);
      } else if (countryArr.length === 1) {
        clearMarkup();
        countryInfoContainer.innerHTML = renderMarkupOneCountryInfo(countryArr);
      }
    });
  }
}
