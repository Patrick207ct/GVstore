import { Button } from "@/components/ui/button";
import brandLogo from "../../assets/Watch/Rolex/Rolex.png";
import patekLogo from "../../assets/Watch/Patek/Patek.png";
import cartierLogo from "../../assets/Watch/Cartier/Cartier.png";
import hublotLogo from "../../assets/Watch/Hublot/Hublot.png";
import vertuLogo from "../../assets/Watch/Vertu/Vertu.png";
import logoIMG from "../../assets/logo.png"
import {
  Airplay,
  Gem,
  ChevronLeftIcon,
  ChevronRightIcon,
  Smartphone,
  Heater,
  Images,
  Shirt,
  Watch,
  ShoppingBasket,
  Rat,
  WashingMachine,
  Microchip,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
  fetchBestSellers, // Thêm import
  fetchBestProducts  // Thêm import
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categoriesWithIcon = [
  { id: "watch",
    label: "Đồng hồ",
    icon: Watch },
  { id: "phone",
    label: "Điện thoại", icon: Smartphone },
  { id: "bracelet",
    label: "Vòng tay", icon: Gem },
  { id: "statue",
    label: "Tượng", icon: Rat },
  { id: "accessories", label: "Phụ kiện", icon: Microchip },
];

const brandsWithImage = [
  { id: "rolex", label: "Rolex", image: brandLogo },
  { id: "patek", label: "Patek Philippe", image: patekLogo },
  { id: "cartier", label: "Cartier", image: cartierLogo },
  { id: "hublot", label: "Hublot", image: hublotLogo },
  { id: "vertu", label: "Vertu", image: vertuLogo },
  { id: "golden", label: "Golden Victory", image: logoIMG },
];
function ShoppingHome() {
  const sliderSettings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const {
    productList,
    productDetails,
    bestSellers,
    bestProducts
  } = useSelector((state) => state.shopProducts);
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Calculate paginated products
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedProducts = productList?.slice(indexOfFirstItem, indexOfLastItem) || [];
  const totalPages = Math.ceil((productList?.length || 0) / itemsPerPage);

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Sản phẩm đã được thêm vào giỏ hàng",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
    dispatch(
      fetchBestSellers({
        filterParams: { bestSeller: "true" },
        sortParams: "sold-hightolow", // Sắp xếp theo số lượng bán giảm dần
      })
    );
    dispatch(
      fetchBestProducts({
        filterParams: { bestProduct: "true" },
        sortParams: "rating-hightolow", // Sắp xếp theo rating giảm dần
      })
    );
  }, [dispatch]);

  console.log(productList, "productList");

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[600px] overflow-hidden">
        {featureImageList && featureImageList.length > 0
          ? featureImageList.map((slide, index) => (
              <img
                src={slide?.image}
                key={index}
                className={`${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
              />
            ))
          : null}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) =>
                (prevSlide - 1 + featureImageList.length) %
                featureImageList.length
            )
          }
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide + 1) % featureImageList.length
            )
          }
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Mua sắm theo danh mục
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoriesWithIcon.map((categoryItem) => (
              <Card
                onClick={() =>
                  handleNavigateToListingPage(categoryItem, "category")
                }
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <categoryItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Mua sắm theo thương hiệu</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandsWithImage.map((brandItem) => (
              <Card
                key={brandItem.id}
                onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    src={brandItem.image}
                    alt={brandItem.label}
                    className="w-12 h-12 mb-4 object-contain"
                  />
                  <span className="font-bold">{brandItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="pb-3 text-3xl font-bold text-center mb-8">Sản phẩm bán chạy nhất</h2>
            <Slider {...sliderSettings}>
              {bestSellers && bestSellers.length > 0 ? (
                bestSellers.map((productItem) => (
                  <div key={productItem._id} className="px-3">
                    <ShoppingProductTile
                      handleGetProductDetails={handleGetProductDetails}
                      product={productItem}
                      handleAddtoCart={handleAddtoCart}
                    />
                  </div>
                ))
              ) : (
                <p className="text-center w-full">No best sellers found</p>
              )}
            </Slider>
          <h2 className="pt-12 pb-3 text-3xl font-bold text-center mb-8">Sản phẩm tốt nhất</h2>
            <Slider {...sliderSettings}>
              {bestProducts && bestProducts.length > 0 ? (
                bestProducts.map((productItem) => (
                  <div key={productItem._id} className="px-3">
                    <ShoppingProductTile
                      handleGetProductDetails={handleGetProductDetails}
                      product={productItem}
                      handleAddtoCart={handleAddtoCart}
                    />
                  </div>
                ))
              ) : (
                <p className="text-center w-full">No best products found</p>
              )}
            </Slider>
          <h2 className="mt-12 py-12 text-3xl font-bold text-center mb-8">
            Sản phẩm đặc trưng
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedProducts.length > 0
              ? paginatedProducts.map((productItem) => (
                  <ShoppingProductTile
                    key={productItem._id}
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    handleAddtoCart={handleAddtoCart}
                  />
                ))
              : null}
          </div>
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-full ${
                    currentPage === page
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default ShoppingHome;
