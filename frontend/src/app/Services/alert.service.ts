import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum AlertType {
    Success = 'bg-success',
    Error = 'bg-warning',
    Warning = 'bg-success',
    Info = 'bg-info'
}

export interface Alert {
    message: string;
    type: AlertType;
}

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    private alertsSubject = new BehaviorSubject<Alert[]>([]);
    alerts$: Observable<Alert[]> = this.alertsSubject.asObservable();

    constructor() { }

    addAlert(alert: Alert, timeout = 5000): void {
        this.alertsSubject.next([...this.alertsSubject.getValue(), alert]);
        setTimeout(() => {
            this.removeAlert(alert);
        }, timeout);
    }

    removeAlert(alert: Alert): void {
        const alerts = this.alertsSubject.getValue().filter(a => a !== alert);
        this.alertsSubject.next(alerts);
    }
}
