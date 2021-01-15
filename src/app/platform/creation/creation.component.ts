import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatformService } from '../services/platform.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  platformForm: FormGroup;
  submitted = false;
  currentId: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private platformService: PlatformService,
    private currentRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.platformForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      logo: ['', Validators.required],
    });
    this.currentRoute.queryParamMap.subscribe(params => {
      this.currentId = +params.get('id');
    });
    if (this.currentId) {
      this.platformService
        .getPlatformById(this.currentId)
        .subscribe(data => {
          this.platformForm.patchValue(data);
        });
    }
    
  }
  get f() { return this.platformForm.controls; }
  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.platformForm.invalid) {
        return;
    }
    if (this.currentId) {
      this.platformForm.value['id'] = this.currentId;
      this.platformService
        .updatePlatform(this.platformForm.value)
        .subscribe(
          data => {

            //this.showToast('platform modifié avec success.');
            this.router.navigate(['../consult'], {
              relativeTo: this.currentRoute,
            });
          },
          error => {
            alert(error);
          },
        );
      this.currentId = null;
    } else {
      this.platformService
        .createPlatform(this.platformForm.value)
        .subscribe(data => {
          this.router.navigate(['../consult'], {
            relativeTo: this.currentRoute,
          });
        });
    }
}
onCancel() {
  this.router.navigate(['platform', 'consult']);
}
}
