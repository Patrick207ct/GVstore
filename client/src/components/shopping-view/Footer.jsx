import { Link } from "react-router-dom";
import logoIMG from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-black pt-10 pb-4 px-4 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-300 pb-8">
            {/* Cột 1: Logo & thông tin */}
            <div>
                <img src={logoIMG} alt="Golden Victory" className="h-14 mb-4" />
                <div className="font-bold uppercase leading-6 mb-2">
                    Công ty TNHH Thủ Công Mỹ Nghệ Golden Victory
                </div>
                <div className="text-sm leading-6">
                    Địa chỉ: 46 Ni Sư Huỳnh Liên, Phường 10, Quận Tân Bình, Thành phố Hồ Chí Minh.<br />
                    Hotline: 0913 191 999<br />
                    Hotline 2: 088 899 8869<br />
                    Thời gian làm việc: 8h30 – 17h30
                </div>
            </div>

            {/* Cột 2: Sơ đồ website & chính sách */}
            <div>
                <div className="font-bold text-lg mb-2">Chính sách</div>
                <ul className="text-sm mb-4 space-y-1">
                    <li>
                        <Link to="/shop/chinh-sach-doi-tra" className="hover:underline">
                            Chính sách đổi trả
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop/chinh-sach-van-chuyen" className="hover:underline">
                            Chính sách vận chuyển
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop/chinh-sach-bao-hanh" className="hover:underline">
                            Chính sách bảo hành
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop/chinh-sach-thanh-toan" className="hover:underline">
                            Chính sách thanh toán
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Cột 3: Fanpage */}
            <div>
                <div className="font-bold text-lg mb-2">Fanpage</div>
                <div className="flex items-center gap-4">
                    <a
                        href="https://www.facebook.com/goldenvictoryhcm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook size={45} color="blue" />
                    </a>
                    <a
                        href="https://www.instagram.com/ggolden_vvictory/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagramSquare size={48} color="#E1306C" />
                    </a>
                </div>
            </div>

            {/* Cột 4: Bản đồ */}
            <div>
                <div className="font-bold text-lg mb-2">Bản đồ</div>
                <iframe
                    title="Golden Victory Map"
                    src="https://www.google.com/maps?q=46+Ni+Sư+Huỳnh+Liên,+Tân+Bình,+Hồ+Chí+Minh&output=embed"
                    width="100%"
                    height="220"
                    style={{ border: 0, borderRadius: 8 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
        <div className="text-center text-yellow-500 text-sm mt-6">
            Bản Quyền Thuộc Về Golden Victory © 2022
        </div>
        </footer>
    );
}
