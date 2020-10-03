<template>
    <div class="home">
        <div class="wrapper" v-for="(satellite, index) in satelliti" :key="index">
            <SatelliteCard :id="satellite.id" />
        </div>
    </div>
</template>

<script>
import SatelliteCard from "@/components/SatelliteCard";
import GraphQLService from "../services/graphql.service";

export default {
    name: "Home",
    data() {
        return {
            satelliti: null,
        };
    },
    created() {
        GraphQLService.querySatellites().then((result) => {
            this.satelliti = result.data.Satellites;
        });
    },
    components: {
        SatelliteCard,
    },
};
</script>
