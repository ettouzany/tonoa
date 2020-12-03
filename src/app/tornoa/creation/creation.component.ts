import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EntiteService } from '../services/entites.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  entitesForm: FormGroup;
  submitted = false;
  currentId: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private entiteService: EntiteService,
    private currentRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.entitesForm = this.formBuilder.group({
      id: [],
      nom: ['', Validators.required],
      code: ['', Validators.required],
    });
    this.currentRoute.queryParamMap.subscribe(params => {
      this.currentId = +params.get('id');
    });
    if (this.currentId) {
      this.entiteService
        .getEntiteById(this.currentId)
        .subscribe(data => {
          this.entitesForm.patchValue(data);
        });
    }
    
  }
  get f() { return this.entitesForm.controls; }
  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.entitesForm.invalid) {
        return;
    }
    if (this.currentId) {
      this.entitesForm.value['id'] = this.currentId;
      this.entiteService
        .updateEntite(this.entitesForm.value)
        .subscribe(
          data => {

            //this.showToast('entites modifié avec success.');
            this.router.navigate(['../consulter'], {
              relativeTo: this.currentRoute,
            });
          },
          error => {
            alert(error);
          },
        );
      this.currentId = null;
    } else {
      this.entiteService
        .createEntite(this.entitesForm.value)
        .subscribe(data => {
          this.router.navigate(['../consulter'], {
            relativeTo: this.currentRoute,
          });
        });
    }
}
onCancel() {
  this.router.navigate(['pages', 'entites', 'consulter']);
}
}
