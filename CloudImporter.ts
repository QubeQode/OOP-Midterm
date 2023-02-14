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
        const data: Song[] = [];

        const song1 = new Song('test1');
        const song2 = new Song('test2');
        const song3 = new Song('test3');

        const artist: Artist = new Artist('someArtist', []);

        const album1 = new Album('testAlbum', artist, 1997, [song1, song2, song3]);

        artist.addAlbum(album1);

        artist.albums.forEach(album => {
            album.tracks.forEach(track => {
                const song = new Song(track.title);
                data.push(song);
            })
        })


        return new Playlist(name, data);
    }
}