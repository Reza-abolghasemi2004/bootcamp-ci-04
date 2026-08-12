const express = require("express");

const app = express();

app.get("/health", (req, res) => {
	res.status(200).json({
		status: "ok"
	});
});

app.get("/sum/:a/:b", (req, res) => {
	const { a, b } = req.params;

	res.json({
		result: Number(a) + Number(b)
	});
});

if (require.main === module) {
	app.listen(3000, () => {
		console.log("Listening on port 3000");
	});
}
module.exports = app;
