const axios = require('axios');
const https = require('https');

const agent = new https.Agent({
    rejectUnauthorized: false
});


const getTrendingVideos = async (region, count) => {
    try {
        const url = `https://tiktok-scraper7.p.rapidapi.com/feed/list`;
        const headers = {
            'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com',
            'x-rapidapi-key': '5627851512msh0ce6cf4fd3d863ep176022jsn23c5c3a200cc'
        }
        console.log(`Requesting URL: ${url}, Params: { region: ${region},  count: ${count}}`);
        const response = await axios.get(url, {
            params: { region, count },
            headers: headers,
            httpsAgent: agent
        });
        return response.data;
        
    } catch (error) {
        console.error(`Error in getTrendingVideos: ${error.response ? error.response.data.description : error.message}`);
        throw new Error(`Error getting trending videos: ${error.message}`);
    }
};

const getVideoDetails = async (url) => {
    try {
        const url = `https://tiktok-scraper7.p.rapidapi.com/`;
        const headers = {
            'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com',
            'x-rapidapi-key': '5627851512msh0ce6cf4fd3d863ep176022jsn23c5c3a200cc'
        }
        console.log(`Requesting URL: ${url}, Params: { url: ${url}}`);
        const response = await axios.get(url, {
            params: { url },
            headers: headers,
            httpsAgent: agent
        });
        return response.data;
    } catch (error) {
        console.error(`Error in getVideoDetails: ${error.response ? error.response.data.description : error.message}`);
        throw new Error(`Error getting Video's Details': ${error.message}`);
    }
};

const getUserVideos = async (user_id, count, cursor) => {
    try {
        const url = `https://tiktok-scraper7.p.rapidapi.com/user/posts`;
        const headers = {
            'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com',
            'x-rapidapi-key': '5627851512msh0ce6cf4fd3d863ep176022jsn23c5c3a200cc'
        }
        console.log(`Requesting URL: ${url}, Params: { user_id: ${user_id},  count: ${count}, cursor: ${cursor}}`);
        const response = await axios.get(url, {
            params: { user_id, count, cursor },
            headers: headers,
            httpsAgent: agent
        });
        return response.data;
    } catch (error) {
        console.error(`Error in getUserVideos: ${error.response ? error.response.data.description : error.message}`);
        throw new Error(`Error getting User's Posts': ${error.message}`);
    }
};

const getUserInfo = async (user_id) => {
    try {
        const url = `https://tiktok-scraper7.p.rapidapi.com/user/info`;
        const headers = {
            'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com',
            'x-rapidapi-key': '5627851512msh0ce6cf4fd3d863ep176022jsn23c5c3a200cc'
        }
        console.log(`Requesting URL: ${url}, Params: { user_id: ${user_id}}`);
        const response = await axios.get(url, {
            params: { user_id },
            headers: headers,
            httpsAgent: agent
        });
        return response.data;
    } catch (error) {
        console.error(`Error in getUserInfo: ${error.response ? error.response.data.description : error.message}`);
        throw new Error(`Error getting User's Infos': ${error.message}`);
    }
};

const getUserFollowers = async (user_id, count, time) => {
    try {
        const url = `https://tiktok-scraper7.p.rapidapi.com/user/followers`;
        const headers = {
            'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com',
            'x-rapidapi-key': '5627851512msh0ce6cf4fd3d863ep176022jsn23c5c3a200cc'
        }
        console.log(`Requesting URL: ${url}, Params: { user_id: ${user_id},  count: ${count}, time: ${time}}`);
        const response = await axios.get(url, {
            params: { user_id, count, time },
            headers: headers,
            httpsAgent: agent
        });
        return response.data;
    } catch (error) {
        console.error(`Error in getUserFollowers: ${error.response ? error.response.data.description : error.message}`);
        throw new Error(`Error getting User's Followers': ${error.message}`);
    }
};

const getUserFollowing = async (user_id, count, time) => {
    try {
        const url = `https://tiktok-scraper7.p.rapidapi.com/user/following`;
        const headers = {
            'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com',
            'x-rapidapi-key': '5627851512msh0ce6cf4fd3d863ep176022jsn23c5c3a200cc'
        }
        console.log(`Requesting URL: ${url}, Params: { user_id: ${user_id},  count: ${count}, time: ${time}}`);
        const response = await axios.get(url, {
            params: { user_id, count, time },
            headers: headers,
            httpsAgent: agent
        });
        return response.data;
    } catch (error) {
        console.error(`Error in getUserFollowing: ${error.response ? error.response.data.description : error.message}`);
        throw new Error(`Error getting User's Following': ${error.message}`);
    }
};

const getUserFavorite = async (user_id, count, cursor) => {
    try {
        const url = `https://tiktok-scraper7.p.rapidapi.com/user/favorite`;
        const headers = {
            'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com',
            'x-rapidapi-key': '5627851512msh0ce6cf4fd3d863ep176022jsn23c5c3a200cc'
        }
        console.log(`Requesting URL: ${url}, Params: { user_id: ${user_id},  count: ${count}, cursor: ${cursor}}`);
        const response = await axios.get(url, {
            params: { user_id, count, cursor },
            headers: headers,
            httpsAgent: agent
        });
        return response.data;
    } catch (error) {
        console.error(`Error in getUserFavorite: ${error.response ? error.response.data.description : error.message}`);
        throw new Error(`Error getting User's Favorite': ${error.message}`);
    }
};

const getVideoComments = async (url, count, cursor) => {
    try {
        const url = `https://tiktok-scraper7.p.rapidapi.com/comment/list`;
        const headers = {
            'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com',
            'x-rapidapi-key': '5627851512msh0ce6cf4fd3d863ep176022jsn23c5c3a200cc'
        }
        console.log(`Requesting URL: ${url}, Params: { url: ${url},  count: ${count}, cursor: ${cursor}}`);
        const response = await axios.get(url, {
            params: { url, count, cursor },
            headers: headers,
            httpsAgent: agent
        });
        return response.data;
    } catch (error) {
        console.error(`Error in getVideoComments: ${error.response ? error.response.data.description : error.message}`);
        throw new Error(`Error getting Video's Comment': ${error.message}`);
    }
};

const getCommentReplies = async (video_id, comment_id, count, cursor) => {
    try {
        const url = `https://tiktok-scraper7.p.rapidapi.com/comment/reply`;
        const headers = {
            'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com',
            'x-rapidapi-key': '5627851512msh0ce6cf4fd3d863ep176022jsn23c5c3a200cc'
        }
        console.log(`Requesting URL: ${url}, Params: { video_id: ${video_id},  comment_id: ${comment_id}, count: ${count}, cursor: ${cursor}}`);
        const response = await axios.get(url, {
            params: { video_id, comment_id, count, cursor },
            headers: headers,
            httpsAgent: agent
        });
        return response.data;
    } catch (error) {
        console.error(`Error in getCommentReplies: ${error.response ? error.response.data.description : error.message}`);
        throw new Error(`Error getting Comment's Replies': ${error.message}`);
    }
};

const getChallengeVideos = async (challenge_id, count, cursor) => {
    try {
        const url = `https://tiktok-scraper7.p.rapidapi.com/challenge/posts`;
        const headers = {
            'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com',
            'x-rapidapi-key': '5627851512msh0ce6cf4fd3d863ep176022jsn23c5c3a200cc'
        }
        console.log(`Requesting URL: ${url}, Params: { challenge_id: ${challenge_id},  count: ${count}, cursor: ${cursor}`);
        const response = await axios.get(url, {
            params: { challenge_id, count, cursor },
            headers: headers,
            httpsAgent: agent
        });
        return response.data;
    } catch (error) {
        console.error(`Error in getChallengeVideos: ${error.response ? error.response.data.description : error.message}`);
        throw new Error(`Error getting Challenge's Videos': ${error.message}`);
    }
};

const getChallengeDetails = async (challenge_id) => {
    try {
        const url = `https://tiktok-scraper7.p.rapidapi.com/challenge/info`;
        const headers = {
            'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com',
            'x-rapidapi-key': '5627851512msh0ce6cf4fd3d863ep176022jsn23c5c3a200cc'
        }
        console.log(`Requesting URL: ${url}, Params: { challenge_id: ${challenge_id}`);
        const response = await axios.get(url, {
            params: { challenge_id },
            headers: headers,
            httpsAgent: agent
        });
        return response.data;
    } catch (error) {
        console.error(`Error in getChallengeDetails: ${error.response ? error.response.data.description : error.message}`);
        throw new Error(`Error getting Challenge's Details': ${error.message}`);
    }
};

const getMusicVideos = async (music_id, count, cursor) => {
    try {
        const url = `https://tiktok-scraper7.p.rapidapi.com/music/posts`;
        const headers = {
            'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com',
            'x-rapidapi-key': '5627851512msh0ce6cf4fd3d863ep176022jsn23c5c3a200cc'
        }
        console.log(`Requesting URL: ${url}, Params: { music_id: ${music_id},  count: ${count}, cursor: ${cursor}`);
        const response = await axios.get(url, {
            params: { music_id, count, cursor },
            headers: headers,
            httpsAgent: agent
        });
        return response.data;
    } catch (error) {
        console.error(`Error in getMusicVideos: ${error.response ? error.response.data.description : error.message}`);
        throw new Error(`Error getting Music's Videos': ${error.message}`);
    }
};

const getMusicDetails = async (url) => {
    try {
        const link = `https://tiktok-scraper7.p.rapidapi.com/music/info`;
        const headers = {
            'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com',
            'x-rapidapi-key': '5627851512msh0ce6cf4fd3d863ep176022jsn23c5c3a200cc'
        }
        console.log(`Requesting URL: ${link}, Params: { url: ${url}`);
        const response = await axios.get(link, {
            params: { url },
            headers: headers,
            httpsAgent: agent
        });
        return response.data;
    } catch (error) {
        console.error(`Error in getMusicDetails: ${error.response ? error.response.data.description : error.message}`);
        throw new Error(`Error getting Music's Details': ${error.message}`);
    }
};

const getSearchVideo = async (keywords, region, count, cursor, publish_time, sort_type) => {
    try {
        const url = `https://tiktok-scraper7.p.rapidapi.com/feed/search`;
        const headers = {
            'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com',
            'x-rapidapi-key': '5627851512msh0ce6cf4fd3d863ep176022jsn23c5c3a200cc'
        }
        console.log(`Requesting URL: ${url}, Params: { keywords: ${keywords},  region: ${region}, count: ${count}, cursor: ${cursor}, publish_time: ${publish_time}, sort_type: ${sort_type}`);
        const response = await axios.get(url, {
            params: { keywords, region, count, cursor, publish_time, sort_type },
            headers: headers,
            httpsAgent: agent
        });
        return response.data;
    } catch (error) {
        console.error(`Error in getSearchVideo: ${error.response ? error.response.data.description : error.message}`);
        throw new Error(`Error getting Videos's Search': ${error.message}`);
    }
};

const getSearchChallenge = async (keywords, count, cursor) => {
    try {
        const url = `https://tiktok-scraper7.p.rapidapi.com/challenge/search`;
        const headers = {
            'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com',
            'x-rapidapi-key': '5627851512msh0ce6cf4fd3d863ep176022jsn23c5c3a200cc'
        }
        console.log(`Requesting URL: ${url}, Params: { keywords: ${keywords}, count: ${count}, cursor: ${cursor}`);
        const response = await axios.get(url, {
            params: { keywords, count, cursor },
            headers: headers,
            httpsAgent: agent
        });
        return response.data;
    } catch (error) {
        console.error(`Error in getSearchChallenge: ${error.response ? error.response.data.description : error.message}`);
        throw new Error(`Error getting Challenge's Search': ${error.message}`);
    }
};

const getSearchUsers = async (keywords, count, cursor) => {
    try {
        const url = `https://tiktok-scraper7.p.rapidapi.com/user/search`;
        const headers = {
            'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com',
            'x-rapidapi-key': '5627851512msh0ce6cf4fd3d863ep176022jsn23c5c3a200cc'
        }
        console.log(`Requesting URL: ${url}, Params: { keywords: ${keywords}, count: ${count}, cursor: ${cursor}`);
        const response = await axios.get(url, {
            params: { keywords, count, cursor },
            headers: headers,
            httpsAgent: agent
        });
        return response.data;
    } catch (error) {
        console.error(`Error in getSearchUsers: ${error.response ? error.response.data.description : error.message}`);
        throw new Error(`Error getting User's Search': ${error.message}`);
    }
};

// Fonction pour gérer l'attente en cas de limitation de taux
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {
    getTrendingVideos,
    getVideoDetails,
    getUserVideos,
    getUserInfo,
    getUserFollowers,
    getUserFollowing,
    getUserFavorite,
    getVideoComments,
    getCommentReplies,
    getChallengeVideos,
    getChallengeDetails,
    getMusicVideos,
    getMusicDetails,
    getSearchVideo,
    getSearchChallenge,
    getSearchUsers
};
