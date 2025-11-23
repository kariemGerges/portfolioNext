// 'use client';
// import React, {
//     useState,
//     useRef,
//     useEffect,
//     KeyboardEvent,
//     ChangeEvent,
// } from 'react';
// import { Terminal } from 'lucide-react';

// type LineType = 'system' | 'command' | 'error' | 'success' | 'info';

// interface Line {
//     type: LineType;
//     text: string;
// }

// interface Command {
//     description: string;
//     execute: () => Line[] | 'CLEAR';
// }

// type CommandMap = Record<string, Command>;

// export default function Footer(): JSX.Element {
//     const [input, setInput] = useState<string>('');
//     const [output, setOutput] = useState<Line[]>([
//         { type: 'system', text: 'Welcome to ACME Terminal v2.0' },
//         { type: 'system', text: 'Type /help for available commands' },
//     ]);
//     const [history, setHistory] = useState<string[]>([]);
//     const [historyIndex, setHistoryIndex] = useState<number>(-1);
//     const inputRef = useRef<HTMLInputElement | null>(null);
//     const outputRef = useRef<HTMLDivElement | null>(null);

//     const commands: CommandMap = {
//         '/help': {
//             description: 'Show available commands',
//             execute: () => [
//                 { type: 'success', text: 'Available Commands:' },
//                 { type: 'info', text: '/about - Learn about us' },
//                 { type: 'info', text: '/contact - Get in touch' },
//                 { type: 'info', text: '/services - View our services' },
//                 { type: 'info', text: '/portfolio - See our work' },
//                 { type: 'info', text: '/careers - Join our team' },
//                 { type: 'info', text: '/social - Social media links' },
//                 { type: 'info', text: '/blog - Read our blog' },
//                 { type: 'info', text: '/privacy - Privacy policy' },
//                 { type: 'info', text: '/terms - Terms of service' },
//                 { type: 'info', text: '/clear - Clear terminal' },
//             ],
//         },
//         '/about': {
//             description: 'About us',
//             execute: () => [
//                 { type: 'success', text: '→ Navigating to About page...' },
//                 {
//                     type: 'info',
//                     text: 'Learn more about our company and mission',
//                 },
//             ],
//         },
//         '/contact': {
//             description: 'Contact information',
//             execute: () => [
//                 { type: 'success', text: 'Contact Information:' },
//                 { type: 'info', text: '📧 Email: hello@acme.com' },
//                 { type: 'info', text: '📞 Phone: +1 (555) 123-4567' },
//                 { type: 'info', text: '📍 Location: San Francisco, CA' },
//             ],
//         },
//         '/services': {
//             description: 'Our services',
//             execute: () => [
//                 { type: 'success', text: 'Our Services:' },
//                 { type: 'info', text: '• Web Development' },
//                 { type: 'info', text: '• Mobile Apps' },
//                 { type: 'info', text: '• Cloud Solutions' },
//                 { type: 'info', text: '• UI/UX Design' },
//             ],
//         },
//         '/portfolio': {
//             description: 'View portfolio',
//             execute: () => [
//                 { type: 'success', text: '→ Opening portfolio...' },
//                 {
//                     type: 'info',
//                     text: 'Check out our latest projects and case studies',
//                 },
//             ],
//         },
//         '/careers': {
//             description: 'Job opportunities',
//             execute: () => [
//                 { type: 'success', text: 'Current Openings:' },
//                 { type: 'info', text: '• Senior Developer' },
//                 { type: 'info', text: '• Product Designer' },
//                 { type: 'info', text: '• DevOps Engineer' },
//                 { type: 'info', text: 'Send resume to: careers@acme.com' },
//             ],
//         },
//         '/social': {
//             description: 'Social media',
//             execute: () => [
//                 { type: 'success', text: 'Find us on:' },
//                 { type: 'info', text: '🐦 Twitter: @acmecorp' },
//                 { type: 'info', text: '💼 LinkedIn: /company/acme' },
//                 { type: 'info', text: '🐙 GitHub: github.com/acme' },
//                 { type: 'info', text: '📸 Instagram: @acme' },
//             ],
//         },
//         '/blog': {
//             description: 'Read our blog',
//             execute: () => [
//                 { type: 'success', text: '→ Opening blog...' },
//                 {
//                     type: 'info',
//                     text: 'Latest articles and insights from our team',
//                 },
//             ],
//         },
//         '/privacy': {
//             description: 'Privacy policy',
//             execute: () => [
//                 { type: 'success', text: '→ Loading privacy policy...' },
//                 { type: 'info', text: 'Your privacy matters to us' },
//             ],
//         },
//         '/terms': {
//             description: 'Terms of service',
//             execute: () => [
//                 { type: 'success', text: '→ Loading terms of service...' },
//             ],
//         },
//         '/clear': {
//             description: 'Clear terminal',
//             execute: () => 'CLEAR',
//         },
//     };

//     useEffect(() => {
//         if (outputRef.current) {
//             outputRef.current.scrollTop = outputRef.current.scrollHeight;
//         }
//     }, [output]);

//     const handleSubmit = (): void => {
//         if (!input.trim()) return;

//         const trimmedInput = input.trim().toLowerCase();

//         setOutput((prev) => [...prev, { type: 'command', text: `$ ${input}` }]);
//         setHistory((prev) => [...prev, input]);
//         setHistoryIndex(-1);

//         const command = commands[trimmedInput];
//         if (command) {
//             const result = command.execute();
//             if (result === 'CLEAR') {
//                 setOutput([
//                     { type: 'system', text: 'Terminal cleared' },
//                     {
//                         type: 'system',
//                         text: 'Type /help for available commands',
//                     },
//                 ]);
//             } else {
//                 setOutput((prev) => [...prev, ...result]);
//             }
//         } else {
//             setOutput((prev) => [
//                 ...prev,
//                 {
//                     type: 'error',
//                     text: `Command not found: ${trimmedInput}. Type /help for available commands.`,
//                 },
//             ]);
//         }

//         setInput('');
//     };

//     const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
//         if (e.key === 'Enter') {
//             e.preventDefault();
//             handleSubmit();
//         } else if (e.key === 'ArrowUp') {
//             e.preventDefault();
//             if (history.length > 0) {
//                 const newIndex =
//                     historyIndex === -1
//                         ? history.length - 1
//                         : Math.max(0, historyIndex - 1);
//                 setHistoryIndex(newIndex);
//                 setInput(history[newIndex]);
//             }
//         } else if (e.key === 'ArrowDown') {
//             e.preventDefault();
//             if (historyIndex !== -1) {
//                 const newIndex = historyIndex + 1;
//                 if (newIndex >= history.length) {
//                     setHistoryIndex(-1);
//                     setInput('');
//                 } else {
//                     setHistoryIndex(newIndex);
//                     setInput(history[newIndex]);
//                 }
//             }
//         }
//     };

//     const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
//         setInput(e.target.value);
//     };

//     return (
//         <footer className="bg-black text-green-400 font-mono border-t-2 border-green-500">
//             <div className="max-w-6xl mx-auto p-6">
//                 <div className="flex items-center gap-2 mb-4 pb-2 border-b border-green-500">
//                     <Terminal size={20} className="text-green-400" />
//                     <span className="text-sm">acme-terminal</span>
//                     <div className="ml-auto flex gap-2">
//                         <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                         <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                         <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                     </div>
//                 </div>

//                 <div
//                     ref={outputRef}
//                     className="h-64 overflow-y-auto mb-4 text-sm leading-relaxed"
//                 >
//                     {output.map((line, index) => (
//                         <div
//                             key={index}
//                             className={`mb-1 ${
//                                 line.type === 'command'
//                                     ? 'text-green-300'
//                                     : line.type === 'error'
//                                     ? 'text-red-400'
//                                     : line.type === 'success'
//                                     ? 'text-cyan-400'
//                                     : line.type === 'info'
//                                     ? 'text-green-400'
//                                     : 'text-gray-400'
//                             }`}
//                         >
//                             {line.text}
//                         </div>
//                     ))}
//                 </div>

//                 <div className="flex items-center gap-2">
//                     <span className="text-green-300">$</span>
//                     <input
//                         ref={inputRef}
//                         type="text"
//                         value={input}
//                         onChange={handleChange}
//                         onKeyDown={handleKeyDown}
//                         className="flex-1 bg-transparent border-none outline-none text-green-400"
//                         placeholder="Type a command... (e.g., /help)"
//                         autoFocus
//                         style={{ caretColor: '#4ade80' }}
//                     />
//                     <span className="animate-pulse text-green-400">▊</span>
//                 </div>

//                 <div className="mt-4 flex flex-wrap gap-2 text-xs">
//                     {Object.keys(commands)
//                         .filter((cmd) => cmd !== '/clear' && cmd !== '/help')
//                         .map((cmd) => (
//                             <button
//                                 key={cmd}
//                                 onClick={() => {
//                                     setInput(cmd);
//                                     setTimeout(
//                                         () => inputRef.current?.focus(),
//                                         0
//                                     );
//                                 }}
//                                 className="px-2 py-1 bg-green-900 bg-opacity-30 border border-green-700 hover:bg-green-800 hover:bg-opacity-40 rounded transition-colors"
//                             >
//                                 {cmd}
//                             </button>
//                         ))}
//                 </div>

//                 <div className="mt-6 text-center text-xs text-gray-600">
//                     © 2024 ACME Corp. All rights reserved. | Terminal v2.0
//                 </div>
//             </div>
//         </footer>
//     );
// }
