import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CountryService } from '../services/country.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
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
    private countryService:CountryService) { }
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
        title: 'Country Name'
      },
    }
  };

  ngOnInit(): void {
    this.iswaiting=true;
    this.countryService.getCountries()
    .subscribe((data: any) => {
      this.iswaiting=false;
      this.source.load(data);
    });
  }
 
  deleteIt(){
    this.countryService.deleteCountry(this.id)
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
    this.router.navigate(['country', 'create']);

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

onCancel() {
  this.id=0;
  this.isEdit =false;
}

}
