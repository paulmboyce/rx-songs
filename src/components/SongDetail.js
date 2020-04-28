import React from "react";

const SongDetail = function (props) {
	if (!props.song) {
		return "";
	} else {
		return (
			<div className="ui segment">
				<div>
					<h1>Details For:</h1>
				</div>
				<br />
				<br />
				<div>
					<h2>Title: {props.song.title}</h2>
				</div>
				<div>
					<h2>Length: {props.song.length}mins</h2>
				</div>
			</div>
		);
	}
};

export { SongDetail };
