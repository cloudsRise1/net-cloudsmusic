export const NOW_MUSIC = 'NOW_MUSIC';
export const NOW_MUSICMENU = 'NOW_MUSICMENU';
export const USER_SONGLIST = 'USER_SONGLIST';
export const MUSIC_LISTIDS = 'MUSIC_LISTIDS';
export const ADD_COUNT = 'ADD_COUNT';
export const SUB_COUNT = 'SUB_COUNT';
export const CLEAR_COUNT = 'CLEAR_COUNT';
export const SET_COUNT = 'SET_COUNT';
export const SET_DURATION = 'SET_DURATION';
export const SET_PLAY = 'SET_PLAY';
const mutations = {
    NOW_MUSIC : (state, url) => {
        state.nowmusic = url;
        console.log('getNowMusic第一次',state.nowmusic)
    },
    NOW_MUSICMENU : (state, menu) => {
        state.nowmusicmenu = { ...menu };
    },
    SET_PLAY : (state, flag) => {
        state.isPlaying = flag;
    },
    USER_SONGLIST:(state, list) =>{
        state.userPlayList = [...list];
    },
    MUSIC_LISTIDS:(state, list) =>{
        state.musiclistId = [...list];
    },
    ADD_COUNT:(state)=> {
        if (state.musiclistId.length > 0 && state.musicCount + 1 < state.musiclistId.length) {
            state.musicCount++;
        }
    },
    SUB_COUNT:(state) =>{
        if (state.musiclistId.length > 0 && state.musicCount > 0) {
            state.musicCount--;
        }
    },
    CLEAR_COUNT:(state) =>{
        if (state.musiclistId.length > 0) {
            state.musicCount = 0;
        }
    },
    SET_COUNT:(state, num) =>{
        if (state.musiclistId.length > 0) {
            // console.log(num);
            state.musicCount = num;
        }
    },
    SET_DURATION:(state, num) =>{
        // console.log(num);
        state.musicDuration = num;
    },
}

export default mutations