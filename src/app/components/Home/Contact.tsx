'use client';
import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { MorphButton } from '../ui/MorphButton';
import { Card, CardContent } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { toast } from 'sonner';


export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <section id="contact" className="px-6 lg:px-12 pb-32">
            <div className="max-w-7xl mx-auto border-t border-gray-200 pt-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-5xl lg:text-6xl font-light leading-tight my-4 tracking-tight">
                            Let&apos;s work
                            <br />
                            together
                        </h2>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Have a project in mind? I&apos;d love to hear about
                            it.
                        </p>
                        <p className="text-sm text-gray-500 my-3 tracking-wide uppercase">
                            Email
                        </p>
                        <a
                            href="mailto:hello@example.com"
                            className="text-2xl font-light hover:text-gray-600 transition-colors"
                        >
                            kariem.gerges@outlook.com
                        </a>
                        <p className="text-sm text-gray-500 my-3 tracking-wide uppercase">
                            Social
                        </p>
                        <div className="flex gap-6">
                            <a
                                href="#"
                                className="text-gray-600 hover:text-black transition-colors"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-black transition-colors"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-black transition-colors"
                            >
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="">
                                <CardContent className="p-6">
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="text-gray-600 mb-2 block"
                                            >
                                                Name
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                required
                                                className="bg-gray-300 border-amber-700  placeholder:text-slate-500"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="text-gray-600 mb-2 block"
                                            >
                                                Email
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your@email.com"
                                                required
                                                className="bg-gray-300 border-amber-700 placeholder:text-slate-500"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="text-gray-600 mb-2 block"
                                            >
                                                Message
                                            </label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Your message..."
                                                rows={5}
                                                required
                                                className="bg-gray-300 border-amber-700 placeholder:text-slate-500"
                                            />
                                        </div>
                                        <MorphButton
                                            type="submit"
                                            className='justify-center items-center gap-3 text-slate-300 border-slate-700 hover:text-slate-300 hover:bg-slate-800 hover:border-slate-800'
                                        >
                                            Send Message
                                        </MorphButton>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
