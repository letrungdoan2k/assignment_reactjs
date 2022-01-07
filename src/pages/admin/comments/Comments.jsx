const Comments = () => {
    return (
        <div className="content__box-product ">
            <h3 className="content__box-header">Tổng hợp bình luận</h3>
            {/* <a href="category/add_category.php" class="content__box-add">Thêm danh mục</a> */}
            <table className="content__box-product-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Thời gian</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{/*?php echo $cmt['id_bl'] ?*/}</td>
                        <td>{/*?php echo $cmt['ten_sp'] ?*/}</td>
                        <td>{/*?php echo $cmt['sl'] ?*/}</td>
                        <td>{/*?php echo $cmt['thoi_gian'] ?*/}</td>
                        <td className="td-function">
                            <a href="<?php echo $detail ?>" className="link-function btn-repair">Chi tiết</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default Comments;