import { StarBackground } from "../components/StarBackground.tsx";
import { NavBar } from "../components/NavBar.tsx";
import { HomeSection } from "../components/HomeSection.tsx";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Background Effect */}
        <StarBackground />
        
        {/* Navbar */}
        <NavBar />

        {/* Main Content */}
        <main>
            <HomeSection />
        </main>
        
        {/* Footer */}



    </div>
}