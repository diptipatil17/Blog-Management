const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,    
        required: true,
        trim: true
    },
    authorId: {
        required: true,
        type: ObjectId,
        ref: 'AuthorProjectOne',
        // ref1: 'Author'
    },
    tags: [{
        type: String,
        trim: true
    }],
    category: {
        type: String,
        trim: true,
        required: true
    },
    subcategory: [{
        type: String,
        trim: true
    }],
    deletedAt: {
        type: Date,
        default: Date.now(),
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    publishedAt: {
        type: Date
    },
    isPublished: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

module.exports = mongoose.model('BlogProjectOne', blogSchema)
module.exports = mongoose.model('Blogs', blogSchema)