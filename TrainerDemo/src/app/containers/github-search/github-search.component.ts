import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css'],
  providers: [SearchService],
})
export class GithubSearchComponent implements OnInit {
  search = new FormControl(null);
  repositories: any[] = [];
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((val) => this.searchService.getRepo(val))
      )
      .subscribe((value: any) => {
        console.log(value);
        this.repositories = value.items;
        // this.searchRepo(value);
      });
  }

  searchRepo(query: string) {
    this.searchService.getRepo(query).subscribe();
  }
}
