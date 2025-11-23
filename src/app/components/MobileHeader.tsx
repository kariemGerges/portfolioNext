// import React, { useState, useRef, useEffect } from 'react';
// import {
//     Home,
//     Search,
//     User,
//     Settings,
//     ShoppingCart,
//     Heart,
//     Menu,
//     X,
// } from 'lucide-react';

// export default function RadialThumbMenu() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [rotation, setRotation] = useState(0);
//     const [selectedIndex, setSelectedIndex] = useState(0);
//     const touchStartY = useRef(0);
//     const [gestureTrail, setGestureTrail] = useState([]);
//     const [showGestureFeedback, setShowGestureFeedback] = useState(false);

//     const menuItems = [
//         { icon: Home, label: 'Home', color: 'from-blue-500 to-blue-600' },
//         {
//             icon: Search,
//             label: 'Search',
//             color: 'from-purple-500 to-purple-600',
//         },
//         {
//             icon: ShoppingCart,
//             label: 'Cart',
//             color: 'from-green-500 to-green-600',
//         },
//         { icon: Heart, label: 'Favorites', color: 'from-pink-500 to-pink-600' },
//         {
//             icon: User,
//             label: 'Profile',
//             color: 'from-orange-500 to-orange-600',
//         },
//         {
//             icon: Settings,
//             label: 'Settings',
//             color: 'from-gray-500 to-gray-600',
//         },
//     ];

//     const itemAngle = 360 / menuItems.length;

//     const handleTouchStart = (e) => {
//         touchStartY.current = e.touches[0].clientY;
//         setGestureTrail([{ x: e.touches[0].clientX, y: e.touches[0].clientY }]);
//     };

//     const handleTouchMove = (e) => {
//         if (!isOpen) return;

//         const deltaY = e.touches[0].clientY - touchStartY.current;
//         const newRotation = rotation + deltaY * 0.5;
//         setRotation(newRotation);

//         const normalizedRotation = ((newRotation % 360) + 360) % 360;
//         const newIndex =
//             Math.round(normalizedRotation / itemAngle) % menuItems.length;
//         setSelectedIndex(newIndex);

//         setGestureTrail((prev) => [
//             ...prev.slice(-15),
//             {
//                 x: e.touches[0].clientX,
//                 y: e.touches[0].clientY,
//             },
//         ]);

//         touchStartY.current = e.touches[0].clientY;
//     };

//     const handleTouchEnd = () => {
//         setGestureTrail([]);
//     };

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//         if (!isOpen) {
//             setShowGestureFeedback(true);
//             setTimeout(() => setShowGestureFeedback(false), 2000);
//         }
//     };

//     const handleItemClick = (index) => {
//         setSelectedIndex(index);
//         setTimeout(() => setIsOpen(false), 300);
//     };

//     return (
//         <div className="h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden relative">
//             {/* Demo Content */}
//             <div className="p-6 pt-12">
//                 <h1 className="text-3xl font-bold text-white mb-2">
//                     Radial Thumb Menu
//                 </h1>
//                 <p className="text-slate-400 mb-6">
//                     Swipe vertically to rotate • Tap to select
//                 </p>

//                 <div className="space-y-4">
//                     <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
//                         <h2 className="text-white font-semibold mb-2">
//                             Current Selection
//                         </h2>
//                         <div className="flex items-center gap-3 text-slate-300">
//                             {React.createElement(
//                                 menuItems[selectedIndex].icon,
//                                 { className: 'w-5 h-5' }
//                             )}
//                             <span>{menuItems[selectedIndex].label}</span>
//                         </div>
//                     </div>

//                     <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
//                         <h3 className="text-white font-semibold mb-2">
//                             How it works:
//                         </h3>
//                         <ul className="text-sm text-slate-400 space-y-1">
//                             <li>• Tap the orb to open menu</li>
//                             <li>• Swipe up/down to rotate</li>
//                             <li>• Selected item is highlighted</li>
//                             <li>• Tap item or swipe away to close</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             {/* Gesture Trail */}
//             {gestureTrail.length > 1 && (
//                 <svg className="fixed inset-0 pointer-events-none z-40">
//                     <path
//                         d={`M ${gestureTrail
//                             .map(
//                                 (p, i) => `${i === 0 ? '' : 'L '}${p.x} ${p.y}`
//                             )
//                             .join(' ')}`}
//                         stroke="rgba(139, 92, 246, 0.5)"
//                         strokeWidth="3"
//                         fill="none"
//                         strokeLinecap="round"
//                     />
//                 </svg>
//             )}

//             {/* Gesture Hint */}
//             {showGestureFeedback && isOpen && (
//                 <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
//                     <div className="bg-slate-800/90 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-500/50 animate-pulse">
//                         <p className="text-white text-sm">
//                             👆 Swipe up or down
//                         </p>
//                     </div>
//                 </div>
//             )}

//             {/* Radial Menu */}
//             <div className="fixed bottom-8 right-6 z-50">
//                 {/* Menu Items */}
//                 <div
//                     className={`absolute bottom-0 right-0 transition-all duration-300 ${
//                         isOpen
//                             ? 'opacity-100 scale-100'
//                             : 'opacity-0 scale-0 pointer-events-none'
//                     }`}
//                     onTouchStart={handleTouchStart}
//                     onTouchMove={handleTouchMove}
//                     onTouchEnd={handleTouchEnd}
//                 >
//                     {menuItems.map((item, index) => {
//                         const angle =
//                             (index * itemAngle - 90 + rotation) *
//                             (Math.PI / 180);
//                         const radius = 120;
//                         const x = Math.cos(angle) * radius;
//                         const y = Math.sin(angle) * radius;
//                         const isSelected = index === selectedIndex;

//                         return (
//                             <button
//                                 key={index}
//                                 onClick={() => handleItemClick(index)}
//                                 className={`absolute transition-all duration-300 ${
//                                     isSelected ? 'scale-125 z-10' : 'scale-100'
//                                 }`}
//                                 style={{
//                                     transform: `translate(${x}px, ${y}px)`,
//                                     right: '32px',
//                                     bottom: '32px',
//                                 }}
//                             >
//                                 <div
//                                     className={`w-14 h-14 rounded-full bg-gradient-to-br ${
//                                         item.color
//                                     } 
//                     shadow-lg flex items-center justify-center transition-all
//                     ${
//                         isSelected
//                             ? 'ring-4 ring-white shadow-2xl'
//                             : 'ring-2 ring-white/20'
//                     }`}
//                                 >
//                                     <item.icon className="w-6 h-6 text-white" />
//                                 </div>
//                                 <div
//                                     className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 
//                     whitespace-nowrap text-xs font-medium transition-all
//                     ${
//                         isSelected
//                             ? 'opacity-100 text-white'
//                             : 'opacity-0 text-slate-400'
//                     }`}
//                                 >
//                                     {item.label}
//                                 </div>
//                             </button>
//                         );
//                     })}

//                     {/* Center Connection Lines */}
//                     <div className="absolute bottom-8 right-8 w-px h-px">
//                         {menuItems.map((_, index) => {
//                             const angle =
//                                 (index * itemAngle - 90 + rotation) *
//                                 (Math.PI / 180);
//                             const radius = 120;
//                             const isSelected = index === selectedIndex;

//                             return (
//                                 <div
//                                     key={index}
//                                     className={`absolute w-24 h-0.5 origin-left transition-all duration-300 ${
//                                         isSelected
//                                             ? 'bg-white opacity-40'
//                                             : 'bg-white/10'
//                                     }`}
//                                     style={{
//                                         transform: `rotate(${
//                                             index * itemAngle + rotation
//                                         }deg)`,
//                                     }}
//                                 />
//                             );
//                         })}
//                     </div>
//                 </div>

//                 {/* Main Toggle Button */}
//                 <button
//                     onClick={toggleMenu}
//                     className={`relative w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 
//             shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110
//             ${
//                 isOpen
//                     ? 'ring-4 ring-purple-400/50'
//                     : 'ring-2 ring-purple-400/20'
//             }`}
//                 >
//                     <div
//                         className={`transition-all duration-300 ${
//                             isOpen ? 'rotate-180' : 'rotate-0'
//                         }`}
//                     >
//                         {isOpen ? (
//                             <X className="w-7 h-7 text-white" />
//                         ) : (
//                             <Menu className="w-7 h-7 text-white" />
//                         )}
//                     </div>

//                     {/* Pulse Effect */}
//                     {!isOpen && (
//                         <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-20" />
//                     )}
//                 </button>

//                 {/* Selected Item Indicator */}
//                 {isOpen && (
//                     <div className="absolute -top-16 right-0 bg-slate-800/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-xl border border-slate-700">
//                         <div className="flex items-center gap-2">
//                             {React.createElement(
//                                 menuItems[selectedIndex].icon,
//                                 {
//                                     className: 'w-4 h-4 text-purple-400',
//                                 }
//                             )}
//                             <span className="text-white text-sm font-medium">
//                                 {menuItems[selectedIndex].label}
//                             </span>
//                         </div>
//                     </div>
//                 )}
//             </div>

//             {/* Backdrop */}
//             {isOpen && (
//                 <div
//                     className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
//                     onClick={toggleMenu}
//                 />
//             )}
//         </div>
//     );
// }
