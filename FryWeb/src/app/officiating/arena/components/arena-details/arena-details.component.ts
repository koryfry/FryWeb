import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

// Import model
import { Arena } from '../../../../models/arena/arena.model';

// Import Services
import { ArenaService } from '../../../../services/arena.service';

@Component({
  selector: 'fw-arena-details',
  templateUrl: './arena-details.component.html',
  styleUrls: ['./arena-details.component.scss']
})
export class ArenaDetailsComponent implements OnInit {

  arena: Observable<Arena>;
  arenaID: number;

  constructor(
    private route: ActivatedRoute,
    private arenaService: ArenaService
  ) 
  { 
    
  }

  ngOnInit() {
    this.arenaID = Number(this.route.snapshot.params['id']);
    this.arenaService.getArenaById(this.arenaID).subscribe(res => {
      this.arena = res[0];
      console.log('Arena: ', this.arena);
    }, err => {
      console.log('Error: ', err);
    });
  }

}
