import React from "react";
import { Song } from "./Song";

const SongList = function () {
	return (
		<div className="ui segment">
			<div className="ui divided items">
				<Song />
				<Song />
				<Song />
			</div>
		</div>
	);
};

export { SongList };
