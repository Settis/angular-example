type GeoNamesResult = {
  totalResultsCount: number,
  geonames: GeoName[]
}

type GeoName = {
  name: string,
  population: number,
  lng: string,
  lat: string,
  countryName: string
}
