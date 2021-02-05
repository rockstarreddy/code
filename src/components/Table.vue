<template>
    <div class="flex-1">
        <b-table 
            :busy="!coins.areCoinsFetched"
            striped hover :items="coins.coins"
            :fields="fields">
            <template #table-busy>
                <div class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
                </div>
            </template>
            <template #cell(iconUrl)="data">
                <img :src=data.value width="50" height="50" />
            </template>
            <template #cell(price)="data">
                {{`$${parseFloat(data.value).toFixed(2)}`}}
            </template>
            <template #cell(change)="data">
                {{`${parseFloat(data.value).toFixed(2)}%`}}
            </template>
        </b-table>
    </div>
</template>
<style>
    .flex-1 {
        flex-grow: 1;
    }
</style>
<script>

export default {
    name: 'Table',
    methods: {
        getFields() {
            return (
                [
                    {key: 'iconUrl', label: 'Icon'},
                    'name',
                    'symbol',
                    {key: 'price', label: 'Price'},
                    {key: 'change', label: 'Change'}
                ]
            )
        }
    },
    data() {
        return {
            fields: [{key: 'iconUrl', label: 'Icon'}, 'name', 'symbol', {key: 'price', label: 'Price'}, {key: 'change', label: 'Change'}]
        }
    },
    computed: {
        coins() {
            if (!this.$store.state.coins.length && this.$store.state.areCoinsFetched) {
                this.$bvToast.toast('Error in Fetching Details. Please press refresh or wait for some seconds as it will automatically refresh.', {
                    title: `Error`,
                    variant: 'danger',
                    toaster: 'b-toaster-top-right',
                    solid: true
                });
            }
            return {areCoinsFetched: this.$store.state.areCoinsFetched, coins: this.$store.state.coins};
        }
    }
}
</script>
