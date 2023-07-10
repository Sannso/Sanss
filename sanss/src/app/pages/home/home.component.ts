import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Project } from 'src/app/interfaces/projects';
import { NodeService } from 'src/app/services/nodeService/node.service';
import { ProjectService } from 'src/app/services/projectService/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  getSanssImage:string = 'https://archivos-sanss.s3.amazonaws.com/imgs/Sans_overworld.png';

  projects: Project[] | any;
  project: Project;
  responsiveOptions: any[] | any;

  files!: TreeNode[];

  isDescriptionCardOpen: boolean;

  constructor(private projectsService: ProjectService, private nodeService: NodeService) {
    this.isDescriptionCardOpen = false;
    this.project = {};
  }

  ngOnInit() {
      this.projectsService.getProjects().then((values) => {
          this.projects = values;
      });

      this.responsiveOptions = [
          {
              breakpoint: '1199px',
              break: 1199,
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              break: 991,
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              break: 767,
              numVisible: 1,
              numScroll: 1
          }
      ];

      this.nodeService.getFiles().then((data) => (this.files = data));
  }

  getSeverity(status: string) {
      switch (status) {
          case 'DONE':
              return 'success';
          case 'DEVELOP':
              return 'warning';
          case 'WAITNG':
              return 'danger';
          default:
            return 'danger';
      }
  }

  isCellphone(){
    if(screen.width < this.responsiveOptions[2].break){
      return true;
    }
    else{
      return false;
    }
  }

  isButtonDisable(status:string, type:string){
    // O = open, D = description
    switch (status) {
      case 'DONE':
        return false;

      case 'DEVELOP':
        if(type == 'O'){return true}
        else{return false}

      case 'WAITNG':
        return true;

      default:
        return true;
    }
  }

  openDescription(project: Project){
    this.project = project;
    this.isDescriptionCardOpen = true;
    console.log("wtf")
  }

  closeDescription(){
    this.isDescriptionCardOpen = false;
  }
}
