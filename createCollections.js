var MongoClient = require('mongodb').MongoClient;
var db = "mongodb://khushboo2502:k8336042640@ds113636.mlab.com:13636/trybotics";


MongoClient.connect(db, function(err, db) {
	
  if (err) throw err;

  	// create a collection users
  	// db.collection("user").createIndex( { phone: 1}, { unique: true } )
    db.collection("user").createIndex( { email:1 }, { unique: true } )
	
	db.createCollection("user", function(err, res) {
		if (err) throw err;
		console.log("Collection user created!")
	});

	// create a collection customers
	// db.createCollection("customer", function(err, res) {
	// 	if (err) throw err;
	// 	console.log("Collection customers created!");
	// });

	// db.close();

});