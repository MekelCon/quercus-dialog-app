import { Component, OnInit } from '@angular/core';
import { Speaker } from '../model/speaker';
import { MessageService } from '../services/message.service';
import { SpeakerService } from '../services/speaker.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  speakers: Speaker[];
  selectedSpeaker: Speaker;

  constructor(
    private heroService: SpeakerService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getSpeakers()
  }

  onSelect(speaker: Speaker): void {
    this.selectedSpeaker = speaker;
    this.messageService.add(`HeroesComponent: Selected hero id=${speaker.id}`);
  }

  getSpeakers(): void {
    this.heroService.getSpeakers()
      .subscribe(speakers => this.speakers = speakers);
  }

}
