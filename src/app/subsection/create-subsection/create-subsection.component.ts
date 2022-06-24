import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { SubsectionModel } from '../subsection.response';
import { SubsectionService } from '../subsection.service';

@Component({
  selector: 'app-create-subsection',
  templateUrl: './create-subsection.component.html',
  styleUrls: ['./create-subsection.component.css']
})
export class CreateSubsectionComponent implements OnInit {
  createSubsectionForm: FormGroup;
  subsectionModel: SubsectionModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private subsectionService: SubsectionService) {
    this.createSubsectionForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.subsectionModel = {
      name: '',
      description: ''

    }
   }

  ngOnInit() {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createSubsection() {
    this.subsectionModel.name = this.createSubsectionForm.get('title')?.value;
    this.subsectionModel.description = this.createSubsectionForm.get('description')?.value;
    this.subsectionService['createSubsection'](this.subsectionModel).subscribe((data: any) => {
      this.router.navigateByUrl('/list-subsections');
    }, (error: any) => {
      throwError(error);
    })
  }
}
   