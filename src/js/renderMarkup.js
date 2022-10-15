export const countryList = document.querySelector('.country-list');
export const countryInfoContainer = document.querySelector('.country-info');

export function renderMarkupCountriesList(countryArr) {
  return countryArr
    .map(country => {
      return `
        <li class="countries">
        <img src="${country.flags.png}" alt="Flag" width = "30" height = "20" >
        <p class="country-name">${country.name.common}</p>
        </li>`;
    })
    .join('');
}

export function renderMarkupOneCountryInfo(countryArr) {
  return countryArr
    .map(country => {
      let languages = Object.values(country.languages).join(', ');
      return `
      <div class="countries">
      <img src="${country.flags.png}" alt="Flag" width = "40" height = "30" >
      <h1 class="country-name">${country.name.common}</h1>
      </div>
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
