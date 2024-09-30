import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  // add function to return zero if string is empty
  add(numbers: string) {
    if (!numbers) {
      return 0;
    }
    return
  }
}
