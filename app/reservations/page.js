import ReservationForm from "@/components/ReservationForm";

export const metadata = {
    title: "Reservations | Hader Five Star Hotel",
    description: "Book a table at Hader Five Star Hotel.",
};

export default function ReservationsPage() {
    return (
        <main className="container section-padding" style={{ paddingTop: '120px', minHeight: '80vh' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 className="mb-4" style={{ fontSize: '3rem' }}>Reservations</h1>
                <p style={{ color: '#aaa' }}>Book your table for an unforgettable evening.</p>
                <p style={{ color: '#aaa', fontSize: '0.9rem', marginTop: '10px' }}>For parties larger than 8, please contact us directly.</p>
            </div>
            <ReservationForm />
        </main>
    );
}
