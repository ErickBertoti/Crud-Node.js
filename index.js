
const server = require('./server');

const produtosRoutes = require('./rotas/produtos');
const clientesRoutes = require('./rotas/clientes')

produtosRoutes(server);
clientesRoutes(server)

const PORT = 3003;

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
