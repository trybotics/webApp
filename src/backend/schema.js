var mongoose = require('mongoose')
const config  = require('../config')
mongoose.connect(config.databaseURL)
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {console.log("we are connected!")})

var Schema = mongoose.Schema
autoIncrement = require('mongoose-auto-increment');

const UserSchema = new Schema({
    id: {
	   	type:Number,
	   	require:true,
	   	unique:true,
	   	ref: 'id'
    },
    authToken:{
	   	type:String,
	   	require:true
    },
    name:{
        type:String,
        require:true
    },
    email:{
	   	type:String,
		require:true,
	   	unique:true
    },
    phone:{
    	type:Number
    },
    password:{
    	type:String
    },
    socialId:{
    	type:String
    },
    imageUrl:{
    	type:String
    }
    
},{collection: 'User',timestamps:true})

autoIncrement.initialize(mongoose.connection)
UserSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'id',startAt:1,incrementBy:1});
var User = mongoose.model('User',UserSchema)
module.exports = User
