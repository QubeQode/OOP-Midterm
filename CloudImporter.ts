import { Album } from "./Album";
import { Artist } from "./Artist";
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

        const song1 = new Song('test1');
        const song2 = new Song('test2');
        const song3 = new Song('test3');

        const artist = new Artist('someArtist', album1);

        const album1 = new Album('testAlbum', 'someArtist', 1997, [song1, song2, song3]);

        const data: Song[] = [];
        return new Playlist(name, data);
    }
}