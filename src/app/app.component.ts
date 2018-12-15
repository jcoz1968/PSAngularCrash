import { IdentityService } from './identity.service';
import { Component, OnInit } from '@angular/core';

import { WeightEntriesService } from './weight-entries.service';

@Component({
  selector: 'hm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(public loginService: IdentityService) {}

  ngOnInit() {}


}
