import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers : [WeatherService]
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  weather : Form;
  constructor(private weathers:WeatherService) { }

  ngOnInit() {
  }
  onSubmit(data) {
    if (data.valid) {
      console.log('hi weather component');
      console.log(data.value.location);
      //this.weatherData = 
      this.weathers.getWeatherDetails(data.value.location).subscribe(
        (data) => this.weatherData =data);
      console.log('hi weather service return');
      console.log( this.weatherData );
      data.reset();

    }
  }
}
