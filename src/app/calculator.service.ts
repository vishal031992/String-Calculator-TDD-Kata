import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }


  // Refactor and some modification in code 
  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }

    let specialChar = /,|\n/;

    const numberArray = numbers.split(specialChar);

    let negatives: number[] = [];

    for (let num of numberArray) {
      let parsedNum = parseInt(num, 10);
      if (parsedNum < 0) {
        negatives.push(parsedNum);
      }
    }

    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
    const regex = /[^a-zA-Z0-9]+/g;

    const onluNymber = numbers.split(regex).filter(part => part.trim() !== '');
    let numModification = [];
    const regex1 = /[^0-9]/g;
    for (var i = 0; i < onluNymber.length; i++) {
      const num = onluNymber[i].replace(regex1, '');
      if (Number(num)) {
        numModification.push(Number(num));
      }
    }
    let sumOfAll = 0

    for (const num of numModification) {
      sumOfAll += Number(num);
    }

    return sumOfAll
  }

}
