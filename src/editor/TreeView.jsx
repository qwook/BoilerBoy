
export default React.createClass({

	/* Create our Model */
	getInitialState: function() {
		return {};
	},

	/* Render our View */
	render: function() {
		return (
			<div className="dd" ref="dd" style={{"overflowY": "scroll", height: this.props.height, border: "1px solid #ccc", padding: "5px"}}>
			    <ol className="dd-list">
			        <li className="dd-item" data-id="1">
			            <div className="dd-handle">Item 1</div>
			        </li>
			        <li className="dd-item" data-id="2">
			            <div className="dd-handle">Item 2</div>
			        </li>
			        <li className="dd-item" data-id="3">
			            <div className="dd-handle">Item 3</div>
			            <ol className="dd-list">
			                <li className="dd-item" data-id="4">
			                    <div className="dd-handle">Item 4</div>
			                </li>
			                <li className="dd-item" data-id="5">
			                    <div className="dd-handle">Item 5</div>
			                </li>
			            </ol>
			        </li>
			    </ol>
			</div>
		)
	},

	componentDidMount: function() {
		$(this.refs.dd).nestable();
	}

});

