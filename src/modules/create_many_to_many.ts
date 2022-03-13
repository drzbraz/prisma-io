import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: '929d9c3a-8a91-4c5e-9900-642d6ed0cc3d',
      fk_id_module: '1e39443e-8853-47b1-be8e-636cff0d040c'
    }
  })

  console.log(result)
}

main()
