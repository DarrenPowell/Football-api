import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'user',
    template: `
    <h1>User country_name: {{ country_name }}</h1>
    <h1>User team_name: {{ team_name }}</h1>
    `
})
export class FootballUserComponent implements OnInit, OnDestroy {
    country_name;
    team_name;
    //league_name;
    //overall_league_position
    subscription;

    constructor(private _route: ActivatedRoute){

    }
    ngOnInit(){
        this.subscription = this._route.params.subscribe(params => {
            this.country_name = params["country_name"];
            this.team_name = params["team_name"];
           
        })
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}