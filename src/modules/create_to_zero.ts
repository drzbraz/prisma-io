import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          duration: 200,
          name: 'Curso de nodejs',
          description: 'Curso completo nodejs',
          teacher: {
            create: {
              name: 'Richard Veloso'
            }
          }
        }
      },
      module: {
        create: {
          name: 'Curso de prisma IO',
          description: 'Curso completo de prisma IO'
        }
      }
    }
  })

  console.log(result)
}

main()
