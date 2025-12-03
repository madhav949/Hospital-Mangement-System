import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';  
import { IPatient, Patient, PatientFormData } from './patient.model';  
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule,NgIf

  ],
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  //patients: Patient[] = [];
   patient: PatientFormData = { 
  
    patientName: "", 
    age: null, 
    phone: null, 
    addresses: [] 
  };
  userid:number|null=null
  iseditmode:boolean=false
  Allpatients:IPatient [] =[]
  filterData:IPatient[]=[]
editingPatientId:number | null= null
  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.loadPatients(); // Load patients when component starts
  }

 loadPatients() {
  this.patientService.getPatients().subscribe((res: any) => {
    console.log('Response from API:', res);
    this.Allpatients=res
  });
}
// Add this method
  addAddress(): void {
    if (!this.patient.addresses) {
      this.patient.addresses = [];
    }
    this.patient.addresses.push({
      street1: '',
      street2: ''
    });
  }

  // Add this method
removeAddress(index: number): void {
  if (this.patient.addresses && this.patient.addresses.length > 1) {
    this.patient.addresses.splice(index, 1);
  } else if (this.patient.addresses && this.patient.addresses.length === 1) {
    // Clear the single address instead of removing it
    this.patient.addresses[0] = { street1: '', street2: '' };
  }
}
Add() {
console.log(this.patient)
  
      this.patientService.addPatient(this.patient )
        .subscribe((res: any) => {
          this.loadPatients()
          console.log (res)
        });
    }
    deletePatient(id:number){
      this.patientService.deletePatient(id).subscribe((res: any) =>{
        console.log(res)
        this.loadPatients()
      })
      this.Allpatients=this.Allpatients.filter((p)=>p.id!=id)
    }
    editPatient(id:number){
      this.iseditmode=true
      const editData = this.Allpatients.find((p)=>p.id==id)
      console.log(editData)
      this.patient.patientName = editData?.patientName
      this.patient.age = editData?.age
      this.patient.phone = editData?.phone
      editData?.addresses?.map((a:any)=>{
        this.patient.addresses[0].street1=a.street1
        this.patient.addresses[0].street2=a.street2

      })
      this.userid = id
     
    }
    update(){
 this.patientService.updatePatient(this.userid!,this.patient).subscribe((res:any)=>{
        console.log(res)
        this.loadPatients()
      })
    }
    cancel(){
      this.iseditmode= false
    }
  };
