// Grafico circular
let ctx = document.getElementById('myChart');

let myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Usage", "Not-Usage"],
        datasets: [{
            data: [0, 0],
            backgroundColor: [
                "#eb6534",
                "#09bc8a"
            ],
            borderColor: [
                "#fff",
                "#fff"
            ],
            borderWith: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// Asigna un tamaño al contenedor del canvas.
myPieChart.canvas.parentNode.style.height = '300px';
myPieChart.canvas.parentNode.style.width = '300px';