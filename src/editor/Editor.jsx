
import Viewer from "./Viewer.jsx";

import TreeView from "./TreeView.jsx";

export default React.createClass({

	/* Create our Model */
	getInitialState: function() {
		return {
			tab: "scene"
		};
	},

	/* Render our View */
	render: function() {
		return (
			<div>
				<nav className="navbar navbar-default navbar-fixed-top">
					<div className="container-fluid">
						<ul className="nav navbar-nav">
							<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">File <span className="caret"></span></a>
								<ul className="dropdown-menu">
									<li><a href="#">Open Scene</a></li>
									<li><a href="#">Save Scene</a></li>
									<li role="separator" className="divider"></li>
									<li><a href="#">Save as Prefab</a></li>
								</ul>
							</li>
							<li>
								<a href="#" onClick={this.openConsole}>Open Console</a>
							</li>
						</ul>
					</div>
				</nav>

				<Viewer />

				<div className="toolbar" ref="toolbar">
					<ul className="nav nav-tabs" ref="tabs">
					  <li className="active" onClick={this.switchTab}><a href="#" data-link="scene">Scene</a></li>
					  <li onClick={this.switchTab}><a href="#" data-link="files">Files</a></li>
					</ul>
					<br />
					{(() => {
						if (this.state.tab == "scene") {
							return (
								<div className="container-fluid">
									<TreeView height="150" />
								<br />
									<a className="btn btn-primary">Test</a>
								</div>
							)
						} else if (this.state.tab == "files") {
							return (
								<div className="container-fluid">
									<TreeView height="100%" />
								</div>
							)
						}
					})()}
				</div>

			</div>
		)
	},

	openConsole: function() {
		window.nwDispatcher.requireNwGui().Window.get().showDevTools();
	},

	switchTab: function(event) {
		$("li", this.refs.tabs).removeClass("active");
		$(event.target.parentNode).addClass("active");

		this.setState({
			tab: $(event.target).data("link")
		});
	}

});

