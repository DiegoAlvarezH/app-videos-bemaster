import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";
// import {icon} from "../../public/nodovideos.svg"

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user)

  return (
    <nav className="bg-red-200 my-3 flex justify-between py-5 px-10 rounded-lg">
      <h1 className="text-2xl font-bold">
        <Link to={isAuthenticated ? "/videos" : "/"}>NodoVideos</Link>
        {/* <link rel="icon" type="image/svg+xml" href={icon} /> */}
      </h1>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>
              Bienvenido: {user.username}
            </li>
            <li>
              <ButtonLink to="/add-video">Subir Video</ButtonLink>
            </li>
            <li>
              <Link to="/" onClick={() => logout()}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <ButtonLink to="/login">Ingresar</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register">Registrarme</ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
