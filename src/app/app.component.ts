import { Component } from '@angular/core';
import { TestServiceService } from './services/test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'handler';

  constructor() { }

  ngOnInit(): void {
  }

}
