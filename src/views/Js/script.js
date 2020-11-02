const socket = io("http://localhost:3001");

// Pedira la los datos cada 1sec
setInterval(() => {
    socket.emit("request-data");
}, 1000);

// Actualizara el dashboard cuando reciba nuevos datos
socket.on("new-data", data => {
    const { totalMemory, freeMemory} = data;
    
    let usageMemory = totalMemory - freeMemory;

    myPieChart.data.datasets[0].data[0] = usageMemory;
    myPieChart.data.datasets[0].data[1] = freeMemory;
    myPieChart.update();
});