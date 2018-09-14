import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    serverID : number;
    serverStatus: string;

    constructor() {
        this.serverID = Math.floor(Math.random() * 10) + 1
        this.serverStatus = this.serverID < 6 ? 'online' : 'offline'
    }

    getServerStatus () {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red'
    }
}