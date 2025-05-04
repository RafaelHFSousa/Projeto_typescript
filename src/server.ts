import Fastify, { FastifyReply, FastifyRequest } from "fastify";


const app = Fastify()


app.get("/alunos", (request: FastifyRequest, reply: FastifyReply) => {
  return {"message": "ola mundoo"}
})


app.listen({port: 3333}, () => {
  console.log("Server rodando na porta 3333!")
})