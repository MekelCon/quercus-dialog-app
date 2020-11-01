import { Injectable } from '@angular/core';

import { Speaker } from '../model/speaker';
import { SPEAKERS } from '../model/mocks/mock-speakers';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  constructor(
    private messageService: MessageService
  ) { }

  getSpeakers(): Observable<Speaker[]> {
    this.messageService.add('SpeakerService: fetched speakers');
    return of(SPEAKERS);
  }
}
