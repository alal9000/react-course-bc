function ProfilePicture(){

  const handleClick = (e) => e.target.style.display = "none";

  const imageUrl = './src/assets/profile.jpeg';

  return (<img onClick={(e) => handleClick(e)} src={imageUrl}></img>)

}

export default ProfilePicture;