const express = require('express');
const app = express();

// Слушаем 3000 порт
const PORT = 3000;

app.listen(PORT, () => {
    // Если всё работает, консоль покажет, какой порт приложение слушает
    console.log(`App listening on port ${PORT}`)
})