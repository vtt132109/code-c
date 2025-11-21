'use server'

import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'

export async function registerUser(name: string) {
    if (!name || name.trim().length === 0) {
        return { error: 'Name is required' }
    }

    try {
        // Check if user exists by name (simple logic for now)
        let user = await prisma.user.findFirst({
            where: { name }
        })

        if (!user) {
            user = await prisma.user.create({
                data: {
                    name,
                    email: `${name.toLowerCase().replace(/\s+/g, '')}@example.com`, // Fake email
                    xp: 0
                }
            })
        }

        // Set cookie
        const cookieStore = await cookies()
        cookieStore.set('c-mastery-userid', user.id, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 365, // 1 year
            path: '/',
        })

        return { success: true, userId: user.id }
    } catch (e) {
        console.error('Registration error:', e)
        return { error: 'Failed to register user' }
    }
}

export async function getCurrentUser() {
    const cookieStore = await cookies()
    const userId = cookieStore.get('c-mastery-userid')?.value

    if (!userId) return null

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId }
        })
        return user
    } catch {
        return null
    }
}
