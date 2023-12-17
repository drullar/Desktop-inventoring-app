import { ContextBridgeAPI } from "../main/preload";

declare global {
    interface Window { databaseAPI: ContextBridgeAPI; }
}