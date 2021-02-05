<template>
    <div class="d-flex mr-3">
        <div class="d-flex align-items-center mr-2">Show</div>
        <b-form-select class="w-auto" v-model="limit" :options="pages"></b-form-select>
    </div>
</template>
<script>
import {GET_COINS_ACTION, SET_LIMIT_ACTION} from '../store';
export default {
    name: 'SelectDropdown',
    data() {
        return {
            pages: [{value: 10, text: 10}, {value: 25, text: 25}, {value: 50, text: 50}, {value: 100, text: 100}],
            limit: this.$store.state.limit
        }
    },
    watch: {
        limit: {
            handler: function(limit) {
                this.$store.dispatch(SET_LIMIT_ACTION, limit);
                this.$store.dispatch(GET_COINS_ACTION);
            }
        }
    }
}
</script>
