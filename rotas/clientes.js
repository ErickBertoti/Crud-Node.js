const {collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc} = require("firebase/firestore")

const db = require("../db/firebase")

const clientesRoutes = (server) => {

    server.post('/clientes', async (req, res) => {

        try {

            const {cpf, nome_cliente} = req.body

            if(cpf == null || !nome_cliente){
                return res.status(400).send("Os campos cpf e nome_cliente ambos são obrigatórios")
            }

            const docRef = await addDoc(collection(db, 'clientes'), {cpf, nome_cliente})

            res.status(201).send(`Cliente adcionado com ID: ${docRef.id}`)
            
        } catch (error) {

            res.status(500).send("Erro ao adcionar cliente: " + error.message)
            
        }

    })



    server.get('/clientes', async (req, res) => {

        try {
          const busca = await getDocs(collection(db, 'clientes'));
    
          const clientes = busca.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
         
          res.status(200).json(clientes);
    
        } catch (error) {
          res.status(500).send('Erro ao buscar clientes: ' + error.message);
        }
      });




      server.put('/clientes/:id', async (req, res) => {

        try {
           
          const { id } = req.params; 
          const { cpf, nome_cliente} = req.body; 
    
          
          if (cpf == null || !nome_cliente) {
            return res.status(400).send('Os campos "cpf" e "nome_cliente" são obrigatórios.');
          }
    
         
          const clienteRef = doc(db, 'clientes', id);
    
         
          await updateDoc(clienteRef, { cpf, nome_cliente });
    
         
          res.status(200).send(`Cliente com ID ${id} atualizado com sucesso.`);
    
        } catch (error) {
          res.status(500).send('Erro ao atualizar cliente: ' + error.message);
        }
      });


      server.delete('/clientes/:id', async (req, res) => {

        try {
    
          const { id } = req.params;
    
          
          const clienteRef = doc(db, 'clientes', id);
    
        
          await deleteDoc(clienteRef);
    
          
          res.status(200).send(`Cliente com ID ${id} foi removido.`);
    
        } catch (error) {
          res.status(500).send('Erro ao remover cliente: ' + error.message);
        }
      });


}

module.exports = clientesRoutes