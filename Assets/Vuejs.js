Vue.component("navBar", {
  template: `
    <v-navigation-drawer app permanent left dark>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Jan Justyn Dela Cruz
          </v-list-item-title>
          <v-list-item-subtitle>
            IT 415: Information Visualization
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item @click="" href="index.html">
          <v-list-item-title>
            Week 1
          </v-list-item-title>
        </v-list-item>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>Week 2</v-list-item-title>
          </template>
          <v-list-item @click="" href="DonutChart.html">Donut Chart: Hamburger</v-list-item>
          <v-list-item @click="" href="BarChart.html">Bar Chart: Computer Cost</v-list-item>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>Week 3</v-list-item-title>
          </template>
          <v-list-item @click="" href="MilitarySpending.html">Military Spending</v-list-item>
          <v-list-item @click="" href="GDP.html">GDP</v-list-item>
          <v-list-item @click="" href="GDPPerCapita.html">GDP Per Capita</v-list-item>
          <v-list-item @click="" href="GrowingSpending.html">Fastest Growing Spending</v-list-item>
          <v-list-item @click="" href="OverallSpending.html">Overall Spending</v-list-item>
        </v-list-group>

        <v-list-item @click="" href="Timeline.html">
        <v-list-item-title>
          Week 4
        </v-list-item-title>
      </v-list-item>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>Bonus: GMU Salary</v-list-item-title>
          </template>
          <v-list-item @click="" href="GMUSalary.html">GMU Salaries</v-list-item>
          <v-list-item @click="" href="GMUComparison.html">GMU Salary Comparison</v-list-item>
        </v-list-group>

        <v-list-item @click="" href="Tableau.html">
          <v-list-item-title>
            Week 5
          </v-list-item-title>
        </v-list-item>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>Week 7</v-list-item-title>
          </template>
          <v-list-item @click="" href="Chartjs.html">Chartjs</v-list-item>
          <v-list-item @click="" href="D3.html">D3</v-list-item>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>Week 8</v-list-item-title>
          </template>
          <v-list-item @click="" href="Project2Vid.html">Project 2: Video</v-list-item>
          <v-list-item @click="" href="Project2.html">Project: Data</v-list-item>
        </v-list-group>

        <v-list-item @click="" href="FinalProject.html">
        <v-list-item-title>
          Final Project
        </v-list-item-title>
      </v-list-item>
        
      </v-list>
    </v-navigation-drawer>
    `
});


new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: {
    items: [
      {
        image: 'Assets/Contigo.png',
        text: '24 fl oz'
      },
      {
        image: 'Assets/sanpellegrino.png',
        text: '11.15 fl oz'
      },
      {
        image: 'Assets/lacroix.png',
        text: '12 fl oz'
      }
    ],
    waterData: [
      {
        date: '9/30',
        water: 48,
        pellegrino: 22.3,
        lacroix: 0,
        totaldrank: 70.3,
        totalsparkling: 22.3,
        waterdranked: 2,
        sparklingdranked: 2,
      }
    ,
      {
        date: '10/1',
        water: 65,
        pellegrino: 11.15,
        lacroix: 0,
        totaldrank: 76.15,
        totalsparkling: 11.15,
        waterdranked: 3,
        sparklingdranked: 1,
      }
    ,
      {
        date: '10/2',
        water: 76,
        pellegrino: 11.15,
        lacroix: 0,
        totaldrank: 87.15,
        totalsparkling: 11.15,
        waterdranked: 3,
        sparklingdranked: 1,
      }
    ,
    {
      date: '10/3',
      water: 92,
      pellegrino: 11.15,
      lacroix: 0,
      totaldrank: 103.15,
      totalsparkling: 11.15,
      waterdranked: 3,
      sparklingdranked: 1,
    },
    {
      date: '10/4',
      water: 40,
      pellegrino: 11.15,
      lacroix: 0,
      totaldrank: 51.15,
      totalsparkling: 11.15,
      waterdranked: 1,
      sparklingdranked: 1,
    },
    {
      date: '10/5',
      water: 68,
      pellegrino: 11.15,
      lacroix: 0,
      totaldrank: 79.15,
      totalsparkling: 11.15,
      waterdranked: 2,
      sparklingdranked: 1,
    },
    {
      date: '10/6',
      water: 48,
      pellegrino: 22.3,
      lacroix: 0,
      totaldrank: 70.3,
      totalsparkling: 22.23,
      waterdranked: 2,
      sparklingdranked: 2,
    },
    {
      date: '10/7',
      water: 56.5,
      pellegrino: 11.15,
      lacroix: 0,
      totaldrank: 67.65,
      totalsparkling: 11.15,
      waterdranked: 2,
      sparklingdranked: 1,
    },
    {
      date: '10/8',
      water: 89,
      pellegrino: 11.15,
      lacroix: 0,
      totaldrank: 67.65,
      totalsparkling: 11.15,
      waterdranked: 2,
      sparklingdranked: 1,
    },
    {
      date: '10/9',
      water: 89,
      pellegrino: 0,
      lacroix: 12,
      totaldrank: 101,
      totalsparkling: 11.15,
      waterdranked: 3,
      sparklingdranked: 1,
    },
    {
      date: '10/10',
      water: 72,
      pellegrino: 0,
      lacroix: 12,
      totaldrank: 84,
      totalsparkling: 12,
      waterdranked: 3,
      sparklingdranked: 1,
    },
    {
      date: '10/11',
      water: 57,
      pellegrino: 0,
      lacroix: 24,
      totaldrank: 81,
      totalsparkling: 24,
      waterdranked: 2,
      sparklingdranked: 2,
    },
    {
      date: '10/12',
      water: 116,
      pellegrino: 0,
      lacroix: 24,
      totaldrank: 140,
      totalsparkling: 24,
      waterdranked: 4,
      sparklingdranked: 2,
    },
    {
      date: '10/13',
      water: 40,
      pellegrino: 0,
      lacroix: 24,
      totaldrank: 64,
      totalsparkling: 24,
      waterdranked: 1,
      sparklingdranked: 2,
    },
    {
      date: '10/14',
      water: 58,
      pellegrino: 0,
      lacroix: 24,
      totaldrank: 82,
      totalsparkling: 24,
      waterdranked: 2,
      sparklingdranked: 2,
    },
    {
      date: '10/15',
      water: 64,
      pellegrino: 0,
      lacroix: 12,
      totaldrank: 76,
      totalsparkling: 12,
      waterdranked: 2,
      sparklingdranked: 1,
    },
    {
      date: '10/16',
      water: 88,
      pellegrino: 0,
      lacroix: 12,
      totaldrank: 100,
      totalsparkling: 12,
      waterdranked: 3,
      sparklingdranked: 1,
    },
    {
      date: '10/17',
      water: 88,
      pellegrino: 0,
      lacroix: 12,
      totaldrank: 100,
      totalsparkling: 12,
      waterdranked: 3,
      sparklingdranked: 1,
    },
    {
      date: '10/18',
      water: 48,
      pellegrino: 0,
      lacroix: 12,
      totaldrank: 60,
      totalsparkling: 12,
      waterdranked: 2,
      sparklingdranked: 1,
    },
    {
      date: '10/19',
      water: 72,
      pellegrino: 0,
      lacroix: 24,
      totaldrank: 96,
      totalsparkling: 24,
      waterdranked: 3,
      sparklingdranked: 2,
    },
    {
      date: '10/20',
      water: 64,
      pellegrino: 0,
      lacroix: 12,
      totaldrank: 76,
      totalsparkling: 12,
      waterdranked: 2,
      sparklingdranked: 1,
    },
    {
      date: '10/21',
      water: 96,
      pellegrino: 0,
      lacroix: 21,
      totaldrank: 120,
      totalsparkling: 24,
      waterdranked: 4,
      sparklingdranked: 2,
    },
    {
      date: '10/22',
      water: 75,
      pellegrino: 0,
      lacroix: 12,
      totaldrank: 87,
      totalsparkling: 12,
      waterdranked: 3,
      sparklingdranked: 1,
    },
    {
      date: '10/23',
      water: 63,
      pellegrino: 0,
      lacroix: 12,
      totaldrank: 75,
      totalsparkling: 12,
      waterdranked: 2,
      sparklingdranked: 1,
    },
    {
      date: '10/24',
      water: 89,
      pellegrino: 0,
      lacroix: 12,
      totaldrank: 101,
      totalsparkling: 12,
      waterdranked: 3,
      sparklingdranked: 1,
    },
    {
      date: '10/25',
      water: 66,
      pellegrino: 0,
      lacroix: 12,
      totaldrank: 78,
      totalsparkling: 12,
      waterdranked: 2,
      sparklingdranked: 1,
    },
    {
      date: '10/26',
      water: 53,
      pellegrino: 0,
      lacroix: 24,
      totaldrank: 77,
      totalsparkling: 24,
      waterdranked: 2,
      sparklingdranked: 2,
    },
    {
      date: '10/27',
      water: 34,
      pellegrino: 0,
      lacroix: 24,
      totaldrank: 58,
      totalsparkling: 24,
      waterdranked: 1,
      sparklingdranked: 2,
    },
    {
      date: '10/28',
      water: 39,
      pellegrino: 0,
      lacroix: 12,
      totaldrank: 51,
      totalsparkling: 12,
      waterdranked: 1,
      sparklingdranked: 1,
    },
    {
      date: '10/29',
      water: 68,
      pellegrino: 0,
      lacroix: 12,
      totaldrank: 80,
      totalsparkling: 12,
      waterdranked: 2,
      sparklingdranked: 1,
    },
    {
      date: '10/30',
      water: 57,
      pellegrino: 0,
      lacroix: 24,
      totaldrank: 81,
      totalsparkling: 24,
      waterdranked: 2,
      sparklingdranked: 2,
    },
    {
      date: '10/31',
      water: 71,
      pellegrino: 0,
      lacroix: 12,
      totaldrank: 83,
      totalsparkling: 12,
      waterdranked: 2,
      sparklingdranked: 1,
    },
    {
      date: '11/1',
      water: 96,
      pellegrino: 0,
      lacroix: 12,
      totaldrank: 108,
      totalsparkling: 12,
      waterdranked: 3,
      sparklingdranked: 1,
    },
    {
      date: '11/2',
      water: 48,
      pellegrino: 0,
      lacroix: 12,
      totaldrank: 60,
      totalsparkling: 12,
      waterdranked: 1,
      sparklingdranked: 1,
    },
    {
      date: '11/3',
      water: 65,
      pellegrino: 0,
      lacroix: 24,
      totaldrank: 89,
      totalsparkling: 24,
      waterdranked: 2,
      sparklingdranked: 1,
    },
    {
      date: '11/4',
      water: 39,
      pellegrino: 0,
      lacroix: 12,
      totaldrank: 51,
      totalsparkling: 12,
      waterdranked: 2,
      sparklingdranked: 2,
    },
    {
      date: '11/5',
      water: 64,
      pellegrino: 0,
      lacroix: 12,
      totaldrank: 76,
      totalsparkling: 12,
      waterdranked: 2,
      sparklingdranked: 1,
    }
    
  ]

  }
})