
export interface Patient {
   id?: number;
  patientName?: string | null;
  age: number | null;
  phone: number |null;
  Addresses: Address[];
}

// Address Interface
export interface Address {
  id?: number;
  street1: string;
  street2: string;
  patientId?: number;
}

// Patient Interface  
export interface IPatient {
  id?: number;
  patientName: string;
  age: number;
  phone: number;
  addresses?: Address[] | undefined;
} 

// Component Property Interface (if needed)
export interface PatientFormData {
  patientName: string | null |undefined;
  age: number | null |undefined;
  phone: number | null |undefined;
  addresses: Address[] ;
}