import { Component, Input, OnInit } from '@angular/core';
import { Speaker } from '../model/speaker';


@Component({
  selector: 'app-speaker-detail',
  templateUrl: './speaker-detail.component.html',
  styleUrls: ['./speaker-detail.component.scss']
})
export class SpeakerDetailComponent implements OnInit {

  @Input() speaker: Speaker;

  constructor() { }

  ngOnInit(): void {
  }

}
