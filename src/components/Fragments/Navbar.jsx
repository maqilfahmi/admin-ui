const Navbar = () => {
    return (
<nav className="bg-defaultBlack text-special-bg2 w-36 h-screen px-7 py-12 flex flex-col justify-between">
  <div>
    <div className="flex justify-center mb-10">Logo</div>
    <div className="flex bg-primary text-white px-4 py-3 rounded-md">
      <div className="text-white mx-auto sm:mx-0">A</div>
      <div className="ms-3 hidden sm:block">MENU</div>
    </div>
    <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
      <div className="mx-auto sm:mx-0">B</div>
      <div className="ms-3 hidden sm:block">MENU</div>
    </div>
    <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
      <div className="mx-auto sm:mx-0">C</div>
      <div className="ms-3 hidden sm:block">MENU</div>
    </div>
  </div>
  <div>
    <div className="flex bg-special-bg3 px-4 py-3 rounded-md">
      <div className="mx-auto sm:mx-0">D</div>
      <div className="ms-3 hidden sm:block">Logout</div>
    </div>
    <div className="border-b my-10 border-b-special-bg"></div>
    <div className="flex justify-between">
      <div className="mx-auto sm:mx-0">foto</div>
      <div className="hidden sm:block">
        Username
        <br />
        View Profile
      </div>
      <div className="hidden sm:block">icon</div>
    </div>
  </div>
</nav>
    );
};

export default Navbar;