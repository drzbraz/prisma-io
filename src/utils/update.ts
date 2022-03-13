import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: '66035973-b401-4ddf-ab28-eb42f17bdaf4'
    },
    data: {
      duration: 400,
      description: 'Curso orientado por dbraz'
    }
  })

  console.log(result)
}

main()
