var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var author = new Schema({
    name : {type:String,required:true}
});
var postSchema = new Schema ({
    author : [author],
    creatOn : {type: Date, default: Date.now},
    Tag : [String],
    Content : String
});
mongoose.model('posts',postSchema,'Posts');