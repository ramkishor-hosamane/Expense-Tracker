// settings.service.ts
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev'

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  getApiUrl(): string {
    return environment.apiUrl;
  }
}
