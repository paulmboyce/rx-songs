import React from "react";
import { connect } from "react-redux";

const SongDetail = function ({ song }) {
	if (!song) {
		return <div>Select a song...</div>;
	} else {
		return (
			<div className="ui segment">
				<div>
					<h1>Details For:</h1>
				</div>
				<br />
				<br />
				<div>
					<h2>Title: {song.title}</h2>
				</div>
				<div>
					<h2>Length: {song.length}mins</h2>
				</div>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return { song: state.featureSong };
};

export default connect(mapStateToProps)(SongDetail);
