import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, ArrowRight, CheckCircle2, Receipt, MapPin, Tag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [selectedZone, setSelectedZone] = useState<'clifton' | 'dha' | 'pechs' | 'pickup'>('clifton');
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoAppliedMsg, setPromoAppliedMsg] = useState('');
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  // Zone delivery fees in PKR
  const deliveryFees: Record<string, number> = {
    clifton: 150,
    dha: 150,
    pechs: 250,
    pickup: 0,
  };

  const subtotal = items.reduce((sum, cartItem) => {
    let itemPrice = cartItem.item.price;
    if (cartItem.selectedAddons?.some((a) => a.includes('Extra Smashed Patty'))) {
      itemPrice += 350;
    }
    if (cartItem.selectedAddons?.some((a) => a.includes('Truffle Mayo Dip'))) {
      itemPrice += 180;
    }
    return sum + itemPrice * cartItem.quantity;
  }, 0);

  const deliveryFee = items.length > 0 ? deliveryFees[selectedZone] : 0;
  const discountAmount = Math.round(subtotal * (discountPercent / 100));
  const finalTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'GOGOS10' || code === 'NIGHTOWL') {
      setDiscountPercent(10);
      setPromoAppliedMsg('🎉 10% Karachi Night Owl discount applied!');
    } else if (code === 'CRUNCH') {
      setDiscountPercent(15);
      setPromoAppliedMsg('🔥 15% Crunch discount applied!');
    } else {
      setPromoAppliedMsg('❌ Invalid code. Try "NIGHTOWL" or "CRUNCH"');
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;
    setIsOrderPlaced(true);
  };

  const handleReset = () => {
    setIsOrderPlaced(false);
    onClearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="w-screen max-w-md border-l-2 border-black bg-[#EBE7DF] shadow-2xl flex flex-col justify-between"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-black/15 p-5">
            <div className="flex items-center gap-2">
              <Receipt className="h-5 w-5 text-black" />
              <h2 className="font-['Syne'] text-xl font-black uppercase text-black">
                Your Order Bag
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-black bg-white text-black hover:bg-black hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5">
            {isOrderPlaced ? (
              /* Hand-drawn style Karachi receipt confirmation */
              <div className="rounded-3xl border-2 border-dashed border-black bg-white p-6 text-center shadow-[4px_4px_0px_#141414]">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-[#EBE7DF]">
                  <CheckCircle2 className="h-8 w-8 text-black" />
                </div>

                <span className="font-['Syne'] text-xs font-bold uppercase tracking-widest text-black/60">
                  Order Confirmed
                </span>
                <h3 className="font-['Syne'] text-2xl font-black uppercase text-black mt-1">
                  Firing Up The Griddle
                </h3>
                <p className="mt-1 text-xs text-black/70">
                  Estimated Delivery: 25-35 minutes across Karachi
                </p>

                <div className="my-6 border-t border-b border-dashed border-black/30 py-4 text-left font-mono text-xs space-y-2">
                  <div className="flex justify-between">
                    <span>Order No:</span>
                    <span className="font-bold">#GOGOS-{Math.floor(1000 + Math.random() * 9000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Customer:</span>
                    <span>{customerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phone:</span>
                    <span>{customerPhone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zone:</span>
                    <span className="uppercase">{selectedZone}</span>
                  </div>
                  <div className="flex justify-between font-bold border-t border-black/10 pt-2 text-sm font-['Syne']">
                    <span>Total (COD):</span>
                    <span>₨ {finalTotal.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full rounded-full border-2 border-black bg-black py-3 font-['Syne'] text-xs font-black uppercase tracking-wider text-white shadow-[2px_2px_0px_#141414] hover:bg-neutral-800"
                >
                  Start New Order
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center text-black/40 py-16">
                <Receipt className="h-12 w-12 stroke-[1.2] mb-3" />
                <p className="font-['Syne'] text-base font-bold uppercase text-black/60">
                  Your bag is currently empty
                </p>
                <p className="text-xs text-black/50 mt-1 max-w-xs">
                  Pick a double smash burger or an iced Spanish latte to get started.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Itemized List */}
                <div className="space-y-3">
                  {items.map((cartItem, idx) => {
                    let singleItemPrice = cartItem.item.price;
                    if (cartItem.selectedAddons?.some((a) => a.includes('Extra Smashed Patty'))) {
                      singleItemPrice += 350;
                    }
                    if (cartItem.selectedAddons?.some((a) => a.includes('Truffle Mayo Dip'))) {
                      singleItemPrice += 180;
                    }

                    return (
                      <div
                        key={`${cartItem.item.id}-${idx}`}
                        className="flex items-center justify-between rounded-2xl border border-black bg-white p-3.5 shadow-sm"
                      >
                        {/* Stark white image square */}
                        <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl border border-black/30 bg-white p-1">
                          <img
                            src={cartItem.item.image}
                            alt={cartItem.item.name}
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <div className="ml-3 flex-1">
                          <h4 className="font-['Syne'] text-xs font-bold uppercase text-black line-clamp-1">
                            {cartItem.item.name}
                          </h4>
                          <span className="font-['Syne'] text-xs font-bold text-black/70">
                            ₨ {singleItemPrice.toLocaleString()}
                          </span>

                          {cartItem.selectedAddons && cartItem.selectedAddons.length > 0 && (
                            <div className="text-[10px] text-black/50 mt-0.5">
                              {cartItem.selectedAddons.join(', ')}
                            </div>
                          )}
                        </div>

                        {/* Quantity Counter */}
                        <div className="flex items-center gap-1.5 ml-2">
                          <button
                            onClick={() => onUpdateQuantity(idx, cartItem.quantity - 1)}
                            className="flex h-6 w-6 items-center justify-center rounded-full border border-black bg-[#EBE7DF] hover:bg-black hover:text-white"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-5 text-center font-['Syne'] text-xs font-bold text-black">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(idx, cartItem.quantity + 1)}
                            className="flex h-6 w-6 items-center justify-center rounded-full border border-black bg-[#EBE7DF] hover:bg-black hover:text-white"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Delivery Zone Selector */}
                <div className="rounded-2xl border border-black bg-white/70 p-4">
                  <span className="font-['Syne'] text-xs font-bold uppercase tracking-wider text-black block mb-2">
                    Karachi Delivery Zone
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { id: 'clifton', label: 'Clifton (₨150)' },
                      { id: 'dha', label: 'DHA (₨150)' },
                      { id: 'pechs', label: 'PECHS (₨250)' },
                      { id: 'pickup', label: 'Self Pickup (Free)' },
                    ].map((zone) => (
                      <button
                        key={zone.id}
                        onClick={() => setSelectedZone(zone.id as any)}
                        className={`rounded-xl border border-black p-2 font-semibold transition-all ${
                          selectedZone === zone.id
                            ? 'bg-black text-white'
                            : 'bg-white text-black hover:bg-black/5'
                        }`}
                      >
                        {zone.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Promo Code Input */}
                <div className="rounded-2xl border border-black bg-white/70 p-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo: NIGHTOWL"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 rounded-xl border border-black bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-black placeholder:text-black/30 focus:outline-none focus:ring-1 focus:ring-black"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="rounded-xl border border-black bg-black px-3 py-1.5 font-['Syne'] text-xs font-bold uppercase text-white hover:bg-neutral-800"
                    >
                      Apply
                    </button>
                  </div>
                  {promoAppliedMsg && (
                    <p className="mt-1.5 text-[11px] font-semibold text-black/80">
                      {promoAppliedMsg}
                    </p>
                  )}
                </div>

                {/* Checkout Customer Details */}
                <form onSubmit={handlePlaceOrder} id="checkout-form" className="space-y-3">
                  <span className="font-['Syne'] text-xs font-bold uppercase tracking-wider text-black block">
                    Contact & Delivery Address
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full rounded-xl border border-black bg-white px-3 py-2 text-xs font-medium text-black placeholder:text-black/40 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="0300-1234567 (Karachi Mobile)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full rounded-xl border border-black bg-white px-3 py-2 text-xs font-medium text-black placeholder:text-black/40 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                  {selectedZone !== 'pickup' && (
                    <input
                      type="text"
                      required
                      placeholder="House / Apt / Street, Karachi"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="w-full rounded-xl border border-black bg-white px-3 py-2 text-xs font-medium text-black placeholder:text-black/40 focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  )}
                </form>
              </div>
            )}
          </div>

          {/* Footer Subtotal & Action */}
          {!isOrderPlaced && items.length > 0 && (
            <div className="border-t border-black/15 bg-white/60 p-5 backdrop-blur-sm">
              <div className="space-y-1.5 mb-4 text-xs font-['Plus_Jakarta_Sans'] text-black/75">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-bold text-black tabular-nums">₨ {subtotal.toLocaleString()}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-800 font-bold">
                    <span>Discount ({discountPercent}%):</span>
                    <span className="tabular-nums">-₨ {discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Karachi Delivery Fee:</span>
                  <span className="font-bold text-black tabular-nums">
                    {deliveryFee === 0 ? 'FREE (Pickup)' : `₨ ${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between border-t border-black/15 pt-2 text-base font-['Syne'] font-black text-black">
                  <span>Total Amount (COD):</span>
                  <span className="tabular-nums">₨ {finalTotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                form="checkout-form"
                className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-black bg-black py-3.5 font-['Syne'] text-xs font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_#141414] hover:bg-neutral-800 active:translate-x-[2px] active:translate-y-[2px]"
              >
                <span>Confirm Karachi Order</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
