// (albumName.length * bandName.length) * song-name.length / 2

function gramophone(bandName, albumName, songName) {

    let durationInSeconds = (albumName.length * bandName.length) * songName.length / 2;

    let rotations = Math.ceil(durationInSeconds / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')