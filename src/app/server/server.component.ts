import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
    id = 10;
    serverStatus = "offline";

    @Input() name: string;
    @Input() msg: string;

    constructor ()
    {
      this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
    }

    getColor()
    {
      return this.serverStatus === "online" ? "green" : "red";
    }
}
