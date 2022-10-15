import Notiflix from 'notiflix';

export function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(responce => {
      if (!responce.ok) {
        throw new Error();
      }
      return responce.json();
    })
    .catch(() => {
      clearMarkup();
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

// fetchCountries('sweden');
