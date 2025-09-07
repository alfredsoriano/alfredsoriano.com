import { ArrowDown } from "lucide-react";

export const HomeSection = () => {
    return <section id="hero" className = "relative min-h-screen -mt-36 flex flex-col items-center justify-center px-4">
        <div className = "container max-w-4xl mx-auto text-center z-10">
            <div className = "space-y-6">
                <h1 className = "text-2xl md:text-4xl font-bold tracking-tight">
                    <span className = "opacity-0 animate-fade-in-delay-1">Hi,{" "}I'm{" "}</span>
                    <span className = "text-primary opacity-0 animate-fade-in-delay-5 inline-block">Alfred Soriano</span>
                </h1>

                <p className = "text-md md-text-xl text-muted-foreground max-2-2xl mx-auto  opacity-0 animate-fade-in-delay-6">
                    I'm a recent Computer Science & Computer Engineering graduate looking to land an internship or entry-level position.
                    Feel free to look at my projects, learn a little about me, or stargaze.
                </p>

                <div className = "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className = "text-sm text-muted-foreground mb-2"> Scroll to Stargaze</span>
                    <ArrowDown className = "h-5 w-5 text-primary"></ArrowDown>
                </div>

            </div>
        </div>
    </section>
};