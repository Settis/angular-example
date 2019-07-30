import { Component, OnInit } from '@angular/core';
import {GeoNamesService} from '../geo-names.service';
import {Observable, Subject} from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  public cities: Observable<GeoNamesResult>;
  public findQuery: string;
  findQueryUpdate = new Subject<string>();

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
    this.cities = this.__GEO_NAMES.find(name);
  }

}
