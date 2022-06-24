import { Component, OnInit } from '@angular/core';
import { SubsectionModel } from '../subsection.response';
import { SubsectionService } from '../subsection.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-subsections',
  templateUrl: './list-subsections.component.html',
  styleUrls: ['./list-subsections.component.css']
})
export class ListSubsectionsComponent implements OnInit {

  subsections: Array<SubsectionModel> | any;
  constructor(private subsectionService: SubsectionService) { }

  ngOnInit() {
    this.subsectionService.getAllSubsections().subscribe(data => {
      this.subsections = data;
    }, error => {
      throwError(error);
    })
  }
}