import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  	private apiUrl = 'https://jsonplaceholder.typicode.com'; /*fake service, put your real service*/
  
	constructor(public http: HttpClient) {
		console.log('Hello RestProvider Provider');
	}

  	getUsers() {
	  return new Promise(resolve => {
	    this.http.get(this.apiUrl+'/users').subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
	}

	addUser(data) {
	  return new Promise((resolve, reject) => {
	    this.http.post(this.apiUrl+'/users', JSON.stringify(data), {
		    headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
		    params: new HttpParams().set('param', '1'),
		  })
	      .subscribe(res => {
	        resolve(res);
	      }, (err) => {
	        reject(err);
	      });
	  });
	}

	updateUser(data) {
	  return new Promise((resolve, reject) => {	    
    	this.http.put(this.apiUrl+'/users/1', JSON.stringify(data), {
		    headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
		    params: new HttpParams().set('param', '1'),
		  })
	      .subscribe(res => {
	        resolve(res);
	      }, (err) => {
	        reject(err);
	      });
	  });
	}

	deleteUser(data) {
	  return new Promise((resolve, reject) => {
	    this.http.delete(this.apiUrl+'/users/1', {
		    headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
		    params: new HttpParams().set('param', '1'),
		  })
	      .subscribe(res => {
	        resolve(res);
	      }, (err) => {
	        reject(err);
	      });
	  });
	}
}
