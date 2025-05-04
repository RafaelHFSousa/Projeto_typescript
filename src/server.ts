import Fastify, { FastifyReply, FastifyRequest } from "fastify"
import { alunoRoutes } from "./routes/alunos"

const app = Fastify()

app.register(alunoRoutes)

// app.get("/alunos", (request: FastifyRequest, reply: FastifyReply) => {
//   return {"message": "Ok"}
// })

app.listen({port: 3333}, () => {
  console.log('Servidor rodando na porta 3333!')
})