import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities: GeoName[] = [];
  title = 'angular-example';
  mapNavigation: MapNavigation = {
    lat: 50.089815,
    lng: 14.418719,
    zoom: 2
  };

  public onCitiesChange(cities: GeoName[]): void {
    this.cities = cities;
  }

  public onMapNavigationChange(mapNavigation: MapNavigation): void {
    this.mapNavigation = mapNavigation;
  }
}
