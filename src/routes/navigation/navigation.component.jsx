import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Navigation() {
    const navigate = useNavigate()

    function navClickHandlerCreator(route) {
        return () => { navigate(route) }
    }

    return (
        <>
            <Navbar expand='sm' className="bg-primary">
                <Navbar.Toggle className="ms-3" />
                <Navbar.Collapse>
                    <Nav className="mx-auto">
                        <Nav.Link className="text-light mx-4" onClick={navClickHandlerCreator('/subjects')}>Subjects</Nav.Link>
                        <Nav.Link className="text-light mx-4">Your Progress</Nav.Link>
                        <Nav.Link className="text-light mx-4">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Outlet />
        </>
    )
}