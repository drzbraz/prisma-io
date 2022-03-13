import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.modules.create({
    data: {
      name: 'Aprendendo firebase',
      description: 'Aprendendo firebase do zero',
      courses: {
        create: {
          course: {
            connect: {
              id: '0bbd8eaf-03c8-441d-972b-ac8b08239544'
            }
          }
        }
      }
    }
  })

  console.log(result)
}

main()
