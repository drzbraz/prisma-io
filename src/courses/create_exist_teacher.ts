import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 1000,
      name: 'Curso de Java',
      description: 'Curso de Java avançado',
      teacher: {
        connectOrCreate: {
          where: {
            name: 'Daniel Braz'
          },
          create: {
            name: 'Daniel Braz'
          }
        }
      }
    }
  })

  console.log(result)
}

main()
