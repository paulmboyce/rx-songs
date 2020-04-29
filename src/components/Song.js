import React from "react";
import { connect } from "react-redux";

import { selectSongAction } from "../actionCreators";

const Song = function ({ song, selectSongAction }) {
	return (
		<div className="item">
			<div className="content">
				<div className="header">{song.title}</div>
				<div className="extra">
					<button
						className="ui right floated secondary button"
						onClick={() => {
							selectSongAction(song);
						}}
					>
						Play
					</button>
				</div>
			</div>
		</div>
	);
};

export default connect(null, { selectSongAction })(Song);
