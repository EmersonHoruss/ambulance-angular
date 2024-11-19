import { HttpClient } from '@angular/common/http';
import { Medic } from '../domain/medic';
import { MedicRepository } from '../domain/medic.repository';
import { BaseInfrastructure } from '../../shared/infrastructure/base.infrastructure';
import { Injectable } from '@angular/core';

@Injectable()
export class MedicInfrastructure
  extends BaseInfrastructure<Medic>
  implements MedicRepository
{
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient, '/medics');
  }
}
