import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TornoaService } from '../services/tornoa.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  tornoasForm: FormGroup;
  submitted = false;
  currentId: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tornoaService: TornoaService,
    private currentRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.tornoasForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      size: ['', Validators.required],
    });
    this.currentRoute.queryParamMap.subscribe(params => {
      this.currentId = +params.get('id');
    });
    if (this.currentId) {
      this.tornoaService
        .getTornoaById(this.currentId)
        .subscribe(data => {
          this.tornoasForm.patchValue(data);
        });
    }
    
  }
  get f() { return this.tornoasForm.controls; }
  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.tornoasForm.invalid) {
        return;
    }
    if (this.currentId) {
      this.tornoasForm.value['id'] = this.currentId;
      this.tornoaService
        .updateTornoa(this.tornoasForm.value)
        .subscribe(
          data => {

            //this.showToast('tornoas modifié avec success.');
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
      this.tornoaService
        .createTornoa(this.tornoasForm.value)
        .subscribe(data => {
          this.router.navigate(['../consult'], {
            relativeTo: this.currentRoute,
          });
        });
    }
}
onCancel() {
  this.router.navigate(['pages', 'tornoas', 'consult']);
}
}
