import { Playlist } from "./Playlist";
import { Album } from "./Album";
import { Song } from "./Song";

class User {
    private _username!: string;
    private _password!: string;
    playlists: Playlist[];
    albums: Album[];

    constructor(username: string, password: string, playlists: Playlist[], albums: Album[]) {
        this.username = username;
        this.password = password;
        this.playlists = playlists;
        this.albums = albums;
    }

    get username(): string {
        return this._username;
    }

    set username(username: string) {
        this._username = username;
    }

    get password(): string {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }

    get Playlists() {
        return this.playlists;
    }

    addPlaylist(playlist: Playlist): void {
        this.playlists.push(playlist);
    }

    get Albums() {
        return this.albums;
    }

    addAlbum(album: Album): void {
        this.albums.push(album);
    }

    get songs() {
        const songs: Song[][] = [];
        this.albums.forEach(album => {
            songs.push(album.tracks)
        })
        return songs;
    }
}