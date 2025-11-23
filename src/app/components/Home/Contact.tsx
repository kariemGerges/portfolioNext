'use client';
import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
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
        <section id="contact" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 sm:mb-10 lg:mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-200 mb-6">
                        <div className="w-2 h-2 rounded-full bg-amber-700" />
                        <p className="text-xs sm:text-sm text-gray-600 tracking-wide uppercase font-medium">
                            Contact
                        </p>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 sm:mb-6 tracking-tight">
                        Let&apos;s discuss
                        <br />
                        <span className="text-amber-700">your project</span>
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-light leading-relaxed max-w-2xl">
                        Ready to transform your ideas into scalable enterprise solutions? 
                        Let&apos;s start a conversation about your project requirements.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-5 sm:space-y-6"
                    >
                        <div>
                            <p className="text-xs text-gray-500 mb-2 sm:mb-3 tracking-wide uppercase font-medium">
                                Email
                            </p>
                            <a
                                href="mailto:kariem.gerges@outlook.com"
                                className="text-lg sm:text-xl lg:text-2xl font-light text-black hover:text-amber-700 transition-colors inline-block break-all"
                            >
                                kariem.gerges@outlook.com
                            </a>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 mb-3 sm:mb-4 tracking-wide uppercase font-medium">
                                Connect
                            </p>
                            <div className="flex gap-3">
                                <a
                                    href="https://github.com/kariemGerges"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 sm:p-3 rounded-lg bg-gray-100 hover:bg-amber-50 border border-gray-200 hover:border-amber-700/30 transition-all duration-300 group"
                                >
                                    <Github size={18} className="sm:w-5 sm:h-5 text-gray-700 group-hover:text-amber-700 transition-colors" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/kariem-gerges-458294195/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 sm:p-3 rounded-lg bg-gray-100 hover:bg-amber-50 border border-gray-200 hover:border-amber-700/30 transition-all duration-300 group"
                                >
                                    <Linkedin size={18} className="sm:w-5 sm:h-5 text-gray-700 group-hover:text-amber-700 transition-colors" />
                                </a>
                                <a
                                    href="mailto:kariem.gerges@outlook.com"
                                    className="p-2.5 sm:p-3 rounded-lg bg-gray-100 hover:bg-amber-50 border border-gray-200 hover:border-amber-700/30 transition-all duration-300 group"
                                >
                                    <Mail size={18} className="sm:w-5 sm:h-5 text-gray-700 group-hover:text-amber-700 transition-colors" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Card className="border border-gray-200 shadow-lg">
                            <CardContent className="p-4 sm:p-5 lg:p-6">
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4 sm:space-y-5"
                                >
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2 block"
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
                                            className="bg-white border-gray-300 focus:border-amber-700 focus:ring-amber-700 placeholder:text-gray-400 h-10 sm:h-11 text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2 block"
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
                                            className="bg-white border-gray-300 focus:border-amber-700 focus:ring-amber-700 placeholder:text-gray-400 h-10 sm:h-11 text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2 block"
                                        >
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell me about your project..."
                                            rows={5}
                                            required
                                            className="bg-white border-gray-300 focus:border-amber-700 focus:ring-amber-700 placeholder:text-gray-400 resize-none text-sm"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-medium text-sm hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        <span>Send Message</span>
                                        <Mail size={16} />
                                    </button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
