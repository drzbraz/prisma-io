import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: 'Steve Jobs',
      books: {
        createMany: {
          data: [
            {
              name: 'Arquitetura Limpa'
            },
            {
              name: 'Crepusculo'
            },
            {
              name: 'Harry Potter'
            }
          ]
        }
      }
    }
  })

  console.log(result)
}

main()
