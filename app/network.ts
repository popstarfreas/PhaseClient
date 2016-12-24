import * as SocketCluster from 'socketcluster-client';
import Client from 'client';

class Network {
    socket: SocketCluster;
    client: Client;

    constructor(client: Client, options: Object) {
        this.client = client;
        this.socket = SocketCluster.connect(options);
        this.socket.on('error', (error) => {
            this.onError(error);
        });
    }

    onError(error: string): void {
        console.log(`Error with connection ${error}`);
    }

    
}

export default Network;