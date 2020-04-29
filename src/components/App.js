import React from "react";

import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = function () {
	return (
		<div className="ui container">
			<br />
			<br />
			<div className="ui grid">
				<div className="eight wide column">
					<SongList />
				</div>
				<div className="eight wide column">
					<SongDetail />
				</div>
			</div>
		</div>
	);
};

export { App };
