var express = require("express");
var bodyParser = require("body-parser");
var fs = require('fs');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('Matrix.db');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./'));

app.get("^/status$", function (req, res) {
    res.send({status:true});
});

var create_tables = function(){
	db.serialize(function() {
		db.run("CREATE TABLE IF NOT EXISTS members (name TEXT, status TEXT)");
		db.run("CREATE TABLE IF NOT EXISTS matrix (name TEXT)");
		db.run("CREATE TABLE IF NOT EXISTS pairs (first TEXT, second TEXT)");
	});
};
create_tables();

var insert = function(name, res){
	db.serialize(function() {
		var stmt = db.prepare("INSERT INTO members VALUES (?, ?)");
		stmt.run(name, 'ACTIVE');
		stmt.finalize();

		db.run("ALTER TABLE matrix ADD COLUMN "+ name +" INTEGER");
		var stmt = db.prepare("INSERT INTO matrix (name) VALUES(?)");
		stmt.run(name);
		stmt.finalize();

		var stmt = db.prepare("INSERT INTO pairs VALUES (?, ?)");
		stmt.run(name, null);
		stmt.finalize();

		db.all("SELECT COUNT(*) as total_members FROM members", function(err, count) {
			res.send({
				count : count && count[0].total_members || 0,
				name: name,
				status: 'ACTIVE'
			});	
		});
	}); 
}

app.post("^/add_member/names/:name$", function(req, res){
	insert(req.params.name, res);
});

app.post("^/state/save$", function(req, res){
	var pairs_list = req.body;
	// db.run("DELETE FROM pairs");
	for (var i = 0; i < Object.keys(pairs_list).length; i++) {
		var first = pairs_list[i][0] == 'SOLO' ? null : pairs_list[i][0];
		var second = pairs_list[i][1] == 'SOLO' ? null : pairs_list[i][1];

		console.log(first, second);

		if(first != null){
			try{
				db.run("UPDATE pairs SET second=? WHERE first="+first, second);
			}catch (err){
				var stmt = db.prepare("INSERT INTO pairs VALUES(?, ?)");
				stmt.run(first, second);
				stmt.finalize();
			}
		}else{
			try{
				db.run("UPDATE pairs SET first=? WHERE second="+second, first);
			}catch (err){
				var stmt = db.prepare("INSERT INTO pairs VALUES(?, ?)");
				stmt.run(first, second);
				stmt.finalize();
			}
		}

		// if(first != null )
		// 	db.run("UPDATE matrix SET " + first + "=? WHERE name= ? ",3,second);
		// if(second != null)
		// 	db.run("UPDATE matrix SET " + second + "=? WHERE name= ? ",3,first);

	}

	res.send({status:true});
});

app.get("^/count$", function(req, res){
	db.all("SELECT COUNT(*) as total_members FROM members", function(err, count) {
		res.send({ count : count[0].total_members });
	});
});

app.get("^/pairs$", function(req, res){
	db.all("SELECT * FROM pairs", function(err, data) {
		res.send(data);
	});
});

app.get("^/members$", function(req, res){
	db.all("SELECT * FROM members where status = 'ACTIVE'", function(err, members) {
		res.send(members);
	});
});

app.get("^/matrix$", function(req, res){
	db.all("SELECT * FROM matrix", function(err, pairs) {
		res.send(pairs);
	});
});

module.exports = app;
