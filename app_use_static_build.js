npx create-react-app .
npm install react-router-dom
npm install react-hook-form
npm install react-markdown  //for description loading


диагностика:
npm list react react-dom
npm cache verify

// for react.js
app.use(express.static(path.join(__dirname, '../client/build')));

// Обработка всех маршрутов и предоставление файла index.html React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
