import { MenuItem, BranchInfo } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'smash-classic',
    name: 'GOGOs Original Double Smash',
    category: 'burgers',
    price: 1350,
    tag: 'Bestseller',
    description: 'Two 80g dry-aged prime beef patties smashed wafer-thin with crispy lacy edges, double melted American cheese, diced sweet onions, house dill pickles, and secret GOGOs sauce on butter-toasted brioche.',
    calories: '680 kcal',
    prepTime: '7-9 min',
    spiceLevel: 0,
    rating: 4.9,
    ingredients: ['Prime Beef', 'American Cheddar', 'Pickles', 'Smash Sauce', 'Brioche Bun'],
    image: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Stark Solid Pure White Background -->
        <rect width="400" height="400" fill="#FFFFFF"/>
        <defs>
          <radialGradient id="pattyGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#4A2511"/>
            <stop offset="85%" stop-color="#261005"/>
            <stop offset="100%" stop-color="#140702"/>
          </radialGradient>
          <linearGradient id="cheeseMelt" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFC107"/>
            <stop offset="50%" stop-color="#FFA000"/>
            <stop offset="100%" stop-color="#FF8F00"/>
          </linearGradient>
          <radialGradient id="bunTop" cx="40%" cy="30%" r="60%">
            <stop offset="0%" stop-color="#E5A65E"/>
            <stop offset="60%" stop-color="#C27A2F"/>
            <stop offset="100%" stop-color="#934D12"/>
          </radialGradient>
          <linearGradient id="bunBottom" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#D48B3D"/>
            <stop offset="100%" stop-color="#A75F17"/>
          </linearGradient>
          <filter id="crispShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#000000" flood-opacity="0.14"/>
          </filter>
        </defs>

        <g filter="url(#crispShadow)">
          <!-- Bottom Brioche Bun -->
          <ellipse cx="200" cy="295" rx="142" ry="42" fill="url(#bunBottom)"/>
          <ellipse cx="200" cy="285" rx="138" ry="34" fill="#E8B072"/>

          <!-- Sauce Layer -->
          <path d="M 80,280 Q 200,290 320,280 Q 300,270 200,270 Q 100,270 80,280 Z" fill="#E65100" opacity="0.9"/>
          <!-- Pickle rounds -->
          <ellipse cx="120" cy="272" rx="28" ry="12" fill="#558B2F" transform="rotate(-6 120 272)"/>
          <ellipse cx="120" cy="272" rx="20" ry="8" fill="#7CB342" transform="rotate(-6 120 272)"/>
          <ellipse cx="270" cy="274" rx="26" ry="11" fill="#558B2F" transform="rotate(8 270 274)"/>
          <ellipse cx="270" cy="274" rx="19" ry="7" fill="#7CB342" transform="rotate(8 270 274)"/>

          <!-- Bottom Patty with lacy edges -->
          <path d="M 60,250 C 70,240 100,245 130,242 C 160,244 200,238 240,243 C 280,240 320,245 340,252 C 348,258 335,268 310,272 C 260,276 210,274 150,276 C 90,274 52,266 60,250 Z" fill="url(#pattyGlow)"/>
          <!-- Crispy char bits -->
          <circle cx="85" cy="254" r="3" fill="#0D0602"/>
          <circle cx="140" cy="248" r="4" fill="#0D0602"/>
          <circle cx="315" cy="258" r="3.5" fill="#0D0602"/>

          <!-- Melted Cheese Layer 1 (Dripping over edges) -->
          <path d="M 75,238 L 325,238 C 330,250 315,265 295,262 C 275,275 260,285 250,285 C 240,285 235,265 220,265 C 205,278 185,282 175,280 C 160,270 155,255 140,262 C 120,270 105,274 95,260 C 85,262 70,255 75,238 Z" fill="url(#cheeseMelt)"/>

          <!-- Top Patty with jagged lacy smash edges -->
          <path d="M 64,220 C 80,212 120,216 160,213 C 200,215 250,210 290,215 C 330,212 342,225 334,235 C 320,242 270,246 200,246 C 130,246 80,242 66,232 C 60,225 58,222 64,220 Z" fill="url(#pattyGlow)"/>

          <!-- Melted Cheese Layer 2 with gloss highlights -->
          <path d="M 78,212 L 322,212 C 332,225 320,240 300,238 C 290,252 272,256 265,248 C 250,258 230,262 215,250 C 200,258 175,264 165,250 C 145,262 125,258 115,242 C 95,252 82,238 78,212 Z" fill="url(#cheeseMelt)"/>
          <path d="M 170,230 Q 210,238 250,230" stroke="#FFE082" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.7"/>

          <!-- Grilled Caramelized Onions -->
          <path d="M 110,205 Q 150,198 190,206 Q 230,195 280,205" stroke="#795548" stroke-width="4" stroke-linecap="round" fill="none"/>
          <path d="M 130,202 Q 170,208 210,200 Q 250,206 290,200" stroke="#D7CCC8" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.8"/>

          <!-- Top Golden Brioche Bun (Plump, glazed, 3D dome) -->
          <path d="M 68,198 C 65,115 110,80 200,80 C 290,80 335,115 332,198 C 332,206 68,206 68,198 Z" fill="url(#bunTop)"/>
          <!-- Brioche Sheen Highlight -->
          <ellipse cx="170" cy="115" rx="65" ry="22" fill="#FFFFFF" opacity="0.32" transform="rotate(-12 170 115)"/>
          <ellipse cx="240" cy="130" rx="35" ry="14" fill="#FFFFFF" opacity="0.2" transform="rotate(8 240 130)"/>

          <!-- Toasted Sesame Seeds -->
          <g fill="#FFF8E1" opacity="0.95">
            <ellipse cx="130" cy="120" rx="4.5" ry="2.5" transform="rotate(25 130 120)"/>
            <ellipse cx="165" cy="100" rx="4.5" ry="2.5" transform="rotate(-15 165 100)"/>
            <ellipse cx="205" cy="98" rx="4.5" ry="2.5" transform="rotate(10 205 98)"/>
            <ellipse cx="245" cy="112" rx="4.5" ry="2.5" transform="rotate(-30 245 112)"/>
            <ellipse cx="275" cy="135" rx="4.5" ry="2.5" transform="rotate(40 275 135)"/>
            <ellipse cx="140" cy="150" rx="4.5" ry="2.5" transform="rotate(-40 140 150)"/>
            <ellipse cx="185" cy="135" rx="4.5" ry="2.5" transform="rotate(15 185 135)"/>
            <ellipse cx="220" cy="145" rx="4.5" ry="2.5" transform="rotate(-10 220 145)"/>
            <ellipse cx="260" cy="165" rx="4.5" ry="2.5" transform="rotate(35 260 165)"/>
            <ellipse cx="105" cy="160" rx="4.5" ry="2.5" transform="rotate(50 105 160)"/>
            <ellipse cx="295" cy="168" rx="4.5" ry="2.5" transform="rotate(-20 295 168)"/>
          </g>
        </g>
      </svg>
    `),
  },
  {
    id: 'karachi-firecracker',
    name: 'Karachi Firecracker Smash',
    category: 'burgers',
    price: 1480,
    tag: 'Spicy Signature',
    description: 'Double beef patty infused with fiery Naga & green chili relish, pepper jack cheese, crispy fried onion straw strings, and smoky sriracha mayo on a toasted seeded brioche bun.',
    calories: '740 kcal',
    prepTime: '8-10 min',
    spiceLevel: 3,
    rating: 4.8,
    ingredients: ['Prime Beef', 'Naga Relish', 'Pepper Jack', 'Crisp Onions', 'Smoky Mayo'],
    image: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <rect width="400" height="400" fill="#FFFFFF"/>
        <defs>
          <radialGradient id="fireBun" cx="42%" cy="30%" r="60%">
            <stop offset="0%" stop-color="#E89B48"/>
            <stop offset="65%" stop-color="#C26019"/>
            <stop offset="100%" stop-color="#802C06"/>
          </radialGradient>
          <linearGradient id="fireSauce" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#D32F2F"/>
            <stop offset="50%" stop-color="#F57C00"/>
            <stop offset="100%" stop-color="#E64A19"/>
          </linearGradient>
          <filter id="pattyShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="16" stdDeviation="15" flood-color="#000000" flood-opacity="0.16"/>
          </filter>
        </defs>

        <g filter="url(#pattyShadow)">
          <!-- Bottom Bun -->
          <ellipse cx="200" cy="295" rx="140" ry="40" fill="#B86E24"/>
          <ellipse cx="200" cy="285" rx="136" ry="32" fill="#E6A868"/>

          <!-- Fiery red-orange drip sauce -->
          <path d="M 70,270 C 110,275 140,285 170,275 C 200,285 240,278 280,288 C 305,280 325,272 335,270 C 330,290 300,300 200,300 C 100,300 70,290 70,270 Z" fill="url(#fireSauce)"/>

          <!-- Smashed Charred Patty 1 -->
          <path d="M 60,250 C 90,242 140,246 200,240 C 260,244 310,240 340,250 C 348,260 320,272 200,274 C 80,274 52,260 60,250 Z" fill="#240D04"/>
          <!-- Melted Pepper Jack with chili flakes -->
          <path d="M 72,238 L 328,238 C 335,255 310,275 285,270 C 265,285 245,288 235,275 C 220,285 190,290 175,278 C 150,290 120,280 100,268 C 80,272 68,255 72,238 Z" fill="#FFF3E0"/>
          <!-- Chili flakes on cheese -->
          <circle cx="120" cy="255" r="2.5" fill="#D32F2F"/>
          <circle cx="180" cy="265" r="3" fill="#D32F2F"/>
          <circle cx="230" cy="258" r="2" fill="#388E3C"/>
          <circle cx="270" cy="262" r="2.5" fill="#D32F2F"/>

          <!-- Smashed Charred Patty 2 -->
          <path d="M 64,222 C 100,214 160,218 200,214 C 250,216 300,212 336,222 C 342,232 310,245 200,246 C 90,246 58,232 64,222 Z" fill="#1A0A03"/>

          <!-- Crispy Golden Onion Straws -->
          <g stroke="#E65100" stroke-width="4" stroke-linecap="round" fill="none">
            <path d="M 90,208 Q 140,218 190,210"/>
            <path d="M 120,202 Q 170,195 230,206"/>
            <path d="M 180,205 Q 240,215 310,202"/>
            <path d="M 140,215 Q 200,208 260,218"/>
          </g>
          <!-- Jalapeño coins -->
          <ellipse cx="140" cy="205" rx="20" ry="9" fill="#2E7D32" transform="rotate(-12 140 205)"/>
          <ellipse cx="140" cy="205" rx="14" ry="6" fill="#4CAF50" transform="rotate(-12 140 205)"/>
          <ellipse cx="255" cy="202" rx="22" ry="10" fill="#2E7D32" transform="rotate(15 255 202)"/>
          <ellipse cx="255" cy="202" rx="15" ry="6.5" fill="#4CAF50" transform="rotate(15 255 202)"/>

          <!-- Top Glazed Brioche Bun with spicy tone -->
          <path d="M 68,198 C 65,115 110,80 200,80 C 290,80 335,115 332,198 C 332,206 68,206 68,198 Z" fill="url(#fireBun)"/>
          <ellipse cx="165" cy="116" rx="60" ry="20" fill="#FFFFFF" opacity="0.3" transform="rotate(-10 165 116)"/>
          <!-- Black sesame + white sesame -->
          <g fill="#212121">
            <ellipse cx="150" cy="110" rx="3.5" ry="2" transform="rotate(20 150 110)"/>
            <ellipse cx="215" cy="105" rx="3.5" ry="2" transform="rotate(-15 215 105)"/>
            <ellipse cx="260" cy="130" rx="3.5" ry="2" transform="rotate(30 260 130)"/>
            <ellipse cx="130" cy="140" rx="3.5" ry="2" transform="rotate(-25 130 140)"/>
          </g>
          <g fill="#FFF9C4">
            <ellipse cx="180" cy="120" rx="4" ry="2" transform="rotate(10 180 120)"/>
            <ellipse cx="235" cy="140" rx="4" ry="2" transform="rotate(-30 235 140)"/>
            <ellipse cx="160" cy="155" rx="4" ry="2" transform="rotate(40 160 155)"/>
          </g>
        </g>
      </svg>
    `),
  },
  {
    id: 'truffle-beast',
    name: 'The Truffle & Swiss Smash',
    category: 'burgers',
    price: 1650,
    tag: 'Chef Special',
    description: 'Double smashed beef patties topped with aromatic black truffle butter, caramelized balsamic brown mushrooms, melted Emmental Swiss cheese, and micro-herbs on a golden brioche.',
    calories: '710 kcal',
    prepTime: '9-11 min',
    spiceLevel: 0,
    rating: 5.0,
    ingredients: ['Prime Beef', 'Black Truffle', 'Wild Mushrooms', 'Swiss Cheese', 'Truffle Mayo'],
    image: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <rect width="400" height="400" fill="#FFFFFF"/>
        <defs>
          <radialGradient id="truffleBun" cx="45%" cy="32%" r="60%">
            <stop offset="0%" stop-color="#E1A25B"/>
            <stop offset="65%" stop-color="#BA6F23"/>
            <stop offset="100%" stop-color="#7C3B08"/>
          </radialGradient>
          <filter id="richGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="16" stdDeviation="15" flood-color="#000000" flood-opacity="0.15"/>
          </filter>
        </defs>

        <g filter="url(#richGlow)">
          <!-- Bottom Bun -->
          <ellipse cx="200" cy="295" rx="140" ry="40" fill="#B3691D"/>
          <ellipse cx="200" cy="285" rx="136" ry="32" fill="#E2A664"/>

          <!-- Truffle Aioli base -->
          <ellipse cx="200" cy="278" rx="120" ry="18" fill="#F5F5F0"/>
          <!-- Mushroom slices -->
          <ellipse cx="130" cy="270" rx="30" ry="14" fill="#4E342E" transform="rotate(-8 130 270)"/>
          <ellipse cx="130" cy="270" rx="22" ry="9" fill="#6D4C41" transform="rotate(-8 130 270)"/>
          <ellipse cx="270" cy="272" rx="28" ry="13" fill="#4E342E" transform="rotate(10 270 272)"/>

          <!-- Patties -->
          <path d="M 60,248 C 90,240 150,244 200,238 C 260,242 310,238 340,248 C 348,258 310,272 200,272 C 90,272 52,258 60,248 Z" fill="#210F07"/>
          <!-- Swiss Cheese melted with holes -->
          <path d="M 70,236 L 330,236 C 336,252 320,276 295,270 C 275,286 250,288 238,274 C 220,286 190,292 175,276 C 150,288 120,282 100,268 C 78,274 68,252 70,236 Z" fill="#FFFDE7"/>
          <circle cx="160" cy="254" r="5" fill="#FFE082" opacity="0.6"/>
          <circle cx="240" cy="258" r="6" fill="#FFE082" opacity="0.6"/>

          <path d="M 65,220 C 100,212 160,216 200,212 C 250,214 300,210 335,220 C 342,230 310,242 200,244 C 90,244 58,230 65,220 Z" fill="#170A04"/>

          <!-- Balsamic caramelized mushroom caps on top -->
          <ellipse cx="170" cy="208" rx="26" ry="12" fill="#3E2723"/>
          <ellipse cx="230" cy="206" rx="24" ry="11" fill="#4E342E"/>

          <!-- Top Brioche Bun -->
          <path d="M 68,198 C 65,115 110,80 200,80 C 290,80 335,115 332,198 C 332,206 68,206 68,198 Z" fill="url(#truffleBun)"/>
          <ellipse cx="170" cy="115" rx="65" ry="22" fill="#FFFFFF" opacity="0.32" transform="rotate(-12 170 115)"/>
          <!-- Herb garnish flecks -->
          <circle cx="160" cy="105" r="2" fill="#2E7D32"/>
          <circle cx="210" cy="115" r="2.5" fill="#2E7D32"/>
          <circle cx="250" cy="130" r="2" fill="#2E7D32"/>
        </g>
      </svg>
    `),
  },
  {
    id: 'truffle-fries',
    name: 'Truffle & Shaved Parmesan Fries',
    category: 'fries',
    price: 890,
    tag: 'Customer Obsession',
    description: 'Triple-cooked golden hand-cut russet potato fries tossed in Italian white truffle oil, dusted with aged 24-month shaved parmesan cheese, chopped fresh Italian parsley, and sea salt crystals.',
    calories: '490 kcal',
    prepTime: '6-8 min',
    spiceLevel: 0,
    rating: 4.9,
    ingredients: ['Russet Potatoes', 'White Truffle Oil', '24mo Parmesan', 'Parsley', 'Garlic Aioli'],
    image: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <rect width="400" height="400" fill="#FFFFFF"/>
        <defs>
          <linearGradient id="fryGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FFE082"/>
            <stop offset="50%" stop-color="#FFB300"/>
            <stop offset="100%" stop-color="#E65100"/>
          </linearGradient>
          <linearGradient id="boxCraft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#C29263"/>
            <stop offset="50%" stop-color="#D7A97B"/>
            <stop offset="100%" stop-color="#AA7746"/>
          </linearGradient>
          <filter id="fryShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#000000" flood-opacity="0.14"/>
          </filter>
        </defs>

        <g filter="url(#fryShadow)">
          <!-- Fry sticks protruding out in 3D fan-out -->
          <g stroke="#B26A00" stroke-width="1.5">
            <!-- Background fries -->
            <rect x="130" y="70" width="18" height="150" rx="3" fill="url(#fryGold)" transform="rotate(-22 130 140)"/>
            <rect x="155" y="55" width="20" height="160" rx="3" fill="url(#fryGold)" transform="rotate(-12 155 135)"/>
            <rect x="190" y="45" width="22" height="175" rx="3" fill="url(#fryGold)" transform="rotate(3 190 130)"/>
            <rect x="225" y="52" width="20" height="165" rx="3" fill="url(#fryGold)" transform="rotate(15 225 135)"/>
            <rect x="250" y="75" width="18" height="145" rx="3" fill="url(#fryGold)" transform="rotate(26 250 145)"/>

            <!-- Mid-layer fries -->
            <rect x="145" y="90" width="19" height="135" rx="3" fill="url(#fryGold)" transform="rotate(-8 145 155)"/>
            <rect x="175" y="75" width="22" height="150" rx="3" fill="url(#fryGold)" transform="rotate(6 175 150)"/>
            <rect x="210" y="80" width="21" height="145" rx="3" fill="url(#fryGold)" transform="rotate(-4 210 152)"/>
            <rect x="235" y="95" width="19" height="130" rx="3" fill="url(#fryGold)" transform="rotate(18 235 160)"/>

            <!-- Foreground crossing fries -->
            <rect x="165" y="115" width="20" height="115" rx="3" fill="url(#fryGold)" transform="rotate(-15 165 170)"/>
            <rect x="200" y="110" width="21" height="120" rx="3" fill="url(#fryGold)" transform="rotate(12 200 170)"/>
          </g>

          <!-- Craft Paper Carton (Modern Sleek Box) -->
          <path d="M 110,210 L 130,340 Q 200,355 270,340 L 290,210 Q 200,225 110,210 Z" fill="url(#boxCraft)" stroke="#8D5B28" stroke-width="2"/>
          <!-- Box Front Label Stamp -->
          <ellipse cx="200" cy="285" rx="42" ry="24" fill="#FFFFFF" opacity="0.92"/>
          <text x="200" y="290" text-anchor="middle" font-family="'Syne', sans-serif" font-weight="800" font-size="16" fill="#141414" letter-spacing="1">GOGOs</text>
          <text x="200" y="302" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="8" fill="#141414" letter-spacing="2">KARACHI</text>

          <!-- Shaved Parmesan & Herbs dusted all over -->
          <g fill="#FFFDE7" opacity="0.95">
            <!-- Parmesan flakes -->
            <polygon points="150,110 158,114 154,122 146,118"/>
            <polygon points="190,85 200,90 196,98 186,94"/>
            <polygon points="230,120 242,125 238,134 226,128"/>
            <polygon points="175,145 186,150 180,160 170,154"/>
            <polygon points="215,160 226,164 220,172 210,168"/>
            <polygon points="255,140 264,144 260,150 250,146"/>
          </g>
          <!-- Fresh Parsley Herb specks -->
          <g fill="#2E7D32">
            <circle cx="160" cy="95" r="2.5"/>
            <circle cx="195" cy="70" r="3"/>
            <circle cx="210" cy="110" r="2.5"/>
            <circle cx="240" cy="90" r="3"/>
            <circle cx="180" cy="130" r="2"/>
            <circle cx="225" cy="145" r="2.5"/>
            <circle cx="165" cy="165" r="3"/>
            <circle cx="205" cy="180" r="2.5"/>
          </g>
        </g>
      </svg>
    `),
  },
  {
    id: 'spanish-iced-latte',
    name: 'GOGOs Spanish Iced Latte',
    category: 'coffee',
    price: 720,
    tag: 'Signature Roast',
    description: 'Slow-extracted double ristretto shot made from 100% Ethiopian heirloom beans, layered over sweetened condensed milk, fresh whole milk, and slow-melting crystal clear ice cubes.',
    calories: '220 kcal',
    prepTime: '4-5 min',
    spiceLevel: 0,
    rating: 4.9,
    ingredients: ['Ethiopian Espresso', 'Condensed Milk', 'Farm Whole Milk', 'Artisan Ice'],
    image: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <rect width="400" height="400" fill="#FFFFFF"/>
        <defs>
          <linearGradient id="espressoLayer" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#2D150B"/>
            <stop offset="40%" stop-color="#4E2713"/>
            <stop offset="70%" stop-color="#8D532B"/>
            <stop offset="100%" stop-color="#C68953"/>
          </linearGradient>
          <linearGradient id="milkLayer" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#F7E6D0"/>
            <stop offset="40%" stop-color="#FFF9F0"/>
            <stop offset="100%" stop-color="#FFE0B2"/>
          </linearGradient>
          <filter id="glassShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#000000" flood-opacity="0.14"/>
          </filter>
        </defs>

        <g filter="url(#glassShadow)">
          <!-- Sleek Fluted Glass Body -->
          <!-- Glass background -->
          <path d="M 132,70 L 152,340 Q 200,350 248,340 L 268,70 Q 200,82 132,70 Z" fill="#F8F8F8"/>

          <!-- Bottom Condensed Milk Swirl -->
          <path d="M 149,305 L 152,340 Q 200,350 248,340 L 251,305 Q 200,318 149,305 Z" fill="#FFE082"/>

          <!-- Creamy Milk Middle Section -->
          <path d="M 142,190 L 149,305 Q 200,318 251,305 L 258,190 Q 200,205 142,190 Z" fill="url(#milkLayer)"/>

          <!-- Dark Rich Espresso Gradient Top Layer -->
          <path d="M 134,85 L 142,190 Q 200,205 258,190 L 266,85 Q 200,100 134,85 Z" fill="url(#espressoLayer)"/>

          <!-- Espresso Marble Swirl Drops descending into milk -->
          <path d="M 160,185 C 165,225 155,245 162,275 C 168,260 178,215 175,188 Z" fill="#8D532B" opacity="0.85"/>
          <path d="M 230,185 C 225,230 238,255 230,285 C 224,265 218,210 220,188 Z" fill="#6B3717" opacity="0.85"/>

          <!-- Crystal Clear Ice Cubes floating and submerged -->
          <!-- Ice 1 (top) -->
          <polygon points="170,95 215,88 230,120 180,128" fill="#FFFFFF" opacity="0.5" stroke="#FFFFFF" stroke-width="2"/>
          <polygon points="170,95 180,128 165,150 152,118" fill="#E0F7FA" opacity="0.4"/>
          <!-- Ice 2 (mid) -->
          <polygon points="160,150 205,142 225,175 178,185" fill="#FFFFFF" opacity="0.45" stroke="#FFFFFF" stroke-width="2"/>
          <polygon points="160,150 178,185 170,215 150,180" fill="#E0F7FA" opacity="0.35"/>
          <!-- Ice 3 (lower) -->
          <polygon points="185,210 225,205 240,235 200,245" fill="#FFFFFF" opacity="0.4" stroke="#FFFFFF" stroke-width="1.5"/>

          <!-- Glass Highlights & Specular reflections -->
          <path d="M 132,70 L 152,340" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" opacity="0.75"/>
          <path d="M 142,85 L 158,325" stroke="#FFFFFF" stroke-width="2" opacity="0.5"/>
          <path d="M 268,70 L 248,340" stroke="#FFFFFF" stroke-width="3" opacity="0.5"/>

          <!-- Glass Lip Rim -->
          <ellipse cx="200" cy="70" rx="68" ry="12" fill="none" stroke="#FFFFFF" stroke-width="4"/>
          <ellipse cx="200" cy="70" rx="68" ry="12" fill="none" stroke="#B0BEC5" stroke-width="1"/>

          <!-- Cold condensation droplets -->
          <circle cx="146" cy="140" r="2.5" fill="#FFFFFF" opacity="0.8"/>
          <circle cx="150" cy="180" r="3" fill="#FFFFFF" opacity="0.8"/>
          <circle cx="252" cy="160" r="2" fill="#FFFFFF" opacity="0.8"/>
          <circle cx="155" cy="240" r="3.5" fill="#FFFFFF" opacity="0.7"/>
          <circle cx="245" cy="220" r="2.5" fill="#FFFFFF" opacity="0.7"/>

          <!-- Sleek Eco Glass Straw tilted -->
          <line x1="225" y1="20" x2="165" y2="330" stroke="#263238" stroke-width="8" stroke-linecap="round" opacity="0.85"/>
          <line x1="223" y1="20" x2="163" y2="330" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
        </g>
      </svg>
    `),
  },
  {
    id: 'cold-brew-tonic',
    name: '24-Hr Nitro Cold Brew & Tonic',
    category: 'coffee',
    price: 680,
    tag: 'Refreshing',
    description: 'Slow cold-steeped Colombian micro-lot coffee for 24 hours, infused with effervescent botanical Indian tonic water, dehydrated candied blood orange wheel, and sprig of fresh rosemary.',
    calories: '85 kcal',
    prepTime: '3-4 min',
    spiceLevel: 0,
    rating: 4.8,
    ingredients: ['Colombian Micro-Lot', 'Artisan Tonic', 'Candied Citrus', 'Rosemary'],
    image: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <rect width="400" height="400" fill="#FFFFFF"/>
        <defs>
          <linearGradient id="coldBrewGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#1A0D08"/>
            <stop offset="60%" stop-color="#3E1E0E"/>
            <stop offset="100%" stop-color="#D78A48"/>
          </linearGradient>
          <filter id="tonicShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="16" stdDeviation="15" flood-color="#000000" flood-opacity="0.14"/>
          </filter>
        </defs>

        <g filter="url(#tonicShadow)">
          <!-- Glass -->
          <path d="M 136,75 L 154,340 Q 200,350 246,340 L 264,75 Q 200,85 136,75 Z" fill="#F8F8F8"/>
          <!-- Coffee body -->
          <path d="M 138,90 L 154,340 Q 200,350 246,340 L 262,90 Q 200,105 138,90 Z" fill="url(#coldBrewGlow)"/>

          <!-- Sparkling Tonic Bubbles -->
          <g fill="#FFFFFF" opacity="0.6">
            <circle cx="170" cy="280" r="3"/>
            <circle cx="190" cy="300" r="2"/>
            <circle cx="220" cy="270" r="3.5"/>
            <circle cx="180" cy="220" r="2.5"/>
            <circle cx="210" cy="190" r="3"/>
            <circle cx="165" cy="150" r="2"/>
            <circle cx="235" cy="140" r="2.5"/>
          </g>

          <!-- Dehydrated Orange Slice resting on rim -->
          <ellipse cx="230" cy="95" rx="35" ry="32" fill="#E65100" transform="rotate(25 230 95)"/>
          <ellipse cx="230" cy="95" rx="28" ry="25" fill="#FFA726" transform="rotate(25 230 95)"/>
          <circle cx="230" cy="95" r="4" fill="#FFE082"/>

          <!-- Crystal Ice -->
          <polygon points="175,110 210,105 220,135 180,140" fill="#FFFFFF" opacity="0.45" stroke="#FFFFFF"/>
          <polygon points="165,160 200,150 215,190 175,200" fill="#FFFFFF" opacity="0.4" stroke="#FFFFFF"/>

          <!-- Glass Rim & reflections -->
          <ellipse cx="200" cy="75" rx="64" ry="11" fill="none" stroke="#FFFFFF" stroke-width="4"/>
          <path d="M 138,85 L 154,330" stroke="#FFFFFF" stroke-width="4" opacity="0.7"/>
        </g>
      </svg>
    `),
  },
];

export const BRANCHES: BranchInfo[] = [
  {
    name: 'GOGOs Clifton Flagship',
    area: 'Block 4, Clifton, Karachi',
    address: 'Plot 12-C, 7th Commercial Street, near Boat Basin',
    hours: '12:00 PM – 3:30 AM (Daily)',
    status: 'Open Now',
    phone: '+92 21 3587 9090',
  },
  {
    name: 'GOGOs Seher Roastery',
    area: 'Phase 6, DHA, Karachi',
    address: 'Lane 4, Khayaban-e-Seher, Main Commercial',
    hours: '8:00 AM – 3:00 AM (Daily)',
    status: 'Open Now',
    phone: '+92 21 3534 8080',
  },
];
