import { Component, OnInit } from '@angular/core';
import { SubsectionModel } from 'src/app/subsection/subsection.response';
import { SubsectionService } from 'src/app/subsection/subsection.service';

@Component({
  selector: 'app-subsection-side-bar',
  templateUrl: './subsection-side-bar.component.html',
  styleUrls: ['./subsection-side-bar.component.css']
})
export class SubsectionSideBarComponent implements OnInit {
  subsections: Array<SubsectionModel> | undefined;
  displayViewAll: boolean | undefined;

  constructor(private subsectionService: SubsectionService) {
    this.subsectionService.getAllSubsections().subscribe(data => {
      if (data.length >= 4) {
        this.subsections = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.subsections = data;
      }
    });
   }

  ngOnInit(): void {
  }

}
