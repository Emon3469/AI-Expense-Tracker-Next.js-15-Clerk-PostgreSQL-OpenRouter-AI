'use server';
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Record } from "@/types/Record";

async function getRecords(): Promise<{
    records?: Record[];
    error?: string
}> {
    const { userId } = await auth();

    if(!userId) {
        return { error: 'User not found '};
    }

    try{
        const records = await prisma.record.findMany({
            where: { userId },
            orderBy: {
                createdAt: 'desc'
            },
            take: 10,
        });

        return { records } ;
    }
    catch(error){
        console.error('Error fetching records:', error);
        return { error: 'Database error'};
    }
}

export default getRecords;