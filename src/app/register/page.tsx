'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Navbar } from '@/components/Navbar'
import { register } from '@/app/actions/register'

export default function RegisterPage() {
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')

        const formData = new FormData(e.currentTarget)
        const result = await register(formData)

        if (result.error) {
            setError(result.error)
        } else {
            router.push('/login')
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white font-sans">
            <Navbar />
            <div className="flex items-center justify-center min-h-screen px-4">
                <Card className="w-full max-w-md bg-slate-900/60 border-slate-700/50 backdrop-blur-md">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center text-white">Create Account</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    className="bg-slate-800 border-slate-700 text-white"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="bg-slate-800 border-slate-700 text-white"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="bg-slate-800 border-slate-700 text-white"
                                    required
                                />
                            </div>
                            {error && <p className="text-red-400 text-sm">{error}</p>}
                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500">
                                Register
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="justify-center">
                        <p className="text-slate-400 text-sm">
                            Already have an account?{' '}
                            <Link href="/login" className="text-blue-400 hover:text-blue-300">
                                Login
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
