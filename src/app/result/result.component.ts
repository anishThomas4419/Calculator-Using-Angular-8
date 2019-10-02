import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() calculationResult = 0;
  @Input() calculationString = '';

  constructor() { }

  ngOnInit() {
  }

}
