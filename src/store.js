// import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'
import { BASE_URL } from './constants';
import axios from 'axios';

export const GET_COINS = 'GET_COINS';
export const COINS_FETCHED = 'COINS_FETCHED';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_LIMIT = 'SET_LIMIT';

export const GET_COINS_ACTION = 'getCoins';
export const SET_OFFSET_ACTION = 'setOffset';
export const SET_LIMIT_ACTION = 'setLimit';


Vue.use(Vuex);

const state = {
  coins: [],
  areCoinsFetched: false,
  limit: 10,
  offset: 0
};

const getters = {
    coins: (state) => state.coins,
    limit: (state) => state.limit,
    areCoinsFetched: (state) => state.areCoinsFetched
};

const mutations = {
  GET_COINS(state) {
    state.areCoinsFetched = false;
  },
  COINS_FETCHED(state, coins) {
    state.areCoinsFetched = true;
    state.coins = coins;
  },
  SET_LIMIT(state, limit) {
    state.limit = limit;
  },
  SET_OFFSET(state, offset) {
    state.offset = offset;
  }
};

const actions = {
  async getCoins({commit, state}) {
    commit(GET_COINS);
    try {
      const url = BASE_URL + `/coins/?limit=${state.limit}&offset=${state.offset}`;
      const json = await axios.get(url).then((response) => response.data);
      commit(COINS_FETCHED, json.data.coins);
    }
    catch (e) {
      commit(COINS_FETCHED, []);
    }
  },
  setOffset({commit}, offset) {
    commit(SET_OFFSET, offset);
  },
  setLimit({commit}, limit) {
    commit(SET_LIMIT, limit)
  }
};


export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});