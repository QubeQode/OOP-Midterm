import { IImportable } from "./IImportable";
import { readFileSync } from "fs";

export class LocalImporter implements IImportable {
    private _filePath: string;

    constructor(filepath: string) {
        this._filePath = filepath;
    }

    loadPlaylist(): void {
        const playlist = readFileSync('./database/database.json', 'utf-8');
    }
}

const playlist = readFileSync('./database/database.json', 'utf-8');