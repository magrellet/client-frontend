import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { Service } from '../service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clients: Client[];
  constructor(private service: Service) { }

  ngOnInit() {
    this.service.getClients().subscribe(
      clients => this.clients = clients
    );
  }

}
