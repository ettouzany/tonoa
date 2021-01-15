import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  countryForm: FormGroup;
  submitted = false;
  currentId: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private countryService: CountryService,
    private currentRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.countryForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      logo: ['', Validators.required],
    });
    this.currentRoute.queryParamMap.subscribe(params => {
      this.currentId = +params.get('id');
    });
    if (this.currentId) {
      this.countryService
        .getCountryById(this.currentId)
        .subscribe(data => {
          this.countryForm.patchValue(data);
        });
    }
    
  }
  get f() { return this.countryForm.controls; }
  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.countryForm.invalid) {
        return;
    }
    if (this.currentId) {
      this.countryForm.value['id'] = this.currentId;
      this.countryService
        .updateCountry(this.countryForm.value)
        .subscribe(
          data => {

            //this.showToast('countrie modifié avec success.');
            this.router.navigate(['../consult'], {
              relativeTo: this.currentRoute,
            });
          },
          error => {
            console.log(error);
          },
        );
      this.currentId = null;
    } else {
      this.countryService
        .createCountry(this.countryForm.value)
        .subscribe(data => {
          this.router.navigate(['../consult'], {
            relativeTo: this.currentRoute,
          });
        });
    }
}
onCancel() {
  this.router.navigate(['country', 'consult']);
}
}
