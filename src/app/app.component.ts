import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, RouterModule],
  templateUrl: `./app.component.html`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ERP-jornada';
}
