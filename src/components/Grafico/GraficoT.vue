<template>
  <Bar :chart-data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'DUNNO', 'I`m boring', 'Money', 'Fun'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#C085FB', "#47107E", "#CFA8F6", "#D26EF4"],
            data: [54801, 6649, 87622, 9661]
          }
        ],
         hoverOffset: 4
      }
    }
  }
}
</script>
//   async mounted() {
//     // Reports 'vue-chartjs/legacy'
//     const reportResponse = await fetch('/api/reports');
//     const reports = await reportResponse.json();
//     this.reports = reports.reports;
//     return {reports}
//   }
// }
</script>