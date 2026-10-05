/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { SketchHeader } from './components/SketchHeader';
import { HeroSection } from './components/HeroSection';
import { DoodleCanvas } from './components/DoodleCanvas';
import { MenuSection } from './components/MenuSection';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationsSection } from './components/LocationsSection';
import { SketchFooter } from './components/SketchFooter';
import { CartDrawer } from './components/CartDrawer';
import { MenuItem, CartItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDoodleOpen, setIsDoodleOpen] = useState(false);

  // Add item to cart
  const handleAddToCart = (item: MenuItem, addons?: string[]) => {
    setCart((prev) => {
      // Find if item with same addons already exists
      const existingIdx = prev.findIndex(
        (ci) =>
          ci.item.id === item.id &&
          JSON.stringify(ci.selectedAddons || []) === JSON.stringify(addons || [])
      );

      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += 1;
        return next;
      }
      return [...prev, { item, quantity: 1, selectedAddons: addons }];
    });
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      setCart((prev) => prev.filter((_, i) => i !== index));
    } else {
      setCart((prev) => {
        const next = [...prev];
        next[index].quantity = newQty;
        return next;
      });
    }
  };

  const handleClearCart = () => setCart([]);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Quick lookup of how many of each item are in cart
  const cartItemIds = cart.reduce<Record<string, number>>((acc, curr) => {
    acc[curr.item.id] = (acc[curr.item.id] || 0) + curr.quantity;
    return acc;
  }, {});

  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'menu') {
      document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'craft') {
      document.getElementById('craft-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'locations' || id === 'nights') {
      document.getElementById('locations-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#EBE7DF] text-[#141414] sketch-grain selection:bg-black selection:text-white">
      {/* Step 2: Custom SVG Pencil Cursor */}
      <CustomCursor isDoodleActive={isDoodleOpen} />

      {/* Top Navigation Bar with Pill Contract */}
      <SketchHeader
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onToggleDoodle={() => setIsDoodleOpen(!isDoodleOpen)}
        isDoodleOpen={isDoodleOpen}
        onNavigate={scrollToSection}
      />

      <main>
        {/* Interactive Karachi Doodle Pad (Toggled or inline) */}
        {isDoodleOpen && (
          <div className="mx-auto max-w-5xl px-4 pt-4 sm:px-6">
            <DoodleCanvas isOpen={isDoodleOpen} onClose={() => setIsDoodleOpen(false)} />
          </div>
        )}

        {/* Step 1 & Step 3: Minimalist Sketch Hero matching reference */}
        <HeroSection
          onOrderClick={() => {
            scrollToSection('menu');
          }}
          onExploreMenu={() => scrollToSection('menu')}
        />

        {/* Step 4: Product Showcase with Stark Solid White Contrast */}
        <MenuSection onAddToCart={handleAddToCart} cartItemIds={cartItemIds} />

        {/* The Crunch Science & Food Blueprint */}
        <CraftsmanshipSection />

        {/* Customer Proof & Karachi Night Owl Quotes */}
        <ReviewsSection />

        {/* Karachi Outposts: Clifton & DHA Phase 6 */}
        <LocationsSection />
      </main>

      {/* Minimalist Sketch Footer */}
      <SketchFooter
        onBackToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onOpenDoodle={() => {
          setIsDoodleOpen(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Interactive Cart & Karachi Delivery Checkout Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
