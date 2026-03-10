document.addEventListener('DOMContentLoaded', () => {
    console.log('App initialized');

    // ==========================================
    // 0. BAŞLANGIÇ VERİLERİ (SEED DATA)
    // ==========================================
    const initialAlaricaMenu = [
        { name: "Stick Waffle", description: "Customizable stick waffle", price: 260.0, category: "Kendin Seç Waffle", image: "" },
        { name: "Bowl Waffle", description: "Customizable bowl waffle", price: 520.0, category: "Kendin Seç Waffle", image: "" },
        { name: "Klasik Waffle", description: "Classic customizable waffle", price: 495.0, category: "Kendin Seç Waffle", image: "" },
        { name: "Classic Croissant", description: "Freshly baked classic croissant", price: 250.0, category: "Croissant", image: "" },
        { name: "Belgian Choco Croissant", description: "Croissant with Belgian chocolate", price: 475.0, category: "Croissant", image: "" },
        { name: "Dark Choco Croissant", description: "Croissant with dark chocolate", price: 460.0, category: "Croissant", image: "" },
        { name: "White Dream Croissant", description: "Croissant with white chocolate", price: 460.0, category: "Croissant", image: "" },
        { name: "Dubai Stick", description: "Signature sweet stick dessert", price: 280.0, category: "İmza Tatlılar", image: "" },
        { name: "Pink Pearl Bowl", description: "Signature dessert bowl", price: 500.0, category: "İmza Tatlılar", image: "" },
        { name: "Crunch Bowl", description: "Signature crunchy dessert bowl", price: 550.0, category: "İmza Tatlılar", image: "" },
        { name: "Choco Brownie Waffle", description: "Signature chocolate brownie waffle", price: 530.0, category: "İmza Tatlılar", image: "" },
        { name: "Strawberry Cream Croissant", description: "Signature strawberry cream croissant", price: 475.0, category: "İmza Tatlılar", image: "" },
        { name: "Pistachio Croissant", description: "Signature pistachio croissant", price: 485.0, category: "İmza Tatlılar", image: "" },
        { name: "Golden Biscuit Croissant", description: "Signature golden biscuit croissant", price: 475.0, category: "İmza Tatlılar", image: "" },
        { name: "Hot Matcha Latte", description: "Premium hot matcha beverage", price: 240.0, category: "Matcha", image: "" },
        { name: "Iced Matcha Latte", description: "Cold matcha beverage", price: 260.0, category: "Matcha", image: "" },
        { name: "Iced Strawberry Matcha", description: "Cold strawberry matcha", price: 280.0, category: "Matcha", image: "" },
        { name: "Klasik Türk Çayı (Orta)", description: "Medium classic Turkish tea", price: 90.0, category: "Çaylar", image: "" },
        { name: "Bergamot Aromalı Türk Çayı (Orta)", description: "Medium bergamot flavored Turkish tea", price: 100.0, category: "Çaylar", image: "" },
        { name: "Kış Çayı", description: "Winter tea blend", price: 115.0, category: "Çaylar", image: "" },
        { name: "Yaseminli Yeşil Çay", description: "Jasmine green tea", price: 115.0, category: "Çaylar", image: "" },
        { name: "Suffle", description: "Warm chocolate souffle", price: 270.0, category: "Tatlılar", image: "" },
        { name: "San Sebastian Cheesecake", description: "Basque burnt cheesecake", price: 270.0, category: "Tatlılar", image: "" },
        { name: "Brownie", description: "Rich chocolate brownie", price: 280.0, category: "Tatlılar", image: "" },
        { name: "Espresso (Büyük)", description: "Large double shot espresso", price: 120.0, category: "Hot Coffee", image: "" },
        { name: "Americano (Büyük)", description: "Large hot espresso with water", price: 175.0, category: "Hot Coffee", image: "" },
        { name: "Latte (Büyük)", description: "Large espresso with steamed milk", price: 190.0, category: "Hot Coffee", image: "" },
        { name: "Cappuccino (Büyük)", description: "Large espresso with milk and foam", price: 190.0, category: "Hot Coffee", image: "" },
        { name: "Cortado", description: "Espresso cut with warm milk", price: 160.0, category: "Hot Coffee", image: "" },
        { name: "White Chocolate Mocha Latte (Büyük)", description: "Large white chocolate mocha", price: 240.0, category: "Hot Coffee", image: "" },
        { name: "Caramel Latte (Büyük)", description: "Large caramel flavored latte", price: 240.0, category: "Hot Coffee", image: "" },
        { name: "Filtre Kahve (Büyük)", description: "Large brewed filter coffee", price: 210.0, category: "Sıcaklar", image: "" },
        { name: "Türk Kahvesi (Küçük)", description: "Small traditional Turkish coffee", price: 110.0, category: "Sıcaklar", image: "" },
        { name: "Chai Tea Latte (Büyük)", description: "Large spiced tea with steamed milk", price: 220.0, category: "Sıcaklar", image: "" },
        { name: "Salep (Büyük)", description: "Large traditional hot winter drink", price: 220.0, category: "Sıcaklar", image: "" },
        { name: "Belçika Sıcak Çikolata (Büyük)", description: "Large rich Belgian hot chocolate", price: 300.0, category: "Sıcaklar", image: "" },
        { name: "Klasik Limonata", description: "Classic cold lemonade", price: 185.0, category: "Soğuklar", image: "" },
        { name: "Yeşil Elmalı Frozen", description: "Green apple frozen blended drink", price: 230.0, category: "Soğuklar", image: "" },
        { name: "Cool Lime", description: "Refreshing cool lime drink", price: 210.0, category: "Soğuklar", image: "" },
        { name: "Iced Americano", description: "Chilled espresso and water over ice", price: 170.0, category: "Iced Coffee", image: "" },
        { name: "Iced Latte", description: "Chilled espresso and milk over ice", price: 190.0, category: "Iced Coffee", image: "" },
        { name: "Iced White Mocha Latte", description: "Iced white chocolate mocha", price: 240.0, category: "Iced Coffee", image: "" },
        { name: "Iced Caramel Latte", description: "Iced caramel latte", price: 230.0, category: "Iced Coffee", image: "" }
    ];

    // Menü kontrolü: Eğer LocalStorage tamamen boşsa, bu ürünleri varsayılan olarak ekle.
    let menuItems = JSON.parse(localStorage.getItem('coffeeShopMenu'));
    if (!menuItems || menuItems.length === 0) {
        // Ürünlere benzersiz birer ID atayıp kaydedelim ki admin silebilsin/düzenleyebilsin
        menuItems = initialAlaricaMenu.map((item, index) => ({
            ...item,
            id: 'auto_' + Date.now() + '_' + index
        }));
        localStorage.setItem('coffeeShopMenu', JSON.stringify(menuItems));
    }

    // --- ORTAK DURUM (STATE) DEĞİŞKENLERİ ---
    let currentEditingId = null;
    let currentImageBase64 = '';

    // --- ADMIN LİNKİNİ GİZLE/GÖSTER (Tüm sayfalar için) ---
    const adminLinks = document.querySelectorAll('.admin-link');
    if (sessionStorage.getItem('isAdminLoggedIn') === 'true') {
        adminLinks.forEach(link => {
            link.style.display = 'inline-block';
        });
    }

    // ==========================================
    // 1. ADMIN SAYFASI İŞLEMLERİ (admin.html)
    // ==========================================
    const loginDiv = document.getElementById('adminLogin');
    const panelDiv = document.getElementById('adminPanel');
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
    const logoutBtn = document.getElementById('logoutBtn');
    const menuForm = document.getElementById('menuForm');
    const itemsList = document.getElementById('itemsList');
    
    if (loginDiv && panelDiv && sessionStorage.getItem('isAdminLoggedIn') === 'true') {
        showPanel();
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const password = document.getElementById('password').value;
            
            if (password === 'admin123') { 
                sessionStorage.setItem('isAdminLoggedIn', 'true');
                showPanel();
                loginError.style.display = 'none';
                loginForm.reset();
                adminLinks.forEach(link => link.style.display = 'inline-block');
            } else {
                loginError.textContent = 'Invalid password! Please try again.';
                loginError.style.display = 'block';
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('isAdminLoggedIn');
            panelDiv.style.display = 'none';
            loginDiv.style.display = 'flex';
            adminLinks.forEach(link => link.style.display = 'none');
        });
    }

    function showPanel() {
        if(loginDiv) loginDiv.style.display = 'none';
        if(panelDiv) panelDiv.style.display = 'block';
        renderAdminItems();
    }

    // Resim Yükleme (Base64)
    const imageInput = document.getElementById('image');
    const imagePreview = document.getElementById('imagePreview');
    const previewImage = document.getElementById('previewImage');

    if (imageInput) {
        imageInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                if (file.size > 5 * 1024 * 1024) {
                    alert('File size must be less than 5MB.');
                    imageInput.value = '';
                    return;
                }
                const reader = new FileReader();
                reader.onload = function(event) {
                    currentImageBase64 = event.target.result;
                    previewImage.src = currentImageBase64;
                    imagePreview.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Ürün Ekleme/Güncelleme
    const formTitle = document.getElementById('formTitle');
    const cancelBtn = document.getElementById('cancelBtn');

    if (menuForm) {
        menuForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const newItem = {
                id: currentEditingId || Date.now().toString(),
                name: document.getElementById('name').value,
                description: document.getElementById('description').value,
                price: parseFloat(document.getElementById('price').value),
                category: document.getElementById('category').value,
                image: currentImageBase64
            };

            if (currentEditingId) {
                const index = menuItems.findIndex(item => item.id === currentEditingId);
                if (index !== -1) menuItems[index] = newItem;
            } else {
                menuItems.push(newItem);
            }

            localStorage.setItem('coffeeShopMenu', JSON.stringify(menuItems));
            resetForm();
            renderAdminItems();
        });
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', resetForm);
    }

    function resetForm() {
        if(!menuForm) return;
        menuForm.reset();
        currentEditingId = null;
        currentImageBase64 = '';
        formTitle.textContent = 'Add New Item';
        menuForm.querySelector('button[type="submit"]').textContent = 'Add Item';
        cancelBtn.style.display = 'none';
        imagePreview.style.display = 'none';
        previewImage.src = '';
    }

    function renderAdminItems() {
        const itemCount = document.getElementById('itemCount');
        if (!itemsList || !itemCount) return;

        itemCount.textContent = menuItems.length;

        if (menuItems.length === 0) {
            itemsList.innerHTML = '<p class="no-items" style="text-align:center; padding: 20px; color: gray;">No items yet. Add your first item!</p>';
            return;
        }

        // Listeyi en son eklenen en üstte görünecek şekilde tersine çeviriyoruz (isteğe bağlı)
        const reversedItems = [...menuItems].reverse();

        itemsList.innerHTML = reversedItems.map(item => `
            <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 15px; margin-bottom: 15px; display: flex; gap: 15px; background: white; align-items: center;">
                ${item.image ? `<img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;">` : `<div style="width: 80px; height: 80px; background: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #9ca3af; text-align:center; font-size:12px;">No Image</div>`}
                
                <div style="flex: 1;">
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <h3 style="margin: 0 0 5px 0; font-size: 1.1rem; color: #374151;">${item.name}</h3>
                        <span style="font-weight: bold; color: #8b4513;">${item.price.toFixed(2)} TL</span>
                    </div>
                    <p style="margin: 0 0 5px 0; font-size: 0.9rem; color: #6b7280;">${item.description}</p>
                    <span style="background: #fdf6b2; color: #723b13; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem;">${item.category}</span>
                </div>

                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <button onclick="editItem('${item.id}')" style="background: #3b82f6; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">Edit</button>
                    <button onclick="deleteItem('${item.id}')" style="background: #ef4444; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">Delete</button>
                </div>
            </div>
        `).join('');
    }

    // Global Düzenleme / Silme Fonksiyonları
    window.editItem = function(id) {
        const item = menuItems.find(i => i.id === id);
        if (!item) return;

        document.getElementById('name').value = item.name;
        document.getElementById('description').value = item.description;
        document.getElementById('price').value = item.price;
        document.getElementById('category').value = item.category;
        
        if (item.image) {
            currentImageBase64 = item.image;
            previewImage.src = item.image;
            imagePreview.style.display = 'block';
        } else {
            currentImageBase64 = '';
            imagePreview.style.display = 'none';
        }

        currentEditingId = item.id;
        formTitle.textContent = 'Edit Item';
        menuForm.querySelector('button[type="submit"]').textContent = 'Update Item';
        cancelBtn.style.display = 'inline-block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.deleteItem = function(id) {
        if (confirm('Are you sure you want to delete this item?')) {
            menuItems = menuItems.filter(item => item.id !== id);
            localStorage.setItem('coffeeShopMenu', JSON.stringify(menuItems));
            if (currentEditingId === id) resetForm();
            renderAdminItems();
        }
    };


   // ==========================================
        // 2. MÜŞTERİ MENÜ SAYFASI İŞLEMLERİ (menu.html)
        // ==========================================
        const menuGrid = document.getElementById('menuGrid');
        const categoryFilter = document.getElementById('categoryFilter');

        if (menuGrid) {
            let currentFilter = 'all';

            function renderCategories() {
                if (!categoryFilter) return;
                const categories = [...new Set(menuItems.map(item => item.category))];

                // --- GÜNCELLEME BAŞLANGICI ---
                // Tüm butonlar için ortak font ve padding stilleri tanımlayalım
                const commonBtnStyles = `margin-right: 10px; margin-bottom: 10px; padding: 8px 16px; cursor: pointer; border-radius: 20px; font-size: 0.95rem; font-weight: 500; font-family: sans-serif;`;

                // Önce 'Tümü' butonunu ekle (Başlangıçta aktif ve dolu arka planlı)
                let filterHTML = `<button class="filter-btn active" data-category="all" style="${commonBtnStyles} border: 1px solid #8b4513; background: #8b4513; color: white;">Tümü</button>`;
                
                // Sonra diğer kategorileri ekle (Şeffaf arka planlı)
                categories.forEach(cat => {
                    if(cat) {
                        filterHTML += `<button class="filter-btn" data-category="${cat}" style="${commonBtnStyles} border: 1px solid #8b4513; background: transparent; color: #8b4513;">${cat}</button>`;
                    }
                });
                // --- GÜNCELLEME BİTİŞİ ---
                
                categoryFilter.innerHTML = filterHTML;

                const filterBtns = categoryFilter.querySelectorAll('.filter-btn');
                filterBtns.forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        // --- TIKLAMA OLAYINDAKİ GÜNCELLEME ---
                        // Tüm butonlardan aktif sınıfını kaldır ve pasif stilleri açıkça uygula
                        filterBtns.forEach(b => {
                            b.classList.remove('active');
                            b.style.background = 'transparent';
                            b.style.color = '#8b4513';
                            // Font özelliklerini tutarlı kılmak için burada da belirtmeliyiz
                            b.style.fontSize = '0.95rem';
                            b.style.fontWeight = '500';
                            b.style.fontFamily = 'sans-serif';
                        });
                        
                        // Tıklanan butona aktif sınıfını ekle ve aktif stilleri açıkça uygula
                        e.target.classList.add('active');
                        e.target.style.background = '#8b4513';
                        e.target.style.color = 'white';
                        // Font özelliklerini tutarlı kılmak için burada da belirtmeliyiz
                        e.target.style.fontSize = '0.95rem';
                        e.target.style.fontWeight = '500';
                        e.target.style.fontFamily = 'sans-serif';
                        
                        currentFilter = e.target.getAttribute('data-category');
                        renderClientMenu();
                    });
                });
            }

            // Müşteri Menüsünü Ekrana Çizme (Bu fonksiyon aynı kalacak)
            function renderClientMenu() {
                if (menuItems.length === 0) {
                    menuGrid.innerHTML = '<p style="text-align:center; width: 100%; color: gray; grid-column: 1 / -1; padding: 40px;">Our menu is currently empty. Please check back later!</p>';
                    return;
                }

                const filteredItems = currentFilter === 'all' 
                    ? menuItems 
                    : menuItems.filter(item => item.category === currentFilter);

                if (filteredItems.length === 0) {
                    menuGrid.innerHTML = '<p style="text-align:center; width: 100%; color: gray; grid-column: 1 / -1; padding: 40px;">No items found in this category.</p>';
                    return;
                }

                menuGrid.innerHTML = filteredItems.map(item => `
                    <div class="menu-item-card" style="border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; background: white; box-shadow: 0 4px 6px rgba(0,0,0,0.05); transition: transform 0.2s;">
                        ${item.image ? `<img src="${item.image}" alt="${item.name}" style="width: 100%; height: 200px; object-fit: cover;">` : `<div style="width: 100%; height: 200px; background: #f3f4f6; display: flex; align-items: center; justify-content: center; color: #9ca3af;">No Image</div>`}
                        <div style="padding: 20px;">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                                <h3 style="margin: 0; font-size: 1.25rem; color: #374151;">${item.name}</h3>
                                <span style="font-weight: bold; color: #8b4513; font-size: 1.2rem;">${item.price.toFixed(2)} TL</span>
                            </div>
                            <p style="margin: 0 0 15px 0; font-size: 0.95rem; color: #6b7280; line-height: 1.5;">${item.description}</p>
                            <span style="background: #fdf6b2; color: #723b13; padding: 4px 10px; border-radius: 6px; font-size: 0.85rem; font-weight: 500;">${item.category}</span>
                        </div>
                    </div>
                `).join('');
                
                menuGrid.style.display = 'grid';
                menuGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
                menuGrid.style.gap = '25px';
                menuGrid.style.marginTop = '30px';
            }

            renderCategories();
            renderClientMenu();
        }
        // ==========================================
    // 3. YUKARI ÇIK BUTONU (SCROLL TO TOP)
    // ==========================================
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scrollToTopBtn';
    scrollTopBtn.innerHTML = '↑'; // Yukarı ok sembolü
    document.body.appendChild(scrollTopBtn);

    // Ekranda ne kadar aşağı inildiğini kontrol et
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'flex'; // 300px aşağı inince göster
        } else {
            scrollTopBtn.style.display = 'none'; // Üstteyken gizle
        }
    });
// Tıklanınca özel animasyon ile yavaşça yukarı kaydır
    scrollTopBtn.addEventListener('click', () => {
        // Kayma süresi (Milisaniye cinsinden. 1000 = 1 saniye. İstediğin gibi artırıp azaltabilirsin)
        const duration = 800; 
        const startPosition = window.scrollY;
        const startTime = performance.now();

        // İvmelenme formülü (Önce yavaş hızlanır, ortada hızlanır, tepeye yaklaşırken yavaşlar)
        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        function animation(currentTime) {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easeProgress = easeInOutQuad(progress);

            window.scrollTo(0, startPosition * (1 - easeProgress));

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    });
    });