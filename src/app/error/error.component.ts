import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  errorTypeId = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.errorTypeId = Number(this.route.snapshot.paramMap.get('id'));
  }

}
