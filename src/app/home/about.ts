import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'

import { CommonModule } from '@angular/common';


@Component({
  selector: 'about-root',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: '../patient/patient.component.css'
})
export class about {
}