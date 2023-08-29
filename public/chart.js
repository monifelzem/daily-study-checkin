const chartContainer = document.getElementById("chartContainer");

// Função para renderizar o gráfico de barras
const renderChart = (data) => {
  const chartData = data.map((entry) => ({
    name: entry.name,
    studyTime: parseInt(entry.studyTime),
  }));

  const colors = ["#8884d8", "#82ca9d", "#ffc658"];

  const chart = Recharts.BarChart;
  const bar = Recharts.Bar;
  const xaxis = Recharts.XAxis;
  const yaxis = Recharts.YAxis;
  const cartesianGrid = Recharts.CartesianGrid;
  const tooltip = Recharts.Tooltip;
  const legend = Recharts.Legend;

  ReactDOM.render(
    <chart width={600} height={300} data={chartData}>
      <cartesianGrid strokeDasharray="3 3" />
      <xaxis dataKey="name" />
      <yaxis />
      <tooltip />
      <legend />
      <bar dataKey="studyTime" fill={colors[0]} />
    </chart>,
    chartContainer
  );
};

// Simulação de dados (substitua pela obtenção real dos dados do servidor)
const sampleData = [
  { name: "Alice", studyTime: 4 },
  { name: "Bob", studyTime: 3 },
  { name: "Charlie", studyTime: 6 },
];

renderChart(sampleData); // Renderiza o gráfico com os dados simulados
const chartContainer = document.getElementById("chartContainer");

// Função para buscar os dados dos check-ins do servidor
const fetchCheckins = async () => {
  try {
    const response = await fetch("/view-checkins");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar os check-ins:", error);
    return [];
  }
};

// Função para renderizar o gráfico de barras
const renderChart = async () => {
  const data = await fetchCheckins();

  const chartData = data.map((entry) => ({
    name: entry.name,
    studyTime: parseInt(entry.studyTime),
  }));

  const colors = ["#8884d8", "#82ca9d", "#ffc658"];

  const chart = Recharts.BarChart;
  const bar = Recharts.Bar;
  const xaxis = Recharts.XAxis;
  const yaxis = Recharts.YAxis;
  const cartesianGrid = Recharts.CartesianGrid;
  const tooltip = Recharts.Tooltip;
  const legend = Recharts.Legend;

  ReactDOM.render(
    <chart width={600} height={300} data={chartData}>
      <cartesianGrid strokeDasharray="3 3" />
      <xaxis dataKey="name" />
      <yaxis />
      <tooltip />
      <legend />
      <bar dataKey="studyTime" fill={colors[0]} />
    </chart>,
    chartContainer
  );
};

// Renderiza o gráfico ao carregar a página
renderChart();
