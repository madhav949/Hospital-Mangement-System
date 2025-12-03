import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home').then(mod => mod.home)   // lazy loads home.ts
  },
  {
    path: 'patient',
    loadComponent: () =>
      import('./patient/patient.component').then(mod => mod.PatientComponent)  
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./home/about').then(mod => mod.about)  // lazy loads about.ts
  },
//   {
//     // path: '',
//     // redirectTo: 'home',
//     // pathMatch: 'full'
//   }
];
