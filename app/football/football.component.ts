import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { APIFOOTBALLService } from '../api-football.service'


@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit {

  public footballSearchForm: FormGroup;
  public footballData: any;

  constructor(
    private formBuilder: FormBuilder,


    private API_FOOTBALLService: APIFOOTBALLService) { }

  ngOnInit() {
    this.footballSearchForm = this.formBuilder.group({
      searchTerm: ['']
    });
  }
  sendToAPI_FOOTBALL(formValues){
    this.API_FOOTBALLService
    .getFootball(formValues.searchTerm)
    .subscribe(data => this.footballData = data)
    console.log(this.footballData,);
    

  }

}
