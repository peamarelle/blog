const POST = require('../models/post');

class PostRepository {
    constructor() {

    }

    find = async () => {
        return await POST.findAll();
    }

    findById = async (id) => {
        return await POST.findByPk(id);
    }

    save = async (post) => {
        return await POST.create(post);
    }

    update = async (id, newPostValues, next) => {

        let post = await POST.findByPk(id);
        if (post) {

            post.title = newPostValues.title;
            post.content = newPostValues.content;
            post.category = newPostValues.category;
            post.image = newPostValues.image;
            post.date = newPostValues.date;
    
            await post.save();
    
            return newPostValues;
        }

        throw new Error("Post not exists!");
    }

    delete = async (id) => {
        return await POST.destroy({where: {id}});
    }
}

module.exports = PostRepository;