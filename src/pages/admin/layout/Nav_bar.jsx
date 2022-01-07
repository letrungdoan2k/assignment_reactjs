import { Link } from "react-router-dom";


const Nav_bar = () => {
    return (
        <div className="content_header">
            <h1 className="content__header-name">Quản lý website</h1>
            <Link to="/" className="content__link-logout">
                Trang Chủ
                <i className="fas fa-sign-out-alt" />
            </Link>
        </div>
    );
};
export default Nav_bar;