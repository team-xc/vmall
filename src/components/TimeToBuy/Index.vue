<template>
  <div class="time-to-buy">
    <div class="header">
      <div class="left">
        <span>限时购</span>
        <div class="count-down">
          <span>距结束</span>
          <div class="time">
            <span class="time-item">{{ count_down[0] }}</span>
            <span>:</span>
            <span class="time-item">{{ count_down[1] }}</span>
            <span>:</span>
            <span class="time-item">{{ count_down[2] }}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <span>更多</span>
        <v-icon class="arrow-icon" icon="arrow" />
      </div>
    </div>
    <div class="list">
      <v-time-to-buy-item v-for="(item,key) in data" :price="item.price" :image="item.image" :key="key" />
    </div>
    <div class="hide-scroll"></div>
  </div>
</template>

<script>
export default {
  name: "TimeToBuy",
  data() {
    return {
      timer: null,
      count_down: ["00", "00", "00"]
    };
  },
  methods: {
    // 开始倒计时
    startCountdown(hours_later) {
      let [h, m, s] = hours_later;
      this.timer = setInterval(() => {
        if (s === 0 && m === 0 && h === 0) {
          return;
        }
        if (s <= 0) {
          s = 60;
          if (m <= 0) {
            m = 60;
            h--;
          }
          m--;
        }
        s--;
        let hh = h < 10 ? "0" + h : h;
        let mm = m < 10 ? "0" + m : m;
        let ss = s < 10 ? "0" + s : s;
        this.count_down = [hh, mm, ss];
      }, 1000);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
};
</script>