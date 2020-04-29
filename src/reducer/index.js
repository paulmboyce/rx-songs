import { combineReducers } from "redux";

function selectedSongReducer(oldSong = null, action) {
	if (action.type === "SELECT_SONG") {
		return action.payload.song;
	}
	return oldSong;
}

function songListReducer(oldsongs = [], action) {
	return [
		{
			title: "Billie Jean",
			length: 2.57,
		},
		{
			title: "Happy Birthday",
			length: 3.23,
		},
		{
			title: "Girls Just Wanna Have Fun",
			length: 4.57,
		},
	];
}

export default combineReducers({
	songs: songListReducer,
	featureSong: selectedSongReducer,
});
