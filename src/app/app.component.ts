import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Movie} from "../favMovies/movie";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'salarGorgeesMyFirstAngularApplication';

  // movie = [
  //   new Movie("The Lord of The Rings", 2001, true, "Three", "Gandalf, Frodo, Aragorn"),
  //   new Movie("Interstellar", 2014, true, "One", "Joseph Cooper"),
  //   new Movie("The Hobbit", 2012, true, "Three", "Bilbo Baggins")
//
// ]
}

