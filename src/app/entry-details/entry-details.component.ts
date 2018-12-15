import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entry } from './../model/entry';
import { WeightEntriesService } from './../weight-entries.service';

@Component({
  selector: 'hm-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {
  entry: Entry;

  constructor(public entriesService: WeightEntriesService, private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.currentRoute.snapshot.params.id;
    this.entriesService.getEntries().subscribe(entries => {
      this.entry = entries.find(e => {
        return e.id === id;
      });
    });
  }

}
