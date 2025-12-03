import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router'

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, CommonModule, RouterModule],
  templateUrl: './layouts.html',
  styleUrl: './home.css'
})
export class layouts {
}