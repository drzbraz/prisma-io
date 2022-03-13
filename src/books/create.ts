import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.books.create({
    data: {
      name: 'Clean Arch',
      author_id: 'fa443d20-686a-4323-af2a-a6b342374417'
    }
  })

  console.log(result)
}

main()
