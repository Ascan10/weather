import { Component, OnInit } from '@angular/core';

import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weather;
  weatherData = [];

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {
    
  }

  getWeather(cityName: string) {
    this.weatherService.getWeather(cityName)
    .subscribe(
      res => {
        this.weather = res;
        this.futureWeather(res);
      },
      err => {
        alert('Пожалуйста, проверьте название города');
      }
    )
  }

  futureWeather(data:any) {
    for (let i = 0; i < data.list.length; i = i + 8) {
      this.weatherData.push(data.list[i]);
    }
  }

  submitLocation(cityName: HTMLInputElement) {
    if (cityName.value) {
      this.getWeather(cityName.value);
      cityName.value = '';
    } else {
      alert('Пожалуйста, введите название города');
    }
    
    cityName.focus();

    return false;
  }
}
