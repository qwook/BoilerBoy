
import Editor from "./editor/Editor.jsx";

var gameCanvas = document.querySelector("#game");
var editorElement = document.querySelector("#editor");

/* Load game */
if (gameCanvas) {

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, 640 / 480, 0.1, 1000 );
	var renderer = new THREE.WebGLRenderer({canvas: gameCanvas});
	renderer.setSize(640, 480);

}

if (editorElement) {

	ReactDOM.render(React.createElement(Editor, {}), editorElement);

}
