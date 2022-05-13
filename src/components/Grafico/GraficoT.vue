<template>
<div class="pie">
  <Pie 
  :chartOption="chartOption"
  :chart-data="chartData"
   />
  </div>
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
     chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
    },
    chartData: {
      labels: [],
      datasets: [
        {
          backgroundColor: ["#D26EF4", "#3C047A", "#9756E1", "#B795DD"],
          data: [],
        },
      ],
    },
   
  }), 
async beforeMount() {
    // Reports
    const reportResponse = await fetch('/api/reports');
    const { reports } = await reportResponse.json();
    const PieData = {
      labels: [],
      datasets: [
        {
          backgroundColor:  ["#D26EF4", "#3C047A", "#9756E1", "#B795DD"],
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

<style>
.pie {
  height: 1000px;
  width: 1000px;
}

</style>
