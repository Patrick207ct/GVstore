const Product = require("../../models/Product");
const Order = require("../../models/Order");

// Lấy sản phẩm bán chạy (tổng quantity >= 10)
const getBestSellers = async (req, res) => {
    try {
        // Tổng hợp số lượng bán từ các đơn hàng đã thanh toán
        const bestSellers = await Order.aggregate([
        { $match: { paymentStatus: "paid" } },
        { $unwind: "$cartItems" },
        {
            $group: {
            _id: "$cartItems.productId",
            totalSold: { $sum: "$cartItems.quantity" }
            }
        },
        { $match: { totalSold: { $gte: 10 } } },
        { $sort: { totalSold: -1 } }
    ]);

    // Lấy danh sách ID sản phẩm
    const productIds = bestSellers.map(item => item._id);

    // Lấy thông tin chi tiết sản phẩm
    const products = await Product.find({ _id: { $in: productIds } });

    // Kết hợp thông tin số lượng bán
    const productsWithSold = products.map(product => {
        const soldInfo = bestSellers.find(item => item._id.toString() === product._id.toString());
        return {
            ...product._doc,
            sold: soldInfo ? soldInfo.totalSold : 0
        };
        });

        res.status(200).json({
        success: true,
        data: productsWithSold
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
    };

    // Lấy sản phẩm đánh giá tốt (>= 4 sao)
    const getBestProducts = async (req, res) => {
    try {
        const products = await Product.find({ averageReview: { $gte: 4 } });
        res.status(200).json({
        success: true,
        data: products
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

module.exports = { getBestSellers, getBestProducts };
