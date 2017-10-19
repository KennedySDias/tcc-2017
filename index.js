const app = require('./app')

app.listen(app.get('port'), () => {
    console.log(`App sendo executada na porta ${app.get('port')}`)
});
