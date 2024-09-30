import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculatorService } from "./calculator.service"

describe('AppComponent', () => {
  let calc_service: CalculatorService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
    calc_service = TestBed.inject(CalculatorService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'StringCalculatorTDDKata' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('StringCalculatorTDDKata');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('StringCalculatorTDDKata');
  });

  // First case return 0 if string is empty
  describe('Basic Case', () => {
    it('should return 0 for an empty string', () => {
      expect(calc_service.add('')).toEqual(0);
    });
    it('should return the number in case of single value', () => {
      expect(calc_service.add('1')).toEqual(1);
    });
  });
  // Handles the multiple values
  describe('Handling multiple numbers', () => {
    it('should return the sum of two numbers', () => {
      expect(calc_service.add('1,5')).toEqual(6);
    });

    it('should handle an any amount of numbers', () => {
      expect(calc_service.add('1,2,3,4')).toEqual(10);
    });
  });
  // handles delimiters
  describe('Handling delimiters', () => {
    it('should handle new lines between numbers', () => {
      expect(calc_service.add('1\n2,3')).toEqual(6);
    });
  })

});
