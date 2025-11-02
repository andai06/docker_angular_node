import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private http = inject(HttpClient);

  sayHello() {
    return this.http.get('http://localhost:3001/api/hello').subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err) 
    })
  }
}
