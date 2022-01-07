const Slide_show = () => {
    return (
        <div className="content__box-product ">
            <h3 className="content__box-header">Ảnh slide</h3>
            <a href="slide_show/add_slide.php" className="content__box-add">Thêm slide</a>
            <table className="content__box-product-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Ảnh slide</th>
                        <th>Tên slide</th>
                        <th>Đường link</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2</td>
                        <td className="td-img-slide">
                            <img src="<?php echo $rowSlide['anh_slide'] ?>" alt="" className="img-slide" />
                        </td>
                        <td>aaaaaa</td>
                        <td>aaaaaa</td>
                        <td className="td-function">
                            <a href="<?php echo $edit ?>" className="link-function btn-repair" style={{ marginRight: '20px' }}>Sửa</a>
                            <a onclick="return del('<?php echo $rowSlide['ten_slide']; ?>')" href="<?php echo $delete ?>" className="link-function btn-delete" name="btnDelete">Xóa</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default Slide_show;