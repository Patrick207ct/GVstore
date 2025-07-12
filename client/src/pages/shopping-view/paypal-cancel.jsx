import { Card, CardHeader, CardTitle } from "@/components/ui/card";

function PaypalCancelPage() {
    return (
        <Card>
        <CardHeader>
            <CardTitle>Thanh toán đã bị hủy</CardTitle>
            <div className="mt-4 text-gray-600">
            Bạn đã hủy giao dịch thanh toán. Đơn hàng chưa được xác nhận.<br />
            Nếu bạn cần hỗ trợ, vui lòng liên hệ với chúng tôi.
            </div>
        </CardHeader>
        </Card>
    );
}

export default PaypalCancelPage;
