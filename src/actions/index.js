export const searchItems = (text) => ({
    type: 'SEARCH_ITEMS',
    text
});
export const loadFromApi = () => (dispatch) => {
    fetch("https://images-api.nasa.gov/search?q=apollo")
        .then(res=> res.json())
        .then(data=>dispatch(loadData(data.collection.items)));
};
const loadData = items => ({
    type: 'LOAD_DATA',
    items
});
export const loadVideoFromApi = (src) => (dispatch) => {
    fetch(src)
        .then(res=> res.json())
        .then(data=> dispatch(loadVideos(data)));
};
const loadVideos = videos => ({
    type: 'LOAD_VIDEOS',
    videos
});