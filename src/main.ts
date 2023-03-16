import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here

    prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice2@prisma.io',
            posts: {
                create: { title: 'Hello World', },
            },
            profile: {
                create: { bio: 'I like turtles' },
            },
        }
    }).then(res => {
        console.log(res);
    });

    prisma.user.create({
        data: {
            name: 'Bob',
            email: 'bob2@prisma.io',
            posts: {
                createMany: {
                    data: [
                        { title: "Bobs post 1" },
                        { title: "Bobs post 2" },
                        { title: "Bobs post 3" },
                    ]
                }
            },
            profile: {
                create: { bio: 'I like turtles' },
            },
        }
    }).then(res => {
        console.log(res);
    });
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })

    .catch(async (e) => {
        console.error(e)

        await prisma.$disconnect()

        process.exit(1)
    });