interface Album {
    artist: string;
    title: string;
    tracks?: number; // Optional parameter for the number of tracks
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title
    };

    // If tracks parameter is provided, add it to the album object
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Make three dictionaries representing different albums and print each return value
let album1: Album = makeAlbum('Artist1', 'Album1');
let album2: Album = makeAlbum('Artist2', 'Album2');
let album3: Album = makeAlbum('Artist3', 'Album3', 12); // Including the number of tracks


console.log(album1);
console.log(album2);
console.log(album3);