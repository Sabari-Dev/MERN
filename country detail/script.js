let selectCountry = document.querySelector(".countryName");
let search = document.querySelector(".search");
let details = document.querySelector("#details");
search.addEventListener("click", () => {
  let countryUrl = `https://restcountries.com/v3.1/name/${selectCountry.value}?fullText=true`;
  console.log(countryUrl);
  async function fetchData() {
    try {
      const response = await fetch(countryUrl);

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        details.innerHTML = ` <div class="country-image col-6">
                            <img src="${data[0].flags.png}" alt="" />
          </div>
          <div class="country-details col-6">
            <table>
              <tr>
                <th>Country Name:</th>
                <td>${data[0].name.common}</td>
              </tr>
              <tr>
                <th>Capital city:</th>
                <td>${data[0].capital[0]}</td>
              </tr>
               <tr>
                <th>Currency:</th>
                <td>${data[0].currencies[0].name}</td>
              </tr>
            </table>
          </div>`;
      } else {
        throw new Error("Error: " + response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  fetchData();
});
