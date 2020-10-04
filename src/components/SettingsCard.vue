<template>
    <div>
        <h1> Volume </h1>
        <range-slider class="slider" min="10" max="1000" step="10" v-model="sliderValue">
        </range-slider>

        <div>
            <router-link to="/home">
                <img src='../assets/language.png' style="width: 20x;height: 30px" />
            </router-link>
        </div>
    </div>
</template>

<script>
import RangeSlider from "vue-range-slider";
import "vue-range-slider/dist/vue-range-slider.css";

export default {
    data() {
        return {
            sliderValue: 50,
        };
    },
    components: {
        RangeSlider,
    },
};
</script>

<style scoped>
.slider {
    width: 200px;
}
</style>
