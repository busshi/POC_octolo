<template>
  <div>
    <h1>{{ hours }}:{{ minutes }}:{{ seconds }}</h1>
    <h2>{{ clock.day }} {{ month }} {{ clock.year }}</h2>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      clock: { year: 0, month: 0, day: 0, hours: 0, minutes: 0, seconds: 0 },
    };
  },
  methods: {
    async getClock() {
      const req = await fetch("http://localhost:8080/clock");
      this.clock = await req.json();
    },
  },
  watch: {
    clock() {
      this.getClock();
    },
  },
  mounted() {
    this.getClock();
  },
  computed: {
    month: function () {
      const months = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ];
      return months[this.clock.month - 1];
    },
    hours: function () {
      return this.clock.hours < 10 ? "0" + this.clock.hours : this.clock.hours;
    },
    minutes: function () {
      return this.clock.minutes < 10
        ? "0" + this.clock.minutes
        : this.clock.minutes;
    },
    seconds: function () {
      return this.clock.seconds < 10
        ? "0" + this.clock.seconds
        : this.clock.seconds;
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 60px;
}
h2 {
  font-size: 30px;
}
</style>
