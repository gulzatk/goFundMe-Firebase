import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],

})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }



submitForm(projectName: string, projectManager: string, description: string, moneyToRaise: string, image: string) {
  var newProject: Project = new Project(projectName, projectManager, description, moneyToRaise, image);
  this.projectService.addProject(newProject);
}
}