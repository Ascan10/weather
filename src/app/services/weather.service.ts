import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = '3b435ffebda91b7ab90f7e389cbdbd6c';
  URI: string = '';

  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/forecast?appid=${this.apiKey}&units=metric&lang=ru&q=`;
  }

  getWeather(cityName: string) {
    return this.http.get(`${this.URI}${cityName}`);
  }
}
