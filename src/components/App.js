import React from "react";
import { SongList } from "./SongList";
import { SongDetail } from "./SongDetail";
const App = function () {
	return (
		<div className="ui container">
			Hello Songs App!
			<div className="ui grid">
				<div className="eight wide column">
					<SongList />
				</div>
				<div className="eight wide column">
					<SongDetail title="Halo-ouou" length="2.57" />
				</div>
			</div>
		</div>
	);
};

export { App };
