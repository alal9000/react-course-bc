import profilePic from "./assets/profile.jpeg";

export default function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture" />
      <h2 className="card-title">Aaron</h2>
      <p className="card-text">Programmer</p>
    </div>
  );
}
