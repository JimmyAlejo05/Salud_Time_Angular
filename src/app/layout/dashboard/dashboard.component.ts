import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'RECUERDA',
                text: 'Cuídate y protégete ¡Usa Tapabocas! Port tí y por todos los que quieres'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'GRACIAS',
                text: 'Los médicos, enférmeros, auxiliar, farmacéutico, celadiores, cuidadores'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'James Dean',
                text: '“No puedo cambiar la dirección del viento, pero sí ajustar mis velas para llegar siempre a mi destino.”'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'Mensaje',
                message: ``
            },
            {
                id: 2,
                type: 'Recordatorio',
                message: ``
            }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
