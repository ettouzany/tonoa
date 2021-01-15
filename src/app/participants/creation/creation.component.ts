import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipantsService } from '../services/participants.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  participantsForm: FormGroup;
  submitted = false;
  currentId: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private participantsService: ParticipantsService,
    private currentRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.participantsForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      size: ['', Validators.required],
    });
    this.currentRoute.queryParamMap.subscribe(params => {
      this.currentId = +params.get('id');
    });
    if (this.currentId) {
      this.participantsService
        .getParticipantsById(this.currentId)
        .subscribe(data => {
          this.participantsForm.patchValue(data);
        });
    }
    
  }
  get f() { return this.participantsForm.controls; }
  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.participantsForm.invalid) {
        return;
    }
    if (this.currentId) {
      this.participantsForm.value['id'] = this.currentId;
      this.participantsService
        .updateParticipants(this.participantsForm.value)
        .subscribe(
          data => {

            //this.showToast('participants modifié avec success.');
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
      this.participantsService
        .createParticipants(this.participantsForm.value)
        .subscribe(data => {
          this.router.navigate(['../consult'], {
            relativeTo: this.currentRoute,
          });
        });
    }
}
onCancel() {
  this.router.navigate(['pages', 'participants', 'consult']);
}
}
