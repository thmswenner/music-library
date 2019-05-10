function library (name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlist = [];
    this.addPlaylist = (name) => {
        this.playlist.push(new playlist(name))
    }
}

function playlist (name) {
    this.name = name;
    this.tracks = [];
    this.addTrack = (title, rating, length) => {
        this.tracks.push(new track(title, rating, length))
    }
}

function track (title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.songlength = length;
}

let newLibrary = new library('sexy beast', 'tom wenner')
let track1 = new track("test", 3 , 30);
let playlist1 = new playlist("myjamz");
playlist1.tracks.push(track1);
newLibrary.playlist.push(playlist1);
