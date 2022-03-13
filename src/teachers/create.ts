import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.teachers.create({
    data: {
      name: 'Robert Veloso'
    }
  })

  console.log(result)
}

main()
