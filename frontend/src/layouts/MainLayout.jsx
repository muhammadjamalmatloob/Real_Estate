import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import BookVisitModal from '../components/common/BookVisitModal';
import FavoritesModal from '../components/common/FavoritesModal';
import PropertyCompareModal from '../components/properties/PropertyCompareModal';
import { fetchProperties } from '../api/propertiesApi';
import { CheckCircle2 } from 'lucide-react';

export default function MainLayout() {
  const [favorites, setFavorites] = useState(['pc-101']);
  const [compareList, setCompareList] = useState(['pc-101', 'pc-102']);
  const [currency, setCurrency] = useState('PKR');
  
  const [allProperties, setAllProperties] = useState([]);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState(false);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    fetchProperties().then((data) => setAllProperties(data));
  }, []);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleToggleFavorite = (propertyId) => {
    setFavorites((prev) => {
      if (prev.includes(propertyId)) {
        showToast('Removed from saved properties');
        return prev.filter((id) => id !== propertyId);
      } else {
        showToast('Property saved to your wishlist!');
        return [...prev, propertyId];
      }
    });
  };

  const handleToggleCompare = (propertyId) => {
    setCompareList((prev) => {
      if (prev.includes(propertyId)) {
        showToast('Removed from comparison');
        return prev.filter((id) => id !== propertyId);
      }
      if (prev.length >= 3) {
        showToast('You can compare a maximum of 3 properties at once.');
        return prev;
      }
      showToast('Added to comparison tray!');
      return [...prev, propertyId];
    });
  };

  const handleRemoveFromCompare = (propertyId) => {
    setCompareList((prev) => prev.filter((id) => id !== propertyId));
    showToast('Removed from comparison');
  };

  const handleClearCompare = () => {
    setCompareList([]);
    showToast('Comparison cleared');
  };

  const favoriteProperties = allProperties.filter((p) => favorites.includes(p.id));
  const compareProperties = allProperties.filter((p) => compareList.includes(p.id));

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900 text-white text-xs font-bold shadow-2xl border border-slate-700 animate-in slide-in-from-bottom-5 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        favoritesCount={favorites.length}
        onOpenFavorites={() => setIsFavoritesModalOpen(true)}
        compareCount={compareList.length}
        onOpenCompare={() => setIsCompareModalOpen(true)}
        currency={currency}
        onChangeCurrency={setCurrency}
        onBookVisit={() => setIsVisitModalOpen(true)}
      />

      {/* Page Route Outlet */}
      <main className="flex-grow">
        <Outlet
          context={{
            favorites,
            onToggleFavorite: handleToggleFavorite,
            compareList,
            onToggleCompare: handleToggleCompare,
            currency,
            onOpenVisitModal: () => setIsVisitModalOpen(true),
            showToast
          }}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Book Site Visit Modal */}
      <BookVisitModal
        isOpen={isVisitModalOpen}
        onClose={() => setIsVisitModalOpen(false)}
      />

      {/* Favorites Modal */}
      <FavoritesModal
        isOpen={isFavoritesModalOpen}
        onClose={() => setIsFavoritesModalOpen(false)}
        favoriteProperties={favoriteProperties}
        onRemoveFavorite={handleToggleFavorite}
        onViewProperty={() => setIsFavoritesModalOpen(false)}
      />

      {/* Side-by-Side Property Comparison Modal */}
      <PropertyCompareModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        compareProperties={compareProperties}
        onRemoveFromCompare={handleRemoveFromCompare}
        onClearCompare={handleClearCompare}
        currency={currency}
      />

    </div>
  );
}
