import { LoomManager } from './persistence/LoomManager';

export class LoomServer {
    private port: number;
    private manager: LoomManager;

    constructor(port: number = 3000) {
        this.port = port;
        this.manager = new LoomManager();
    }

    public start(): void {
        console.log(`[LoomServer] Starting persistence layer on port ${this.port}...`);
        this.manager.initialize();
        console.log(`[LoomServer] 🟢 Server Active. Listening for Cross-Reality Events.`);

        // Mocking a keep-alive or event loop
        setInterval(() => {
            // Heartbeat
        }, 10000);
    }
}
