import MenuGrid from "@/components/MenuGrid";

export const metadata = {
    title: "Menu | Hader Five Star Hotel",
    description: "Explore our exquisite menu.",
};

export default function MenuPage() {
    return (
        <main className="container section-padding" style={{ paddingTop: '120px', minHeight: '80vh' }}>
            <h1 className="text-center mb-4" style={{ fontSize: '3rem' }}>Our Menu</h1>
            <p className="text-center mb-4" style={{ maxWidth: '600px', margin: '0 auto 60px', color: '#aaa' }}>
                A culinary journey through flavors and textures. Each dish is prepared with passion and precision.
            </p>
            <MenuGrid />
        </main>
    );
}
