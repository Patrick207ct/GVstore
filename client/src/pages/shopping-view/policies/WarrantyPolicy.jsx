export default function WarrantyPolicy() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Chính sách bảo hành</h1>
        <p><strong>Những trường hợp được bảo hành miễn phí khi đảm bảo các điều kiện sau:</strong></p>
        <ul className="list-disc pl-5">
            <li>Sản phẩm còn thời hạn bảo hành hoặc có tem bảo hành và phiếu bảo hành của chính công ty.</li>
            <li>Thời gian bảo hành được ghi trên phiếu bảo hành và theo quy định của từng hãng sản xuất đối với tất cả sự cố về mặt kỹ thuật.</li>
            <li>Sản phẩm phải được lắp đặt theo đúng hướng dẫn sử dụng, catalogue theo sản phẩm.</li>
            <li>Sản phẩm bị hư hỏng do linh kiện trong máy hoặc do nhà sản xuất.</li>
        </ul>
        <p className="mt-2"><strong>Những trường hợp sau sẽ không được bảo hành miễn phí:</strong></p>
        <ul className="list-disc pl-5">
            <li>Sản phẩm hết thời hạn bảo hành ghi trên phiếu bảo hành, tem bảo hành hoặc biên bản bàn giao thiết bị.</li>
            <li>Chế độ bảo hành không được áp dụng cho các sản phẩm bị lỗi do khách hàng tự mang ra ngoài sửa chữa gây nên...</li>
            <li>Không áp dụng bảo hành cho sản phẩm bị hao mòn do sử dụng, co giãn, rách, bị vết cắt, trầy xước, côn trùng phá hoại, gỉ sét, va chạm...</li>
        </ul>
        <p className="mt-2">Golden victory sẽ kiểm tra sản phẩm và quyết định xem phản ánh của khách hàng về sản phẩm có nằm trong quyền hạn bảo hành hay không...</p>
        </div>
    );
}
