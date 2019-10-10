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
        
      </v-list>
    </v-navigation-drawer>
    `
});


new Vue({
  el: '#app',
  vuetify: new Vuetify(),
})