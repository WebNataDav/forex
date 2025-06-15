const chartContainer1 = document.getElementById('candle-chart');
const chart1 = LightweightCharts.createChart(chartContainer1, {
  layout: {
    background: { color: '#000000' },
    textColor: '#d1d5db',
  },
  grid: {
    vertLines: { color: '#2d3748' },
    horzLines: { color: '#2d3748' },
  },
  width: chartContainer1.clientWidth,
  height: 300,
  crosshair: { mode: LightweightCharts.CrosshairMode.Normal },
  rightPriceScale: { borderColor: '#374151' },
  timeScale: { borderColor: '#374151', timeVisible: true },
});

const candleSeries1 = chart1.addCandlestickSeries({
  upColor: '#22c55e',
  downColor: '#ef4444',
  wickUpColor: '#22c55e',
  wickDownColor: '#ef4444',
});

candleSeries1.setData([
  { time: "2023-01-04", open: 408, high: 417, low: 400, close: 403 },
  { time: "2023-01-05", open: 401, high: 411, low: 396, close: 410 },
  { time: "2023-01-06", open: 412, high: 423, low: 401, close: 414 },
  { time: "2023-01-07", open: 417, high: 422, low: 410, close: 418 },
  { time: "2023-01-08", open: 418, high: 430, low: 406, close: 412 },
  { time: "2023-01-09", open: 411, high: 417, low: 402, close: 416 },
  { time: "2023-01-10", open: 418, high: 429, low: 407, close: 409 },
  { time: "2023-01-11", open: 412, high: 426, low: 403, close: 419 },
]);

const chartContainer2 = document.getElementById('candle-chart-2');

const chart2 = LightweightCharts.createChart(chartContainer2, {
  layout: {
    background: { color: '#000000' }, 
    textColor: '#a1cfff', 
  },
  grid: {
    vertLines: { color: 'rgba(88, 185, 255, 0.15)' }, 
    horzLines: { color: 'rgba(88, 185, 255, 0.15)' },
  },
  width: chartContainer2.clientWidth,
  height: 250,
  crosshair: { mode: LightweightCharts.CrosshairMode.Normal },
  rightPriceScale: {
    borderColor: 'rgba(88, 185, 255, 0.3)' 
  },
  timeScale: {
    borderColor: 'rgba(88, 185, 255, 0.3)', 
    timeVisible: true
  },
});

const candleSeries2 = chart2.addCandlestickSeries({
  upColor: '#58B9FF',        
  downColor: '#306c90',        
  wickUpColor: '#58B9FF',
  wickDownColor: '#306c90',
  borderVisible: false        
});

candleSeries2.setData([
  { time: "2023-01-04", open: 408, high: 417, low: 400, close: 403 },
  { time: "2023-01-05", open: 401, high: 411, low: 396, close: 410 },
  { time: "2023-01-06", open: 412, high: 423, low: 401, close: 414 },
  { time: "2023-01-07", open: 417, high: 422, low: 410, close: 418 },
]);

window.addEventListener('resize', () => {
  chart1.resize(chartContainer1.clientWidth, 300);
  chart2.resize(chartContainer2.clientWidth, 125);
});

