import { useNavigate } from 'react-router-dom'
const MemberDetail = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1)
        }}
      >
        {' '}
        {'< Go Back'}{' '}
      </button>
      <div></div>
    </div>
  )
}
export default MemberDetail
