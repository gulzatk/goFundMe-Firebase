import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string;
  projectToDisplay;

  constructor( private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    // console.log(this.projectId);
    // this.projectToDisplay = this.projectService.getProjectById(this.projectId);

    this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
      this.projectToDisplay = new Project(dataLastEmittedFromObserver.projectName,
        dataLastEmittedFromObserver.projectManager,
        dataLastEmittedFromObserver.description, dataLastEmittedFromObserver.moneyToRaise,
        dataLastEmittedFromObserver.image)
 
      console.log(this.projectToDisplay);
    })
  }

}
