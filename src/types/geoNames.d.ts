type GeoNamesResult = {
  totalResultsCount: number,
  geonames: GeoName[]
}

type GeoName = {
  name: string,
  population: number,
  lng: number,
  lat: number,
  countryName: string
}
