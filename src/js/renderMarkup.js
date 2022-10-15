export const countryList = document.querySelector('.country-list');
export const countryInfoContainer = document.querySelector('.country-info');

export function renderMarkupCountriesList(countryArr) {
  return countryArr
    .map(country => {
      return `
        <li class="countries">${country.flag} ${country.name.common}</li>`;
    })
    .join('');
}

export function renderMarkupOneCountryInfo(countryArr) {
  return countryArr
    .map(country => {
      let languages = Object.values(country.languages).join(', ');
      return `
        <h1 class="country-name">${country.flag} ${country.name.common}</h1>
        <p> <b>Capital:</b> ${country.capital[0]}</p>
        <p> <b>Popolation:</b> ${country.population}</p>
        <p> <b>Languages:</b> ${languages}</p>
        `;
    })
    .join('');
}

export function clearMarkup() {
  countryList.innerHTML = '';
  countryInfoContainer.innerHTML = '';
}
