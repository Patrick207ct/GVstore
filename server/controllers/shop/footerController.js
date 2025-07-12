exports.getReturnPolicy = (req, res) => {
    res.json({
        title: "Chính sách đổi trả",
        content: "Nội dung chi tiết chính sách đổi trả..."
    });
};

exports.getShippingPolicy = (req, res) => {
    res.json({
        title: "Chính sách vận chuyển",
        content: "Nội dung chi tiết chính sách vận chuyển..."
    });
};

exports.getWarrantyPolicy = (req, res) => {
    res.json({
        title: "Chính sách bảo hành",
        content: "Nội dung chi tiết chính sách bảo hành..."
    });
};

exports.getPaymentPolicy = (req, res) => {
    res.json({
        title: "Chính sách thanh toán",
        content: "Nội dung chi tiết chính sách thanh toán..."
    });
};