import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Alert, AlertService } from '../Services/alert.service';
@Component({
    selector: 'alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnDestroy {
    alerts: Alert[] = [];
    private alertSubscription: Subscription;

    constructor(private alertService: AlertService) {
        this.alertSubscription = this.alertService.alerts$.subscribe(alerts => {
            this.alerts = alerts;
        });
    }

    ngOnDestroy(): void {
        if (this.alertSubscription) {
            this.alertSubscription.unsubscribe();
        }
    }

    removeAlert(alert: Alert): void {
        this.alertService.removeAlert(alert);
    }
}
