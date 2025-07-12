import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";

function formatVND(amount) {
  if (!amount && amount !== 0) return "";
  return amount.toLocaleString("vi-VN") + " ₫";
}

function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  return (
    <Card className="w-full max-w-sm mx-auto h-full flex flex-col">
      <div
        onClick={() => handleGetProductDetails(product?._id)}
        className="flex-grow flex flex-col"
      >
        <div className="relative flex-shrink-0">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          {product?.totalStock === 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Hết hàng
            </Badge>
          ) : product?.totalStock < 10 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              {`Còn lại ${product?.totalStock} sản phẩm`}
            </Badge>
          ) : product?.salePrice > 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Giảm giá
            </Badge>
          ) : null}
        </div>
        <CardContent className="p-4 flex-grow flex flex-col">
          <h2 className="text-xl font-bold mb-2 line-clamp-2 h-14">
            {product?.title}
          </h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[16px] text-muted-foreground">
              {categoryOptionsMap[product?.category]}
            </span>
            <span className="text-[16px] text-muted-foreground">
              {brandOptionsMap[product?.brand]}
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}
            >
              {formatVND(product?.price)}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-lg font-semibold text-primary">
                {formatVND(product?.salePrice)}
              </span>
            ) : null}
          </div>
          <div className="mt-2 flex justify-between text-sm">
            {product.sold > 0 && (
              <span className="text-muted-foreground">
                Đã bán: {product.sold}
              </span>
            )}
            {product.averageReview > 0 && (
              <span className="text-muted-foreground">
                Đánh giá: {product.averageReview}/5
              </span>
            )}
          </div>
        </CardContent>
      </div>
      <CardFooter className="mt-auto">
        {product?.totalStock === 0 ? (
          <Button className="w-full opacity-60 cursor-not-allowed">
            Out Of Stock
          </Button>
        ) : (
          <Button
            onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
            className="w-full"
          >
            Thêm vào giỏ hàng
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;
