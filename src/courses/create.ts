import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 1000,
      name: 'Curso de Rubi',
      description: 'Curso de Rubi avançado',
      teacher: {
        connectOrCreate: {
          where: {
            name: 'Jose Alves'
          },
          create: {
            name: 'Jose Alves'
          }
        }
      }
    }
  })

  console.log(result)
}

main()
