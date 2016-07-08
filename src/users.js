import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';
import {WakandaClient} from "wakanda-javascript-client";

let wakanda = new WakandaClient('http://localhost:8081');

@inject(HttpClient)
export class Users {
  heading = 'Github Users';
  users = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });
    
    wakanda.getCatalog().then(function (ds) {
		//ds (for dataStore) is our catalog, it contains all ours dataClasses. For example:
		//ds.Company, ds.Employee, etc.
	});

    this.http = http;
  }

  activate() {
    return this.http.fetch('users')
      .then(response => response.json())
      .then(users => this.users = users);
  }
}
