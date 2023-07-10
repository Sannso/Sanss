import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor() { }

  getTreeNodesData() {
    return [
        {
            key: '0',
            label: 'UTP',
            data: 'UTP work',
            children: [
                {
                    key: '0-0',
                    label: 'Desarrollador Front de Aura',
                    data: 'Aura Work'
                },
                {
                    key: '0-1',
                    label: 'Desarrollador Back de Aura',
                    data: 'Aura Work'
                }
            ]
        },
        {
            key: '1',
            label: 'Pragma',
            data: 'Pragma Work',
            children: [
                { key: '1-0',
                  label: 'BTG Pactual',
                  data: 'Pragma Work',
                  children: [
                    {
                        key: '1-0-0',
                        label: 'Desarrollador Front App BTG',
                        data: 'BTG Work'
                    },
                    {
                        key: '1-0-1',
                        label: 'Desarrollador Front Portales Web BTG',
                        data: 'BTG Work'
                    },
                    {
                        key: '1-0-2',
                        label: 'Soporte de canales BTG y Desarrollador Front',
                        data: 'BTG Work'
                    }
                  ]
                },
                { key: '1-1', label: 'Pragma Orbita', data: 'Pragma Work', children: [{key: '1-1-0', label: 'Desarrollador Front', data: 'BTG Work'}]},
                { key: '1-2', label: 'Pragma Bitacora', data: 'Pragma Work', children: [{key: '1-2-0', label: 'Desarrollador Front', data: 'BTG Work'}]}
            ]
        }
    ];
  }

  getFiles() {
    return Promise.resolve(this.getTreeNodesData());
  }
}
