import { LoomServer } from './server';

console.log('--- Loom Cross-Reality Persistence Layer Initializing ---');

const server = new LoomServer();
server.start();

// Export for library usage
export * from './server';
export * from './persistence/LoomManager';
