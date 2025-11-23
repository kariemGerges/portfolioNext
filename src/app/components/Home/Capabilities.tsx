export default function Capabilities() {
    return (
        <section id="experience" className="px-4 sm:px-6 lg:px-12 mb-16 sm:mb-32">
            <div className="max-w-7xl mx-auto">
                <p className="text-xs sm:text-sm text-gray-500 mb-10 sm:mb-16 tracking-wide uppercase">
                    What I Do
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-16 lg:gap-24">
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-light mb-3 sm:mb-4 tracking-tight">
                            Design
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                            Crafting user experiences that are intuitive,
                            elegant, and purposeful. Every pixel serves a
                            function.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-light mb-3 sm:mb-4 tracking-tight">
                            Engineering
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                            Building robust, scalable systems with modern
                            technologies. Clean code that stands the test of
                            time.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-light mb-3 sm:mb-4 tracking-tight">
                            Strategy
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                            Solving complex problems with simple solutions.
                            Bridging the gap between vision and execution.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
