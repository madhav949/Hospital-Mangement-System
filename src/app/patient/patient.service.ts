import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPatient, Patient, PatientFormData } from './patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patientObjs:Array<Patient> = new Array<Patient>();
  private baseUrl = 'https://localhost:7239/api/PatientAPI'; // JSON Server URL//http://localhost:3000/patient//https://localhost:7239/Patient/SubmitPatient
  

  constructor(private http: HttpClient) { }
//get data from backend
  getPatients(): Observable<IPatient[]> {
    return this.http.get<IPatient[]>(this.baseUrl);
   
  }
  addPatient(patient: PatientFormData): Observable<Patient> {
    return this.http.post<Patient>(this.baseUrl, patient);
  }
   
  //this upadate/edit the patient table
updatePatient(id: number, patient: PatientFormData) {
  return this.http.put<Patient>(`${this.baseUrl}/${id}`, patient);
}
//this delete the patient
deletePatient(id: number) {
  return this.http.delete(`${this.baseUrl}/${id}`);
}

}
