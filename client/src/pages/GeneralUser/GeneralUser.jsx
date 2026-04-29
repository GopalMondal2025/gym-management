const GeneralUser = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">General User Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-xl font-semibold mb-2">Profile</h2>
                    <p>View and edit your profile information.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-xl font-semibold mb-2">Membership</h2>
                    <p>View your membership details and status.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-xl font-semibold mb-2">Classes</h2>
                    <p>Browse and book available classes.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-xl font-semibold mb-2">Payments</h2>
                    <p>View your payment history and manage billing information.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-xl font-semibold mb-2">Support</h2>
                    <p>Contact support for any assistance or inquiries.</p>
                </div>
            </div>
        </div>
    );
}
export default GeneralUser;