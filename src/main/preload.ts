import { contextBridge, ipcRenderer} from "electron";

export type ContextBridgeAPI = {
    print: (message: string) => void
}

const exposedApi: ContextBridgeAPI = {
    print: (message: string) => {
        ipcRenderer.send('print', message)
    }
}

contextBridge.exposeInMainWorld('databaseAPI', exposedApi);