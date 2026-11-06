/**
 * ============================================================================
 * SWEET CRUMBS BAKERY - JAVASCRIPT CONTROLLER
 * Vanilla JavaScript implementation for interactive bakery features:
 * - Mobile Navigation Menu & Drawer
 * - Header Scroll Effect & Active Section Highlighting
 * - Menu Category Filtering (Cakes, Pastries, Sweets, Breads)
 * - Product Quick Details Modal & Dynamic WhatsApp Pre-fill
 * - Interactive Custom Cake Studio & Price Calculator
 * - Gallery Image Lightbox Popup
 * - Form Validation with Live Feedback & WhatsApp Integration
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- Configuration ---
  const BAKERY_WHATSAPP_NUMBER = '15557933827'; // International format without +
  const BAKERY_PHONE_DISPLAY = '(555) 793-3827';

  // ==========================================================================
  // 1. MOBILE NAVIGATION DRAWER
  // ==========================================================================
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links .nav-link');

  function openMobileMenu() {
    mobileNavToggle.classList.add('open');
    mobileNavToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('open');
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileNavToggle.classList.remove('open');
    mobileNavToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      closeProductModal();
      closeLightbox();
    }
  });

  // ==========================================================================
  // 2. HEADER SCROLL EFFECT & ACTIVE SECTION HIGHLIGHTING
  // ==========================================================================
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-menu .nav-link');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header shadow on scroll
    if (scrollPos > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active navigation link highlighting
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    desktopNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // ==========================================================================
  // 3. MENU CATEGORY FILTERING
  // ==========================================================================
  const filterBtns = document.querySelectorAll('.menu-tabs .tab-btn');
  const productCards = document.querySelectorAll('.products-grid .product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active tab style
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      // Filter product cards
      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==========================================================================
  // 4. PRODUCT QUICK DETAILS MODAL
  // ==========================================================================
  const productsData = {
    '1': {
      name: 'Rose Berry Velvet Cake',
      price: '$52.00',
      category: 'Signature Cakes',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
      desc: 'Our crown jewel. Tender Madagascar vanilla bean and almond chiffon cake layered with house-made organic raspberry purée, a whisper of Bulgarian rose water cream, and crowned with fresh Driscoll raspberries.',
      servings: 'Serves 10 to 12 guests (8-inch round)',
      allergens: 'Contains: Wheat, Dairy, Eggs, Almonds. Nut-free option available upon 48h advance notice.',
      prepTime: 'Baked fresh daily. Ready for same-day boutique pickup or courier delivery.'
    },
    '2': {
      name: 'Salted Caramel Drip Cake',
      price: '$58.00',
      category: 'Signature Cakes',
      image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80',
      desc: 'Decadent moist Belgian dark chocolate sponge infused with espresso liqueur, layered with Fleur de Sel salted caramel mousse and crunchy Valrhona chocolate pearls.',
      servings: 'Serves 12 to 14 guests (8-inch 3-layer round)',
      allergens: 'Contains: Wheat, Dairy, Eggs, Soy.',
      prepTime: 'Fresh morning bake. Order before 12 PM for same-day delivery.'
    },
    '3': {
      name: 'Wild Berry Mascarpone Cake',
      price: '$64.00',
      category: 'Signature Cakes',
      image: 'https://images.unsplash.com/photo-1534432182912-63863115e106?auto=format&fit=crop&w=800&q=80',
      desc: 'An ethereal naked celebration cake featuring citrus-soaked sponge, Italian mascarpone chantilly, and an abundance of fresh blackberries, blueberries, and edible pansy blooms.',
      servings: 'Serves 12 to 16 guests (8-inch tall)',
      allergens: 'Contains: Wheat, Dairy, Eggs.',
      prepTime: 'Requires 24 hours advance ordering for delicate fresh berry sourcing.'
    },
    '4': {
      name: 'Parisian Almond Croissant',
      price: '$5.50',
      category: 'French Viennoiserie',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
      desc: 'Crafted with AOP Charentes-Poitou French butter, twice-baked with rich almond frangipane cream, dusted with powdered sugar and toasted California almonds.',
      servings: 'Individual pastry (approx. 140g)',
      allergens: 'Contains: Wheat, Dairy, Eggs, Tree Nuts (Almonds).',
      prepTime: 'Warm batches pulled from ovens daily at 7:00 AM & 10:30 AM.'
    },
    '5': {
      name: 'Wild Forest Berry Danish',
      price: '$6.25',
      category: 'French Viennoiserie',
      image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80',
      desc: 'Flaky 72-layer laminated pastry nest cradling silky Tahitian vanilla bean custard cream, topped with glistening seasonal berries and apricot glaze.',
      servings: 'Individual pastry',
      allergens: 'Contains: Wheat, Dairy, Eggs.',
      prepTime: 'Baked fresh daily.'
    },
    '6': {
      name: 'Pain au Chocolat (70% Valrhona)',
      price: '$5.75',
      category: 'French Viennoiserie',
      image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=800&q=80',
      desc: 'Golden crisp exterior with an airy honeycomb interior, enveloping two generous batons of single-origin 70% dark Valrhona French chocolate.',
      servings: 'Individual pastry',
      allergens: 'Contains: Wheat, Dairy, Soy.',
      prepTime: 'Baked fresh every morning.'
    },
    '7': {
      name: 'Pastel Macaron Gift Box (12 pcs)',
      price: '$28.00',
      category: 'Macarons & Treats',
      image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=800&q=80',
      desc: 'Our signature embossed gift box containing 12 naturally colored French macarons: Sicilian Pistachio, Salted Caramel, Rose Lychee, Lemon Curd, Dark Chocolate, and Vanilla Bean.',
      servings: 'Box of 12 assorted macarons',
      allergens: 'Naturally Gluten-Free. Contains: Almonds, Eggs, Dairy.',
      prepTime: 'Beautifully gift wrapped with satin ribbon. Ready for gifting.'
    },
    '8': {
      name: 'Strawberry Blossom Cupcakes (6 pcs)',
      price: '$24.00',
      category: 'Macarons & Treats',
      image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=800&q=80',
      desc: 'Moist vanilla cupcakes with hidden strawberry preserves center, piped with blushing Swiss meringue buttercream roses and freeze-dried berry dust.',
      servings: 'Box of 6 cupcakes',
      allergens: 'Contains: Wheat, Dairy, Eggs.',
      prepTime: 'Available daily.'
    },
    '9': {
      name: 'Belgian Dark Chocolate Éclair',
      price: '$6.50',
      category: 'French Viennoiserie',
      image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=800&q=80',
      desc: 'Light, crisp pâte à choux shell generously piped with silky dark chocolate diplomat cream and topped with mirror cocoa fondant glaze.',
      servings: 'Individual pastry',
      allergens: 'Contains: Wheat, Dairy, Eggs.',
      prepTime: 'Chilled and fresh.'
    },
    '10': {
      name: 'Country Sourdough Boule',
      price: '$8.00',
      category: 'Artisan Breads',
      image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80',
      desc: 'Slow cold-fermented for 28 hours using organic stone-ground unbleached flours, spring water, and fine sea salt. Boasts a crunchy blistered crust and a custardy open crumb.',
      servings: 'Loaf (approx. 850g) - 10 to 12 thick slices',
      allergens: 'Vegan. Contains: Wheat.',
      prepTime: 'Fresh loaves arrive on counter at 8:00 AM daily.'
    },
    '11': {
      name: 'Rosemary Sea Salt Focaccia',
      price: '$7.50',
      category: 'Artisan Breads',
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80',
      desc: 'Traditional Ligurian style focaccia, dimpled and generously steeped in Tuscan extra virgin olive oil, fresh garden rosemary, and crunchy Maldon salt flakes.',
      servings: 'Generous square slab (approx. 500g)',
      allergens: 'Vegan. Contains: Wheat.',
      prepTime: 'Baked daily.'
    },
    '12': {
      name: 'Vintage Lambeth Ruffle Cake',
      price: '$68.00',
      category: 'Signature Cakes',
      image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80',
      desc: 'Whimsical romantic cake with intricate overpiped royal swags, buttercream ruffles, pearl dragees, and your choice of custom birthday or celebratory lettering.',
      servings: 'Serves 12 to 14 guests (7-inch tall)',
      allergens: 'Contains: Wheat, Dairy, Eggs.',
      prepTime: 'Handmade to order; please allow 48h notice.'
    }
  };

  const productModalBackdrop = document.getElementById('productModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const modalInfoList = document.getElementById('modalInfoList');
  const modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');

  function openProductModal(productId) {
    const item = productsData[productId];
    if (!item) return;

    modalImg.src = item.image;
    modalImg.alt = item.name;
    modalTitle.textContent = item.name;
    modalPrice.textContent = item.price;
    modalDesc.textContent = item.desc;

    modalInfoList.innerHTML = `
      <div><strong>🍰 Serving Size:</strong> ${item.servings}</div>
      <div><strong>🌾 Dietary & Allergens:</strong> ${item.allergens}</div>
      <div><strong>⏱️ Preparation Note:</strong> ${item.prepTime}</div>
    `;

    // Prefilled WhatsApp order text
    const textMsg = encodeURIComponent(`Hi Sweet Crumbs Bakery! I would like to order the ${item.name} (${item.price}). Is it available today?`);
    modalWhatsAppBtn.href = `https://wa.me/${BAKERY_WHATSAPP_NUMBER}?text=${textMsg}`;

    productModalBackdrop.classList.add('active');
    productModalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProductModal() {
    productModalBackdrop.classList.remove('active');
    productModalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Bind Details buttons
  const detailBtns = document.querySelectorAll('.btn-details');
  detailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      openProductModal(id);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProductModal);
  }

  if (productModalBackdrop) {
    productModalBackdrop.addEventListener('click', (e) => {
      if (e.target === productModalBackdrop) {
        closeProductModal();
      }
    });
  }

  // ==========================================================================
  // 5. INTERACTIVE CUSTOM CAKE STUDIO & PRICE CALCULATOR
  // ==========================================================================
  const customCakeState = {
    occasion: 'Birthday Milestone',
    size: '6 inch Petite (8-10 servings)',
    basePrice: 65,
    flavor: 'Madagascar Bourbon Vanilla',
    filling: 'Swiss Meringue Buttercream',
    style: 'Fresh Garden Florals',
    styleExtra: 15
  };

  const summaryOccasion = document.getElementById('summaryOccasion');
  const summarySize = document.getElementById('summarySize');
  const summaryFlavor = document.getElementById('summaryFlavor');
  const summaryFilling = document.getElementById('summaryFilling');
  const summaryStyle = document.getElementById('summaryStyle');
  const summaryPrice = document.getElementById('summaryPrice');
  const btnSendCustomWhatsApp = document.getElementById('btnSendCustomWhatsApp');

  function updateCustomCakeSummary() {
    if (!summaryPrice) return;

    const totalPrice = customCakeState.basePrice + customCakeState.styleExtra;

    summaryOccasion.textContent = customCakeState.occasion;
    summarySize.textContent = customCakeState.size;
    summaryFlavor.textContent = customCakeState.flavor;
    summaryFilling.textContent = customCakeState.filling;
    summaryStyle.textContent = customCakeState.style;
    summaryPrice.textContent = `$${totalPrice}.00`;

    // Construct formatted WhatsApp message
    const msg = [
      `*🎂 Custom Cake Inquiry - Sweet Crumbs Bakery*`,
      `• *Occasion:* ${customCakeState.occasion}`,
      `• *Size / Tier:* ${customCakeState.size}`,
      `• *Sponge Base:* ${customCakeState.flavor}`,
      `• *Filling & Frosting:* ${customCakeState.filling}`,
      `• *Artistic Finish:* ${customCakeState.style}`,
      `• *Estimated Quote:* $${totalPrice}.00`,
      ``,
      `Hello Chef! I would love to order this custom cake. Could you please let me know availability for my date?`
    ].join('\n');

    btnSendCustomWhatsApp.href = `https://wa.me/${BAKERY_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }

  // Handle pill selections for custom builder
  const builderStepGroups = document.querySelectorAll('.builder-step');
  builderStepGroups.forEach(group => {
    const stepType = group.getAttribute('data-step');
    const pills = group.querySelectorAll('.option-pill');

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const val = pill.getAttribute('data-val');

        if (stepType === 'occasion') {
          customCakeState.occasion = val;
        } else if (stepType === 'size') {
          customCakeState.size = val;
          customCakeState.basePrice = parseInt(pill.getAttribute('data-price'), 10) || 65;
        } else if (stepType === 'flavor') {
          customCakeState.flavor = val;
        } else if (stepType === 'filling') {
          customCakeState.filling = val;
        } else if (stepType === 'style') {
          customCakeState.style = val;
          customCakeState.styleExtra = parseInt(pill.getAttribute('data-extra'), 10) || 0;
        }

        updateCustomCakeSummary();
      });
    });
  });

  // Initialize summary on page load
  updateCustomCakeSummary();

  // ==========================================================================
  // 6. SPECIAL OCCASIONS ACTIONS (Scroll & Prefill Form)
  // ==========================================================================
  const occasionBtns = document.querySelectorAll('.occasion-btn');
  const inquirySelect = document.getElementById('inquiryType');

  occasionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const occasionType = btn.getAttribute('data-occasion');
      if (occasionType && inquirySelect) {
        if (occasionType === 'Wedding Cake') {
          inquirySelect.value = 'Wedding Cake Tasting';
        } else if (occasionType === 'Baby Shower') {
          inquirySelect.value = 'Baby Shower / Gender Reveal';
        } else if (occasionType === 'Corporate Event') {
          inquirySelect.value = 'Corporate Catering';
        } else {
          inquirySelect.value = 'Custom Celebration Cake';
        }
      }
    });
  });

  // ==========================================================================
  // 7. BAKERY GALLERY LIGHTBOX POPUP
  // ==========================================================================
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  function openLightbox(imgSrc, captionText) {
    lightboxImg.src = imgSrc;
    lightboxCaption.textContent = captionText;
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-img');
      const caption = item.getAttribute('data-caption') || 'Sweet Crumbs Handcrafted Treat';
      openLightbox(src, caption);
    });
  });

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  // ==========================================================================
  // 8. CONTACT FORM VALIDATION & DIRECT WHATSAPP INTEGRATION
  // ==========================================================================
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('userName');
  const emailInput = document.getElementById('userEmail');
  const phoneInput = document.getElementById('userPhone');
  const messageInput = document.getElementById('userMessage');
  const eventDateInput = document.getElementById('eventDate');
  const guestCountInput = document.getElementById('guestCount');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const messageError = document.getElementById('messageError');

  const formSuccessBanner = document.getElementById('formSuccessBanner');
  const formSuccessMessage = document.getElementById('formSuccessMessage');
  const btnSendFormWhatsApp = document.getElementById('btnSendFormWhatsApp');

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function isValidPhone(phone) {
    // Basic phone validation: digits, spaces, hyphens, min 7 digits
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 7;
  }

  function clearErrors() {
    [nameInput, emailInput, phoneInput, messageInput].forEach(inp => {
      if (inp) inp.classList.remove('input-error');
    });
    [nameError, emailError, phoneError, messageError].forEach(err => {
      if (err) err.classList.remove('visible');
    });
  }

  if (contactForm) {
    // Real-time error removal on input
    nameInput.addEventListener('input', () => {
      if (nameInput.value.trim().length >= 2) {
        nameInput.classList.remove('input-error');
        nameError.classList.remove('visible');
      }
    });

    emailInput.addEventListener('input', () => {
      if (isValidEmail(emailInput.value.trim())) {
        emailInput.classList.remove('input-error');
        emailError.classList.remove('visible');
      }
    });

    phoneInput.addEventListener('input', () => {
      if (isValidPhone(phoneInput.value.trim())) {
        phoneInput.classList.remove('input-error');
        phoneError.classList.remove('visible');
      }
    });

    messageInput.addEventListener('input', () => {
      if (messageInput.value.trim().length >= 5) {
        messageInput.classList.remove('input-error');
        messageError.classList.remove('visible');
      }
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();

      let hasError = false;

      // Validate Name
      if (nameInput.value.trim().length < 2) {
        nameInput.classList.add('input-error');
        nameError.classList.add('visible');
        hasError = true;
      }

      // Validate Email
      if (!isValidEmail(emailInput.value.trim())) {
        emailInput.classList.add('input-error');
        emailError.classList.add('visible');
        hasError = true;
      }

      // Validate Phone
      if (!isValidPhone(phoneInput.value.trim())) {
        phoneInput.classList.add('input-error');
        phoneError.classList.add('visible');
        hasError = true;
      }

      // Validate Message
      if (messageInput.value.trim().length < 5) {
        messageInput.classList.add('input-error');
        messageError.classList.add('visible');
        hasError = true;
      }

      if (hasError) {
        return;
      }

      // Generate a unique Inquiry Reference Code
      const refCode = 'SC-' + Math.floor(1000 + Math.random() * 9000);
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const phone = phoneInput.value.trim();
      const type = inquirySelect ? inquirySelect.value : 'General Inquiry';
      const eventDate = eventDateInput ? eventDateInput.value : 'Not specified';
      const guests = guestCountInput && guestCountInput.value ? guestCountInput.value : 'Flexible';
      const userMsg = messageInput.value.trim();

      // Update success banner
      formSuccessMessage.innerHTML = `
        Thank you <strong>${name}</strong>! Your inquiry <strong>#${refCode}</strong> has been received and verified.<br>
        Our pastry team will reply to <em>${email}</em> or call you at <em>${phone}</em> within 2 to 4 hours.
      `;

      // Pre-fill WhatsApp action button with exact inquiry details
      const waText = [
        `*🌸 Sweet Crumbs Bakery Inquiry (#${refCode})*`,
        `• *Customer:* ${name}`,
        `• *Phone:* ${phone}`,
        `• *Email:* ${email}`,
        `• *Topic:* ${type}`,
        `• *Event Date:* ${eventDate || 'N/A'}`,
        `• *Estimated Guests:* ${guests}`,
        `• *Vision & Notes:* ${userMsg}`
      ].join('\n');

      btnSendFormWhatsApp.href = `https://wa.me/${BAKERY_WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

      // Show success banner and reset form fields
      formSuccessBanner.classList.add('visible');
      formSuccessBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      contactForm.reset();
    });
  }

  // ==========================================================================
  // 9. IMAGE FALLBACK RECOVERY (Graceful Offline Handling)
  // ==========================================================================
  const allImages = document.querySelectorAll('img');
  allImages.forEach(img => {
    img.addEventListener('error', () => {
      img.classList.add('img-fallback');
      if (img.src.includes('cake') || img.alt.toLowerCase().includes('cake')) {
        img.src = 'images/placeholder-cake.svg';
      } else {
        img.src = 'images/placeholder-pastry.svg';
      }
    });
  });

});
