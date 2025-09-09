
export const AboutSection = () => {
    return (
        <section id="about" className = "py-24 px-4 relative">
            <div className = "container mt-60 mx-auto max-w-5xl">
                <h2 className = "text-3xl md:text-4xl font-bold mb-16 text-center">
                    About <span className = "text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left Header and Paragraphs */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">New Software Developer from Alaska</h3>
                        <p className="text-muted-foreground">
                            As a new 2025 CSCE Graduate from the University of Alaska Anchorage,
                            I have an eagerness to improve my software engineering and web development
                            skills as I move forwards with my developer career. 
                        </p>

                        <p className="text-muted-foreground">
                            In my personal life, I like listening to music and playing video games.
                            I'm currently listening to SZA, Sabrina Carpenter, and Ariana Grande. For video games,
                            I've been playing Genshin Impact and Honkai Star Rail.
                        </p>
                    </div>

                    {/* Right Header and Paragraphs */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Actively Looking, Constantly Learning</h3>
                            <p className="text-muted-foreground">
                                I'm currently seeking entry-level developer opportunities 
                                where I can contribute to real-world projects, continue to grow as a software engineer, 
                                and work alongside experienced leads.
                            </p>

                            <p className="text-muted-foreground">
                                I genuinely enjoy programming and problem solving. I have a passionate curiosity for learning new technologies and techniques,
                                and I carry a fresh, unique, and friendly attitude towards collaborating on complex
                                projects.
                            </p>
                    </div>
                </div>
            </div>
        </section>
    )
}