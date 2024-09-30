import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalculatorService } from './calculator.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'String Calculator';
  inputNumbers: string = '';
  result: number | null = null;
  errorMessage: any | null = null;

  constructor(private calculatorService: CalculatorService) { }

  calculate(): void {
    this.errorMessage = null;
    try {
      this.result = this.calculatorService.add(this.inputNumbers);
    } catch (error) {
      this.errorMessage = error;
      this.result = null;
    }
  }
}
