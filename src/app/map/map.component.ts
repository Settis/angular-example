import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() cities: GeoName[];
  @Input() mapNavigation: MapNavigation;

  constructor() { }

  ngOnInit() {
  }

}
