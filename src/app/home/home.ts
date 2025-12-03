import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'

import { CommonModule } from '@angular/common';


@Component({
  selector: 'home-root',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: '../patient/patient.component.css'
})
export class home {
}