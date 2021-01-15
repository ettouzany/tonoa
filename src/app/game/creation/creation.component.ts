import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  gameForm: FormGroup;
  submitted = false;
  currentId: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private gameService: GameService,
    private currentRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.gameForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      size: ['', Validators.required],
    });
    this.currentRoute.queryParamMap.subscribe(params => {
      this.currentId = +params.get('id');
    });
    if (this.currentId) {
      this.gameService
        .getGameById(this.currentId)
        .subscribe(data => {
          this.gameForm.patchValue(data);
        });
    }
    
  }
  get f() { return this.gameForm.controls; }
  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.gameForm.invalid) {
        return;
    }
    if (this.currentId) {
      this.gameForm.value['id'] = this.currentId;
      this.gameService
        .updateGame(this.gameForm.value)
        .subscribe(
          data => {

            //this.showToast('game modifié avec success.');
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
      this.gameService
        .createGame(this.gameForm.value)
        .subscribe(data => {
          this.router.navigate(['../consult'], {
            relativeTo: this.currentRoute,
          });
        });
    }
}
onCancel() {
  this.router.navigate(['pages', 'game', 'consult']);
}
}
