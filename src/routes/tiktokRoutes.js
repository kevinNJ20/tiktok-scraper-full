const express = require('express');
const router = express.Router();
const tiktokService = require('../api/tiktokService');

// Route to get Trending Videos
router.get('/feed/list', async (req, res) => {
    const { region, count } = req.query;
    if (!region || !count) {
        return res.status(400).json({ error: 'Query parameter region, count are required' });
    }
    try {
        const results = await tiktokService.getTrendingVideos(region, count);
        res.json({ count: results.length, messages: results });
    } catch (error) {
        res.status(500).json({ error: `Error searching messages: ${error.message}` });
    }
});

// Route to get video details
router.get('/', async (req, res) => {
    const { url } = req.query;
    if (!url) {
        return res.status(400).json({ error: 'Query parameter url is required' });
    }
    try {
        const results = await tiktokService.getVideoDetails(url);
        res.json({messages: results });
    } catch (error) {
        res.status(500).json({ error: `Error searching messages: ${error.message}` });
    }
});

// Route to get User Videos
router.get('/user/posts', async (req, res) => {
    const { user_id, count, cursor} = req.query;
    if (!user_id || !count || !cursor) {
        return res.status(400).json({ error: 'Query parameter user_id, count and cursor are required' });
    }
    try {
        const results = await tiktokService.getUserVideos(user_id, count, cursor);
        res.json({ messages: results });
    } catch (error) {
        res.status(500).json({ error: `Error searching messages: ${error.message}` });
    }
});

// Route to get User Details
router.get('/user/info', async (req, res) => {
    const { user_id } = req.query;
    if (!user_id) {
        return res.status(400).json({ error: 'Query parameter user_id is required' });
    }
    try {
        const results = await tiktokService.getUserInfo(user_id);
        res.json({ messages: results });
    } catch (error) {
        res.status(500).json({ error: `Error searching messages: ${error.message}` });
    }
});

// Route to get User's Followers
router.get('/user/followers', async (req, res) => {
    const { user_id, count, time} = req.query;
    if (!user_id || !count || !time) {
        return res.status(400).json({ error: 'Query parameter user_id, count, and time are required' });
    }
    try {
        const results = await tiktokService.getUserFollowers(user_id, count, time);
        res.json({ messages: results });
    } catch (error) {
        res.status(500).json({ error: `Error searching messages: ${error.message}` });
    }
});

// Route to get User's Following
router.get('/user/following', async (req, res) => {
    const { user_id, count, time } = req.query;
    if (!user_id || !count || !time) {
        return res.status(400).json({ error: 'Query parameter user_id, count, and time are required' });
    }
    try {
        const results = await tiktokService.getUserFollowing(user_id, count, time);
        res.json({ messages: results });
    } catch (error) {
        res.status(500).json({ error: `Error searching messages: ${error.message}` });
    }
});

// Route to get User's Favorite Videos
router.get('/user/favorite', async (req, res) => {
    const { user_id, count, cursor } = req.query;
    if (!user_id || !count || !cursor) {
        return res.status(400).json({ error: 'Query parameter user_id, count, and cursor are required' });
    }
    try {
        const results = await tiktokService.getUserFavorite(user_id, count, cursor);
        res.json({ messages: results });
    } catch (error) {
        res.status(500).json({ error: `Error searching messages: ${error.message}` });
    }
});

// Route to get Video's Comments
router.get('/comment/list', async (req, res) => {
    const { url, count, cursor } = req.query;
    if (!url || !count || !cursor) {
        return res.status(400).json({ error: 'Query parameter url, count, and cursor are required' });
    }
    try {
        const results = await tiktokService.getVideoComments(url, count, cursor);
        res.json({ messages: results });
    } catch (error) {
        res.status(500).json({ error: `Error searching messages: ${error.message}` });
    }
});

// Route to get Comment's Reply
router.get('/comment/reply', async (req, res) => {
    const { video_id, comment_id, count, cursor } = req.query;
    if (!video_id || !comment_id || !count || !cursor) {
        return res.status(400).json({ error: 'Query parameter video_id, comment_id, count, and cursor are required' });
    }
    try {
        const results = await tiktokService.getCommentReplies(video_id, comment_id, count, cursor);
        res.json({ messages: results });
    } catch (error) {
        res.status(500).json({ error: `Error searching messages: ${error.message}` });
    }
});

// Route to get challenge's Videos
router.get('/challenge/posts', async (req, res) => {
    const { challenge_id, count, cursor } = req.query;
    if (!challenge_id || !count || !cursor) {
        return res.status(400).json({ error: 'Query parameter challenge_id, count, and cursor are required' });
    }
    try {
        const results = await tiktokService.getChallengeVideos(challenge_id, count, cursor);
        res.json({ messages: results });
    } catch (error) {
        res.status(500).json({ error: `Error searching messages: ${error.message}` });
    }
});

// Route to get challenge's Videos
router.get('/challenge/info', async (req, res) => {
    const { challenge_id} = req.query;
    if (!challenge_id) {
        return res.status(400).json({ error: 'Query parameter challenge_id is required' });
    }
    try {
        const results = await tiktokService.getChallengeDetails(challenge_id);
        res.json({ messages: results });
    } catch (error) {
        res.status(500).json({ error: `Error searching messages: ${error.message}` });
    }
});

// Route to get Music's Videos
router.get('/music/posts', async (req, res) => {
    const { music_id, count, cursor } = req.query;
    if (!music_id || !count || !cursor) {
        return res.status(400).json({ error: 'Query parameter challenge_id, count and cursor are required' });
    }
    try {
        const results = await tiktokService.getMusicVideos(music_id, count, cursor);
        res.json({ messages: results });
    } catch (error) {
        res.status(500).json({ error: `Error searching messages: ${error.message}` });
    }
});

// Route to get Music's Details
router.get('/music/info', async (req, res) => {
    const { url } = req.query;
    if (!url) {
        return res.status(400).json({ error: 'Query parameter url is required' });
    }
    try {
        const results = await tiktokService.getMusicDetails(url);
        res.json({ messages: results });
    } catch (error) {
        res.status(500).json({ error: `Error searching messages: ${error.message}` });
    }
});

// Route to Search Video By Keywords
router.get('/feed/search', async (req, res) => {
    const { keywords, region, count, cursor, publish_time, sort_type } = req.query;
    if (!keywords || !region || !count || !cursor || !publish_time || !sort_type) {
        return res.status(400).json({ error: 'Query parameter keywords, region, count, cursor, publish_time, sort_type are required' });
    }
    try {
        const results = await tiktokService.getSearchVideo(keywords, region, count, cursor, publish_time, sort_type);
        res.json({ messages: results });
    } catch (error) {
        res.status(500).json({ error: `Error searching messages: ${error.message}` });
    }
});

// Route to Search Challenge
router.get('/challenge/search', async (req, res) => {
    const { keywords, count, cursor } = req.query;
    if (!keywords || !count || !cursor) {
        return res.status(400).json({ error: 'Query parameter keywords, count, cursor are required' });
    }
    try {
        const results = await tiktokService.getSearchChallenge(keywords, count, cursor);
        res.json({ messages: results });
    } catch (error) {
        res.status(500).json({ error: `Error searching messages: ${error.message}` });
    }
});

// Route to Search Users
router.get('/user/search', async (req, res) => {
    const { keywords, count, cursor } = req.query;
    if (!keywords || !count || !cursor) {
        return res.status(400).json({ error: 'Query parameter keywords, count, cursor are required' });
    }
    try {
        const results = await tiktokService.getSearchUsers(keywords, count, cursor);
        res.json({ messages: results });
    } catch (error) {
        res.status(500).json({ error: `Error searching messages: ${error.message}` });
    }
});


module.exports = router;
