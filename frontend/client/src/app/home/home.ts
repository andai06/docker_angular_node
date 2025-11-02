import { Component, inject, OnInit } from '@angular/core';
import { HomeService } from '../services/home';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  homeService = inject(HomeService)

  ngOnInit(): void {
    console.log(this.homeService.sayHello())
  }
}
