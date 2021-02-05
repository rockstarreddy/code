<template>
    <div class="h-100 d-flex flex-column">
        <div class="d-flex justify-content-between mb-2">
            <h2>Live Crypto Currency Details</h2>
              <b-button
                pill variant="info"
                v-on:click="getCoins()">
                Refresh Data
            </b-button>
        </div>
        <Table />
        <div class="d-flex flex-row-reverse">
            <Pagination />
            <SelectDropdown />
        </div>
    </div>
</template>

<script>
import { TIME_INTERVAL } from '../constants';
import { GET_COINS_ACTION } from '../store';

import Pagination from './Pagination.vue';
import SelectDropdown from './SelectDropdown.vue';
import Table from './Table.vue';

export default {
    name: 'HomePage',
    components: {
        Table,
        SelectDropdown,
        Pagination
    },
    computed: {
        coins() {
            return {areCoinsFetched: this.$store.state.areCoinsFetched};
        }
    },
    methods: {
        getCoins() {
            this.$store.dispatch(GET_COINS_ACTION);
        }
    },
    mounted() {
        this.$store.dispatch(GET_COINS_ACTION);
        setInterval(() => {
            if (this.coins.areCoinsFetched) {
                // this.$store.dispatch(GET_COINS_ACTION);
            }
        }, TIME_INTERVAL);
    },
}
</script>