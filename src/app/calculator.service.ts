import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  // // add function to return zero if string is empty
  // add(numbers: string) {
  //   if (!numbers) {
  //     return 0;
  //   }
  //   return parseInt(numbers, 10);
  // }

  //  handles the two values and return the sum 
  // add(numbers: string) {
  //   if (!numbers) {
  //     return 0;
  //   }
  //   const numArray = numbers.split(',').map(num => parseInt(num, 10));
  //   return numArray.reduce((sum, num) => sum + num, 0);
  // }

  // handles multiples numbers 
  // add(numbers: string): number {
  //   if (!numbers) {
  //     return 0;
  //   }

  //   const numArray = numbers.split(',').map(num => parseInt(num, 10));
  //   return numArray.reduce((sum, num) => sum + num, 0);
  // }

  // handles Newline as a Delimiter
  // add(numbers: string): number {
  //   if (!numbers) {
  //     return 0;
  //   }

  //   const delimiter = /[,\n]/;
  //   const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));
  //   return numArray.reduce((sum, num) => sum + num, 0);
  // }

  // handles the custom delimiters
  // add(numbers: string): number {
  //   if (!numbers) {
  //     return 0;
  //   }

  //   const delimiterPattern = /\/\/(.+)\n/;
  //   let delimiter = /[,\n]/;

  //   const customDelimiterMatch = numbers.match(delimiterPattern);
  //   if (customDelimiterMatch) {
  //     delimiter = new RegExp(customDelimiterMatch[1]);
  //     numbers = numbers.split('\n')[1];
  //   }

  //   const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));
  //   return numArray.reduce((sum, num) => sum + num, 0);
  // }

  // handles  negatives numbers 

  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }

    const delimiterPattern = /\/\/(.+)\n/;
    let delimiter = /[,\n]/;

    const customDelimiterMatch = numbers.match(delimiterPattern);
    if (customDelimiterMatch) {
      delimiter = new RegExp(customDelimiterMatch[1]);
      numbers = numbers.split('\n')[1];
    }

    const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));

    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
  }

}
