import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/patient.routes';
import { layouts } from './app/home/layouts';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
bootstrapApplication(layouts, {
  providers: [importProvidersFrom(HttpClientModule),provideRouter(routes)]
}).catch(err => console.error(err));
