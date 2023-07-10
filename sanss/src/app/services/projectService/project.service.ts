import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjectsData() {
    return [
        {
            id: '001',
            name: 'Fulvo',
            description: 'Fulvo será una PWA (aplicación web progresiva) que se enfocara en el desarrollo y el planeamiento de partidos de futbol, micro-futbol o futbol 7 (canchas sintéticas), dando la posibilidad de inscribir equipos, jugadores, apostar partidos, ganar premios, entre otras cosas con la moneda interna de la aplicación.',
            image: 'https://archivos-sanss.s3.amazonaws.com/imgs/fulvo.png',
            category: 'Accessories',
            inventoryStatus: 'DEVELOP',
        },
        {
            id: '002',
            name: 'New Project',
            description: 'No Description',
            image: 'https://archivos-sanss.s3.amazonaws.com/imgs/soon.png',
            category: 'No Description',
            inventoryStatus: 'WAITING',
        }
    ];
  }

  getProjects() {
    return Promise.resolve(this.getProjectsData());
  }
}
