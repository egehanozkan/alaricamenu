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

    // --- ORTAK DURUM (STATE) DEĞİŞKENLERİ ---
    let menuItems = [];
    let categories = [];
    let currentEditingId = null;
    let currentEditingCategoryId = null;
    let currentImageFile = null;       // Yüklenecek dosya
    let currentImagePreviewUrl = '';   // Önizleme için URL (yeni dosya veya mevcut URL)

    // Firestore referansları
    const menuCollection = db.collection('menuItems');
    const categoriesCollection = db.collection('categories');

    // --- ADMIN LİNKİNİ GİZLE/GÖSTER (Tüm sayfalar için) ---
    const adminLinks = document.querySelectorAll('.admin-link');

    // Firebase Auth durumunu dinle — tüm sayfalarda çalışır
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            adminLinks.forEach(link => link.style.display = 'inline-block');
            // Admin giriş yaptığında Firestore boşsa seed data'yı yükle
            await seedCategoriesIfEmpty();
            await seedFirestoreIfEmpty();
            // Veriyi Firestore'dan tekrar yükle (seed sonrası güncel veri)
            await loadCategories();
            await loadMenuItems();
            // Admin sayfasındaysak paneli göster
            if (loginDiv && panelDiv) {
                showPanel();
            }
        } else {
            adminLinks.forEach(link => link.style.display = 'none');
            // Admin sayfasındaysak login'e dön
            if (loginDiv && panelDiv) {
                panelDiv.style.display = 'none';
                loginDiv.style.display = 'flex';
            }
        }
    });

    // ==========================================
    // KATEGORİ YÖNETİMİ
    // ==========================================
    const initialCategories = [
        { name: "Kendin Seç Waffle", order: 0 },
        { name: "Croissant", order: 1 },
        { name: "İmza Tatlılar", order: 2 },
        { name: "Tatlılar", order: 3 },
        { name: "Matcha", order: 4 },
        { name: "Çaylar", order: 5 },
        { name: "Hot Coffee", order: 6 },
        { name: "Iced Coffee", order: 7 },
        { name: "Sıcaklar", order: 8 },
        { name: "Soğuklar", order: 9 }
    ];

    async function loadCategories() {
        console.log('[loadCategories] Başlatılıyor...');
        try {
            const snapshot = await categoriesCollection.orderBy('order').get();
            console.log('[loadCategories] Firestore sorgusu tamamlandı. Belge sayısı:', snapshot.size, 'Boş mu:', snapshot.empty);
            if (snapshot.empty) {
                categories = initialCategories.map((cat, index) => ({
                    ...cat,
                    id: 'local_' + index
                }));
                console.log('[loadCategories] Firestore boş, lokal seed data kullanılıyor. Kategori sayısı:', categories.length);
            } else {
                categories = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                console.log('[loadCategories] Firestore\'dan yüklendi. Kategoriler:', categories.map(c => c.name));
            }
        } catch (error) {
            console.error('[loadCategories] HATA:', error.code, error.message);
            categories = initialCategories.map((cat, index) => ({
                ...cat,
                id: 'local_' + index
            }));
        }
        console.log('[loadCategories] populateCategorySelect çağrılıyor. categories dizisi:', categories.length, 'adet');
        populateCategorySelect();
        renderCategoriesList();
    }

    async function seedCategoriesIfEmpty() {
        console.log('[seedCategories] Kontrol ediliyor...');
        try {
            const snapshot = await categoriesCollection.get();
            console.log('[seedCategories] Mevcut belge sayısı:', snapshot.size);
            if (snapshot.empty) {
                console.log('[seedCategories] Boş! Seed data yükleniyor...');
                const batch = db.batch();
                initialCategories.forEach(cat => {
                    const docRef = categoriesCollection.doc();
                    batch.set(docRef, cat);
                });
                await batch.commit();
                const freshSnapshot = await categoriesCollection.orderBy('order').get();
                categories = freshSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                console.log('[seedCategories] Seed tamamlandı. Yüklenen:', categories.length);
            } else {
                console.log('[seedCategories] Zaten dolu, seed atlanıyor.');
            }
        } catch (error) {
            console.error('[seedCategories] HATA:', error.code, error.message);
        }
    }

    function populateCategorySelect() {
        const categorySelect = document.getElementById('category');
        console.log('[populateCategorySelect] #category elementi bulundu mu:', !!categorySelect);
        if (!categorySelect) return;
        const currentValue = categorySelect.value;
        categorySelect.innerHTML = '<option value="">Kategori seçin...</option>';
        console.log('[populateCategorySelect] Eklenecek kategori sayısı:', categories.length);
        categories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat.name;
            option.textContent = cat.name;
            categorySelect.appendChild(option);
            console.log('[populateCategorySelect] Option eklendi:', cat.name);
        });
        if (currentValue) categorySelect.value = currentValue;
        console.log('[populateCategorySelect] Select toplam option sayısı:', categorySelect.options.length);
    }

    function renderCategoriesList() {
        const categoriesList = document.getElementById('categoriesList');
        if (!categoriesList) return;

        if (categories.length === 0) {
            categoriesList.innerHTML = '<p style="color: #9ca3af; font-size: 0.9rem;">Henüz kategori yok.</p>';
            return;
        }

        categoriesList.innerHTML = categories.map(cat => `
            <div style="display: inline-flex; align-items: center; gap: 6px; background: #fdf6b2; color: #723b13; padding: 6px 12px; border-radius: 6px; font-size: 0.9rem;">
                <span>${cat.name}</span>
                <span style="color: #9ca3af; font-size: 0.75rem;">#${cat.order != null ? cat.order : '-'}</span>
                <button onclick="editCategory('${cat.id}')" style="background: none; border: none; cursor: pointer; color: #3b82f6; font-size: 0.85rem; padding: 0 2px;" title="Düzenle">&#9998;</button>
                <button onclick="deleteCategory('${cat.id}')" style="background: none; border: none; cursor: pointer; color: #ef4444; font-size: 0.85rem; padding: 0 2px;" title="Sil">&times;</button>
            </div>
        `).join('');
    }

    // Kategori ekleme/düzenleme/silme
    const categoryNameInput = document.getElementById('categoryName');
    const categoryOrderInput = document.getElementById('categoryOrder');
    const addCategoryBtn = document.getElementById('addCategoryBtn');
    const cancelCategoryBtn = document.getElementById('cancelCategoryBtn');

    if (addCategoryBtn) {
        addCategoryBtn.addEventListener('click', async () => {
            const name = categoryNameInput.value.trim();
            const order = parseInt(categoryOrderInput.value) || 0;
            if (!name) { alert('Kategori adı boş olamaz.'); return; }

            addCategoryBtn.disabled = true;
            addCategoryBtn.textContent = 'Kaydediliyor...';

            try {
                if (currentEditingCategoryId) {
                    // Güncelleme — eski kategori adını bul, ürünlerde de güncelle
                    const oldCat = categories.find(c => c.id === currentEditingCategoryId);
                    await categoriesCollection.doc(currentEditingCategoryId).update({ name, order });

                    // Ürünlerdeki kategori adını güncelle
                    if (oldCat && oldCat.name !== name) {
                        const itemsToUpdate = menuItems.filter(item => item.category === oldCat.name);
                        const batch = db.batch();
                        itemsToUpdate.forEach(item => {
                            batch.update(menuCollection.doc(item.id), { category: name });
                        });
                        await batch.commit();
                        // Lokal veriyi güncelle
                        itemsToUpdate.forEach(item => { item.category = name; });
                    }

                    resetCategoryForm();
                } else {
                    // Aynı isimde kategori var mı kontrol et
                    if (categories.some(c => c.name.toLowerCase() === name.toLowerCase())) {
                        alert('Bu isimde bir kategori zaten var.');
                        addCategoryBtn.disabled = false;
                        addCategoryBtn.textContent = 'Ekle';
                        return;
                    }
                    console.log('[addCategory] Firestore\'a ekleniyor:', { name, order });
                    const docRef = await categoriesCollection.add({ name, order });
                    console.log('[addCategory] Firestore\'a eklendi! Doc ID:', docRef.id);
                }
                categoryNameInput.value = '';
                categoryOrderInput.value = '';
                console.log('[addCategory] loadCategories çağrılıyor...');
                await loadCategories();
                renderAdminItems();
            } catch (error) {
                console.error('[addCategory] HATA:', error.code, error.message, error);
                alert('Kategori kaydedilemedi: ' + error.message);
            } finally {
                addCategoryBtn.disabled = false;
                addCategoryBtn.textContent = currentEditingCategoryId ? 'Güncelle' : 'Ekle';
            }
        });
    }

    if (cancelCategoryBtn) {
        cancelCategoryBtn.addEventListener('click', resetCategoryForm);
    }

    function resetCategoryForm() {
        currentEditingCategoryId = null;
        if (categoryNameInput) categoryNameInput.value = '';
        if (categoryOrderInput) categoryOrderInput.value = '';
        if (addCategoryBtn) addCategoryBtn.textContent = 'Ekle';
        if (cancelCategoryBtn) cancelCategoryBtn.style.display = 'none';
    }

    window.editCategory = function (id) {
        const cat = categories.find(c => c.id === id);
        if (!cat) return;
        currentEditingCategoryId = id;
        categoryNameInput.value = cat.name;
        categoryOrderInput.value = cat.order != null ? cat.order : 0;
        addCategoryBtn.textContent = 'Güncelle';
        cancelCategoryBtn.style.display = 'inline-block';
        categoryNameInput.focus();
    };

    window.deleteCategory = async function (id) {
        const cat = categories.find(c => c.id === id);
        if (!cat) return;

        // Bu kategoride ürün var mı kontrol et
        const itemsInCategory = menuItems.filter(item => item.category === cat.name);
        if (itemsInCategory.length > 0) {
            alert(`"${cat.name}" kategorisinde ${itemsInCategory.length} ürün var. Önce ürünleri başka kategoriye taşıyın veya silin.`);
            return;
        }

        if (!confirm(`"${cat.name}" kategorisini silmek istediğinizden emin misiniz?`)) return;

        try {
            await categoriesCollection.doc(id).delete();
            if (currentEditingCategoryId === id) resetCategoryForm();
            await loadCategories();
        } catch (error) {
            console.error('Kategori silme hatası:', error);
            alert('Kategori silinemedi.');
        }
    };

    // ==========================================
    // FIRESTORE'DAN VERİ YÜKLEME
    // ==========================================
    async function loadMenuItems() {
        try {
            const snapshot = await menuCollection.get();
            if (snapshot.empty) {
                // Firestore boş — ziyaretçiler için lokal seed data'yı göster
                // Firestore'a yazma işlemi sadece admin giriş yaptığında yapılacak
                menuItems = initialAlaricaMenu.map((item, index) => ({
                    ...item,
                    id: 'local_' + index
                }));
                console.log('Firestore boş, lokal seed data gösteriliyor');
            } else {
                menuItems = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            }
        } catch (error) {
            console.error('Firestore yükleme hatası:', error);
            // Fallback: lokal seed data
            menuItems = initialAlaricaMenu.map((item, index) => ({
                ...item,
                id: 'local_' + index
            }));
        }

        // Sayfa içeriklerini güncelle
        if (menuGrid) {
            renderCategories();
            renderClientMenu();
        }
        if (itemsList) {
            renderAdminItems();
        }
    }

    // Admin giriş yaptığında Firestore boşsa seed data'yı yükle
    async function seedFirestoreIfEmpty() {
        try {
            const snapshot = await menuCollection.get();
            if (snapshot.empty) {
                console.log('Admin giriş yaptı, Firestore\'a seed data yükleniyor...');
                const batch = db.batch();
                initialAlaricaMenu.forEach(item => {
                    const docRef = menuCollection.doc();
                    batch.set(docRef, item);
                });
                await batch.commit();
                // Yüklenen verileri tekrar oku
                const freshSnapshot = await menuCollection.get();
                menuItems = freshSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                console.log('Seed data Firestore\'a yüklendi');
            }
        } catch (error) {
            console.error('Seed data yükleme hatası:', error);
        }
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

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                await auth.signInWithEmailAndPassword(email, password);
                loginError.style.display = 'none';
                loginForm.reset();
            } catch (error) {
                let message = 'Giriş başarısız. Lütfen tekrar deneyin.';
                if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
                    message = 'Geçersiz e-posta veya şifre!';
                } else if (error.code === 'auth/too-many-requests') {
                    message = 'Çok fazla deneme. Lütfen daha sonra tekrar deneyin.';
                }
                loginError.textContent = message;
                loginError.style.display = 'block';
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            await auth.signOut();
        });
    }

    function showPanel() {
        if (loginDiv) loginDiv.style.display = 'none';
        if (panelDiv) panelDiv.style.display = 'block';
        populateCategorySelect();
        renderCategoriesList();
        renderAdminItems();
    }

    // Resim Yükleme (Firebase Storage)
    const imageInput = document.getElementById('image');
    const imagePreview = document.getElementById('imagePreview');
    const previewImage = document.getElementById('previewImage');

    if (imageInput) {
        imageInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                if (file.size > 5 * 1024 * 1024) {
                    alert('Dosya boyutu 5MB\'dan küçük olmalıdır.');
                    imageInput.value = '';
                    return;
                }
                currentImageFile = file;
                // Önizleme için lokal URL oluştur
                currentImagePreviewUrl = URL.createObjectURL(file);
                previewImage.src = currentImagePreviewUrl;
                imagePreview.style.display = 'block';
            }
        });
    }

    // Resmi Kaldır butonu
    const removeImageBtn = document.getElementById('removeImageBtn');
    if (removeImageBtn) {
        removeImageBtn.addEventListener('click', function () {
            currentImageFile = null;
            currentImagePreviewUrl = '__removed__'; // Özel flag: resim kaldırıldı
            imageInput.value = '';
            imagePreview.style.display = 'none';
            previewImage.src = '';
        });
    }

    // Firebase Storage'a resim yükle, URL döndür
    async function uploadImage(file, itemId) {
        if (!storage) throw new Error('Storage başlatılmadı');
        const fileExt = file.name.split('.').pop();
        const storageRef = storage.ref('menu-images/' + itemId + '.' + fileExt);
        await storageRef.put(file);
        return await storageRef.getDownloadURL();
    }

    // Firebase Storage'dan resim sil (URL'den referans alarak)
    async function deleteImageByUrl(imageUrl) {
        if (!storage || !imageUrl || !imageUrl.includes('firebasestorage')) return;
        try {
            const imageRef = storage.refFromURL(imageUrl);
            await imageRef.delete();
            console.log('Resim Storage\'dan silindi');
        } catch (error) {
            // Resim bulunamadıysa sessizce devam et
            console.warn('Resim silinemedi:', error.code);
        }
    }

    // Ürün Ekleme/Güncelleme
    const formTitle = document.getElementById('formTitle');
    const cancelBtn = document.getElementById('cancelBtn');

    if (menuForm) {
        menuForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = menuForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Kaydediliyor...';
            submitBtn.disabled = true;

            try {
                let imageUrl = currentImagePreviewUrl;

                if (currentEditingId) {
                    const existing = menuItems.find(i => i.id === currentEditingId);

                    if (currentImagePreviewUrl === '__removed__') {
                        // Resim kaldırıldı — Storage'dan sil
                        if (existing && existing.image) {
                            await deleteImageByUrl(existing.image);
                        }
                        imageUrl = '';
                    } else if (currentImageFile) {
                        // Yeni dosya seçildiyse eski resmi sil, yenisini yükle
                        if (existing && existing.image) {
                            await deleteImageByUrl(existing.image);
                        }
                        imageUrl = await uploadImage(currentImageFile, currentEditingId);
                    } else {
                        // Mevcut resmi koru
                        imageUrl = existing ? existing.image : '';
                    }

                    const itemData = {
                        name: document.getElementById('name').value,
                        description: document.getElementById('description').value,
                        price: parseFloat(document.getElementById('price').value),
                        category: document.getElementById('category').value,
                        image: imageUrl
                    };

                    await menuCollection.doc(currentEditingId).update(itemData);
                    const index = menuItems.findIndex(item => item.id === currentEditingId);
                    if (index !== -1) menuItems[index] = { id: currentEditingId, ...itemData };
                } else {
                    // Önce Firestore'a ekle (ID almak için)
                    const itemData = {
                        name: document.getElementById('name').value,
                        description: document.getElementById('description').value,
                        price: parseFloat(document.getElementById('price').value),
                        category: document.getElementById('category').value,
                        image: ''
                    };

                    const docRef = await menuCollection.add(itemData);

                    // Dosya seçildiyse Storage'a yükle
                    if (currentImageFile) {
                        imageUrl = await uploadImage(currentImageFile, docRef.id);
                        await menuCollection.doc(docRef.id).update({ image: imageUrl });
                        itemData.image = imageUrl;
                    }

                    menuItems.push({ id: docRef.id, ...itemData });
                }

                resetForm();
                renderAdminItems();
            } catch (error) {
                console.error('Ürün kaydetme hatası:', error);
                alert('Ürün kaydedilemedi. Lütfen tekrar deneyin.');
            } finally {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', resetForm);
    }

    function resetForm() {
        if (!menuForm) return;
        menuForm.reset();
        currentEditingId = null;
        currentImageFile = null;
        currentImagePreviewUrl = '';
        formTitle.textContent = 'Yeni Ürün Ekle';
        menuForm.querySelector('button[type="submit"]').textContent = 'Ürün Ekle';
        cancelBtn.style.display = 'none';
        imagePreview.style.display = 'none';
        previewImage.src = '';
    }

    function renderAdminItems() {
        const itemCount = document.getElementById('itemCount');
        if (!itemsList || !itemCount) return;

        itemCount.textContent = menuItems.length;

        if (menuItems.length === 0) {
            itemsList.innerHTML = '<p class="no-items" style="text-align:center; padding: 20px; color: gray;">Hiç ürün yok. İlk ürünü ekle!</p>';
            return;
        }

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
                    <button onclick="editItem('${item.id}')" style="background: #3b82f6; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">Düzenle</button>
                    <button onclick="deleteItem('${item.id}')" style="background: #ef4444; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">Sil</button>
                </div>
            </div>
        `).join('');
    }

    // Global Düzenleme / Silme Fonksiyonları
    window.editItem = function (id) {
        const item = menuItems.find(i => i.id === id);
        if (!item) return;

        document.getElementById('name').value = item.name;
        document.getElementById('description').value = item.description;
        document.getElementById('price').value = item.price;
        document.getElementById('category').value = item.category;

        if (item.image) {
            currentImageFile = null;  // Yeni dosya seçilmedi, mevcut URL korunacak
            currentImagePreviewUrl = item.image;
            previewImage.src = item.image;
            imagePreview.style.display = 'block';
        } else {
            currentImageFile = null;
            currentImagePreviewUrl = '';
            imagePreview.style.display = 'none';
        }

        currentEditingId = item.id;
        formTitle.textContent = 'Ürünü Düzenle';
        menuForm.querySelector('button[type="submit"]').textContent = 'Güncelle';
        cancelBtn.style.display = 'inline-block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.deleteItem = async function (id) {
        if (confirm('Bu ürünü silmek istediğinizden emin misiniz?')) {
            try {
                // Önce ürünün resmini Storage'dan sil
                const item = menuItems.find(i => i.id === id);
                if (item && item.image) {
                    await deleteImageByUrl(item.image);
                }
                await menuCollection.doc(id).delete();
                menuItems = menuItems.filter(item => item.id !== id);
                if (currentEditingId === id) resetForm();
                renderAdminItems();
            } catch (error) {
                console.error('Silme hatası:', error);
                alert('Ürün silinemedi. Lütfen tekrar deneyin.');
            }
        }
    };

    // ==========================================
    // 2. MÜŞTERİ MENÜ SAYFASI İŞLEMLERİ (menu.html)
    // ==========================================
    const menuGrid = document.getElementById('menuGrid');
    const categoryFilter = document.getElementById('categoryFilter');

    let currentFilter = 'all';

    function renderCategories() {
        if (!categoryFilter) return;

        // Firestore'daki categories koleksiyonundan sıralı kategori listesini kullan
        // Sadece en az bir ürünü olan kategorileri göster
        const usedCategoryNames = new Set(menuItems.map(item => item.category));
        const orderedCategories = categories
            .filter(cat => usedCategoryNames.has(cat.name))
            .map(cat => cat.name);

        // categories koleksiyonunda olmayan ama ürünlerde bulunan kategorileri sona ekle
        usedCategoryNames.forEach(name => {
            if (name && !orderedCategories.includes(name)) {
                orderedCategories.push(name);
            }
        });

        const commonBtnStyles = `margin-right: 10px; margin-bottom: 10px; padding: 8px 16px; cursor: pointer; border-radius: 20px; font-size: 0.95rem; font-weight: 500; font-family: sans-serif;`;

        let filterHTML = `<button class="filter-btn active" data-category="all" style="${commonBtnStyles} border: 1px solid #8b4513; background: #8b4513; color: white;">Tümü</button>`;

        orderedCategories.forEach(cat => {
            filterHTML += `<button class="filter-btn" data-category="${cat}" style="${commonBtnStyles} border: 1px solid #8b4513; background: transparent; color: #8b4513;">${cat}</button>`;
        });

        categoryFilter.innerHTML = filterHTML;

        const filterBtns = categoryFilter.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterBtns.forEach(b => {
                    b.classList.remove('active');
                    b.style.background = 'transparent';
                    b.style.color = '#8b4513';
                    b.style.fontSize = '0.95rem';
                    b.style.fontWeight = '500';
                    b.style.fontFamily = 'sans-serif';
                });

                e.target.classList.add('active');
                e.target.style.background = '#8b4513';
                e.target.style.color = 'white';
                e.target.style.fontSize = '0.95rem';
                e.target.style.fontWeight = '500';
                e.target.style.fontFamily = 'sans-serif';

                currentFilter = e.target.getAttribute('data-category');
                renderClientMenu();
            });
        });
    }

    function renderClientMenu() {
        if (!menuGrid) return;

        if (menuItems.length === 0) {
            menuGrid.innerHTML = '<p style="text-align:center; width: 100%; color: gray; grid-column: 1 / -1; padding: 40px;">Menümüz şu anda boş. Lütfen daha sonra tekrar kontrol edin!</p>';
            return;
        }

        const filteredItems = currentFilter === 'all'
            ? menuItems
            : menuItems.filter(item => item.category === currentFilter);

        if (filteredItems.length === 0) {
            menuGrid.innerHTML = '<p style="text-align:center; width: 100%; color: gray; grid-column: 1 / -1; padding: 40px;">Bu kategoride ürün bulunamadı.</p>';
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

    // ==========================================
    // 3. YUKARI ÇIK BUTONU (SCROLL TO TOP)
    // ==========================================
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scrollToTopBtn';
    scrollTopBtn.innerHTML = '↑';
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        const duration = 800;
        const startPosition = window.scrollY;
        const startTime = performance.now();

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

    // ==========================================
    // 4. UYGULAMAYI BAŞLAT
    // ==========================================
    loadCategories();
    loadMenuItems();
});
