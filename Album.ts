import { Artist } from "./Artist";
import { Song } from "./Song";

export class Album {
    private _title!: string;
    private _artist: Artist;
    private _yearOfRelease: number;
    private _tracks!: Song[];

    constructor(title: string, artist: Artist, releaseDate: number, trackList: Song[]) {
        this.title = title;
        this._artist = artist;
        this._yearOfRelease = releaseDate;
        this.tracks = trackList;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get artist(): Artist {
        return this._artist;
    }

    get yearOfRelease(): number {
        return this._yearOfRelease;
    }

    get tracks(): Song[] {
        return this._tracks;
    }

    set tracks(tracklist: Song[]) {
        this._tracks = tracklist;
    }

    addTrack(trackName: Song) {
        this._tracks.push(trackName);
    }
};