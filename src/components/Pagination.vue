<template>
    <b-pagination v-model="currentPage" :total-rows="totalCount" :perPage="limit"></b-pagination>
</template>
<script>
import {GET_COINS_ACTION, SET_OFFSET_ACTION} from '../store';
export default {
    name: 'Pagination',
    data() {
        return {
            totalCount: 100,
            currentPage: 1
        }
    },
    computed: {
        limit() {
            return this.$store.state.limit
        }
    },
    watch: {
        currentPage: {
            handler: function() {
                this.$store.dispatch(SET_OFFSET_ACTION, this.currentPage*this.limit-this.limit);
                this.$store.dispatch(GET_COINS_ACTION);
            }
        }
    }
}
</script>
