const express = require('express');
const PostRepository = require('../repository/postRepository');
const repository = new PostRepository();
const Success = require('../handlers/successHandler');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const findPosts = async (req, res, next) => {

    try {
        const posts = await repository.find();
        res.json(new Success(posts));
    } catch (error) {
        next(error);
    }

}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const findPostById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await repository.findById(id);
        res.json(new Success(post));
    } catch (error) {
        next(error);
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const savePost = async (req, res, next) => {
    try {
        const post = req.body;
        await repository.save(post);
        res.json(new Success(`Post ${post.title} saved!`));
    } catch (error) {
        next(error);
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const updatePost = async (req, res, next) => {
    try {
        const {id} = req.params;
        const post = req.body;
        await repository.update(id, post);
        res.json(new Success(`Post with id: ${id} updated!`));
    } catch (error) {
        next(error);
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const deletePost = async (req, res, next) => {
    try {
        const {id} = req.params;
        const post = await repository.delete(id);
        res.json(new Success(`Post with id: ${id} deleted!`));
    } catch (error) {
        next(error);
    }
}

module.exports = {
    findPosts,
    findPostById,
    savePost,
    updatePost,
    deletePost,
}