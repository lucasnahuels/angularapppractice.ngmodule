import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://wttr.in/Buenos+Aires?format=j1';

  constructor(private http: HttpClient) { }

  getWeather(): Observable<string> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.current_condition[0].FeelsLikeC)
    );
  }
}