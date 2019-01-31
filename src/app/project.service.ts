import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) { 
    this.projects = database.list('projects');
  }
  getProjects(){
    return this.projects;
  }

  getProjectById(projectId: string){
    return this.database.object('projects/' + projectId);
  }

  addProject(newProject: Project){
    this.projects.push(newProject);
  }

  updateProject(localUpdatedProject){
    var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({projectName: localUpdatedProject.projectName,
                                projectManager: localUpdatedProject.projectManager,
                                
                                description: localUpdatedProject.description,
                                moneyToRaise: localUpdatedProject.moneyToRaise,
                                image: localUpdatedProject.image});
  }
  deleteProject(projectToDelete){
    this.getProjectById(projectToDelete.$key).remove();
  }

}
