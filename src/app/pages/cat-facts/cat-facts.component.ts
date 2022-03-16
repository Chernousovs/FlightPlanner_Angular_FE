import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatFact } from 'src/app/shared/models/cat-fact.model';
import { CatFactService } from 'src/app/shared/services/cat-fact.service';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.scss']
})
export class CatFactsComponent implements OnInit {
  facts$?: Observable<CatFact[]>;

  constructor(private catFactServise: CatFactService) { }

  ngOnInit(): void {
    this.facts$ = this.catFactServise.getCatFacts();
  }

  sayHi(message: string): void {
    console.log(message);
  }
}
