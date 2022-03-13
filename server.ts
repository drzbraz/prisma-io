import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: 'Curso de Reactjs',
      description: 'Curso de react'
    }
  })

  console.log(result)
}

main()