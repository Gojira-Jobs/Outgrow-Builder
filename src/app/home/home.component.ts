import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
abc(){
  console.log("Hii");
  //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
            this.router.navigate(['/builder']);
}
}
