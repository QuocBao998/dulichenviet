const fs = require('fs');

let code = fs.readFileSync('src/app/components/GioiThieuPage.tsx', 'utf8');

const newSection = `
        {/* NEW SECTION: Tầm nhìn sứ mệnh */}
        <Motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/50 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 mb-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#003B5C] mb-6 uppercase tracking-wide">TẦM NHÌN VÀ SỨ MỆNH KINH DOANH</h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-justify md:text-center">
              Công Ty Cổ Phần Đầu Tư Giáo Dục Và Dịch Vụ Lữ Hành Én Việt – ENVIETGROUP là đơn vị cung cấp tour du lịch bao gồm nội địa và quốc tế, các dịch vụ liên quan đến du lịch: dịch vụ visa, dịch vụ golf trip, tour du lịch,… Du Lịch Sự Kiện Én Việt luôn mang lại cho khách hàng dịch vụ với mức giá tốt nhất và tiện lợi nhất.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify md:text-center font-medium">
              Với phương châm <span className="text-[#1e64ae] font-bold">“Mỗi chuyến đi là một giá trị”</span> cùng đội ngũ nhân viên chuyên nghiệp, tận tình, chu đáo và tinh thần làm việc năng động chắc chắn sẽ đem đến sự hài lòng khi hành khách trải nghiệm những dịch vụ tại Du Lịch Sự Kiện Én Việt.
            </p>
          </div>
        </Motion.div>
`;

const insertionPointRegex = /(<div className="grid md:grid-cols-3 gap-8 mb-24">)/;

code = code.replace(insertionPointRegex, newSection + '\n        $1');

fs.writeFileSync('src/app/components/GioiThieuPage.tsx', code);
console.log('GioiThieuPage updated with vision/mission');
