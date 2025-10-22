// src/Context/CartContext.js
import React, { createContext, useState, useEffect } from 'react';

// Tạo Context để chia sẻ dữ liệu giỏ hàng
export const CartContext = createContext();

// Provider bọc toàn bộ ứng dụng để cung cấp dữ liệu giỏ hàng
export const CartProvider = ({ children }) => {
  // State lưu danh sách sản phẩm trong giỏ hàng
  // Khởi tạo từ localStorage nếu có, nếu không thì là mảng rỗng
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Mỗi khi cartItems thay đổi, lưu lại vào localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    setCartItems(prev => {
      const exist = prev.find(p => p.id === product.id);
      if (exist) {
        // Nếu đã có thì tăng số lượng
        return prev.map(p =>
          p.id === product.id ? { ...p, cart_quantity: p.cart_quantity + 1 } : p
        );
      } else {
        // Nếu chưa có thì thêm mới với số lượng = 1
        return [...prev, { ...product, cart_quantity: 1 }];
      }
    });
  };

  // Xoá sản phẩm khỏi giỏ
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(p => p.id !== id));
  };

  // Tăng số lượng sản phẩm
  const increaseQuantity = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, cart_quantity: item.cart_quantity + 1 } : item
      )
    );
  };

  // Giảm số lượng sản phẩm (nếu = 0 thì tự xoá)
  const decreaseQuantity = (id) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, cart_quantity: item.cart_quantity - 1 } : item
        )
        .filter(item => item.cart_quantity > 0)
    );
  };

  // Truyền tất cả hàm và dữ liệu xuống các component con
  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
};
