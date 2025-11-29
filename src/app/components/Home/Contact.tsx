'use client';
import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Card, CardContent } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { toast } from 'sonner';
import Image from 'next/image';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const prefersReducedMotion = useReducedMotion();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            toast.success("Message sent successfully! I'll get back to you soon.");
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error(
                error instanceof Error 
                    ? error.message 
                    : 'Failed to send message. Please try again later.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section 
            id="contact" 
            className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ 
                        duration: prefersReducedMotion ? 0 : 0.8, 
                        ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-24"
                >
                    <div className="overflow-hidden">
                        <motion.h2
                            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-4 sm:mb-6 tracking-tight"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: prefersReducedMotion ? 0 : 0.8, 
                                delay: prefersReducedMotion ? 0 : 0.1,
                                ease: [0.16, 1, 0.3, 1] 
                            }}
                        >
                            Get in <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Touch</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-2xl mx-auto px-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: prefersReducedMotion ? 0 : 0.8, 
                            delay: prefersReducedMotion ? 0 : 0.3,
                            ease: [0.16, 1, 0.3, 1] 
                        }}
                    >
                        Let's discuss your project.
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ 
                            duration: prefersReducedMotion ? 0 : 0.8, 
                            ease: [0.16, 1, 0.3, 1] 
                        }}
                        className="space-y-6 sm:space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: prefersReducedMotion ? 0 : 0.2 }}
                        >
                            <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3 font-light uppercase tracking-wide">
                                Email
                            </p>
                            <a
                                href="mailto:kariem.gerges@outlook.com"
                                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity inline-block break-all"
                            >
                                kariem.gerges@outlook.com
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: prefersReducedMotion ? 0 : 0.4 }}
                        >
                            <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 font-light uppercase tracking-wide">
                                Connect
                            </p>
                            <div className="flex gap-2 sm:gap-3">
                                {[
                                    { href: 'https://github.com/kariemGerges', icon: Github },
                                    { href: 'https://www.linkedin.com/in/kariem-gerges-458294195/', icon: Linkedin },
                                    { href: 'mailto:kariem.gerges@outlook.com', icon: Mail }
                                ].map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                                            rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                                            className="p-3 rounded-full bg-gradient-to-br from-amber-900/30 to-orange-900/30 hover:from-amber-800/40 hover:to-orange-800/40 transition-all border border-amber-800/50"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: prefersReducedMotion ? 0 : 0.4 + index * 0.1 }}
                                            whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Icon size={20} className="text-amber-400" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                        
                        {/* Illustration */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: prefersReducedMotion ? 0 : 0.6 }}
                            className="mt-8"
                        >
                            <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-square">
                                <Image
                                    src="/contact.png"
                                    alt="Connecting ideas and solutions"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div> */}

                        
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ 
                            duration: prefersReducedMotion ? 0 : 0.8, 
                            delay: prefersReducedMotion ? 0 : 0.2,
                            ease: [0.16, 1, 0.3, 1] 
                        }}
                    >
                        <Card className="border border-gray-700 bg-gray-900/30 backdrop-blur-sm shadow-sm">
                            <CardContent className="p-5 sm:p-6 lg:p-8">
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4 sm:space-y-5 lg:space-y-6"
                                >
                                    {[
                                        { id: 'name', label: 'Name', placeholder: 'Your name', type: 'text' },
                                        { id: 'email', label: 'Email', placeholder: 'your@email.com', type: 'email' },
                                    ].map((field, index) => (
                                        <motion.div
                                            key={field.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: prefersReducedMotion ? 0 : 0.3 + index * 0.1 }}
                                        >
                                        <label
                                                htmlFor={field.id}
                                                className="text-sm font-light text-gray-200 mb-2 block"
                                        >
                                                {field.label}
                                        </label>
                                        <Input
                                                id={field.id}
                                                name={field.id}
                                                type={field.type}
                                                value={formData[field.id as keyof typeof formData]}
                                            onChange={handleChange}
                                                placeholder={field.placeholder}
                                            required
                                                className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-amber-400 focus:ring-amber-400 h-12 text-base transition-all"
                                            />
                                        </motion.div>
                                    ))}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: prefersReducedMotion ? 0 : 0.5 }}
                                    >
                                        <label
                                            htmlFor="message"
                                            className="text-sm font-light text-gray-200 mb-2 block"
                                        >
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell me about your project..."
                                            rows={6}
                                            required
                                            className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-amber-400 focus:ring-amber-400 resize-none text-base transition-all"
                                        />
                                    </motion.div>
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-light text-base hover:shadow-xl transition-all min-h-[44px] touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: prefersReducedMotion ? 0 : 0.6 }}
                                        whileHover={prefersReducedMotion || isSubmitting ? {} : { scale: 1.02 }}
                                        whileTap={isSubmitting ? {} : { scale: 0.98 }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span>Sending...</span>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                >
                                                    <Mail size={18} />
                                                </motion.div>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <Mail size={18} />
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
