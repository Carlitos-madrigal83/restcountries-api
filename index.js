const cardTemplate = function (country) {
  return  `<div class="card">
              <img id="flag-image" src="${country.flags.png}" alt="flag" />
              <h1 class="center">${country.name.common}</h1>
            </div>`;
};

  const countriesNode = document.getElementById("countries");

  const input = document.getElementById('input');

 
      fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((countries) => {
        input.addEventListener('keyup', (e) => {
          const filteredCountries = countries.filter((country) => 
          country.name.common.toLowerCase().includes(e.target.value)
          );
          countriesNode.innerHTML = '';
          filteredCountries.forEach((country) => {
            countriesNode.innerHTML += cardTemplate(country);
          });
        });
        countries.forEach((country) => {
          countriesNode.innerHTML += cardTemplate(country);
      });
    });

  //---OTRA FORMA DE HACER EL EJERCICIO SIN HACER EL BONUS---//
  // fetch('https://restcountries.com/v3.1/all')
  //   .then(response => response.json())
  //   .then(function (countries) {
    //     const newCountry = countries.map(e =>{
      //       let bandera = e.flags.png
      //       let nombre = e.name.common
      //       countriesNode.innerHTML += cardTemplate(bandera, nombre)
      //     })
      // Here is where you'll need to add into the DOM all the countries received from API 
      
      // 1 - We will need to iterate the countries variable with a loop
      // 2 - You can use the cardTemplate() function to create a div with a class card already styled
      // 💡 you can use countriesNode variable to add elements
      // });