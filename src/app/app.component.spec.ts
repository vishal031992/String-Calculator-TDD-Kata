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
  });
});
