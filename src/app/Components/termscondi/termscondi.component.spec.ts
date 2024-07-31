import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermscondiComponent } from './termscondi.component';

describe('TermscondiComponent', () => {
  let component: TermscondiComponent;
  let fixture: ComponentFixture<TermscondiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermscondiComponent]
    });
    fixture = TestBed.createComponent(TermscondiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
