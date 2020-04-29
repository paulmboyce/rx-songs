const SELECT_SONG = "SELECT_SONG";

function selectSongAction(song) {
	return {
		type: SELECT_SONG,
		payload: { song },
	};
}

export { selectSongAction, SELECT_SONG };
