import React from "react";

const Song = function (props) {
	const onButtonClick = function (evt) {
		props.selectFeatureSongHandler(props.song);
	};

	return (
		<div className="item">
			<div className="content">
				<div className="header">{props.song.title}</div>
				<div className="extra">
					<button
						className="ui right floated secondary button"
						onClick={onButtonClick}
					>
						Play
					</button>
				</div>
			</div>
		</div>
	);
};

export { Song };
