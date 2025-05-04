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
}
