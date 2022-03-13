import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      OR: [
        {
          name: {
            contains: 'Java'
          }
        },
        {
          name: {
            contains: 'nodejs'
          }
        },
        {
          duration: {
            equals: 1000
          }
        }
      ]
    }
  })
  console.log(result)
}

main()
