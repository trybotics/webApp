"use strict"

var User = require('./schema')

var rand = function() {
    return Math.random().toString(36).substr(2); // remove `0.`
};

var token = function() {
    return rand() + rand(); // to make it longer
};

module.exports = {
	userDetails : function(req, res){

		User.find(function(err, result) {
	    if (err) throw err;
	    // console.log(result);
	    res.json(result)
	  	});
	},

	getAuthUser : function(req, res){
		User.find({authToken:req.query.authToken},function(err, result) {
		    if (err) throw err;
		    // console.log(result);
	    	res.json(result)
	  	});
	},
	
	updateUserDetails : function(req, res){

		var newvalues = { $set:req.body};
		User.updateOne({id:req.query.id}, newvalues, function(err, result) {
		    if (err) throw err;
		    console.log("1 document updated")
		    res.json(result)
		});
	},
	
	signup : function(req, res){

		if(req.body.name&&req.body.email&&req.body.phone&&req.body.password){ 
			User.find({email:req.body.email},function(err, result) {
			    if (err){
			    	console.log(err)
			    	res.status(404).send()
			    }else{
			    	// console.log(result)
			    	if(result.length){
			    		res.json({User:true})
			    	}
			    	else{
			    		req.body.authToken = token()
			    		User.create(req.body, function(err, response) {
						    if (err){
						    	console.log(err)
						    	res.status(404).send()
						    }else{
							    console.log("1 document inserted")
							    res.json(response)
						    }
					  	});
			    	}
			    }
		  	})
		}
	  	else{
	  		res.status(404).send()
	  	}
	},
	
	login : function(req, res){

		// console.log(req.body)
    	if(req.body.email&&req.body.password){
		    User.find(req.body,function(err, result) {
			    if (err){
			    	console.log(err)
			    	res.status(404).send()
			    }else{
				    // console.log(result);
				    res.json(result)
			    }
		  	});
	  	}
	  	else{
	  		res.status(404).send()
	  	}
	},
	
	socialLogin : function(req, res){
		// console.log(req.body)
    	if(req.body.name&&req.body.email&&req.body.socialId&&req.body.imageUrl){
    		var whereClause  = {
    			$or:[{email:req.body.email},{socialId:req.body.socialId}]
    		}
    		User.find(whereClause,function(err, result) {
			    if (err){
			    	console.log(err)
			    	res.status(404).send()
			    }else{
			    	// console.log(result)
			    	if(result.length){
			    		// console.log(result[0].socialId)
				    	if(result[0].socialId){
				    		res.json(result[0])
				    	}
				    	else if(result[0].email == req.body.email){
				    		var newvalues = { $set:{socialId: req.body.socialId, imageUrl:req.body.imageUrl}};
							User.updateOne({email:req.body.email}, newvalues, function(err, result) {
							    if (err) throw err;
							    res.json(result[0])
							});
				    	}
			    	}
			    	else{
			    		req.body.authToken = token()
			    		User.create(req.body, function(err, response) {
						    if (err){
						    	console.log(err)
						    	res.status(404).send()
						    }else{
							    console.log("1 document inserted")
							    res.json(response)
						    }
					  	});
			    	}
			    }
		  	});
		}
	  	else{
	  		res.status(404).send()
	  	}
	}
}