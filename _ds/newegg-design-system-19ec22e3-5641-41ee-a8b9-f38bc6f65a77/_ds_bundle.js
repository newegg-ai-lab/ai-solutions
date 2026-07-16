/* @ds-bundle: {"format":3,"namespace":"NeweggDesignSystem_19ec22","components":[],"sourceHashes":{"ui_kits/newegg-storefront/App.jsx":"d0a741e21351","ui_kits/newegg-storefront/CartDrawer.jsx":"3687f6109ff6","ui_kits/newegg-storefront/Header.jsx":"94a6df21b6ee","ui_kits/newegg-storefront/Hero.jsx":"62042f04abbb","ui_kits/newegg-storefront/ProductCard.jsx":"ca97137387e2","ui_kits/newegg-storefront/ProductDetail.jsx":"041861311289","ui_kits/newegg-storefront/data.jsx":"a6f951304ff1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NeweggDesignSystem_19ec22 = window.NeweggDesignSystem_19ec22 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/newegg-storefront/App.jsx
try { (() => {
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  className: "ne-footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "ne-footer-inner"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Customer Service"), /*#__PURE__*/React.createElement("a", null, "Help Center"), /*#__PURE__*/React.createElement("a", null, "Track an Order"), /*#__PURE__*/React.createElement("a", null, "Return an Item"), /*#__PURE__*/React.createElement("a", null, "Return Policy"), /*#__PURE__*/React.createElement("a", null, "Feedback")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "My Account"), /*#__PURE__*/React.createElement("a", null, "Sign In / Register"), /*#__PURE__*/React.createElement("a", null, "My Orders"), /*#__PURE__*/React.createElement("a", null, "Wish Lists"), /*#__PURE__*/React.createElement("a", null, "Newegg Card"), /*#__PURE__*/React.createElement("a", null, "Price Alerts")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Company Info"), /*#__PURE__*/React.createElement("a", null, "About Newegg"), /*#__PURE__*/React.createElement("a", null, "Hours & Locations"), /*#__PURE__*/React.createElement("a", null, "Careers"), /*#__PURE__*/React.createElement("a", null, "Investor Relations"), /*#__PURE__*/React.createElement("a", null, "Newegg Business")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Tools & Resources"), /*#__PURE__*/React.createElement("a", null, "PC Builder"), /*#__PURE__*/React.createElement("a", null, "Shell Shocker"), /*#__PURE__*/React.createElement("a", null, "Combo Savings"), /*#__PURE__*/React.createElement("a", null, "Gamer Community"), /*#__PURE__*/React.createElement("a", null, "Developer Portal"))), /*#__PURE__*/React.createElement("div", {
  className: "ne-footer-bottom"
}, "\xA9 2026 Newegg Inc. \xB7 NEUX 2026 Guideline recreation"));
const App = () => {
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [detail, setDetail] = React.useState(null);
  const [hearted, setHearted] = React.useState({});
  const [toast, setToast] = React.useState(null);
  const addToCart = (p, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === p.id);
      if (existing) return prev.map(i => i.id === p.id ? {
        ...i,
        qty: i.qty + qty
      } : i);
      return [...prev, {
        ...p,
        qty
      }];
    });
    setToast(`Added “${p.title.slice(0, 40)}…” to cart`);
    setTimeout(() => setToast(null), 2200);
  };
  const inc = id => setCart(p => p.map(i => i.id === id ? {
    ...i,
    qty: i.qty + 1
  } : i));
  const dec = id => setCart(p => p.map(i => i.id === id ? {
    ...i,
    qty: Math.max(1, i.qty - 1)
  } : i));
  const remove = id => setCart(p => p.filter(i => i.id !== id));
  const toggleHeart = id => setHearted(h => ({
    ...h,
    [id]: !h[id]
  }));
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "ne-app"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 14,
      right: 0,
      zIndex: 10,
      padding: '0 30px',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      pointerEvents: 'auto',
      cursor: 'pointer'
    },
    onClick: () => setCartOpen(true)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: '#FA9D28',
      color: '#000',
      fontSize: 11,
      fontWeight: 800,
      padding: '2px 8px',
      borderRadius: 10,
      minWidth: 18,
      textAlign: 'center'
    }
  }, cartCount))), /*#__PURE__*/React.createElement("main", {
    className: "ne-main"
  }, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(CategoryStrip, null), /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Today's Best Deals"), /*#__PURE__*/React.createElement("a", {
    className: "view-more"
  }, "View more \u203A")), /*#__PURE__*/React.createElement("div", {
    className: "product-grid"
  }, DEALS.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    product: p,
    onOpen: setDetail,
    onHeart: toggleHeart,
    hearted: hearted[p.id]
  })))), /*#__PURE__*/React.createElement(Footer, null), detail && /*#__PURE__*/React.createElement(ProductDetail, {
    product: detail,
    onClose: () => setDetail(null),
    onAdd: addToCart
  }), /*#__PURE__*/React.createElement(CartDrawer, {
    items: cart,
    open: cartOpen,
    onClose: () => setCartOpen(false),
    onInc: inc,
    onDec: dec,
    onRemove: remove
  }), toast && /*#__PURE__*/React.createElement("div", {
    className: "toast"
  }, toast));
};
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newegg-storefront/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newegg-storefront/CartDrawer.jsx
try { (() => {
const CartDrawer = ({
  items,
  open,
  onClose,
  onInc,
  onDec,
  onRemove
}) => {
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: `cart-backdrop ${open ? 'open' : ''}`,
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-drawer",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-head"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("em", null, "Your Cart"), " ", /*#__PURE__*/React.createElement("span", {
    className: "cart-count"
  }, "(", items.length, ")")), /*#__PURE__*/React.createElement("button", {
    className: "cart-close",
    onClick: onClose
  }, "\xD7")), items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "cart-empty"
  }, "Your cart is empty. Add something nice.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "cart-items"
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    className: "cart-item",
    key: it.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-img",
    style: {
      background: it.swatch
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cart-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-brand"
  }, it.brand), /*#__PURE__*/React.createElement("div", {
    className: "cart-title"
  }, it.title), /*#__PURE__*/React.createElement("div", {
    className: "cart-qty"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onDec(it.id)
  }, "\u2212"), /*#__PURE__*/React.createElement("span", null, it.qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => onInc(it.id)
  }, "+"), /*#__PURE__*/React.createElement("a", {
    className: "cart-remove",
    onClick: () => onRemove(it.id)
  }, "Remove"))), /*#__PURE__*/React.createElement("div", {
    className: "cart-price"
  }, "$", (it.price * it.qty).toFixed(2))))), /*#__PURE__*/React.createElement("div", {
    className: "cart-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-sub"
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("strong", null, "$", subtotal.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "cart-ship"
  }, "FREE Shipping on orders over $35.00"), /*#__PURE__*/React.createElement("button", {
    className: "ne-btn-primary ne-btn-wide"
  }, "Secure Checkout ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u203A")), /*#__PURE__*/React.createElement("button", {
    className: "ne-btn-outline ne-btn-wide"
  }, "View Cart")))));
};
window.CartDrawer = CartDrawer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newegg-storefront/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newegg-storefront/Header.jsx
try { (() => {
// node: ui_kits/newegg-storefront/Header.jsx
const Header = () => {
  const [q, setQ] = React.useState('');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ne-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ne-header-inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "ne-logo",
    href: "#"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ne-wordmark"
  }, "newegg")), /*#__PURE__*/React.createElement("div", {
    className: "ne-search"
  }, /*#__PURE__*/React.createElement("select", {
    className: "ne-search-cat"
  }, /*#__PURE__*/React.createElement("option", null, "All Categories"), /*#__PURE__*/React.createElement("option", null, "Components"), /*#__PURE__*/React.createElement("option", null, "Laptops"), /*#__PURE__*/React.createElement("option", null, "Digital Games")), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search for products, brands, and categories"
  }), /*#__PURE__*/React.createElement("button", {
    className: "ne-search-btn",
    "aria-label": "Search"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "6",
    stroke: "#fff",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 14l4 4",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ne-header-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "ne-header-link"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mini"
  }, "Hello,"), " ", /*#__PURE__*/React.createElement("span", {
    className: "strong"
  }, "Sign In / Register")), /*#__PURE__*/React.createElement("a", {
    className: "ne-header-link"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mini"
  }, "Returns"), " ", /*#__PURE__*/React.createElement("span", {
    className: "strong"
  }, "& Orders")), /*#__PURE__*/React.createElement("a", {
    className: "ne-header-link ne-cart"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4h3l2.5 11h10l2-8H6",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "19",
    r: "1.5",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "19",
    r: "1.5",
    fill: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    className: "strong"
  }, "Cart"))))), /*#__PURE__*/React.createElement("div", {
    className: "ne-subnav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ne-subnav-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ne-menu"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 5h16M2 10h16M2 15h16",
    stroke: "#00283A",
    strokeWidth: "2",
    strokeLinecap: "round"
  })), " Menu ", /*#__PURE__*/React.createElement("span", {
    className: "caret"
  }, "\u2304")), /*#__PURE__*/React.createElement("span", {
    className: "pipe"
  }), ['Shell Shocker', 'PC Builder', 'Best Sellers', 'Newegg Card', 'Gamer Community', 'Free Gift w/ AMD'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    className: "ne-subnav-link"
  }, l, l === 'PC Builder' && ' ⌄')), /*#__PURE__*/React.createElement("span", {
    className: "ne-subnav-right"
  }, /*#__PURE__*/React.createElement("em", null, "Newegg Business")))));
};
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newegg-storefront/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newegg-storefront/Hero.jsx
try { (() => {
const Hero = () => /*#__PURE__*/React.createElement("section", {
  className: "ne-hero"
}, /*#__PURE__*/React.createElement("div", {
  className: "ne-hero-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "ne-hero-card ne-hero-main"
}, /*#__PURE__*/React.createElement("div", {
  className: "ne-hero-tag"
}, "NEW ARRIVAL \xB7 LIMITED"), /*#__PURE__*/React.createElement("h2", {
  className: "ne-hero-h1"
}, /*#__PURE__*/React.createElement("em", null, "Next-gen GPUs"), /*#__PURE__*/React.createElement("br", null), "built for 4K."), /*#__PURE__*/React.createElement("p", {
  className: "ne-hero-p"
}, "Stream, play, and create on RTX 50 series \u2014 now shipping from Newegg."), /*#__PURE__*/React.createElement("button", {
  className: "ne-btn-primary"
}, "Shop GPUs ", /*#__PURE__*/React.createElement("span", {
  className: "arrow"
}, "\u203A")), /*#__PURE__*/React.createElement("div", {
  className: "ne-hero-visual"
}, /*#__PURE__*/React.createElement("div", {
  className: "ne-hero-chip"
}))), /*#__PURE__*/React.createElement("div", {
  className: "ne-hero-side"
}, /*#__PURE__*/React.createElement("div", {
  className: "ne-hero-card ne-hero-small ne-hero-builder"
}, /*#__PURE__*/React.createElement("div", {
  className: "kicker"
}, "POPULAR"), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("em", null, "PC Builder")), /*#__PURE__*/React.createElement("p", null, "Compatible parts, guaranteed."), /*#__PURE__*/React.createElement("a", {
  className: "ne-link"
}, "Start building \u203A")), /*#__PURE__*/React.createElement("div", {
  className: "ne-hero-card ne-hero-small ne-hero-shocker"
}, /*#__PURE__*/React.createElement("div", {
  className: "kicker"
}, "TODAY ONLY"), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("em", null, "Shell Shocker")), /*#__PURE__*/React.createElement("p", null, "Up to 60% off \u2014 every hour."), /*#__PURE__*/React.createElement("a", {
  className: "ne-link"
}, "See deals \u203A")))));
const CategoryStrip = () => /*#__PURE__*/React.createElement("section", {
  className: "ne-cat-strip"
}, CATEGORIES.map(c => /*#__PURE__*/React.createElement("a", {
  key: c.name,
  className: "ne-cat"
}, /*#__PURE__*/React.createElement("div", {
  className: "ne-cat-icon"
}, c.icon), /*#__PURE__*/React.createElement("div", {
  className: "ne-cat-name"
}, c.name))));
window.Hero = Hero;
window.CategoryStrip = CategoryStrip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newegg-storefront/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newegg-storefront/ProductCard.jsx
try { (() => {
// Product card component
const RatingEgg = ({
  fill = 'orange'
}) => {
  const path = "M 14.5 1.7 C 17.7 3.7 17.8 10.4 15 14.8 C 13.3 17.5 10.4 19.1 7.5 19 C 6.3 18.9 5.2 18.6 4.2 18 C 0.8 15.8 0 10.9 2.5 6.9 C 4.4 3.8 8.4 1.2 11.6 1 C 12.7 0.9 13.7 1.2 14.5 1.7 Z";
  if (fill === 'half') {
    return /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "16",
      viewBox: "0 0 18 20"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "heg"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "50%",
      stopColor: "#FFBB00"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "50%",
      stopColor: "#E8E8E8"
    }))), /*#__PURE__*/React.createElement("path", {
      d: path,
      fill: "url(#heg)",
      stroke: "#F29A36"
    }));
  }
  return /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "16",
    viewBox: "0 0 18 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: fill === 'orange' ? '#FFBB00' : '#E8E8E8',
    stroke: fill === 'orange' ? '#F29A36' : '#C4C4C4'
  }));
};
const Rating = ({
  value,
  count
}) => {
  const eggs = [];
  for (let i = 1; i <= 5; i++) {
    if (value >= i) eggs.push('orange');else if (value >= i - 0.5) eggs.push('half');else eggs.push('gray');
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "rating"
  }, eggs.map((f, i) => /*#__PURE__*/React.createElement(RatingEgg, {
    key: i,
    fill: f
  })), /*#__PURE__*/React.createElement("span", {
    className: "rating-count"
  }, "(", count, ")"));
};
const Badge = ({
  kind,
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: `ne-badge ne-badge-${kind}`
}, /*#__PURE__*/React.createElement("span", {
  className: "text"
}, children), /*#__PURE__*/React.createElement("span", {
  className: "tail"
}));
const ProductCard = ({
  product,
  onOpen,
  onHeart,
  hearted
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "product-card",
    onClick: () => onOpen(product)
  }, product.badge && /*#__PURE__*/React.createElement(Badge, {
    kind: product.badge.kind
  }, product.badge.text), /*#__PURE__*/React.createElement("button", {
    className: "heart-btn",
    onClick: e => {
      e.stopPropagation();
      onHeart(product.id);
    },
    "aria-label": "Save for later"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: hearted ? '#DB1600' : 'none',
    stroke: hearted ? '#DB1600' : '#6E6E6E',
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 14s-5-3.2-5-7.2C3 4.6 4.6 3 6.5 3 7.5 3 8 3.5 8 3.5S8.5 3 9.5 3C11.4 3 13 4.6 13 6.8 13 10.8 8 14 8 14z"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pc-img"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc-img-inner",
    style: {
      background: product.swatch
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pc-img-label"
  }, product.brand))), /*#__PURE__*/React.createElement("div", {
    className: "pc-brand"
  }, product.brand), /*#__PURE__*/React.createElement("div", {
    className: "pc-title"
  }, product.title), /*#__PURE__*/React.createElement(Rating, {
    value: product.rating,
    count: product.ratingCount
  }), /*#__PURE__*/React.createElement("div", {
    className: "pc-price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "now"
  }, "$", product.price.toFixed(2)), product.was && /*#__PURE__*/React.createElement("span", {
    className: "was"
  }, "$", product.was.toFixed(2))), product.ship && /*#__PURE__*/React.createElement("div", {
    className: "pc-ship"
  }, product.ship), product.promo && /*#__PURE__*/React.createElement("div", {
    className: "pc-promo"
  }, product.promo));
};
window.ProductCard = ProductCard;
window.RatingEgg = RatingEgg;
window.Rating = Rating;
window.Badge = Badge;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newegg-storefront/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newegg-storefront/ProductDetail.jsx
try { (() => {
const ProductDetail = ({
  product,
  onClose,
  onAdd
}) => {
  const [qty, setQty] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", {
    className: "pdp-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "pdp",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "pdp-close",
    onClick: onClose,
    "aria-label": "Close"
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    className: "pdp-crumbs"
  }, "Home \u203A ", product.brand, " \u203A ", /*#__PURE__*/React.createElement("em", null, product.title.split(' ').slice(0, 3).join(' '))), /*#__PURE__*/React.createElement("div", {
    className: "pdp-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pdp-gallery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pdp-main-img",
    style: {
      background: product.swatch
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pdp-gallery-label"
  }, product.brand)), /*#__PURE__*/React.createElement("div", {
    className: "pdp-thumbs"
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `pdp-thumb ${i === 0 ? 'active' : ''}`,
    style: {
      background: product.swatch,
      opacity: 0.8 - i * 0.15
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "pdp-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pdp-brand"
  }, product.brand), /*#__PURE__*/React.createElement("h1", {
    className: "pdp-title"
  }, product.title), /*#__PURE__*/React.createElement("div", {
    className: "pdp-rating-row"
  }, /*#__PURE__*/React.createElement(Rating, {
    value: product.rating,
    count: product.ratingCount
  }), /*#__PURE__*/React.createElement("a", {
    className: "ne-link"
  }, "Write a review")), /*#__PURE__*/React.createElement("div", {
    className: "pdp-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pdp-price-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pdp-price-now"
  }, "$", product.price.toFixed(2)), product.was && /*#__PURE__*/React.createElement("span", {
    className: "pdp-price-was"
  }, "$", product.was.toFixed(2)), product.was && /*#__PURE__*/React.createElement("span", {
    className: "pdp-save"
  }, "save $", (product.was - product.price).toFixed(2))), product.promo && /*#__PURE__*/React.createElement("div", {
    className: "pdp-promo"
  }, "\uD83C\uDFF7  ", product.promo), /*#__PURE__*/React.createElement("div", {
    className: "pdp-ship"
  }, "\uD83D\uDE9A  FREE Shipping \xB7 Get it by ", /*#__PURE__*/React.createElement("strong", null, "Tomorrow"), " to ZIP 91748"), /*#__PURE__*/React.createElement("div", {
    className: "pdp-stock"
  }, "\u25CF In stock \xB7 Ships from Newegg.com"), /*#__PURE__*/React.createElement("div", {
    className: "pdp-qty-row"
  }, /*#__PURE__*/React.createElement("label", null, "Qty"), /*#__PURE__*/React.createElement("div", {
    className: "pdp-qty"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(Math.max(1, qty - 1))
  }, "\u2212"), /*#__PURE__*/React.createElement("input", {
    value: qty,
    readOnly: true
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(qty + 1)
  }, "+"))), /*#__PURE__*/React.createElement("button", {
    className: "ne-btn-primary ne-btn-wide",
    onClick: () => {
      onAdd(product, qty);
      onClose();
    }
  }, "Add to Cart ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u203A")), /*#__PURE__*/React.createElement("button", {
    className: "ne-btn-outline ne-btn-wide"
  }, "Add to Wish List")), /*#__PURE__*/React.createElement("div", {
    className: "pdp-badges"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "Price Alert"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "Compare"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "Share"))))));
};
window.ProductDetail = ProductDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newegg-storefront/ProductDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newegg-storefront/data.jsx
try { (() => {
const DEALS = [{
  id: 'd1',
  brand: 'ASUS TUF Gaming',
  title: 'GeForce RTX 4070 SUPER OC Edition 12GB GDDR6X',
  rating: 4.5,
  ratingCount: 412,
  price: 559.99,
  was: 599.99,
  badge: {
    kind: 'save',
    text: 'save $40'
  },
  ship: 'FREE Shipping · In Stock',
  promo: '$25 off w/ promo code XYZZY',
  swatch: 'linear-gradient(135deg,#1a2238,#3b4864)'
}, {
  id: 'd2',
  brand: 'Samsung',
  title: 'Odyssey G7 32" QHD 240Hz Curved Gaming Monitor',
  rating: 4,
  ratingCount: 1204,
  price: 499.00,
  was: 749.99,
  badge: {
    kind: 'deal',
    text: 'HOT DEAL'
  },
  ship: 'FREE Shipping',
  swatch: 'linear-gradient(135deg,#0b0b0b,#1e1e1e)'
}, {
  id: 'd3',
  brand: 'AMD',
  title: 'Ryzen 7 9800X3D 8-Core 4.7GHz Socket AM5 Desktop CPU',
  rating: 5,
  ratingCount: 2880,
  price: 479.00,
  badge: {
    kind: 'combo',
    text: 'Free Gift'
  },
  ship: 'FREE Shipping · Ships from Newegg',
  swatch: 'linear-gradient(135deg,#6a0d12,#b02828)'
}, {
  id: 'd4',
  brand: 'Corsair',
  title: 'Vengeance 32GB (2x16GB) DDR5 6000 C30 RAM Kit',
  rating: 4.5,
  ratingCount: 640,
  price: 109.99,
  was: 159.99,
  badge: {
    kind: 'save',
    text: 'save $50'
  },
  ship: 'FREE Shipping',
  swatch: 'linear-gradient(135deg,#141414,#3b3b3b)'
}, {
  id: 'd5',
  brand: 'Western Digital',
  title: 'Black SN850X 2TB NVMe PCIe Gen4 M.2 SSD',
  rating: 5,
  ratingCount: 5124,
  price: 149.99,
  was: 199.99,
  badge: {
    kind: 'save',
    text: 'save $50'
  },
  ship: 'FREE Shipping · In Stock',
  swatch: 'linear-gradient(135deg,#0a0a0a,#262626)'
}, {
  id: 'd6',
  brand: 'LG',
  title: '27" UltraGear OLED 240Hz 0.03ms QHD Gaming Monitor',
  rating: 4.5,
  ratingCount: 318,
  price: 699.99,
  was: 899.99,
  badge: {
    kind: 'clear',
    text: 'Clearance'
  },
  ship: 'FREE Shipping',
  swatch: 'linear-gradient(135deg,#171717,#2a2a2a)'
}, {
  id: 'd7',
  brand: 'NZXT',
  title: 'H7 Flow ATX Mid-Tower Case — Black / White',
  rating: 4,
  ratingCount: 90,
  price: 109.99,
  badge: {
    kind: 'deal',
    text: 'HOT DEAL'
  },
  ship: 'FREE Shipping',
  swatch: 'linear-gradient(135deg,#ffffff,#e8e8e8)'
}, {
  id: 'd8',
  brand: 'Logitech G',
  title: 'G Pro X Superlight 2 Wireless Gaming Mouse',
  rating: 4.5,
  ratingCount: 970,
  price: 139.00,
  was: 159.99,
  badge: {
    kind: 'save',
    text: 'save $20'
  },
  ship: 'FREE Shipping',
  swatch: 'linear-gradient(135deg,#181818,#2e2e2e)'
}];
const CATEGORIES = [{
  name: 'Components',
  icon: '💾'
}, {
  name: 'Laptops',
  icon: '💻'
}, {
  name: 'Gaming',
  icon: '🎮'
}, {
  name: 'Monitors',
  icon: '🖥️'
}, {
  name: 'Storage',
  icon: '💽'
}, {
  name: 'Networking',
  icon: '📡'
}];
window.DEALS = DEALS;
window.CATEGORIES = CATEGORIES;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newegg-storefront/data.jsx", error: String((e && e.message) || e) }); }

})();
