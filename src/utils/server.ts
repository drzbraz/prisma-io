import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 100,
      name: 'Curso de Css',
      description: 'Curso de Css'
    }
  })

  console.log(result)
}

main()
