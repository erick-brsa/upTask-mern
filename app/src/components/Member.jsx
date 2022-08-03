export const Member = ({ member }) => {

    const { name, email } = member
    
	return (
		<div className="border-b p-5 flex justify-between items-center">
			<div>
                <p className="text-md font-semibold">{name}</p>
                <p className="text-sm text-gray-700">{email}</p>
            </div>
			<div>
                <button 
                    type="button"
                    className="bg-red-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                >
                    Eliminar
                </button>
            </div>
		</div>
	)
}
