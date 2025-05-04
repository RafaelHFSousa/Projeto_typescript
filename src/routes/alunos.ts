import { PrismaClient } from "@prisma/client";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

const prisma = new PrismaClient();

export async function alunoRoutes(app: FastifyInstance) {
  app.post("/alunos", async (request: FastifyRequest, reply: FastifyReply) => {
    console.log("--");
    const { matricula, nome, idade, curso } = request.body as {
      matricula: string;
      nome: string;
      idade: number;
      curso: string;
    };

    const aluno = await prisma.aluno.create({
      data: { matricula, nome, idade, curso },
    });

    return reply.status(200).send(aluno);
  });
  
  app.get("/alunos", async (request: FastifyRequest, reply: FastifyReply) => {
    const alunos = await prisma.aluno.findMany();
    return alunos;
  });

  app.get('/alunos/:matricula', async (request: FastifyRequest, reply: FastifyReply) => {
    const {matricula} = request.params as {matricula: string}
    const aluno = await prisma.aluno.findUnique({
      where: { matricula }
    })

    if (!aluno) {
      return reply.status(404).send({"erro": "não encontrado"})
    }
    return aluno
  })

  app.delete('/alunos/:matricula', async (request: FastifyRequest, reply: FastifyReply) => {
    const {matricula} = request.params as {matricula: string}
    const aluno = await prisma.aluno.findUnique({
      where: { matricula }
    })

    if (!aluno) {
      return reply.status(404).send({"erro": "não encontrado"})
    }

    await prisma.aluno.delete({
      where: { matricula }
    })

    return reply.status(204).send() 
  })
}
