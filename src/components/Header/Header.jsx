import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center my-8">
        <h1 className="text-4xl font-bold ">Knowledge Cafe</h1>
        <img src={profile} alt="" />
      </div>
      <hr />
    </div>
  );
};

export default Header;
