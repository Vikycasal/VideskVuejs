<template>
  <Pie 
  :chartOption="chartOption"
  :chart-data="chartData" />
</template>

<script>
import { Pie } from 'vue-chartjs/legacy';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
export default {
  name: "app",
  components: {
    Pie,
  }, 
   data: () => ({
    users: [],
    chartData: {
      labels: [],
      datasets: [
        {
          backgroundColor: [],
          data: [],
        },
      ],
    },
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }), 
  methods: {
    getLastLogin(sessions) {
      const getLastLogin = Math.max (
        ...sessions.map((e) => {
          const date = new Date(e).getTime();
          return date;
        })
      );
      return moment(getLastLogin).fromNow();
    },
  },
async beforeMount() {
    // Users
    const userResponse = await fetch('/api/users');
    const { users } = await userResponse.json();

    this.users = users;
    // Reports
    const reportResponse = await fetch('/api/reports');
    const { reports } = await reportResponse.json();
    const PieData = {
      labels: [],
      datasets: [
        {
          backgroundColor: [],
          data: [],
        },
      ],
    };

    for (let data of reports) {
      PieData.labels.push(data.category);
      PieData.datasets[0].backgroundColor.push(
        `#${Math.floor(Math.random() * 16777215).toString(16)}`
      );
      PieData.datasets[0].data.push(data.total);
    }

    this.chartData = PieData;
  }, 
}
</script>
