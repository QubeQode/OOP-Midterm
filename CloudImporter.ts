import { IImportable } from "./IImportable";
import { Playlist } from "./Playlist";
import { Song } from "./Song";

export class CloudImporter implements IImportable {
    private _url: string;

    constructor(url: string) {
        this._url = url;
    }

    loadPlaylist(name: string): Playlist {
        console.log(`Your playlist at location ${this._url} will be loaded`);

        const data: Song[] = [];
        return new Playlist(name, data);
    }
}