import React from "react";
import { SongList } from "./SongList";
import { SongDetail } from "./SongDetail";
class App extends React.Component {
	state = {
		songs: [
			{
				title: "Eye of the Tiger",
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
		],
		featureSong: null,
	};

	componentDidMount() {
		this.setState({ featureSong: this.state.songs[0] });
	}

	selectFeatureSongHandler = (song) => {
		this.setState({ featureSong: song });
	};

	render() {
		return (
			<div className="ui container">
				<br />
				<br />
				<div className="ui grid">
					<div className="eight wide column">
						<SongList
							songs={this.state.songs}
							selectFeatureSongHandler={
								this.selectFeatureSongHandler
							}
						/>
					</div>
					<div className="eight wide column">
						<SongDetail song={this.state.featureSong} />
					</div>
				</div>
			</div>
		);
	}
}

export { App };
