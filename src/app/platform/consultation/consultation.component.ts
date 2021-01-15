import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PlatformService } from '../services/platform.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  platformsForm: FormGroup;
  submitted = false;
  currentId: number;
  source: LocalDataSource = new LocalDataSource();
  id:number = 0;
  isEdit:boolean;
  iswaiting:boolean;
  message:string = 'Are you sure?';

  constructor(
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
    private currentRoute: ActivatedRoute,
    private platformService:PlatformService) { }
  settings = {
    mode: 'external',
    selectMode: 'single',
    add: {
      addButtonContent: '<i class="material-icons-two-tone">add_circle</i>',
      createButtonContent: '<i class="material-icons-two-tone">check</i>',
      cancelButtonContent: '<i class="material-icons-two-tone">clear</i>',
    },
    edit: {
      editButtonContent: '<i class="material-icons-two-tone">create</i>',
      saveButtonContent: '<i class="material-icons-two-tone">check</i>',
      cancelButtonContent: '<i class="material-icons-two-tone">clear</i>',
    },
    delete: {
      deleteButtonContent: '<i class="material-icons-two-tone">delete</i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Platform Name'
      },
    }
  };

  ngOnInit(): void {
    this.iswaiting=true;
    this.platformService.getPlatforms()
    .subscribe((data: any) => {
      this.iswaiting=false;
      this.source.load(data);
    });
  }
 
  deleteIt(){
    this.platformService.deletePlatform(this.id)
      .subscribe(
        (data) => {
          this.ngOnInit();
          this.id=0;
        },
        error => {
          this.ngOnInit();
          this.id=0;
                },);
  
  }
  
  onDelete(event): void {
     this.id = event.data['id'];
  }

  onCreate(event): void {
    this.router.navigate(['platform', 'create']);

  }

  onEdit(event): void {
    this.router.navigate(['../create'],
    {
      relativeTo: this.activatedRoute,
      queryParams: {
        id: event.data['id'],
      },
    });
  }

  get f() { return this.platformsForm.controls; }
  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.platformsForm.invalid) {
        return;
    }
    if (this.currentId) {
      this.platformsForm.value['id'] = this.currentId;
      this.platformService
        .updatePlatform(this.platformsForm.value)
        .subscribe(
          data => {

            //this.showToast('platforms modifié avec success.');
            this.id=0;
            this.isEdit =false;
            this.ngOnInit()
          },
          error => {
            alert(error);
          },
        );
      this.currentId = null;
    } else {
      this.platformService
        .createPlatform(this.platformsForm.value)
        .subscribe(data => {
          this.id=0;
          this.isEdit =false;
          this.ngOnInit()
        });
    }
}
onCancel() {
  this.id=0;
  this.isEdit =false;
}
}
