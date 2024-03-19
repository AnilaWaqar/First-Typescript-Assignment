function makeAlbum(artist, title, tracks) {
    var album = {
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
var album1 = makeAlbum('Artist1', 'Album1');
var album2 = makeAlbum('Artist2', 'Album2'); // Including the number of tracks
var album3 = makeAlbum('Artist3', 'Album3', 12);
console.log(album1);
console.log(album2);
console.log(album3);
