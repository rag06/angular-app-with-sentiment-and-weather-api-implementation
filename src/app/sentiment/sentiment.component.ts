import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {SentimentService} from '../sentiment.service';
@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent implements OnInit {
  sentiment: Form;
  sentimentRes: any;
  sentimentText: string;
  constructor(private sentiments: SentimentService ) { }

  ngOnInit() {
  }
  onSubmit(data) {
    if (data.valid) {
      console.log('hi sentiment component');
      console.log(data.value.sentimentText);
      this.sentimentText = data.value.sentimentText;
      this.sentiments.getAnalysis(data.value.sentimentText).subscribe(
        (res) => this.sentimentRes = res
      );

      data.reset();
    }
  }
}
