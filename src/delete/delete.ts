import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: 'a7c93a8c-13ea-4a8f-814d-75810a1c38e6'
    }
  })
  console.log(result)
}

main()
