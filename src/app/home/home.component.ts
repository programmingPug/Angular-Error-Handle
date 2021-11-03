import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../services/test-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private testService: TestServiceService) { }

  ngOnInit(): void{
  }

  public async get401(): Promise<void> {
    var bananas = await this.testService.get401();
  }

  public async get404(): Promise<void> {
    var bananas = await this.testService.get404();
  }

  public async get418(): Promise<void> {
    var bananas = await this.testService.get418();
  }

  public async get500(): Promise<void> {
    var bananas = await this.testService.get500();
  }

}
