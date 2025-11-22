'use server'

import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function register(formData: FormData) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!name || !email || !password) {
        return { error: 'Missing fields' }
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email }
        })

        if (existingUser) {
            return { error: 'Email already exists' }
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
            }
        })

        return { success: true }
    } catch (e) {
        console.error('Registration error:', e)
        return { error: 'Failed to register user' }
    }
}
