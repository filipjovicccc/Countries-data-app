import {createContext} from "react"

export const CountryContext = createContext({
    countries: [],
    setCountries: ()=>{}

})

export const FilterCountryContext = createContext({
     
    filteredCountries: [],
    setFilteredCountries: ()=>{}
})
