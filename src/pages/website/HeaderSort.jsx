const HeaderSort = () => {
    return (
        <div className="header__sort">
            <div className="grid wide">
                <ul className="header__sort-bar">
                    <li className="header__sort-item">
                        <a href className="header__sort-link">liên quan</a>
                    </li>
                    <li className="header__sort-item header__sort-item--active">
                        <a href className="header__sort-link">Mới nhất</a>
                    </li>
                    <li className="header__sort-item">
                        <a href className="header__sort-link">Bán chạy</a>
                    </li>
                    <li className="header__sort-item header__sort-link__price">
                        <div href className="header__sort-link">
                            Giá
                            <i className="header__sort-icon fas fa-chevron-down" />
                        </div>
                        <ul className="select-input__list">
                            <li className="select-input__item">
                                <a href="#" className="select-input__link">Giá: thấp đến cao</a>
                            </li>
                            <li className="select-input__item">
                                <a href="#" className="select-input__link">Giá: cao đến thấp</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default HeaderSort;