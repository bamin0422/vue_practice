import axios from "axios";

const config = {
    baseURL: `https://api.hnpwa.com/v0/`
};

function fetchNewsList() {
    return axios.get(`${config.baseURL}news/1.json`);
}

function fetchAskList() {
    return axios.get(`${config.baseURL}ask/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseURL}jobs/1.json`);
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseURL}user/${username}.json`);
}

function fetchPostInfo(postId) {
    return axios.get(`${config.baseURL}item/${postId}.json`)
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchPostInfo
}