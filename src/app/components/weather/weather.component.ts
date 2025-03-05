import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  template: `
    <div class="weather-container">
      <p *ngIf="temperature">Feels Like: {{ temperature }}°C in Buenos Aires</p>
    </div>
    `,
  standalone: false,
})
export class WeatherComponent implements OnInit {
  temperature: string | undefined;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.fetchWeather();
  }

  fetchWeather(): void {
    this.weatherService.getWeather().subscribe(temp => {
      this.temperature = temp;
    });
  }
}