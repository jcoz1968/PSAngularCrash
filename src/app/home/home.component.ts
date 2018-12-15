import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';
import { Entry } from './../model/entry';

@Component({
  selector: 'hm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showBodyFat = true;
  entries: Entry[];

  constructor(public entriesService: WeightEntriesService) { }

  ngOnInit() {
    this.refreshData();
  }

  toggleBodyFat() {
    this.showBodyFat = !this.showBodyFat;
  }

  createNewEntry(entry: Entry) {
    this.entriesService.addEntry(entry).subscribe(() => {
      this.refreshData();
    });
  }

  refreshData() {
    this.entriesService.getEntries().subscribe(entries => {
      this.entries = entries;
    });
  }

}
