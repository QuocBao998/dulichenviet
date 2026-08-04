const fs = require('fs');

let code = fs.readFileSync('src/app/App.tsx', 'utf8');

const imageImports = `import Gallery1 from "../imports/z7991040709521_0f42a9b1996bd42eca8b096a93fc2c5a.jpg";
import Gallery2 from "../imports/z7991040772825_27e1264faabb34eec3b0edb0b9c1a07d.jpg";
import Gallery3 from "../imports/z7991040871637_7ac325e53985e1acd1938164886cada2.jpg";
import Gallery4 from "../imports/z7991040922622_012f57e954d70e1784a0b408b3256fed.jpg";
import Gallery5 from "../imports/z7991040963062_37ce009bec54172d5e39c0137e7dd919.jpg";
import Gallery6 from "../imports/z7991041008258_601e1647bd4203d58547d6ac943eb3f5.jpg";
import Gallery7 from "../imports/z7991041068199_d03e5f0f7d693c180cbb92d7b652b197.jpg";
import Gallery8 from "../imports/z7991041181580_50772d0657a4b04494cbc1f647f5687e.jpg";
import Gallery9 from "../imports/z7991041223052_5166018017e81a1cddfed3cefbfe1ddf.jpg";
import Gallery10 from "../imports/z7991041291774_0679eb22c8afbbfb82ea9bb2419ec9cd.jpg";
`;

// Inject imports right after the other imports
code = code.replace(/import ChaoCamVideo from "\.\.\/imports\/Cha_o_Cam\.mp4";\n/, `import ChaoCamVideo from "../imports/Cha_o_Cam.mp4";\n${imageImports}`);

const gallerySection = `{/* ── Photo Gallery Section ── */}
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
          {[
            Gallery1, Gallery2, Gallery3, Gallery4, Gallery5,
            Gallery6, Gallery7, Gallery8, Gallery9, Gallery10
          ].map((img, idx) => (
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
      </section>

      `;

// Inject before Customer Reviews
code = code.replace(/\{\/\* ── Customer Reviews ── \*\/\}/, gallerySection + '{/* ── Customer Reviews ── */}');

fs.writeFileSync('src/app/App.tsx', code);
console.log('Gallery Added');
