document.addEventListener('DOMContentLoaded', () => {

    const showPage = (pageId) => {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        const activePage = document.getElementById(pageId);
        if (activePage) {
            activePage.classList.add('active');
            window.scrollTo(0, 0);
        }
    };

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const pageId = link.getAttribute('data-page');
            if (pageId) {
                showPage(pageId);
            }
        });
    });

    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (event) => {
            const productType = card.getAttribute('data-product');
            if(productType){
                showPage(`product-${productType}`);
            }
        });
    });

    // --- LOGIC FORM ---

    // Form Login
    const loginForm = document.getElementById('loginForm');
    if(loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Login berhasil! (simulasi)');
            showPage('home');
        });
    }

    // Form Signup
    const signupForm = document.getElementById('signupForm');
    if(signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('Konfirmasi kata sandi tidak cocok!');
                return;
            }
            alert('Pendaftaran berhasil! (simulasi)');
            showPage('login');
        });
    }

    // --- LOGIC PERHITUNGAN ---

    // Asuransi Mobil
    const calculateCarPremiumBtn = document.getElementById('calculateCarPremiumBtn');
    if (calculateCarPremiumBtn) {
        calculateCarPremiumBtn.addEventListener('click', () => {
            const carPrice = parseFloat(document.getElementById('carPrice').value);
            if (!carPrice || carPrice <= 0) {
                alert('Silakan masukkan harga mobil yang valid.');
                return;
            }
            const premium = carPrice * 0.025;
            document.getElementById('carPremiumAmount').innerText = `Rp ${premium.toLocaleString('id-ID')}`;
            document.getElementById('carPremiumDisplay').style.display = 'block';
            document.getElementById('carCheckoutBtn').style.display = 'inline-block';
        });

        document.getElementById('carInsuranceForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Pembelian Asuransi Mobil berhasil! (simulasi)');
        });
    }

    // Asuransi Kesehatan
    const calculateHealthPremiumBtn = document.getElementById('calculateHealthPremiumBtn');
    if(calculateHealthPremiumBtn){
        calculateHealthPremiumBtn.addEventListener('click', () => {
            let premium = 2000000;
            const isSmoker = document.getElementById('smoking').value === '1';
            const hasDiabetes = document.getElementById('diabetes').value === '1';

            if(isSmoker) premium *= 1.5;
            if(hasDiabetes) premium *= 1.3;

            document.getElementById('healthPremiumAmount').innerText = `Rp ${premium.toLocaleString('id-ID')}`;
            document.getElementById('healthPremiumDisplay').style.display = 'block';
            document.getElementById('healthCheckoutBtn').style.display = 'inline-block';
        });
        
        document.getElementById('healthInsuranceForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Pembelian Asuransi Kesehatan berhasil! (simulasi)');
        });
    }


    // Asuransi Jiwa
    const calculateLifePremiumBtn = document.getElementById('calculateLifePremiumBtn');
    if(calculateLifePremiumBtn){
        calculateLifePremiumBtn.addEventListener('click', () => {
            const coverage = parseFloat(document.getElementById('coverage').value);
            if (!coverage) {
                alert('Pilih besaran pertanggungan.');
                return;
            }
            const premium = coverage * 0.005;

            document.getElementById('lifePremiumAmount').innerText = `Rp ${premium.toLocaleString('id-ID')}`;
            document.getElementById('lifePremiumDisplay').style.display = 'block';
            document.getElementById('lifeCheckoutBtn').style.display = 'inline-block';
        });

        document.getElementById('lifeInsuranceForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Pembelian Asuransi Jiwa berhasil! (simulasi)');
        });
    }

});