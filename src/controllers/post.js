const express = require('express');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const findPosts = (req, res) => {
    res.json([
        {
            id: 1,
            title:  'Javascript Async Await',
            image: 'url',
            category: 'development',
            crationDate: '2021-04-10'
        }
    ])
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

 const findPostById = (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        title:  'Javascript Async Await',
        image: 'url',
        category: 'development',
        crationDate: '2021-04-10'
    })
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

 const savePost = (req, res) => {
    const post = req.body;
    res.json({ status: 'OK', data: post })
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

 const updatePost = (req, res) => {
    const { id } = req.params;
    const body = req.body;

    res.json({ status: 'OK', data: body })
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

 const deletePost = (req, res) => {
    res.json({ status: 'OK', data: `Post with id ${id} deleted` })
}

module.exports = {
    findPosts,
    findPostById,
    savePost,
    updatePost,
    deletePost,
}