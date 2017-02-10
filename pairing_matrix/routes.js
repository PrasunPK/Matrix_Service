var express = require("express");
var bodyParser = require("body-parser");
var fs = require('fs');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':matrix:');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./'));

app.get("^/status$", function (req, res) {
    res.send({status:true});
});

var insert = function(name, res){
	db.serialize(function() {
		db.run("CREATE TABLE IF NOT EXISTS members (name TEXT, status TEXT)");

		var stmt = db.prepare("INSERT INTO members VALUES (?, ?)");
		stmt.run(name, 'ACTIVE');
		stmt.finalize();

		db.all("SELECT COUNT(*) as total_members FROM members", function(err, count) {
			res.send({
				count : count[0].total_members,
				name: name,
				status: 'ACTIVE'
			});	
		});
	}); 
}

app.post("^/add_member/names/:name$", function(req, res){
	insert(req.params.name, res);
});

module.exports = app;
