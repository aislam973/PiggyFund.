var ctx = document.getElementById('myChart');

// var needs = income*0.5;
// var wants = income*0.3;
// var savings = income*0.2;
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
          'Needs',
          'Wants',
          'Savings'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [50, 30, 20],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      }
});