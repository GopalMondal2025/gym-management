const AddMembership = ({ open, onClose }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Add New Membership</h2>
        {/* Form fields for adding membership */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Member Name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:border-blue-500"
              placeholder="Enter member name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:border-blue-500"
              placeholder="Enter mobile number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:border-blue-500"
              placeholder="Enter date of birth"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Membership Type</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:border-blue-500">
              <option>Basic</option>
              <option>Premium</option>
              <option>VIP</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-    600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Add Membership
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddMembership
