import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoNamesService {
  constructor(private http: HttpClient) { }

  public find(name: string): Observable<GeoNamesResult> {
    return this.http.get<GeoNamesResult>(this.makeUrl(name));
  }

  private makeUrl(name: string): string {
    return `http://api.geonames.org/searchJSON?q=${name}&username=strannik&featureClass=P&maxRows=25`;
  }

}
