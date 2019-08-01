import { Component, OnInit } from '@angular/core';
import {GeoNamesService} from '../geo-names.service';
import {Observable, Subject} from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  public citiesResult: Observable<GeoNamesResult>;
  public findQuery: string;
  findQueryUpdate = new Subject<string>();
  @Output() citiesChangedNotify = new EventEmitter<GeoName[]>();
  @Output() mapNavigationChangedNotify = new EventEmitter<MapNavigation>();

  constructor(private __GEO_NAMES: GeoNamesService) {
    this.find('');
    this.findQueryUpdate.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(value => this.find(value));
  }

  ngOnInit() {
  }

  public find(name: string): void {
    this.citiesResult = this.__GEO_NAMES.find(name);
    this.citiesResult.subscribe(value => this.citiesChangedNotify.emit(value.geonames));
  }

  public clickOnCity(city: GeoName): void {
    const mapNavigation: MapNavigation = {
      lat: Number(city.lat),
      lng: Number(city.lng),
      zoom: 7
    };
    this.mapNavigationChangedNotify.emit(mapNavigation);
  }

}
