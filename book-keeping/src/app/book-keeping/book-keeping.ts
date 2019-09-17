export interface Keeping {
    id: number;
    date: Date;
    
    eleUnit : number;
    waterUnit: number;
    airUnit: number;
  
    electricScalar: number;
    waterScalar: number;
    airScalar: number;

    electricUsage: number;
    waterUsage: number;
    airUsage: number;
  
    eleCharge: number;
    waterCharge: number;
    airCharge: number;
  
    otherCharge: number;
    totalCharge: number;
 }