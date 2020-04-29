import React from "react";
import Song from "./Song";
import { connect } from "react-redux";

const SongList = function ({ songs }) {
	const renderSongs = () => {
		return songs.map((song) => {
			return <Song key={song.title} song={song} />;
		});
	};

	return (
		<div className="ui segment">
			<div className="ui divided items">{renderSongs()}</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
