'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { registerUser } from '@/app/actions/auth'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export function NameModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        // Check if we have a user ID in cookies (client-side check is tricky for httpOnly cookies)
        // So we rely on a server action or a flag. 
        // For simplicity, we can check if we have a local flag, or just call a server action to check status.
        // But to avoid server calls on every load, let's set a localStorage flag when we register.
        const hasRegistered = localStorage.getItem('c-mastery-registered')
        if (!hasRegistered) {
            setIsOpen(true)
        }
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!name.trim()) return

        setIsLoading(true)
        try {
            const result = await registerUser(name)
            if (result.error) {
                toast.error(result.error)
            } else {
                toast.success(`Xin chào, ${name}!`)
                localStorage.setItem('c-mastery-registered', 'true')
                setIsOpen(false)
                router.refresh()
            }
        } catch (e) {
            toast.error('Có lỗi xảy ra')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={(open) => {
            // Prevent closing if not registered
            if (localStorage.getItem('c-mastery-registered')) {
                setIsOpen(open)
            }
        }}>
            <DialogContent className="sm:max-w-[425px] bg-slate-900 text-white border-slate-800">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-blue-400">Chào mừng bạn!</DialogTitle>
                    <DialogDescription className="text-slate-400">
                        Vui lòng nhập tên của bạn để lưu kết quả và tham gia bảng xếp hạng.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                        <Input
                            id="name"
                            placeholder="Nhập tên của bạn..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
                            autoFocus
                        />
                    </div>
                    <DialogFooter>
                        <Button
                            type="submit"
                            disabled={!name.trim() || isLoading}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            {isLoading ? 'Đang lưu...' : 'Bắt đầu học ngay'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
