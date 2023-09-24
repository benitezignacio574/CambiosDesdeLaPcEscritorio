
const ctx = document.getElementById('myChart1');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Alarmas no Aceptadas', 'Alarmas Azules Aceptadas', 'Alarmas Normales'],
        datasets: [{
            label: 'Cantidad de ALarmas Azules Durante el Año',
            data: [2, 4, 6],
            backgroundColor: [

                'rgba(255, 99, 132, 1)',
                
                'rgba(54, 162, 235, 1)',
                
                'rgba(255, 206, 86, 1)'
            ]

        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});