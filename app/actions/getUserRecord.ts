'use server';

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

async function getUserRecord(): Promise<{
    record?: number;
    dayWithRecords?: number;
    error?: string;
}> {
    const { userId } = await auth();
    if(!userId){
        return { error: 'User not found'};
    }

    try{
        const records = await prisma.record.findMany({
            where: { userId },
        });

        const record = records.reduce((sum, record) => sum + record.amount, 0);

        const dayWithRecords = records.filter((record) => record.amount > 0).length;

        return { record, dayWithRecords};
    }
    catch(error){
        console.error('Error fetching user record:', error);
        return { error: 'Database error '};
    }
}

export default getUserRecord;