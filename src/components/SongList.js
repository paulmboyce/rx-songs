import React from "react";
import { Song } from "./Song";

const SongList = function (props) {
	const renderSongs = () => {
		return props.songs.map((song) => (
			<Song
				key={song.title}
				song={song}
				selectFeatureSongHandler={props.selectFeatureSongHandler}
			/>
		));
	};

	return (
		<div className="ui segment">
			<div className="ui divided items">{renderSongs()}</div>
		</div>
	);
};

export { SongList };
