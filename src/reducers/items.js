export const items = (state='', action) => {
    switch(action.type) {
        case 'LOAD_DATA':
            return action.items;
        case 'SEARCH_ITEMS':
            var filtered = state.filter(item =>{
                var title = item.data[0].title.toLowerCase();
                return title.includes(action.text);
            });
            return filtered;
        default:
            return state;
    }
}
export const video = (state='',action) => {
    switch(action.type) {
        case 'LOAD_VIDEOS':
            var filtered = action.videos.filter(video => video.includes('orig.mp4'));
            return filtered;
        default:
            return state;
    }
}