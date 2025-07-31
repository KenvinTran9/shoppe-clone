import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Links, Services } from "./contanst";
function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {Services.map((service) => (
            <div key={service.title}>
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">
                {service.title}
              </h3>
              <ul>
                {service.item.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-600 hover:text-orange-500 text-xs/7"
                  >
                    {typeof item === "string" ? item : item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {Links.map((link) => (
            <div key={link.title}>
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">
                {link.title}
              </h3>
              <ul>
                {link.item.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-600 hover:text-orange-500 text-xs/7"
                  >
                    {typeof item === "string" ? item : item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">
              THANH TOÁN
            </h3>
            <div className="flex flex-col">
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-white border rounded p-1 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">VISA</span>
                </div>
                <div className="bg-white border rounded p-1 flex items-center justify-center">
                  <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
                  <div className="w-6 h-4 bg-yellow-400 rounded-sm -ml-2"></div>
                </div>
                <div className="bg-white border rounded p-1 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">JCB</span>
                </div>
                <div className="bg-white border rounded p-1 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">AMEX</span>
                </div>
                <div className="bg-white border rounded p-1 flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-xs">COD</span>
                </div>
                <div className="bg-white border rounded p-1 flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-xs">
                    Trả Góp
                  </span>
                </div>
                <div className="bg-white border rounded p-1 flex items-center justify-center">
                  <span className="text-red-500 font-bold text-xs">SPay</span>
                </div>
                <div className="bg-white border rounded p-1 flex items-center justify-center">
                  <span className="text-red-500 font-bold text-xs">
                    SPayLater
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 text-sm">
                  ĐƠN VỊ VẬN CHUYỂN
                </h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-white border rounded p-1 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xs">SPX</span>
                  </div>
                  <div className="bg-white border rounded p-1 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xs">
                      Giao hang tiet kiem
                    </span>
                  </div>
                  <div className="bg-white border rounded p-1 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xs">
                      Viettel Post
                    </span>
                  </div>
                  <div className="bg-white border rounded p-1 flex items-center justify-center">
                    <span className="text-orange-500 font-bold text-xs">
                      VietNam Post
                    </span>
                  </div>
                  <div className="bg-white border rounded p-1 flex items-center justify-center">
                    <span className="text-red-500 font-bold text-xs">J&T</span>
                  </div>
                  <div className="bg-white border rounded p-1 flex items-center justify-center">
                    <span className="text-red-500 font-bold text-xs">Grab</span>
                  </div>
                  <div className="bg-white border rounded p-1 flex items-center justify-center">
                    <span className="text-red-500 font-bold text-xs">
                      Ninja
                    </span>
                  </div>
                  <div className="bg-white border rounded p-1 flex items-center justify-center">
                    <span className="text-red-500 font-bold text-xs">Be</span>
                  </div>
                  <div className="bg-white border rounded p-1 flex items-center justify-center">
                    <span className="text-red-500 font-bold text-xs">
                      Ahamove
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">
              THEO DÕI SHOPEE
            </h3>
            <ul className="space-y-2">
              <li className="flex gap-1">
                <MdFacebook />
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-orange-500 text-sm"
                >
                  Facebook
                </a>
              </li>
              <li className="flex gap-1">
                <FaInstagram />
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-orange-500 text-sm"
                >
                  Instagram
                </a>
              </li>
              <li className="flex gap-1">
                <FaLinkedin />
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-orange-500 text-sm"
                >
                  LinkiN
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">
              TẢI ỨNG DỤNG SHOPEE
            </h3>
            <div className="flex items-start space-x-4">
              <div className="w-20 h-20 bg-gray-200 border rounded flex items-center justify-center">
                <div className="w-16 h-16 bg-black"></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-1 bg-black text-white px-2 py-1 rounded text-xs">
                  <span>🍎</span>
                  <span>App Store</span>
                </div>
                <div className="flex items-center space-x-1 bg-black text-white px-2 py-1 rounded text-xs">
                  <span>▶</span>
                  <span>Google Play</span>
                </div>
                <div className="flex items-center space-x-1 bg-red-500 text-white px-2 py-1 rounded text-xs">
                  <span>AppGallery</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <p className="text-gray-600 text-sm">
              © 2025 Shopee. Tất cả các quyền được bảo lưu.
            </p>
            <div className="flex flex-wrap gap-1 text-sm">
              <div>
                <span>Quốc Gia & Khu vực:</span>
              </div>
              <a>Singapore</a> |<a>Indonesisa</a> |<a>Thái Lan</a> |
              <a>Malaysia</a> |<a>Việt Nam</a> |<a>Phillipines</a> |
              <a>Brazil</a> |<a>Mexico</a> |<a>Colombia</a> |<a>Chille</a> |
              <a>Đài Loan</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5] w-full ">
        <div className="flex justify-center gap-4 mb-6 text-xs py-4">
          <a href="#" className="text-gray-600">
            CHÍNH SÁCH BẢO MẬT
          </a>
          |
          <a href="#" className="text-gray-600">
            QUY CHẾ HOẠT ĐỘNG
          </a>
          |
          <a href="#" className="text-gray-600">
            CHÍNH SÁCH VẬN CHUYỂN
          </a>
          |
          <a href="#" className="text-gray-600">
            CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN
          </a>
        </div>

        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="p-4 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">ĐÃ ĐĂNG KÝ</span>
          </div>
          <div className="p-4 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">ĐÃ ĐĂNG KÝ</span>
          </div>
          <div className="p-4 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">Vân tay</span>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 space-y-2">
          <p className="mb-4">Công ty TNHH Shopee</p>
          <p>
            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
            Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Chăm
            sóc khách hàng: Gọi tổng đài Shopee (miễn phí) hoặc Trò chuyện với
            Shopee ngay trên Trung tâm trợ giúp
          </p>
          <p>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Bùi Anh Tuấn</p>
          <p>
            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch và Đầu tư TP Hà Nội
            cấp lần đầu ngày 10/02/2015
          </p>
          <p>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
