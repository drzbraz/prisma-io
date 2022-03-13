import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 500,
      name: 'Curso de Javascript',
      description: 'Curso de Javascript avançado',
      fk_id_teacher: '93c4555b-ed80-4a27-b63d-d8955274518b'
    }
  })

  console.log(result)
}

main()
