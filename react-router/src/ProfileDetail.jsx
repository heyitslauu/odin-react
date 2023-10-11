import { useParams } from "react-router-dom";

const ProfileDetail = () => {
  const {name} = useParams();
  
  return (
    <>
    <h1>{name}</h1>
    </>
  )
}

export default ProfileDetail