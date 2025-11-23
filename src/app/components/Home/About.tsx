export default function About() {
    return (
        <section id="about" className="px-6 lg:px-12 mb-32">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-sm text-gray-500 mb-8 tracking-wide uppercase">
                            About
                        </p>
                        <h2 className="text-5xl lg:text-6xl font-light leading-tight mb-8 tracking-tight">
                            Passionate about creating meaningful digital
                            products
                        </h2>
                    </div>
                    <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                        <p>
                            With over 5 years of experience in design and
                            development, I specialize in creating software that
                            users love and businesses depend on.
                        </p>
                        <p>
                            My approach combines technical expertise with a deep
                            understanding of user needs, resulting in solutions
                            that are both beautiful and functional.
                        </p>
                        <p>
                            Currently available for select freelance projects
                            and collaborations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
