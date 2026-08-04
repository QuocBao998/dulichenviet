const fs = require('fs');

let code = fs.readFileSync('src/app/components/GioiThieuPage.tsx', 'utf8');

// The new block to inject
const newSection = `
        {/* NEW SECTION: Du Lịch Sự Kiện Én Việt */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24 mt-8">
          <Motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#00A651] font-black tracking-widest uppercase text-sm mb-2">Du Lịch Sự Kiện Én Việt</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#003B5C] mb-6 leading-tight">
              Du lịch Én Việt Nhà Tổ Chức Tour Du Lịch Chuyên Nghiệp - Tổng Đại Lý Vé Máy Bay Hàng Đầu Việt Nam
            </h3>
            <p className="text-gray-600 leading-relaxed text-justify mb-6">
              Với phương châm luôn mang đến cho khách hàng những giá trị tốt đẹp nhất khi đồng hành cùng Du Lịch Sự Kiện Én Việt. Du Lịch Sự Kiện Én Việt là đơn vị luôn mang đến những chuyến đi đầy thú vị và tiết kiệm nhất với chiếc vé máy bay cũng như tour du lịch giá rẻ mà hành khách khó tìm được ở bất kỳ nơi nào. Đội ngũ nhân viên chuyên nghiệp, tận tình, chu đáo và tinh thần làm việc năng động chắc chắn hành khách sẽ cảm thấy hài lòng với những trải nghiệm dịch vụ tại Du Lịch Sự Kiện Én Việt.
            </p>
          </Motion.div>
          <Motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80" alt="Én Việt Travel" className="w-full h-[400px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#003B5C]/40 to-transparent" />
          </Motion.div>
        </div>
`;

// Insert the new section just before `<div className="grid md:grid-cols-2 gap-12 items-center mb-20">`
const insertionPointRegex = /(<div className="grid md:grid-cols-2 gap-12 items-center mb-20">)/;

code = code.replace(insertionPointRegex, newSection + '\n        $1');

fs.writeFileSync('src/app/components/GioiThieuPage.tsx', code);
console.log('GioiThieuPage updated');
