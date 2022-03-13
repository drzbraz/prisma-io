import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 50,
      name: 'Curso de Elixir',
      description: 'Curso de Elixir avançado',
      teacher: {
        create: {
          name: 'Yuri Sales'
        }
      }
    }
  })

  console.log(result)
}

main()
