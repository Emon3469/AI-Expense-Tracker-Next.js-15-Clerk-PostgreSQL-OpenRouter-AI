'use server';
import { prisma } from "@/lib/prisma";
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from "next/cache";

async function deleteRecord(recordId: string): Promise<{
    message?: string;
    error?: string;
}> {
   const { userId } = await auth();

   if(!userId){
    return { error: 'User not found'};
   }

   try{
    await prisma.record.delete({
        where: {
            id: recordId,
            userId,
        },
    });

    revalidatePath('/');

    return { message: 'Record deleted' };
   }
   catch(error){
     console.error('Error deleting record:', error);
     return { error: 'Database error'};
   }
}

export default deleteRecord;