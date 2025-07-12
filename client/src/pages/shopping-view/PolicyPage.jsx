import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_MAP = {
    "chinh-sach-doi-tra": "return-policy",
    "chinh-sach-van-chuyen": "shipping-policy",
    "chinh-sach-bao-hanh": "warranty-policy",
    "chinh-sach-thanh-toan": "payment-policy",
};

export default function PolicyPage() {
    const { policySlug } = useParams();
    const [policy, setPolicy] = useState(null);

    useEffect(() => {
        const apiPath = API_MAP[policySlug];
        if (apiPath) {
        fetch(`http://localhost:5000/api/footer/${apiPath}`)
            .then(res => res.json())
            .then(data => setPolicy(data));
        }
    }, [policySlug]);

    if (!policy) return <div className="text-center py-12">Đang tải...</div>;

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">{policy.title}</h1>
        <div className="prose max-w-none whitespace-pre-line">{policy.content}</div>
        </div>
    );
}
