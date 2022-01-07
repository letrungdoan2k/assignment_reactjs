import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import { createProduct, listProduct, removeProduct, updateProduct } from "./api/productAPI";
import { createCategory, listCategory, removeCategory, updateCategory } from "./api/categoryAPI";
import { createUser, listUser, removeUser, updateUser } from "./api/userAPI";
import { createBrand, listBrand, removeBrand, updateBrand } from "./api/brandAPI";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import LayoutWebsite from "./layout/LayoutWebsite";
import LayoutAdmin from "./layout/LayoutAdmin";
import AddProduct from "./pages/admin/products/AddProduct";
import ProductsWebsite from "./pages/website/Products";
import ProductDetail from "./pages/website/ProductDetail";
import EditProduct from "./pages/admin/products/EditProduct";
import ProductsManager from "./pages/admin/products/Products";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Categories from "./pages/admin/categories/Categories";
import Brand from "./pages/admin/brand/Brand";
import Users from "./pages/admin/users/Users";
import Comments from "./pages/admin/comments/Comments";
import AddCategory from "./pages/admin/categories/AddCategory";
import EditCategory from "./pages/admin/categories/EditCategory";
import AddBrand from "./pages/admin/brand/AddBrand";
import EditBrand from "./pages/admin/brand/EditBrand";
import Signin from "./pages/website/Signin";
import Signup from "./pages/website/Signup";
import Home from "./pages/website/Home";
import Search from "./pages/website/Search";
import PrivateAdmin from "./components/PrivateAdmin";
import 'antd/dist/antd.css';
import AdminHome from "./pages/admin/AdminHome";
import ProductCategory from "./pages/website/ProductCategory";
import Contact from "./pages/website/Contact";
import { listCart } from "./api/cartAPI";
import { isAuthenticate } from "./authenticate";
import Cart from "./pages/website/Cart";
import PrivateCart from "./components/PriveteCart";
import AddUser from "./pages/admin/users/AddUser";
import EditUser from "./pages/admin/users/EditUser";
import Role from "./pages/admin/roles/Role";
import AddRole from "./pages/admin/roles/AddRole";
import { listRole } from "./api/role";



function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [brands, setBrands] = useState([]);
  const [roles, setRoles] = useState([]);
  const [search, setSearch] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  const [per_page, setPer_page] = useState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    listProduct(page).then(

      response => {
        setProducts(response.data.data)
        setTotal(response.data.total)
        setPer_page(response.data.per_page)
      }
    );
  }, [brands.length, products.length, categories.length, page]);

  useEffect(() => {
    listCategory().then(response => setCategories(response.data));
  }, [categories.length]);

  useEffect(() => {
    listUser().then(response => setUsers(response.data));
  }, [users.length]);

  useEffect(() => {
    listBrand().then(response => setBrands(response.data));
  }, [brands.length]);

  useEffect(() => {
    listRole().then(response => setRoles(response.data));
  }, [roles.length]);


  // const auth = isAuthenticate();
  // useEffect(() => {
  //   listCart(auth.id).then(response => setCart(response.data));
  // }, [cart.length]);

  //////////////------------------

  const number = (pageNumber) => {
    setPage(pageNumber)
  }

  // -------------------product-----------------------------------------------------------

  // ---------add----
  const onHandelAdd = (product) => {
    const fakeProduct = { ...product }
    setProducts([fakeProduct, ...products])
  }
  // ---------Update---
  const onHandelUpdate = (product) => {
    const newPro = products.map((item) =>
      item.id === product.id ? product : item
    )
    setProducts(newPro)

  }
  // --------Remove-------------------
  const onHandelRemove = (id) => {
    removeProduct(id).then(() => {
      const newProduct = products.filter((item) => item.id !== id);
      toast.success("Xóa thành công");
      setProducts(newProduct);

    });
  };

  // -----------------------------------------Category--------------------------
  //  ---------add------------------------
  const onAddCategory = (category) => {
    const fakeCategy = { ...category };
    createCategory(fakeCategy)
      .then((response) =>
        toast.success("Thêm thành công"),
        setCategories([fakeCategy, ...categories]),
      );
  }

  // //-----edit----------
  const onEditCategory = (category) => {
    console.log("edit", category)
    updateCategory(category).then(() => {
      const newCategory = categories.map((item) =>
        item.id === category.id ? category : item
      );
      toast.success("Sửa thành công");
      setProducts(newCategory);
    });
  }


  // //----------------remove----------------------
  const onRemoveCategory = (id) => {
    removeCategory(id).then(() => {
      const newCategory = categories.filter((item) => item.id !== id);
      toast.success("Xóa thành công");
      setCategories(newCategory);
    }
    );
  };


  // //----------Brand--------------------------------------------------


  // //----------------add----------
  const onAddBrand = (brand) => {
    const fakebrand = { ...brand };
    createBrand(fakebrand).then((response) =>
      toast.success("Thêm thành công"),
      setBrands([...brands, fakebrand])
    );
  }


  ////------edit----------------------------------------------------
  const onEditBrand = (brand) => {
    updateBrand(brand).then(() => {
      const newBrand = brands.map((item) =>
        item.id === brand.id ? brand : item
      );
      toast.success("Sửa thành công");
      setBrands(newBrand);
    });
  };


  //----------------remove----------------------

  const onRemoveBrand = (id) => {
    removeBrand(id).then(() => {
      const newbrand = brands.filter((item) => item.id !== id);
      toast.success("Xóa thành công");
      setBrands(newbrand);
    });
  };
  //-------------------------------------USERS------------------------------------------------------------
  const onAddUser = (user) => {
    const fakeuser = { ...user }
    setUsers([...users, fakeuser])
}

//---------------------
  const onEditUser = (user) => {
    const newUser = users.map((item) =>
      item.id === user.id ? user : item
    )
    setProducts(newUser)
  }

//--------------------
const onRemove = (id) => {
  removeUser(id).then(() => {
    const newUser = users.filter((item) => item.id !== id);
    toast.success("Xóa thành công");
    setUsers(newUser);
  })
}

//--------------------

const onAddRole = (role) => {
  const fakerole = { ...role }
    setRoles([...roles, fakerole])
}


//////--------------------------------------------------------------------------

const cartProduct = (product) => {
  const newCart = { ...product }
  setCart([...cart, newCart])
}



/////////------------------------------------------

const handleSearch = (value) => {
  const newProduct = products.filter((item) => item.name.search(value) != -1);
  setSearch(newProduct);
  console.log(value.toLowerCase())
}



/////////////////////////////////////////////////////////////////////////////////

return (

  <div className="App">
    <ToastContainer />
    <BrowserRouter>
      {/* {JSON.stringify(products)} */}
      <Routes>
        <Route path="/" element={<LayoutWebsite handleSearch={handleSearch} search={search} cart={cart} />}>
          <Route index element={<Home products={products} />} />
          <Route path="product" element={<ProductsWebsite products={products} category={categories} numberPage={number} total={total} per_page={per_page} />} />
          <Route path="product/:id" element={<ProductDetail brand={brands} products={products} cartProduct={cartProduct} />} />
          <Route path="product/search" element={<Search products={search} category={categories} />} />

          <Route path="category/:id" element={<ProductCategory products={products} category={categories} numberPage={number} total={total} per_page={per_page} />} />
          <Route path="introduce" element={<div>introduce</div>} />
          <Route path="contact" element={<Contact />} />


          <Route path="cart" element={<PrivateCart> <Cart cart={cart} /> </PrivateCart>} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route path="admin/" element={ <LayoutAdmin /> }>
          <Route index element={<Navigate to="Dashboard" />} />
          <Route path="Dashboard" element={<Dashboard />} />


          <Route path="category" element={<Categories category={categories} onRemmove={onRemoveCategory} />} />
          <Route path="category/add" element={<AddCategory onAdd={onAddCategory} />} />
          <Route path="category/:id/edit" element={<EditCategory onUpdate={onEditCategory} />} />

          <Route path="brand" element={<Brand brand={brands} onRemmove={onRemoveBrand} />} />
          <Route path="brand/add" element={<AddBrand onAdd={onAddBrand} />} />
          <Route path="brand/:id/edit" element={<EditBrand onUpdate={onEditBrand} />} />

          {/* <Route path="slide_show" element={<Slide_show />} /> */}


          <Route path="users" element={<Users user={users} onRemove={onRemove} />} />
          <Route path="users/add" element={<AddUser onAdd={onAddUser} />} />
          <Route path="users/:id/edit" element={<EditUser onUpdate={onEditUser} roles={roles}/>} />



          <Route path="demo" element={<AdminHome />} />



          <Route path="roles" element={<Role role={roles}/>} />
          <Route path="roles/add" element={<AddRole onAdd={onAddRole}/>} />


          <Route path="product" element={<ProductsManager brand={brands} product={products} category={categories} onRemove={onHandelRemove} numberPage={number} total={total} per_page={per_page} />} />
          <Route path="product/add" element={<AddProduct brands={brands} categories={categories} onAdd={onHandelAdd} />} />
          <Route path="product/:id/edit" element={<EditProduct brands={brands} categories={categories} onUpdate={onHandelUpdate} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);
}

export default App;
