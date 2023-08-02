import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Outlet } from "react-router-dom"

export default function Navigation() {
    return (
        <>
            <Navbar expand='sm' className="bg-primary">
                <Navbar.Toggle className="ms-3" />
                <Navbar.Collapse>
                    <Nav className="mx-auto">
                        <Nav.Link className="text-light mx-4" href="/subjects">Subjects</Nav.Link>
                        <Nav.Link className="text-light mx-4">Your Progress</Nav.Link>
                        <Nav.Link className="text-light mx-4">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Outlet />
        </>
    )
}