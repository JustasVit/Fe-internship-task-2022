import {Country} from "../models/Country";

export class CountriesService {

  countries: Country[] = [
    {name: 'Lithuania', cities: [{name: 'Vilnius'}]},
    {name: 'Latvia', cities: [{name: 'Riga'}]},
    {name: 'Estonia', cities: [{name: 'Tallinn'}]}
  ]

  getCountries() {
    return this.countries;
  }

  getCities(countryName: string) {
    const countryFound = this.countries.find(country => country.name == countryName)
    return countryFound?.cities;
  }
}
