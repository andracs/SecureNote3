import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Evgeniy',
    email: 'Evgeniy@prisma.io'
  },
  {
    name: 'Lars',
    email: 'lars@prisma.io'
  },
  {
    name: 'Hasibe',
    email: 'hasibe@prisma.io'
  }
]

const noteData: Prisma.NoteCreateInput[] = [
  {
    title: 'Se denne bagdør på Moodle',
    content: 'Vi skal have en bagdør på Moodle, så vi kan se alle besvarelserne. Jeg håber, at det er muligt, og at András ikke læser denne besked.',
    author: 'Evgeniy'
  },
  {
    title: 'Hvad er det for en filtype?',
    content: 'Jeg har fået en fil med en .prisma filtype. Hvad er det for en filtype? Jeg kan ikke åbne den.',
    author: 'Hasibe'
  },
  {
    title: 'Ny funktion i Prisma',
    content: 'Prisma har lige udgivet en ny funktion, som gør det muligt at ...',
    author: 'Evgeniy'
  },
  {
    title: 'Hvordan bruger man Prisma med Next.js?',
    content: 'Jeg vil gerne vide, hvordan man bruger Prisma med Next.js. Er der nogen, der har erfaring med det?',
    author: 'Hasibe'
  },
  {
    title: 'Prisma og GraphQL',
    content: 'Hvordan integrerer man Prisma med GraphQL? Jeg har brug for nogle eksempler.',
    author: 'Hasibe'
  }
]

export async function main() { 

  await prisma.user.deleteMany()

  for (const u of userData) {
    await prisma.user.create({ data: u })
  }

  await prisma.note.deleteMany()

  for (const n of noteData) {
    await prisma.note.create({ data: n })
  }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })