interface NavbarProps {
  setCurrentUser: (user: string) => void;
}

function Navbar({ setCurrentUser }: NavbarProps) {
  return (
    <div
      style={{
        background: "#63D471",
        height: "85px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <li>
        <div onClick={() => setCurrentUser("Bob")}>Bob</div>
      </li>
      <li>
        <div onClick={() => setCurrentUser("Sally")}>Sally</div>
      </li>
      <li>
        <div onClick={() => setCurrentUser("James")}>James</div>
      </li>
      <li>
        <div onClick={() => setCurrentUser("")}>Logout</div>
      </li>
    </div>
  );
}

export default Navbar;
