import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
})
export class ClientComponent implements OnInit {

  clients: Client[];

  constructor(private clientServcice: ClientService) { }

  ngOnInit() {
    this.clientServcice.getClients().subscribe(
      clients => this.clients = clients
    );
  }

}
