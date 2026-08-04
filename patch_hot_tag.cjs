const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

code = code.replace(
  /\}\{tour\.tag\}<\/span>/,
  `}>{tour.tag} {tour.tag === "Hot" && <Flame className="w-3 h-3 inline-block ml-0.5 -mt-0.5" />}</span>`
);

// We also need to add floating socials in AppContent
const socialsCode = `
      {/* Floating Socials */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-[60] p-2">
        <a href="#" className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-l-xl flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:w-12 hover:-translate-x-1 transition-all duration-300">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="#" className="w-10 h-10 bg-gradient-to-br from-black to-gray-800 text-white rounded-l-xl flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:w-12 hover:-translate-x-1 transition-all duration-300">
          <Music2 className="w-5 h-5" />
        </a>
        <a href="#" className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 text-white rounded-l-xl flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:w-12 hover:-translate-x-1 transition-all duration-300">
          <Youtube className="w-5 h-5" />
        </a>
      </div>
`;

code = code.replace(
  /<Footer nav=\{navigateTo\} \/>/,
  `${socialsCode}\n      <Footer nav={navigateTo} />`
);

fs.writeFileSync('src/app/App.tsx', code);
