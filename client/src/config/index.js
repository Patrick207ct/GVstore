export const registerFormControls = [
  {
    name: "userName",
    label: "Tên",
    placeholder: "Nhập tên",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Nhập email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Mật khẩu",
    placeholder: "Nhập mật khẩu",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Nhập email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Mật khẩu",
    placeholder: "Nhập mật khẩu",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      {
        id: "watch",
        label: "Đồng hồ",
      },
      {
        id: "phone",
        label: "Điện thoại",
      },
      {
        id: "bracelet",
        label: "Vòng tay",
      },
      {
        id: "statue",
        label: "Tượng",
      },
      {
        id: "accessories",
        label: "Phụ kiện"
      },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "rolex", label: "Rolex" },
      { id: "patek", label: "Patek Philippe" },
      { id: "cartier", label: "Cartier" },
      { id: "hublot", label: "Hublot" },
      { id: "vertu", label: "Vertu" },
      { id: "golden", label: "Golden Victory" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Trang chủ",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Sản phẩm",
    path: "/shop/listing",
  },
  {
    id: "watch",
    label: "Đồng hồ",
    path: "/shop/listing",
  },
  {
    id: "phone",
    label: "Điện thoại",
    path: "/shop/listing",
  },
  {
    id: "bracelet",
    label: "Vòng tay",
    path: "/shop/listing",
  },
  {
    id: "statue",
    label: "Tượng",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Phụ kiện",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Tìm kiếm",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  watch: "Đồng hồ",
  phone: "Điện thoại",
  bracelet: "Vòng tay",
  statue: "Tượng" ,
  accessories: "Phụ kiện"
};
export const brandOptionsMap = {
  rolex: "Rolex",
  patek: "Patek Philippe",
  cartier: "Cartier",
  hublot: "Hublot",
  vertu: "Vertu",
  golden: "Golden Victory",
};

export const filterOptions = {
  "Danh mục": [
    {
      id: "home",
      label: "Trang chủ",
    },
    {
      id: "products",
      label: "Sản phẩm",
    },
    {
      id: "watch",
      label: "Đồng hồ",
    },
    {
      id: "phone",
      label: "Điện thoại",
    },
    {
      id: "bracelet",
      label: "Vòng tay",
    },
    {
      id: "statue",
      label: "Tượng",
    },
    {
      id: "accessories",
      label: "Phụ kiện",
    },
    {
      id: "search",
      label: "Tìm kiếm"
    },
  ],
  "Thương hiệu": [
    { id: "rolex", label: "Rolex" },
    { id: "patek", label: "Patek Philippe" },
    { id: "cartier", label: "Cartier" },
    { id: "hublot", label: "Hublot" },
    { id: "vertu", label: "Vertu" },
    { id: "golden", label: "Golden Victory" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Giá: Thấp đến cao" },
  { id: "price-hightolow", label: "Giá: Cao đến thấp" },
  { id: "title-atoz", label: "Tiêu đề: A đến Z" },
  { id: "title-ztoa", label: "Tiêu đề: Z đến A" },
];

export const addressFormControls = [
  {
    label: "Địa chỉ",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Nhập địa chỉ",
  },
  {
    label: "Thành phố",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Nhập tên Thành phố",
  },
  {
    label: "Mã PIN",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Nhập mã PIN",
  },
  {
    label: "Số điện thoại",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Nhập số điện thoại của bạn",
  },
  {
    label: "Ghi chú",
    name: "notes",
    componentType: "textarea",
    placeholder: "Thêm ghi chú",
  },
];