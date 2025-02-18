import { Injectable } from '@angular/core';
import { Format, Resources } from './resources';
import values from '../structure.json';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public extraValues = [
    'Credential Format',
    'Signing Algorithm',
    'Revocation Algorithm',
    'Key Management (Issuer)',
    'Key Management (Holder)',
    'Trust Management',
  ];

  getKey(key: string): keyof Resources {
    return key.startsWith('Key Management')
      ? 'Key Management'
      : (key as keyof Resources);
  }

  getElements(): Resources {
    return values;
  }

  getFormat(key: keyof Resources): Format {
    return this.getElements()[key];
  }

  getStructure(key: keyof Resources) {
    const values = this.getElements()[key].structure.properties;
    delete values['$schema'];
    return values;
  }

  getNames(key: keyof Resources): string[] {
    return Object.keys(this.getFormat(key).values);
  }

  getValues(key: keyof Resources): any {
    return this.getFormat(key).values;
  }
}
