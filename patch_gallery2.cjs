const fs = require('fs');

let code = fs.readFileSync('src/app/App.tsx', 'utf8');

const newImports = `import Gallery11 from "../imports/z7991041357796_502676f3f981a9fcf7ee0737362e6c22.jpg";
import Gallery12 from "../imports/z7991041419216_311e0ba7a321e3969596934f63361a8b.jpg";
import Gallery13 from "../imports/z7991042379061_ba96972913efff9376708c5f1b2e20e1.jpg";
import Gallery14 from "../imports/z7991042379064_ba27b705bfee215da5a69df34eaa5379.jpg";
import Gallery15 from "../imports/z7991042391882_068e35b2a0fe4fdeb305e3f0a042a88a.jpg";
`;

code = code.replace(/import Gallery10 from "\.\.\/imports\/z7991041291774_0679eb22c8afbbfb82ea9bb2419ec9cd\.jpg";\n/, `import Gallery10 from "../imports/z7991041291774_0679eb22c8afbbfb82ea9bb2419ec9cd.jpg";\n${newImports}`);

// Add state to HomePage
code = code.replace(
  /const \[heroIndex, setHeroIndex\] = useState\(0\);/,
  `const [heroIndex, setHeroIndex] = useState(0);\n  const [showAllPhotos, setShowAllPhotos] = useState(false);`
);

// Define gallery section replacement
const oldGallerySectionRegex = /\{\/\* ── Photo Gallery Section ── \*\/\}[\s\S]*?(?=\{\/\* ── Customer Reviews ── \*\/\})/;

const newGallerySection = `{/* ── Photo Gallery Section ── */}
      <section className="max-w-7xl mx-auto px-4 mt-24 mb-24">
        <Motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e64ae] to-[#77c14d] text-sm font-extrabold tracking-[0.2em] uppercase mb-3 drop-shadow-sm inline-block">Thư Viện Hình Ảnh</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#003B5C] mb-4">Khoảnh Khắc Đáng Nhớ</h2>
          <div className="w-24 h-1 bg-[#00A651] mx-auto rounded-full" />
        </Motion.div>
        
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {(showAllPhotos ? [
            Gallery1, Gallery2, Gallery3, Gallery4, Gallery5,
            Gallery6, Gallery7, Gallery8, Gallery9, Gallery10,
            Gallery11, Gallery12, Gallery13, Gallery14, Gallery15
          ] : [
            Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6
          ]).map((img, idx) => (
            <Motion.div 
              key={idx}
              variants={fadeInUp}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid rounded-[1.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative group cursor-pointer"
            >
              <img 
                src={img} 
                alt={\`Khoảnh khắc Én Việt \${idx + 1}\`} 
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003B5C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Motion.div>
          ))}
        </div>

        <Motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <button 
            onClick={() => setShowAllPhotos(!showAllPhotos)}
            className="bg-white border-2 border-[#1e64ae] text-[#1e64ae] hover:bg-[#1e64ae] hover:text-white font-black px-8 py-3 rounded-full transition-all duration-300 shadow-md flex items-center gap-2"
          >
            {showAllPhotos ? "Thu gọn" : "Xem tất cả hình ảnh"}
          </button>
        </Motion.div>
      </section>

      `;

code = code.replace(oldGallerySectionRegex, newGallerySection);

fs.writeFileSync('src/app/App.tsx', code);
console.log('Gallery Updated');
