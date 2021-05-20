<script>
window.config = {
  bosConfig: {
    marketServiceUrl: "https:\u002F\u002Fmarketservice.dev.select.d-p.io",
    marketServiceUrlClient:
      "https:\u002F\u002Fmarketservice-dev-select.cloud.mmst.eu",
    teasersServiceUrl:
      "https:\u002F\u002Fdelivery.prod.teasermanagement.d-p.io",
    teasersServiceUrlClient:
      "https:\u002F\u002Fdelivery-prod-teasermanagement.cloud.mmst.eu",
    graphql: "\u002Fapi\u002Fv1\u002Fgraphql",
  },
  searchConfig: {
    channel: "mmdede",
    pageUrl: "\u002Fde\u002Fsearch.html",
  },
  logging: { logLevel: 3, logOnClient: false },
  google: {
    googleMapKey: "AIzaSyAO6jm9TuDM7Z3RSVgv4SBqy-cPPtYHsac",
    googleReCaptchaSiteKey: "6LebkIoUAAAAAFkqSbafiDcSJOl0ZRKy3WherFtt",
  },
  saleslineConfig: {
    locale: "de-DE",
    salesline: "MediaDE",
    storeName: "MediaMarkt",
    defaultOnlineOutletId: "1125",
  },
  assets: {
    imageBaseUrl: "https:\u002F\u002Fpicscdn.redblue.de\u002Fdoi",
    imageCliplisterBaseUrl: "https:\u002F\u002Fassets.mmsrg.com",
    imageCliplisterApiId: "166325",
    assetUrl:
      "https:\u002F\u002Fassets.mediamarkt.de\u002Fwebmobile-pwa-public-assets-dev\u002F7ff8ec4\u002F",
  },
  gtm: {
    sstEndpointUrl:
      "https:\u002F\u002Feurope-west1-v6cxic1gj2dp.cloudfunctions.net\u002Fsst-cloud-function-endpoint-prod",
    containerIDs: {
      internal: "WQ8LVLG",
      internalNew: "",
      marketPlace: "",
    },
  },
  tealium: { profile: "mm-de", env: "prod" },
  cliplister: {
    customerId: "157815",
    url:
      "https:\u002F\u002Fmycliplister.com\u002Fmerge?cliplister=1.6&clviewer=1.23&videostage=1.18&innercontrols=1.7&clickablevideo=1.4&playbutton=1.1&previewimage=1.4",
  },
  prudsys: { rdeId: "MMDE" },
  richProductDescriptionConfig: {
    cnetSrc: "https:\u002F\u002Fcdn.cnetcontent.com\u002Fjsc\u002Fh.js",
    cnetAPIKey: "c47669b2:7a243e762e",
    flixMediaSrc:
      "https:\u002F\u002Fsyndication.flix360.com\u002Fjs\u002Floader.js",
    loadbeeSrc:
      "https:\u002F\u002Fcdn.loadbee.com\u002Fjs\u002Floadbee_integration.js",
    loadbeeAPIKey: "n8EupZUeGxWPnfPk3bLkHwdVywL48DEw",
  },
  baseDomain: "https:\u002F\u002Fwww.mediamarkt.de",
  cmsUrl:
    "https:\u002F\u002Fwww.mediamarkt.de\u002Fwebapp\u002Fwcs\u002Fstores\u002Fservlet\u002FMultiChannelCMSLayer?storeId=19501&langId=-3&callback=info",
  stage: "prod",
  defaultRedirect: "\u002Fstatic\u002Ferrors\u002Ferror404.html",
  isDevelopment: false,
  grover: {
    isActive: true,
    accessToken:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdG9yZV9jb2RlIjoibWVkaWFtYXJrdCJ9.9bdD5fyAAdjEafgxIL37B3MAI3gYGc_ztMGK9Ilrv5A",
    widgetServerUrl: "\u002Fapi\u002Fv1",
    apiUrl: "https:\u002F\u002Fapi.getgrover.com",
  },
  isSwogoActive: true,
  isProcoBadgesActive: false,
  isSalesUpgraderActive: true,
  productBundlesInitCount: 3,
  isAddressBookActive: true,
  isCitrusAdActive: false,
  isMarketplaceActive: true,
  isPreCheckoutRecosActive: true,
  isCategoryBlacklistActive: false,
  isLiveChatActive: true,
  isHeaderRerouteActive: false,
  isCorsScriptsActive: true,
  disableBrandLinkPDP: false,
  isPWAReturnFlowActive: true,
  isPhraseActive: false,
  allowedDomainsList: "",
  allowedCanariasPathsList: "",
  sendPhysicalClubcard: false,
  prismicUrl: "https:\u002F\u002Fcontent.mediamarkt.de",
  livechatUrl: "mm-de-de",
  servicesWhitelist:
    "2544875,2544764,2544890,2544791,2544919,2544859,2544899,2544926,2544866,2544811,2544914,2544929,2544915,2544847,2544870,2544917,2544930,2544855,2544931,2544871,2544918,2544933,2544872,2544856,2544936,2544857,2544873,2544874,2544553,2544613,2544581,2544619,2544587,2544589,2544623,2544590,2544633,2544668,2544597,2544701,2544604,2544734,2544875,2544764,2544890,2544791,2544919,2544859,2544899,2544926,2544866,2544811,2544914,2544929,2544915,2544847,2544870,2544917,2544930,2544855,2544931,2544871,2544918,2544933,2544872,2544856,2544936,2544857,2544873,2544874,2544553,2544613,2544581,2544619,2544587,2544589,2544623,2544590,2544633,2544668,2544597,2544701,2544604,2544734,2633226,2633228,2543157,2543158,2543160,2543162,2543163,2543164,2543166,2543168,2543169,2543170,2543171,2543172,2543173,2543175,2543177,2543181,2543182,2543183,2543184,2543185,2543186,2543187,2543188,2543189,2543190,2543191,2543192,2543193,2543194,2543195,2543196,2543199,2543200,2543201,2543202,2543203,2543204,2543205,2543206,2543207,2543208,2543209,2543210,2543211,2543212,2543213,2543214,2543215,2543217,2543218,2543221,2543225,2543226,2543227,2543228,2543229,2543231,2543232,2543234,2543235,2543236,2543237,2543238,2543240,2543241,2543242,2543243,2543244,2543247,2543248,2543249,2543250,2543252,2543254,2543255,2543257,2543258,2543262,2543266,2543269,2543271,2543272,2543274,2543276,2543277,2543278,2543279,2543280,2543281,2543282,2543283,2543284,2543285,2543286,2543287,2543288,2543289,2543290,2543291,2543292,2543296,2543298,2543300,2543301,2543302,2543303,2243525,2244469,2570718,2570721,2570717,2570728,2570730,2539897,2539899,2541719,2582465,2582466,2582467,2582468,2582469,2582470,2582471,2582472,2582473,2582474,2582476,2582477,2582478,2582479,2582480,2582481,2582482,2582483,2582671,2582672,2582673,1129723,1789698,1807392,1807393,1807394,1807397,1807399,1807400,1807401,1807402,1807403,1807404,1807405,1807406,1832691,2041190,2154326,2154333,2188399,2257904,2259188,2274877,2310953,2329664,2535620,2550476,2550465,2550467,2550128,2582677,2582494,2582494,2582494,2582677,2582677,2582677,2539897,2582513,2550128,2570717,2570717,2570717,2570717,2539897,2582483,2550128,2550128,1807392,2259188,2257904,1807393,1807397,1807399,1807406,2041190,1789698,1807394,2154326,2329664,2188399,1900326,1807401,1807405,1807402,1807403,1807404,2387152,1832691,2310953,1807400,2154333,2387154,1129723,2244470,2274877,2535620,2550476,2550465,2550466,2550467,2570728,2570729,2570730,2570718,2570720,2570721,2244469,2243525,2570741,2570740,2570737,2570739,2570717,2570722,2570724,2561691,2686454,2582495,2582504,2582500,2582501,2582493,2582492,2582494,2582490,2582491,2582502,2582503,2582505,2582676,2582677,2686455,2550128,2550126,2550135,2550426,2550449,2550419,2550419,2550419,2550450,2550458,2550427,2550439,2539899,2541719,2539897,2582465,2582466,2582467,2582468,2582469,2582470,2582471,2582472,2582473,2582474,2582476,2582477,2582478,2582479,2582480,2582481,2582482,2582483,2582485,2582486,2582487,2582488,2582489,2582495,2582496,2582497,2582498,2582499,2582500,2582501,2582674,2582675",
  financing: {
    listPagesAllowedBrands: "APPLE,BEATS",
    listPagesABTestExperimentKey: "",
    clubMemberCampaign: "1de",
    pdpDisplayActive: true,
  },
  apolloClient: { maxAttempts: 2 },
  isNewGDPRConsentActive: true,
  isPWAConsentActive: false,
  isTrackingUsingSetCookieNginxActive: true,
  isContentfulActive: true,
  isLuxActive: true,
  isServiceWorkerActive: false,
  isLocalCachePurgedActive: false,
  isNewOnlineStatusActive: false,
  bazaarvoice: {
    siteId: "main_site",
    clientName: "mediamarkt",
    environment: "production",
    locale: "de_DE",
  },
  isPdpReviewLotteryDisplayActive: true,
  isPdpWarrantyHighlightActive: false,
  isNewAuth: true,
  isOrderLevelFiscalInvoiceActive: false,
  isFulfillmentLevelFiscalInvoiceActive: false,
  isServiceCodeDisplayedWhenShippedActive: false,
  isDigitalProductActive: true,
  maxLatestVisitorCountAgeCheckout: 30,
  isOrderHistoryVisitorCountActive: true,
  forceOnlineStatusFalse: "",
  thirdGenderEnabled: true,
  isCcrEnabled: false,
  isGuestForITActive: false,
  isB2BRegistrationActive: false,
  showBlackFridayFacet: true,
  showFreeAppleMusicBanner: false,
  enable2mhSfsServices: false,
  optimizelySDKKey: "SGQqhE23rfkaH6FfP6PUh",
  isNewSAWActive: false,
  isNewSAWExperimentActive: false,
  campaignLandingPage: {
    defaultUrl:
      "https:\u002F\u002Fwww.mediamarkt.de\u002Fde\u002Fcategory\u002F_prospekte-angebote-583019.html",
  },
};
</script>
<script>
window.__PRELOADED_STATE__ = {
  reduxInitialStore: {
    config: {
      bosConfig: {
        marketServiceUrl:
          "https:\u002F\u002Fmarketservice.dev.select.d-p.io",
        marketServiceUrlClient:
          "https:\u002F\u002Fmarketservice-dev-select.cloud.mmst.eu",
        teasersServiceUrl:
          "https:\u002F\u002Fdelivery.prod.teasermanagement.d-p.io",
        teasersServiceUrlClient:
          "https:\u002F\u002Fdelivery-prod-teasermanagement.cloud.mmst.eu",
        graphql: "\u002Fapi\u002Fv1\u002Fgraphql",
      },
      searchConfig: {
        channel: "mmdede",
        pageUrl: "\u002Fde\u002Fsearch.html",
      },
      logging: { logLevel: 3, logOnClient: false },
      google: {
        googleMapKey: "AIzaSyALLAmTwX3dtnCZM1CgPdfqgm7CnfS231s",
        googleReCaptchaSiteKey:
          "6LebkIoUAAAAAFkqSbafiDcSJOl0ZRKy3WherFtt",
      },
      saleslineConfig: {
        locale: "de-DE",
        salesline: "MediaDE",
        storeName: "MediaMarkt",
        defaultOnlineOutletId: "1125",
      },
      assets: {
        imageBaseUrl: "https:\u002F\u002Fpicscdn.redblue.de\u002Fdoi",
        imageCliplisterBaseUrl: "https:\u002F\u002Fassets.mmsrg.com",
        imageCliplisterApiId: "166325",
        assetUrl:
          "https:\u002F\u002Fasset.mediamarkt.es\u002Fwebmobile-pwa-public-assets-dev\u002F7ff8ec4\u002F",
      },
      gtm: {
        sstEndpointUrl:
          "https:\u002F\u002Feurope-west1-v6cxic1gj2dp.cloudfunctions.net\u002Fsst-cloud-function-endpoint-prod",
        containerIDs: {
          internal: "KP3D6ZK",
          internalNew: "",
          marketPlace: "",
        },
      },
      tealium: { profile: "mm-es", env: "prod" },
      cliplister: {
        customerId: '"',
        url:
          "https:\u002F\u002Fmycliplister.com\u002Fmerge?cliplister=1.6&clviewer=1.23&videostage=1.18&innercontrols=1.7&clickablevideo=1.4&playbutton=1.1&previewimage=1.4",
      },
      prudsys: { rdeId: "MMES" },
      richProductDescriptionConfig: {
        cnetSrc:
          "https:\u002F\u002Fcdn.cnetcontent.com\u002Fjsc\u002Fh.js",
        cnetAPIKey: "ef5c9d3e:60e34ccc43",
        flixMediaSrc:
          "https:\u002F\u002Fsyndication.flix360.com\u002Fjs\u002Floader.js",
        loadbeeSrc:
          "https:\u002F\u002Fcdn.loadbee.com\u002Fjs\u002Floadbee_integration.js",
        loadbeeAPIKey: "yPfGNnUWHEGzc5VsLKukcbHvgukhVEBg",
      },
      baseDomain: "https:\u002F\u002Fwww.mediamarkt.es",
      cmsUrl:
        "https:\u002F\u002Fwww.mediamarkt.de\u002Fwebapp\u002Fwcs\u002Fstores\u002Fservlet\u002FMultiChannelCMSLayer?storeId=19501&langId=-3&callback=info",
      stage: "prod",
      defaultRedirect: "\u002Fstatic\u002Ferrors\u002Ferror404.html",
      isDevelopment: false,
      grover: {
        isActive: false,
        accessToken:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdG9yZV9jb2RlIjoibWVkaWFtYXJrdCJ9.bm1niEepZwp2PgvNj9PGxyIpYD0MRF6X1SOOS5ehDxY",
        widgetServerUrl: "\u002Fapi\u002Fv1",
        apiUrl: "https:\u002F\u002Fapi.getgrover.com",
      },
      isSwogoActive: true,
      isProcoBadgesActive: false,
      isSalesUpgraderActive: true,
      productBundlesInitCount: 3,
      isAddressBookActive: true,
      isCitrusAdActive: false,
      isMarketplaceActive: false,
      isPreCheckoutRecosActive: false,
      isCategoryBlacklistActive: false,
      isLiveChatActive: true,
      isHeaderRerouteActive: false,
      isCorsScriptsActive: true,
      disableBrandLinkPDP: true,
      isPWAReturnFlowActive: false,
      isPhraseActive: false,
      allowedDomainsList:
        "https:\u002F\u002Frevelado.mediamarkt.es\u002F,https:\u002F\u002Fspecials.mediamarkt.es\u002F,https:\u002F\u002Fpre-specials.mediamarkt.es",
      allowedCanariasPathsList: "",
      sendPhysicalClubcard: true,
      prismicUrl: "https:\u002F\u002Fcontent.mediamarkt.de",
      livechatUrl: "mm-es-es",
      servicesWhitelist: "''",
      financing: {
        listPagesAllowedBrands: "APPLE,BEATS",
        listPagesABTestExperimentKey: "",
        clubMemberCampaign: "",
        pdpDisplayActive: true,
      },
      apolloClient: { maxAttempts: 2 },
      isNewGDPRConsentActive: true,
      isPWAConsentActive: true,
      isTrackingUsingSetCookieNginxActive: true,
      isContentfulActive: true,
      isLuxActive: false,
      isServiceWorkerActive: false,
      isLocalCachePurgedActive: false,
      isNewOnlineStatusActive: false,
      bazaarvoice: {
        siteId: "api_implementation",
        clientName: "mediamarkt-es",
        environment: "production",
        locale: "es_ES",
      },
      isPdpReviewLotteryDisplayActive: false,
      isPdpWarrantyHighlightActive: false,
      isNewAuth: true,
      isOrderLevelFiscalInvoiceActive: true,
      isFulfillmentLevelFiscalInvoiceActive: false,
      isServiceCodeDisplayedWhenShippedActive: false,
      isDigitalProductActive: true,
      maxLatestVisitorCountAgeCheckout: 30,
      isOrderHistoryVisitorCountActive: false,
      forceOnlineStatusFalse: "",
      thirdGenderEnabled: true,
      isCcrEnabled: false,
      isGuestForITActive: false,
      isB2BRegistrationActive: true,
      showBlackFridayFacet: true,
      showFreeAppleMusicBanner: false,
      enable2mhSfsServices: false,
      optimizelySDKKey: "SGQqhE23rfkaH6FfP6PUh",
      isNewSAWActive: false,
      isNewSAWExperimentActive: false,
      campaignLandingPage: {
        defaultUrl:
          "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcategory\u002F_campañas-y-ofertas-701114.html",
      },
      host: "https:\u002F\u002Fpwa.prod.webmobile.d-p.io",
      outlet: {
        outletId: "1119",
        country: "ES",
        salesLine: "Media",
        languages: ["es"],
        currencyCode: "EUR",
        currentLanguage: "es",
        prismicLanguage: "es-es",
        locale: "es-ES",
        storeName: "MediaMarkt",
        subsidiary: "MediaES",
      },
      serverRequestTimestamp: 1618991959477,
    },
    root: {
      basket: {
        loading: false,
        error: false,
        success: false,
        messageCodes: [],
        lineItems: null,
      },
      servicesAndWarranties: {
        checkedWarrantyId: null,
        checkedWarrantyName: null,
        checkedWarrantyIndex: null,
        checkedServiceId: null,
        checkedServiceName: null,
        checkedServiceIndex: null,
      },
      user: {
        login: {
          error: null,
          isLoading: false,
          isLoggedIn: false,
          hasUserBeenChecked: false,
          isBootstrapUserDone: false,
          isUserLoggedInSuccessful: false,
          isUserLoggedOutSuccessfully: false,
          userMigrationStatus: null,
        },
        profile: {
          userProfileData: {
            userId: null,
            partyId: null,
            partyIdHash: null,
            email: null,
            firstName: null,
            lastName: null,
            emailOptIn: null,
            birthday: null,
            gender: null,
            newEmail: null,
            type: null,
            company: null,
            taxId: null,
            loyaltyCustomer: null,
            loyaltyCardNumber: null,
            loyaltyCardHash: null,
            basketSize: 0,
          },
          userProfileLoading: false,
          userProfileError: false,
          hasProfileBeenChecked: false,
        },
        registration: {
          error: null,
          isLoading: false,
          isRegistrationSuccessful: false,
          isLoyaltyRegistrationSuccessful: false,
          isRegistrationForLoyaltyCustomerSuccessful: false,
          isLoyaltyCardOwnerDataFetchedSuccessful: false,
          loyaltyCardOwnerData: null,
          loyaltyCardOwnerExistingEmail: null,
        },
        session: {
          personalizationId: null,
          sessionId: null,
          userId: null,
          error: false,
        },
      },
      selectedMarket: {
        loading: false,
        error: false,
        isInitialized: false,
        success: false,
        market: null,
      },
      suggestions: {
        loading: false,
        error: false,
        terms: [],
        history: [],
      },
      marketSelection: {
        loading: false,
        error: null,
        latLng: {},
        searchQuery: "",
        nearbyMarkets: [],
        noResults: false,
        selectedProductId: null,
      },
    },
    ui: {
      openModal: "",
      auth: { formType: null, config: null },
      isNativeApp: false,
      displayCookieLayer: false,
    },
    tracking: { initialized: false, area: null, clientId: null },
    select: {
      tracking: { viewFullLoadedTracked: false },
      infoModal: { loading: false, error: false, content: null },
      availability: {
        market: {
          error: false,
          loading: false,
          deliveryInformation: null,
          type: null,
          shippingCosts: null,
          deliverMinTime: null,
          deliverMaxTime: null,
          cluster: null,
          quantity: null,
          releaseDate: null,
        },
        pickup: {
          availabilityType: null,
          quantity: 0,
          earliest: null,
          latest: null,
        },
      },
      ui: {
        openModal: "",
        displayCookieLayer: false,
        hasRouteChanged: false,
      },
    },
  },
  apolloState: {
    ROOT_QUERY: {
      __typename: "Query",
      pwaHeader: {
        __typename: "GraphqlPwaHeader",
        myaccountButtonLabel: "Mi cuenta",
        myaccountButtonAdditionalLabel: "y mis pedidos",
        myaccountLoginLabel: "Iniciar sesión",
        myaccountLogoutLabel: "Cerrar sesión",
        myaccountSignupLabel: "Registro",
        myaccountPrefillSignUpLabel:
          "Regístrate con tu número de tarjeta",
        myaccountGreeting: "Bienvenido",
        myaccountSignupTeaserTitle: "¿Todavía no estas registrado?",
        myaccountSignupTeaserText:
          "Regístrate ahora, conviértete en socio del club si lo deseas y disfruta de muchas ventajas.",
        myaccountNavItems: [
          {
            __typename: "GraphqlPwaHeaderNavItem",
            label: "Mi cuenta",
            url: "\u002Fes\u002Fmyaccount",
            visibility: "LOGGED_IN",
            type: "EXTERNAL",
          },
          {
            __typename: "GraphqlPwaHeaderNavItem",
            label: "Mis pedidos",
            url: "\u002Fes\u002Fmyaccount\u002Forders",
            visibility: "LOGGED_IN",
            type: "EXTERNAL",
          },
          {
            __typename: "GraphqlPwaHeaderNavItem",
            label: "Mi lista de deseos",
            url:
              "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fmyaccount\u002Fwishlist",
            visibility: "LOGGED_IN",
            type: "EXTERNAL",
          },
          {
            __typename: "GraphqlPwaHeaderNavItem",
            label: "Contacto",
            url: "https:\u002F\u002Fspecials.mediamarkt.es\u002Fcontacto",
            visibility: "LOGGED_IN",
            type: "EXTERNAL",
          },
          {
            __typename: "GraphqlPwaHeaderNavItem",
            label: "Newsletter",
            url:
              "https:\u002F\u002Fspecials.mediamarkt.es\u002F10-euros-de-bienvenida",
            visibility: "LOGGED_IN",
            type: "EXTERNAL",
          },
        ],
        basketLabel: "Mi carrito",
        basketUrl:
          "\u002Fwebapp\u002Fwcs\u002Fstores\u002Fservlet\u002FMultiChannelDisplayBasket",
        categoryButtonLabel: "Todas las categorías",
        categoryPrefix: null,
        categoryNavItems: [
          {
            __typename: "GraphqlPwaHeaderMainCategory",
            label: "Campañas y ofertas",
            url:
              "\u002Fes\u002Fcategory\u002F_campañas-y-ofertas-701114.html",
            type: "EXTERNAL",
            subCategories: [
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ofertas Aniversario + Financiación 0%",
                    url:
                      "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcampaign\u002Fofertas-historicas",
                    type: "INTERNAL",
                    headline: true,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Sony Days",
                    url:
                      "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcampaign\u002Fbrand-day",
                    type: "INTERNAL",
                    headline: true,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Bosch Days",
                    url:
                      "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcampaign\u002Faccion-especial",
                    type: "INTERNAL",
                    headline: true,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Especial Clima",
                    url:
                      "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcampaign\u002Fespecial-clima",
                    type: "INTERNAL",
                    headline: true,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Teletrabajo",
                    url:
                      "\u002Fes\u002Fspecials\u002Fteletrabajo-y-aula-virtual",
                    type: "INTERNAL",
                    headline: true,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Apple Music",
                    url:
                      "https:\u002F\u002Fspecials.mediamarkt.es\u002Fapple-music?source=es-mm-online-menu-leftnavi",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
              ],
            ],
          },
          {
            __typename: "GraphqlPwaHeaderMainCategory",
            label: "Informática",
            url: "\u002Fes\u002Fcategory\u002F_informática-701127.html",
            type: "EXTERNAL",
            subCategories: [
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Portátiles",
                    url:
                      "\u002Fes\u002Fcategory\u002F_portátiles-701175.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Convertibles 2 en 1",
                    url:
                      "\u002Fes\u002Fcategory\u002F_convertibles-2-en-1-701426.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: 'Portátiles de menos de 14"',
                    url:
                      "\u002Fes\u002Fcategory\u002F_portátiles-de-menos-de-14-701421.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: 'Portátiles de 14" a 16.9"',
                    url:
                      "\u002Fes\u002Fcategory\u002F_portátiles-de-14-a-16-9-701422.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Chromebooks",
                    url:
                      "\u002Fes\u002Fcategory\u002F_chromebooks-763521.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_portátiles-701175.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "PC sobremesa",
                    url:
                      "\u002Fes\u002Fcategory\u002F_pc-sobremesa-701176.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ordenadores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_ordenadores-701427.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "All in One",
                    url:
                      "\u002Fes\u002Fcategory\u002F_all-in-one-701430.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Mini PC",
                    url:
                      "\u002Fes\u002Fcategory\u002F_mini-pc-701431.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_pc-sobremesa-701176.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Zona Apple",
                    url: "\u002Fes\u002Fshop\u002Fzona-apple.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Tablets",
                    url:
                      "\u002Fes\u002Fcategory\u002F_tablets-701178.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Tablets Android",
                    url:
                      "\u002Fes\u002Fcategory\u002F_tablets-android-701434.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Tablets iOS",
                    url:
                      "\u002Fes\u002Fcategory\u002F_tablets-ios-701435.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "eBooks",
                    url:
                      "\u002Fes\u002Fcategory\u002F_ebooks-701186.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_tablets-701178.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Impresoras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_impresoras-701181.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Multifunción de tinta",
                    url:
                      "\u002Fes\u002Fcategory\u002F_multifunción-de-tinta-701456.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Impresora láser color",
                    url:
                      "\u002Fes\u002Fcategory\u002F_impresora-láser-color-701460.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Impresora láser",
                    url:
                      "\u002Fes\u002Fcategory\u002F_impresora-láser-701458.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cartuchos y consumibles",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cartuchos-y-consumibles-701184.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_impresoras-701181.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Zona Samsung",
                    url: "\u002Fes\u002Fshop\u002Fzona-samsung.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Zona Huawei",
                    url: "\u002Fes\u002Fshop\u002Fzona-huawei.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Monitores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_monitores-701179.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: 'Monitor de 19" a 21.9"',
                    url:
                      "\u002Fes\u002Fcategory\u002F_monitor-de-19-a-21-9-701440.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: 'Monitor de 22" a 26.9"',
                    url:
                      "\u002Fes\u002Fcategory\u002F_monitor-de-22-a-26-9-701441.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: 'Monitor desde 27"',
                    url:
                      "\u002Fes\u002Fcategory\u002F_monitor-desde-27-701442.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Monitores 4K",
                    url:
                      "\u002Fes\u002Fcategory\u002F_monitores-4k-756525.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_monitores-701179.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Almacenamiento",
                    url:
                      "\u002Fes\u002Fcategory\u002F_almacenamiento-701180.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Discos duros externos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_discos-duros-externos-701445.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "SSD",
                    url: "\u002Fes\u002Fcategory\u002F_ssd-701447.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Discos duros internos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_discos-duros-internos-701446.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Pendrives y memorias USB",
                    url:
                      "\u002Fes\u002Fcategory\u002F_pendrives-y-memorias-usb-701449.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_almacenamiento-701180.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
            ],
          },
          {
            __typename: "GraphqlPwaHeaderMainCategory",
            label: "Gaming",
            url: "\u002Fes\u002Fcategory\u002F_gaming-701174.html",
            type: "EXTERNAL",
            subCategories: [
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Portátiles gaming",
                    url:
                      "\u002Fes\u002Fcategory\u002F_port%C3%A1tiles-gaming-701410.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "PC gaming",
                    url:
                      "\u002Fes\u002Fcategory\u002F_pc-gaming-701411.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Monitores gaming",
                    url:
                      "\u002Fes\u002Fcategory\u002F_monitores-gaming-701412.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Juegos PC y videojuegos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_juegos-pc-y-videojuegos-701418.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Accesorios gaming",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-gaming-785073.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Teclados gaming",
                    url:
                      "\u002Fes\u002Fcategory\u002F_teclado-gaming-702464.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ratones gaming",
                    url:
                      "\u002Fes\u002Fcategory\u002F_ratones-gaming-702479.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Auriculares gaming",
                    url:
                      "\u002Fes\u002Fcategory\u002F_auriculares-gaming-702106.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Sillas gaming",
                    url:
                      "\u002Fes\u002Fcategory\u002F_sillas-gaming-702489.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-gaming-785073.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                ],
              ],
            ],
          },
          {
            __typename: "GraphqlPwaHeaderMainCategory",
            label: "Accesorios de informática",
            url:
              "\u002Fes\u002Fcategory\u002F_accesorios-de-informática-701173.html",
            type: "EXTERNAL",
            subCategories: [
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Almacenamiento",
                    url:
                      "\u002Fes\u002Fcategory\u002F_almacenamiento-701180.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Discos duros externos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_discos-duros-externos-701445.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "SSD",
                    url: "\u002Fes\u002Fcategory\u002F_ssd-701447.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Discos duros internos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_discos-duros-internos-701446.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Pendrives y memorias USB",
                    url:
                      "\u002Fes\u002Fcategory\u002F_pendrives-y-memorias-usb-701449.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_almacenamiento-701180.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Accesorios tablets",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-tablets-701387.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Fundas teclado",
                    url:
                      "\u002Fes\u002Fcategory\u002F_fundas-teclado-702386.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Fundas tablet",
                    url:
                      "\u002Fes\u002Fcategory\u002F_fundas-tablet-702385.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Adaptadores tablet",
                    url:
                      "\u002Fes\u002Fcategory\u002F_adaptadores-tablet-702383.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cargadores tablet",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cargadores-tablet-702384.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-tablets-701387.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cables, regletas y hubs",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cables-regletas-y-hubs-701393.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cables de red",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cables-de-red-702411.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cables USB",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cables-usb-702412.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cables HDMI",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cables-hdmi-702083.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Accesorios telefonía",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-telefonía-702414.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cables-regletas-y-hubs-701393.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cartuchos y consumibles",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cartuchos-y-consumibles-701184.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cartuchos de tinta",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cartuchos-de-tinta-701465.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Tóners",
                    url:
                      "\u002Fes\u002Fcategory\u002F_tóners-701469.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Papel impresoras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_papel-impresoras-701467.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Tambores impresora",
                    url:
                      "\u002Fes\u002Fcategory\u002F_tambores-impresora-701468.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cartuchos-y-consumibles-701184.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ratones y alfombrillas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_ratones-y-alfombrillas-701404.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ratones inalámbricos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_ratones-inalámbricos-702445.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ratones gaming",
                    url:
                      "\u002Fes\u002Fcategory\u002F_ratones-gaming-pc-702479.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ratones con cable",
                    url:
                      "\u002Fes\u002Fcategory\u002F_ratones-con-cable-702444.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Alfombrillas de ratón",
                    url:
                      "\u002Fes\u002Fcategory\u002F_alfombrillas-de-ratón-702443.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_ratones-y-alfombrillas-701404.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Alimentación y carga",
                    url:
                      "\u002Fes\u002Fcategory\u002F_alimentación-y-carga-701388.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cargador universal AC\u002FDC",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cargador-universal-ac-dc-702394.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Power Bank",
                    url:
                      "\u002Fes\u002Fcategory\u002F_power-bank-702526.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "SAI",
                    url: "\u002Fes\u002Fcategory\u002F_sai-702403.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cargadores para coche",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cargadores-para-coche-702529.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_alimentación-y-carga-701388.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Redes y conectividad",
                    url:
                      "\u002Fes\u002Fcategory\u002F_redes-y-conectividad-701405.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Modem \u002F Router WiFi",
                    url:
                      "\u002Fes\u002Fcategory\u002F_modem-router-wifi-702455.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Adaptador de red",
                    url:
                      "\u002Fes\u002Fcategory\u002F_adaptador-de-red-702449.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Antenas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_antenas-702448.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Adaptadores USB",
                    url:
                      "\u002Fes\u002Fcategory\u002F_adaptadores-usb-702450.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_redes-y-conectividad-701405.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Teclados",
                    url:
                      "\u002Fes\u002Fcategory\u002F_teclados-701408.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Packs teclado + ratón",
                    url:
                      "\u002Fes\u002Fcategory\u002F_packs-teclado-ratón-702469.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Teclado gaming",
                    url:
                      "\u002Fes\u002Fcategory\u002F_teclado-gaming-702464.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Teclados Bluetooth",
                    url:
                      "\u002Fes\u002Fcategory\u002F_teclados-bluetooth-702462.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Teclados con cable",
                    url:
                      "\u002Fes\u002Fcategory\u002F_teclados-con-cable-702461.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_teclados-701408.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
            ],
          },
          {
            __typename: "GraphqlPwaHeaderMainCategory",
            label: "Telefonía",
            url: "\u002Fes\u002Fcategory\u002F_telefonía-701128.html",
            type: "EXTERNAL",
            subCategories: [
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Smartphones",
                    url:
                      "\u002Fes\u002Fcategory\u002F_smartphones-701189.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Móviles básicos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_móviles-básicos-701190.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Relojes y pulseras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_smartwatches-701191.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Smartwatches",
                    url:
                      "\u002Fes\u002Fcategory\u002F_smartwatches-701191.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Sportwatches",
                    url:
                      "\u002Fes\u002Fcategory\u002F_relojes-y-pulsómetros-701331.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Pulseras actividad",
                    url:
                      "\u002Fes\u002Fcategory\u002F_pulseras-actividad-701332.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Correas y recambios",
                    url:
                      "\u002Fes\u002Fcategory\u002F_correas-y-recambios-702278.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Tarifas telefonía",
                    url:
                      "https:\u002F\u002Fspecials.mediamarkt.es\u002Ftarifas-moviles",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Accesorios para móviles",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-para-móviles-701193.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Auriculares",
                    url:
                      "\u002Fes\u002Fcategory\u002F_auriculares-701227.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Tarjetas microSD",
                    url:
                      "\u002Fes\u002Fcategory\u002F_tarjetas-microsd-701491.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Baterías y Power Banks",
                    url:
                      "\u002Fes\u002Fcategory\u002F_bateras-y-power-banks-701489.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Fundas y carcasas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_fundas-y-carcasas-701488.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-para-móviles-701193.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Telefonía doméstica",
                    url:
                      "\u002Fes\u002Fcategory\u002F_telefonía-doméstica-701196.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Teléfonos inalámbricos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_teléfonos-inalámbricos-701498.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Teléfonos fijos sobremesa",
                    url:
                      "\u002Fes\u002Fcategory\u002F_teléfonos-fijos-sobremesa-701499.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Gadgets y realidad virtual",
                    url:
                      "\u002Fes\u002Fcategory\u002F_gadgets-y-realidad-virtual-701192.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Drones",
                    url:
                      "\u002Fes\u002Fcategory\u002F_drones-701208.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Realidad virtual",
                    url:
                      "\u002Fes\u002Fcategory\u002F_realidad-virtual-701487.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Lentes para móviles",
                    url:
                      "\u002Fes\u002Fcategory\u002F_lentes-para-móviles-701484.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Palos selfie",
                    url:
                      "\u002Fes\u002Fcategory\u002F_palos-selfie-701482.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_gadgets-y-realidad-virtual-701192.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Zona Apple",
                    url: "\u002Fes\u002Fshop\u002Fzona-apple.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Zona Huawei",
                    url: "\u002Fes\u002Fshop\u002Fzona-huawei.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Zona Samsung",
                    url: "\u002Fes\u002Fshop\u002Fzona-samsung.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Zona Xiaomi",
                    url: "\u002Fes\u002Fspecials\u002Fzona-xiaomi",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
              ],
            ],
          },
          {
            __typename: "GraphqlPwaHeaderMainCategory",
            label: "Televisión",
            url: "\u002Fes\u002Fcategory\u002F_televisión-701130.html",
            type: "EXTERNAL",
            subCategories: [
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Televisores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_televisores-701210.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "TV 28-32 pulgadas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_tv-28-32-pulgadas-702041.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "TV 40-43 pulgadas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_tv-40-43-pulgadas-702042.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "TV 48-50 pulgadas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_tv-48-50-pulgadas-702043.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "TV 55-60 pulgadas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_tv-55-60-pulgadas-702044.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_televisores-701210.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Internet TV \u002F TDT \u002F Satélite",
                    url:
                      "\u002Fes\u002Fcategory\u002F_internet-tv-tdt-satélite-701212.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Receptor TDT",
                    url:
                      "\u002Fes\u002Fcategory\u002F_receptor-tdt-702054.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Satélite",
                    url:
                      "\u002Fes\u002Fcategory\u002F_satélite-702055.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Smart TV Box",
                    url:
                      "\u002Fes\u002Fcategory\u002F_smart-tv-box-702053.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Accesorios",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-702058.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Soportes TV",
                    url:
                      "\u002Fes\u002Fcategory\u002F_soportes-tv-701211.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "TV - Con brazo",
                    url:
                      "\u002Fes\u002Fcategory\u002F_tv-con-brazo-702048.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "TV - Inclinable",
                    url:
                      "\u002Fes\u002Fcategory\u002F_tv-inclinable-702047.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "TV - Fijos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_tv-fijos-702046.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Otros soportes y complementos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_otros-soportes-y-complementos-702052.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_soportes-tv-701211.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Accesorios TV",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-tv-724512.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Mandos a distancia",
                    url:
                      "\u002Fes\u002Fcategory\u002F_mandos-a-distancia-701219.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cables TV",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cables-tv-701220.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Antenas TV",
                    url:
                      "\u002Fes\u002Fcategory\u002F_antenas-tv-701218.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Limpieza televisión",
                    url:
                      "\u002Fes\u002Fcategory\u002F_limpieza-televisión-701222.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Proyectores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_proyectores-701213.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Mini proyectores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_mini-proyectores-702061.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cine en casa \u002F 3D",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cine-en-casa-3d-702059.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Proyectores 4K",
                    url:
                      "\u002Fes\u002Fcategory\u002F_proyectores-4k-761012.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Proyectores Full HD",
                    url:
                      "\u002Fes\u002Fcategory\u002F_proyectores-full-hd-761013.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_proyectores-701213.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Reproductores DVD \u002F Blu-ray",
                    url:
                      "\u002Fes\u002Fcategory\u002F_reproductores-dvd-blu-ray-701214.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "DVD",
                    url: "\u002Fes\u002Fcategory\u002F_dvd-702066.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "DVD portátil",
                    url:
                      "\u002Fes\u002Fcategory\u002F_dvd-portátil-702068.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Blu-ray",
                    url:
                      "\u002Fes\u002Fcategory\u002F_blu-ray-702067.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Blu-ray Smart TV",
                    url:
                      "\u002Fes\u002Fcategory\u002F_blu-ray-smart-tv-702065.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Zona Xiaomi",
                    url: "\u002Fes\u002Fspecials\u002Fzona-xiaomi",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
              ],
            ],
          },
          {
            __typename: "GraphqlPwaHeaderMainCategory",
            label: "Audio y HiFi",
            url: "\u002Fes\u002Fcategory\u002F_audio-y-hifi-701131.html",
            type: "EXTERNAL",
            subCategories: [
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Auriculares",
                    url:
                      "\u002Fes\u002Fcategory\u002F_auriculares-701227.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Auriculares de botón",
                    url:
                      "\u002Fes\u002Fcategory\u002F_auriculares-de-botón-702108.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Auriculares inalámbricos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_auriculares-inalámbricos-702109.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Auriculares gaming",
                    url:
                      "\u002Fes\u002Fcategory\u002F_auriculares-gaming-702106.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Auriculares True Wireless",
                    url:
                      "\u002Fes\u002Fcategory\u002F_auriculares-true-wireless-715087.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_auriculares-701227.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "HiFi",
                    url: "\u002Fes\u002Fcategory\u002F_hifi-701229.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Tocadiscos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_tocadiscos-702116.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Amplificador estéreo",
                    url:
                      "\u002Fes\u002Fcategory\u002F_amplificador-estéreo-702115.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Receptores AV",
                    url:
                      "\u002Fes\u002Fcategory\u002F_receptores-av-702114.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Micrófonos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_micrófonos-702118.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url: "\u002Fes\u002Fcategory\u002F_hifi-701229.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Home cinema",
                    url:
                      "\u002Fes\u002Fcategory\u002F_home-cinema-701224.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Home cinema 5.1 canales",
                    url:
                      "\u002Fes\u002Fcategory\u002F_home-cinema-5-1-canales-702097.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Home cinema 2.1 canales",
                    url:
                      "\u002Fes\u002Fcategory\u002F_home-cinema-2-1-canales-702096.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Subwoofer",
                    url:
                      "\u002Fes\u002Fcategory\u002F_subwoofer-702099.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Barras de sonido",
                    url:
                      "\u002Fes\u002Fcategory\u002F_barras-de-sonido-701225.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Barras de sonido con subwoofer",
                    url:
                      "\u002Fes\u002Fcategory\u002F_barras-de-sonido-con-subwoofer-702100.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Barras de sonido sin subwoofer",
                    url:
                      "\u002Fes\u002Fcategory\u002F_barras-de-sonido-sin-subwoofer-702101.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Car audio y GPS",
                    url:
                      "\u002Fes\u002Fcategory\u002F_car-audio-y-gps-701233.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "GPS",
                    url: "\u002Fes\u002Fcategory\u002F_gps-702131.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Autorradios",
                    url:
                      "\u002Fes\u002Fcategory\u002F_autorradios-702132.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Altavoces y subwoofers",
                    url:
                      "\u002Fes\u002Fcategory\u002F_altavoces-y-subwoofers-702133.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Accesorios car audio y GPS",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-car-audio-y-gps-702139.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_car-audio-y-gps-701233.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Reproductores de música",
                    url:
                      "\u002Fes\u002Fcategory\u002F_reproductores-de-música-701226.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "MP4 \u002F MP5",
                    url:
                      "\u002Fes\u002Fcategory\u002F_mp4-mp5-702104.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "MP3",
                    url: "\u002Fes\u002Fcategory\u002F_mp3-702103.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "MP3 \u002F MP4 deportivos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_mp3-mp4-deportivos-702105.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Altavoces",
                    url:
                      "\u002Fes\u002Fcategory\u002F_altavoces-701223.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Altavoces inalámbricos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_altavoces-inalámbricos-702088.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Altavoces HiFi estéreo",
                    url:
                      "\u002Fes\u002Fcategory\u002F_altavoces-hifi-estéreo-702092.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Sistema multiroom",
                    url:
                      "\u002Fes\u002Fcategory\u002F_sistema-multiroom-702090.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Accesorios para altavoces",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-para-altavoces-702095.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_altavoces-701223.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Radio y CD portátil",
                    url:
                      "\u002Fes\u002Fcategory\u002F_radio-y-cd-portátil-701231.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Radio portátil",
                    url:
                      "\u002Fes\u002Fcategory\u002F_radio-portátil-702127.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Radio CD",
                    url:
                      "\u002Fes\u002Fcategory\u002F_radio-cd-702128.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Despertadores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_despertadores-702130.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Minicadenas \u002F Microcadenas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_minicadenas-microcadenas-701228.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
              ],
            ],
          },
          {
            __typename: "GraphqlPwaHeaderMainCategory",
            label: "Smart Home",
            url: "\u002Fes\u002Fcategory\u002F_smart-home-701137.html",
            type: "EXTERNAL",
            subCategories: [
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Seguridad inteligente",
                    url:
                      "\u002Fes\u002Fcategory\u002F_seguridad-inteligente-701275.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cámaras WIFI IP",
                    url:
                      "\u002Fes\u002Fcategory\u002F_c%C3%A1maras-wifi-ip-702243.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Alarmas y timbres",
                    url:
                      "\u002Fes\u002Fcategory\u002F_alarmas-y-timbres-701276.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Kits smarthome",
                    url:
                      "\u002Fes\u002Fcategory\u002F_kits-smarthome-701280.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cerraduras electrónicas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cerraduras-electr%C3%B3nicas-785075.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_seguridad-inteligente-701275.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Altavoces inteligentes",
                    url:
                      "\u002Fes\u002Fcategory\u002F_altavoces-inteligentes-716008.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Alexa Echo",
                    url:
                      "\u002Fes\u002Fcategory\u002F_alexa-echo-757549.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Google Nest",
                    url:
                      "\u002Fes\u002Fcategory\u002F_google-nest-757551.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Apple Homepod",
                    url:
                      "\u002Fes\u002Fcategory\u002F_apple-homepod-757550.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Reproductor multimedia",
                    url:
                      "\u002Fes\u002Fcategory\u002F_reproductor-multimedia-702498.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ilum. y ahorro energético",
                    url:
                      "\u002Fes\u002Fcategory\u002F_ilum-y-ahorro-energ%C3%A9tico-701278.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Iluminación",
                    url:
                      "\u002Fes\u002Fcategory\u002F_iluminaci%C3%B3n-702251.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Interruptores y enchufes",
                    url:
                      "\u002Fes\u002Fcategory\u002F_interruptores-y-enchufes-702252.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Termostatos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_termostatos-770067.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Detectores y sensores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_detectores-y-sensores-701279.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
              ],
            ],
          },
          {
            __typename: "GraphqlPwaHeaderMainCategory",
            label: "Consolas y videojuegos",
            url:
              "\u002Fes\u002Fcategory\u002F_consolas-y-videojuegos-701147.html",
            type: "EXTERNAL",
            subCategories: [
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Consolas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_consolas-701339.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Consolas Nintendo Switch",
                    url:
                      "\u002Fes\u002Fcategory\u002F_consolas-nintendo-switch-702293.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Consolas PS4",
                    url:
                      "\u002Fes\u002Fcategory\u002F_consolas-ps4-702291.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Consolas Xbox Series X y S",
                    url:
                      "\u002Fes\u002Fcategory\u002F_consolas-xbox-series-x-y-s-772025.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Otras consolas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_otras-consolas-702296.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_consolas-701339.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Próximos lanzamientos juegos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_próximos-lanzamientos-juegos-701338.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Próximos lanzamientos PS5",
                    url:
                      "\u002Fes\u002Fcategory\u002F_próximos-lanzamientos-ps5-772830.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Próximos lanzamientos PS4",
                    url:
                      "\u002Fes\u002Fcategory\u002F_próximos-lanzamientos-ps4-702283.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Próximos lanzamientos Nintendo Switch",
                    url:
                      "\u002Fes\u002Fcategory\u002F_próximos-lanzamientos-nintendo-switch-702284.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Próximos lanzamientos Xbox Series X y S",
                    url:
                      "\u002Fes\u002Fcategory\u002F_próximos-lanzamientos-xbox-series-x-y-s-772831.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_próximos-lanzamientos-juegos-701338.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Merchandising",
                    url:
                      "\u002Fes\u002Fcategory\u002F_merchandising-701345.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Funko Pop",
                    url:
                      "\u002Fes\u002Fcategory\u002F_funko-pop-702329.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Figuras y réplicas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_figuras-y-réplicas-702328.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Juegos de mesa",
                    url:
                      "\u002Fes\u002Fcategory\u002F_juegos-de-mesa-702336.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ropa y accesorios",
                    url:
                      "\u002Fes\u002Fcategory\u002F_ropa-y-accesorios-702330.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_merchandising-701345.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Accesorios consolas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-consolas-701343.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Accesorios Sony PS5",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-sony-ps5-773519.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Accesorios Sony PS4",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-sony-ps4-702309.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Accesorios Nintendo Switch",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-nintendo-switch-702313.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Accesorios Xbox Series X y S",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-xbox-series-x-y-s-773520.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-consolas-701343.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Realidad virtual",
                    url:
                      "\u002Fes\u002Fcategory\u002F_realidad-virtual-720237.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "PlayStation VR",
                    url:
                      "\u002Fes\u002Fcategory\u002F_playstation-vr-758037.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Juegos VR",
                    url:
                      "\u002Fes\u002Fcategory\u002F_juegos-vr-758034.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Toys to life",
                    url:
                      "\u002Fes\u002Fcategory\u002F_toys-to-life-701344.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Amiibo",
                    url:
                      "\u002Fes\u002Fcategory\u002F_amiibo-702324.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Skylanders",
                    url:
                      "\u002Fes\u002Fcategory\u002F_skylanders-702325.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Disney Infinity",
                    url:
                      "\u002Fes\u002Fcategory\u002F_disney-infinity-702326.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Juegos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_juegos-701342.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Juegos PS5",
                    url:
                      "\u002Fes\u002Fcategory\u002F_juegos-ps5-772827.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Juegos PS4",
                    url:
                      "\u002Fes\u002Fcategory\u002F_juegos-ps4-702297.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Juegos Nintendo Switch",
                    url:
                      "\u002Fes\u002Fcategory\u002F_juegos-nintendo-switch-702299.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Juegos Xbox Series X y S",
                    url:
                      "\u002Fes\u002Fcategory\u002F_juegos-xbox-series-x-y-s-772828.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_juegos-701342.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Universo retro",
                    url:
                      "\u002Fes\u002Fcategory\u002F_universo-retro-701341.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Consolas Arcade y Retro",
                    url:
                      "\u002Fes\u002Fcategory\u002F_consolas-arcade-y-retro-759539.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
            ],
          },
          {
            __typename: "GraphqlPwaHeaderMainCategory",
            label: "Electrodomésticos",
            url:
              "\u002Fes\u002Fcategory\u002F_electrodomésticos-701132.html",
            type: "EXTERNAL",
            subCategories: [
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Frigoríficos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_frigoríficos-701234.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Frigoríficos combinados",
                    url:
                      "\u002Fes\u002Fcategory\u002F_frigoríficos-combinados-702140.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Frigoríficos americanos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_frigoríficos-americanos-702141.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Frigoríficos dos puertas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_frigoríficos-dos-puertas-702142.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Frigoríficos una puerta",
                    url:
                      "\u002Fes\u002Fcategory\u002F_frigoríficos-una-puerta-702143.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_frigoríficos-701234.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Congeladores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_congeladores-701235.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Congeladores horizontales",
                    url:
                      "\u002Fes\u002Fcategory\u002F_congeladores-horizontales-702149.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Congeladores verticales",
                    url:
                      "\u002Fes\u002Fcategory\u002F_congeladores-verticales-702147.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Congeladores bajo encimera",
                    url:
                      "\u002Fes\u002Fcategory\u002F_congeladores-bajo-encimera-702148.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Congeladores integrables",
                    url:
                      "\u002Fes\u002Fcategory\u002F_congeladores-integrables-702150.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_congeladores-701235.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Lavadoras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_lavadoras-701243.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Lavadoras carga frontal",
                    url:
                      "\u002Fes\u002Fcategory\u002F_lavadoras-carga-frontal-702191.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Lavadoras carga superior",
                    url:
                      "\u002Fes\u002Fcategory\u002F_lavadoras-carga-superior-702192.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Lavadoras - secadoras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_lavadoras-secadoras-702193.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Lavadoras integrables",
                    url:
                      "\u002Fes\u002Fcategory\u002F_lavadoras-integrables-702194.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_lavadoras-701243.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Secadoras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_secadoras-701244.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Secadoras bomba de calor",
                    url:
                      "\u002Fes\u002Fcategory\u002F_secadoras-bomba-de-calor-702196.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Secadoras condensación",
                    url:
                      "\u002Fes\u002Fcategory\u002F_secadoras-condensación-702197.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Secadoras evacuación",
                    url:
                      "\u002Fes\u002Fcategory\u002F_secadoras-evacuación-702198.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Tendederos y accesorios",
                    url:
                      "\u002Fes\u002Fcategory\u002F_tendederos-y-accesorios-702199.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_secadoras-701244.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Lavavajillas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_lavavajillas-701240.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Lavavajillas libre instalación",
                    url:
                      "\u002Fes\u002Fcategory\u002F_lavavajillas-libre-instalación-702184.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Lavavajillas integrables",
                    url:
                      "\u002Fes\u002Fcategory\u002F_lavavajillas-integrables-702185.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Lavavajillas de 45 cm",
                    url:
                      "\u002Fes\u002Fcategory\u002F_lavavajillas-de-45cm-758511.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Lavavajillas compactos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_lavavajillas-compactos-702186.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_lavavajillas-701240.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Placas de cocina",
                    url:
                      "\u002Fes\u002Fcategory\u002F_placas-de-cocina-702158.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Placas de inducción",
                    url:
                      "\u002Fes\u002Fcategory\u002F_placas-de-inducción-702619.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Placas vitrocerámicas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_placas-vitrocerámicas-702621.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Placas de gas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_placas-de-gas-702620.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Placas modulares",
                    url:
                      "\u002Fes\u002Fcategory\u002F_placas-modulares-702622.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_placas-de-cocina-702158.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Hornos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_hornos-702160.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Hornos multifunción",
                    url:
                      "\u002Fes\u002Fcategory\u002F_hornos-multifunción-702630.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Hornos a vapor",
                    url:
                      "\u002Fes\u002Fcategory\u002F_hornos-a-vapor-702632.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Hornos pirolíticos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_hornos-pirolíticos-758024.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Hornos convencionales",
                    url:
                      "\u002Fes\u002Fcategory\u002F_hornos-convencionales-702629.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_hornos-702160.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Campanas extractoras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_campanas-extractoras-702161.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Campanas decorativas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_campanas-decorativas-702636.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Campanas extraíbles",
                    url:
                      "\u002Fes\u002Fcategory\u002F_campanas-extraíbles-702637.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Campanas convencionales",
                    url:
                      "\u002Fes\u002Fcategory\u002F_campanas-convencionales-702638.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Campanas de tipo isla",
                    url:
                      "\u002Fes\u002Fcategory\u002F_campanas-de-tipo-isla-702639.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_campanas-extractoras-702161.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Microondas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_microondas-702162.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Microondas sin grill",
                    url:
                      "\u002Fes\u002Fcategory\u002F_microondas-sin-grill-702642.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Microondas con grill",
                    url:
                      "\u002Fes\u002Fcategory\u002F_microondas-con-grill-702643.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Microondas integrables",
                    url:
                      "\u002Fes\u002Fcategory\u002F_microondas-integrables-702645.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Microondas con horno",
                    url:
                      "\u002Fes\u002Fcategory\u002F_microondas-con-horno-702644.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_microondas-702162.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
            ],
          },
          {
            __typename: "GraphqlPwaHeaderMainCategory",
            label: "Pequeños electrodomésticos",
            url:
              "\u002Fes\u002Fcategory\u002F_pequeños-electrodomésticos-778049.html",
            type: "EXTERNAL",
            subCategories: [
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Aspiradoras y limpieza",
                    url:
                      "\u002Fes\u002Fcategory\u002F_aspiradores-y-limpieza-701136.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Robots aspiradores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_robots-aspiradores-701263.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Aspiradores escoba",
                    url:
                      "\u002Fes\u002Fcategory\u002F_aspiradores-escoba-701266.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Aspiradores sin bolsa",
                    url:
                      "\u002Fes\u002Fcategory\u002F_aspiradores-sin-bolsa-701264.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Aspiradores con bolsa",
                    url:
                      "\u002Fes\u002Fcategory\u002F_aspiradores-con-bolsa-701265.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_aspiradores-y-limpieza-701136.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Robots de cocina",
                    url:
                      "\u002Fes\u002Fcategory\u002F_robots-de-cocina-770065.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Robots para cocinar",
                    url:
                      "\u002Fes\u002Fcategory\u002F_robots-para-cocinar-785038.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Robots amasadores y mezcladores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_robots-amasadores-y-mezcladores-785037.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ollas de cocción lenta",
                    url:
                      "\u002Fes\u002Fcategory\u002F_ollas-de-cocci%C3%B3n-lenta-785033.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Panificadoras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_panificadoras-785034.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Sandwicheras y tostadoras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_sandwicheras-y-tostadoras-770066.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Sandwicheras y grills",
                    url:
                      "\u002Fes\u002Fcategory\u002F_sandwicheras-y-grills-770541.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Tostadoras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_tostadoras-770542.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cafeteras y teteras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cafeteras-y-teteras-701236.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cafeteras de cápsulas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cafeteras-de-cápsulas-702151.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cafeteras superautomáticas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cafeteras-superautomáticas-702152.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cafeteras express",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cafeteras-express-702153.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Hervidores y teteras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_hervidores-y-teteras-702156.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cafeteras-y-teteras-701236.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Planchado y costura",
                    url:
                      "\u002Fes\u002Fcategory\u002F_planchado-y-costura-770057.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Planchas de vapor",
                    url:
                      "\u002Fes\u002Fcategory\u002F_planchas-de-vapor-702201.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Centros de planchado",
                    url:
                      "\u002Fes\u002Fcategory\u002F_centros-de-planchado-702200.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Planchado vertical",
                    url:
                      "\u002Fes\u002Fcategory\u002F_planchado-vertical-702202.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Costura",
                    url:
                      "\u002Fes\u002Fcategory\u002F_costura-701246.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_planchado-y-costura-770057.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Freidoras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_freidoras-702169.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Freidoras sin aceite",
                    url:
                      "\u002Fes\u002Fcategory\u002F_freidoras-sin-aceite-785032.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Freidoras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_freidoras-785031.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Menaje",
                    url:
                      "\u002Fes\u002Fcategory\u002F_menaje-702175.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Sartenes",
                    url:
                      "\u002Fes\u002Fcategory\u002F_sartenes-702657.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ollas express",
                    url:
                      "\u002Fes\u002Fcategory\u002F_ollas-express-772069.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Balanzas de cocina",
                    url:
                      "\u002Fes\u002Fcategory\u002F_balanzas-de-cocina-770535.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Tuppers y fiambreras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_tuppers-y-fiambreras-702662.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_menaje-702175.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Batidoras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_batidoras-702164.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Batidoras de vaso",
                    url:
                      "\u002Fes\u002Fcategory\u002F_batidoras-de-vaso-702648.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Batidoras de mano",
                    url:
                      "\u002Fes\u002Fcategory\u002F_batidoras-de-mano-702647.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Batidoras de respostería",
                    url:
                      "\u002Fes\u002Fcategory\u002F_batidoras-de-repostería-702177.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_batidoras-702164.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Planchas de asar y raclettes",
                    url:
                      "\u002Fes\u002Fcategory\u002F_planchas-de-asar-y-raclettes-702168.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Planchas de asar",
                    url:
                      "\u002Fes\u002Fcategory\u002F_planchas-de-asar-785035.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Raclettes",
                    url:
                      "\u002Fes\u002Fcategory\u002F_raclettes-785036.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                ],
              ],
            ],
          },
          {
            __typename: "GraphqlPwaHeaderMainCategory",
            label: "Belleza y salud",
            url:
              "\u002Fes\u002Fcategory\u002F_belleza-y-salud-701113.html",
            type: "EXTERNAL",
            subCategories: [
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Afeitado y depilación",
                    url:
                      "\u002Fes\u002Fcategory\u002F_afeitado-y-depilación-701138.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Afeitadoras faciales",
                    url:
                      "\u002Fes\u002Fcategory\u002F_afeitadoras-faciales-701281.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Afeitadoras multifunción",
                    url:
                      "\u002Fes\u002Fcategory\u002F_afeitadoras-multifunción-701283.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Depiladoras IPL",
                    url:
                      "\u002Fes\u002Fcategory\u002F_depiladoras-ipl-701286.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Depiladoras de arranque",
                    url:
                      "\u002Fes\u002Fcategory\u002F_depiladoras-de-arranque-701288.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_afeitado-y-depilación-701138.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cuidado facial",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cuidado-facial-701141.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Máquinas de sauna facial",
                    url:
                      "\u002Fes\u002Fcategory\u002F_máquinas-de-sauna-facial-701299.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cepillos y limpiadores faciales",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cepillos-y-limpiadores-faciales-701300.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Rejuvenecedores-tonificadores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_rejuvenecedores-tonificadores-701301.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Espejos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_espejos-701302.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cuidado-facial-701141.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Salud y bienestar",
                    url:
                      "\u002Fes\u002Fcategory\u002F_salud-y-bienestar-701144.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Básculas de baño",
                    url:
                      "\u002Fes\u002Fcategory\u002F_básculas-de-baño-701314.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Almohadillas eléctricas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_almohadillas-eléctricas-701315.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Humidificadores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_humidificadores-701321.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Aparatos médicos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_aparatos-médicos-701318.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_salud-y-bienestar-701144.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cuidado del cabello",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cuidado-del-cabello-701139.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Secadores de pelo",
                    url:
                      "\u002Fes\u002Fcategory\u002F_secadores-de-pelo-701290.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Planchas de pelo",
                    url:
                      "\u002Fes\u002Fcategory\u002F_planchas-de-pelo-701291.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Moldeadores de pelo",
                    url:
                      "\u002Fes\u002Fcategory\u002F_moldeadores-de-pelo-701292.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cepillos de calor",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cepillos-de-calor-701293.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cuidado-del-cabello-701139.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cuidado corporal",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cuidado-corporal-701142.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cavitación y radiofrecuencia",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cavitación-y-radio-frecuencia-701303.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Masajeadores y anticelulíticos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_masajeadores-y-anticelulíticos-701304.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cremas y tratamientos corporales",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cremas-y-tratamientos-corporales-701305.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Packs de cuidado corporal",
                    url:
                      "\u002Fes\u002Fcategory\u002F_packs-de-cuidado-corporal-701306.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cuidado-corporal-701142.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cuidado del bebé",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cuidado-del-bebé-701145.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Vigilabebés",
                    url:
                      "\u002Fes\u002Fcategory\u002F_vigilabebés-701325.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Termómetros para bebé",
                    url:
                      "\u002Fes\u002Fcategory\u002F_termómetros-para-bebé-701328.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Humidificadores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_humidificadores-701329.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Nebulizadores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_nebulizadores-701327.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cuidado-del-bebé-701145.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cuidado dental",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cuidado-dental-701140.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cepillos de dientes",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cepillos-de-dientes-701295.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cepillos infantiles",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cepillos-infantiles-701296.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Irrigadores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_irrigadores-701297.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Recambios cuidado dental",
                    url:
                      "\u002Fes\u002Fcategory\u002F_recambios-cuidado-dental-701298.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cuidado-dental-701140.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cuidado de pies y manos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cuidado-de-pies-y-manos-701143.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Manicura y pedicura",
                    url:
                      "\u002Fes\u002Fcategory\u002F_manicura-y-pedicura-701308.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Hidromasaje y parafina",
                    url:
                      "\u002Fes\u002Fcategory\u002F_hidromasaje-y-parafina-701312.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Sets y accesorios",
                    url:
                      "\u002Fes\u002Fcategory\u002F_sets-y-accesorios-701311.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Limadores de durezas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_limadores-de-durezas-701313.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cuidado-de-pies-y-manos-701143.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
            ],
          },
          {
            __typename: "GraphqlPwaHeaderMainCategory",
            label: "Climatización y calefacción",
            url:
              "\u002Fes\u002Fcategory\u002F_climatización-y-calefacción-701134.html",
            type: "INTERNAL",
            subCategories: [
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Aire acondicionado",
                    url:
                      "\u002Fes\u002Fcategory\u002F_aire-acondicionado-701248.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Split 1x1",
                    url:
                      "\u002Fes\u002Fcategory\u002F_split-1-x-1-702211.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Aire acondicionado portátil",
                    url:
                      "\u002Fes\u002Fcategory\u002F_aire-acondicionado-portátil-701253.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Accesorios aire acondicionado",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-aire-acondicionado-702213.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ventiladores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_ventiladores-701254.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ventiladores de exterior",
                    url:
                      "\u002Fes\u002Fcategory\u002F_ventiladores-exterior-770068.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ventiladores de torre",
                    url:
                      "\u002Fes\u002Fcategory\u002F_ventilador-de-torre-702219.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ventiladores de pie",
                    url:
                      "\u002Fes\u002Fcategory\u002F_ventilador-de-pie-702220.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ventiladores de sobremesa",
                    url:
                      "\u002Fes\u002Fcategory\u002F_ventilador-de-sobremesa-702221.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_ventiladores-701254.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Calefacción",
                    url:
                      "\u002Fes\u002Fcategory\u002F_calefacción-701247.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Emisores térmicos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_emisores-térmicos-702204.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Radiadores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_radiadores-702205.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Calefactores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_calefactores-702206.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Convectores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_calefactores-702206.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_calefacción-701247.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Deshumidificadores hogar",
                    url:
                      "\u002Fes\u002Fcategory\u002F_deshumidificadores-hogar-701249.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Humidificadores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_humidificadores-701250.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Purificadores y difusores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_purificadores-y-difusores-701251.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Termos y calentadores",
                    url:
                      "\u002Fes\u002Fcategory\u002F_termos-y-calentadores-701252.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Calentadores eléctricos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_calentadores-eléctricos-702190.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Calentadores a gas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_calentadores-a-gas-770537.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Termostatos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_termostatos-770067.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Estaciones meteorológicas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_estaciones-meteorológicas-770061.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
              ],
            ],
          },
          {
            __typename: "GraphqlPwaHeaderMainCategory",
            label: "Deporte y movilidad",
            url:
              "\u002Fes\u002Fcategory\u002F_deporte-y-movilidad-701146.html",
            type: "EXTERNAL",
            subCategories: [
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Deporte y movilidad",
                    url:
                      "\u002Fes\u002Fcategory\u002F_deporte-y-movilidad-701146.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Relojes y pulsómetros",
                    url:
                      "\u002Fes\u002Fcategory\u002F_relojes-y-pulsmetros-701331.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Pulseras actividad",
                    url:
                      "\u002Fes\u002Fcategory\u002F_pulseras-actividad-701332.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "GPS de montaña",
                    url:
                      "\u002Fes\u002Fcategory\u002F_gps-de-montaña-701333.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ciclismo",
                    url:
                      "\u002Fes\u002Fcategory\u002F_ciclismo-701334.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_deporte-y-outdoor-701146.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Movilidad urbana",
                    url:
                      "\u002Fes\u002Fcategory\u002F_movilidad-urbana-701335.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Hoverboards y segways",
                    url:
                      "\u002Fes\u002Fcategory\u002F_hoverboards-y-segways-702270.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Bicicletas eléctricas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_bicicletas-eléctricas-702271.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Patinetes eléctricos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_patinetes-eléctricos-702272.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Skates y longboards",
                    url:
                      "\u002Fes\u002Fcategory\u002F_skates-y-longboards-702273.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_movilidad-urbana-701335.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Zona Xiaomi",
                    url: "\u002Fes\u002Fspecials\u002Fzona-xiaomi",
                    type: "EXTERNAL",
                    headline: true,
                  },
                ],
              ],
            ],
          },
          {
            __typename: "GraphqlPwaHeaderMainCategory",
            label: "Fotografía",
            url: "\u002Fes\u002Fcategory\u002F_fotografía-701129.html",
            type: "EXTERNAL",
            subCategories: [
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cámaras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_c%C3%A1maras-789259.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cámaras réflex",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cámaras-réflex-701197.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cámaras EVIL",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cámaras-evil-701199.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cámaras bridge",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cámaras-bridge-701200.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cámaras compactas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cámaras-compactas-701198.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_fotografía-701129.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Objetivos cámaras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_objetivos-cámara-701203.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Objetivos réflex",
                    url:
                      "\u002Fes\u002Fcategory\u002F_objetivos-reflex-702013.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Objetivos EVIL",
                    url:
                      "\u002Fes\u002Fcategory\u002F_objetivos-evil-702014.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Fundas objetivo",
                    url:
                      "\u002Fes\u002Fcategory\u002F_fundas-objetivo-702015.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_objetivos-cámara-701203.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cámaras deportivas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cámaras-deportivas-701201.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Videocámaras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_videocámaras-701507.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Videocámaras deportivas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_videocámaras-deportivas-702008.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Accesorios videocámara",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-videocámara-702009.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cámaras-deportivas-701201.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Drones",
                    url:
                      "\u002Fes\u002Fcategory\u002F_drones-701208.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Accesorios drones",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-drones-724511.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_drones-701208.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Instantáneas y retro",
                    url:
                      "\u002Fes\u002Fcategory\u002F_instantáneas-y-retro-701202.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Instantáneas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_instantáneas-702010.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Papel fotográfico",
                    url:
                      "\u002Fes\u002Fcategory\u002F_papel-fotográfico-702027.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Fundas cámara instantánea",
                    url:
                      "\u002Fes\u002Fcategory\u002F_fundas-cámara-instantánea-702012.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_instantáneas-y-retro-701202.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Accesorios foto",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-foto-701206.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Tarjeta de memoria foto",
                    url:
                      "\u002Fes\u002Fcategory\u002F_tarjeta-de-memoria-foto-702031.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Accesorios foto profesional",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-foto-profesional-702025.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Fundas cámaras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_fundas-cámaras-702026.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Impresoras fotográficas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_impresoras-fotográficas-702028.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-foto-701206.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Revelado online",
                    url:
                      "https:\u002F\u002Frevelado.mediamarkt.es\u002F ",
                    type: "INTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Pósters",
                    url:
                      "https:\u002F\u002Frevelado.mediamarkt.es\u002Fproducts\u002Fdetails.html?productId=50020464",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Álbum de fotos",
                    url:
                      "https:\u002F\u002Frevelado.mediamarkt.es\u002FAlbum",
                    type: "INTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Trípodes cámara",
                    url:
                      "\u002Fes\u002Fcategory\u002F_trípodes-cámara-701204.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Trípodes",
                    url:
                      "\u002Fes\u002Fcategory\u002F_trípodes-702016.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Monopies",
                    url:
                      "\u002Fes\u002Fcategory\u002F_monopies-702017.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Minitrípodes",
                    url:
                      "\u002Fes\u002Fcategory\u002F_minitrípodes-702018.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Rótulas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_rótulas-702019.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_trípodes-cámara-701204.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Flashes",
                    url:
                      "\u002Fes\u002Fcategory\u002F_flashes-701205.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Flash",
                    url: "\u002Fes\u002Fcategory\u002F_flash-702022.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Accesorios flash",
                    url:
                      "\u002Fes\u002Fcategory\u002F_accesorios-flash-702023.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_flashes-701205.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Telescopios y prismáticos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_telescopios-y-prismáticos-701207.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Telescopios",
                    url:
                      "\u002Fes\u002Fcategory\u002F_telescopios-702032.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Prismáticos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_prismáticos-702033.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Microscopios",
                    url:
                      "\u002Fes\u002Fcategory\u002F_microscopios-702034.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Monoculares",
                    url:
                      "\u002Fes\u002Fcategory\u002F_monoculares-702035.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_telescopios-y-prismáticos-701207.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
            ],
          },
          {
            __typename: "GraphqlPwaHeaderMainCategory",
            label: "Cine, música y libros",
            url:
              "\u002Fes\u002Fcategory\u002F_cine-música-y-libros-701148.html",
            type: "EXTERNAL",
            subCategories: [
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Cine y Series TV",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cine-y-series-tv-701350.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Series TV",
                    url:
                      "\u002Fes\u002Fcategory\u002F_series-tv-701351.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Películas",
                    url:
                      "\u002Fes\u002Fcategory\u002F_películas-702357.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Próximos lanzamientos cine y series TV",
                    url:
                      "\u002Fes\u002Fcategory\u002F_próximos-lanzamientos-cine-y-series-tv-701349.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Universos cinematográficos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_universos-cinematográficos-761510.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_cine-y-series-tv-701350.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Música",
                    url:
                      "\u002Fes\u002Fcategory\u002F_música-701352.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Música nacional",
                    url:
                      "\u002Fes\u002Fcategory\u002F_música-nacional-702361.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Música internacional",
                    url:
                      "\u002Fes\u002Fcategory\u002F_música-internacional-702360.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Bandas sonoras",
                    url:
                      "\u002Fes\u002Fcategory\u002F_bandas-sonoras-702366.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Próximos lanzamientos música",
                    url:
                      "\u002Fes\u002Fcategory\u002F_próximos-lanzamientos-música-762019.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_música-701352.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Libros",
                    url:
                      "\u002Fes\u002Fcategory\u002F_libros-701353.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Narrativa y poesía",
                    url:
                      "\u002Fes\u002Fcategory\u002F_narrativa-y-poesía-702368.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Pasatiempos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_pasatiempos-724028.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Novela histórica",
                    url:
                      "\u002Fes\u002Fcategory\u002F_novela-histórica-702370.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Infantil y juvenil",
                    url:
                      "\u002Fes\u002Fcategory\u002F_infantil-y-juvenil-702375.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Ver más",
                    url:
                      "\u002Fes\u002Fcategory\u002F_libros-701353.html",
                    type: "EXTERNAL",
                    headline: false,
                  },
                ],
              ],
            ],
          },
          {
            __typename: "GraphqlPwaHeaderMainCategory",
            label: "Outlet",
            url: "\u002Fes\u002Fcategory\u002F_outlet-789510.html",
            type: "EXTERNAL",
            subCategories: [
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Reacondicionados",
                    url:
                      "\u002Fes\u002Fcategory\u002F_reacondicionados-790017.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Informática",
                    url:
                      "\u002Fes\u002Fcategory\u002F_inform%C3%A1tica-712517.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Acc. informática",
                    url:
                      "\u002Fes\u002Fcategory\u002F_acc-inform%C3%A1tica-725030.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Telefonía",
                    url:
                      "\u002Fes\u002Fcategory\u002F_telefon%C3%ADa-712518.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Televisión",
                    url:
                      "\u002Fes\u002Fcategory\u002F_televisi%C3%B3n-712519.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Audio y HiFi",
                    url:
                      "\u002Fes\u002Fcategory\u002F_audio-y-hifi-790023.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Smart Home",
                    url:
                      "\u002Fes\u002Fcategory\u002F_smart-home-790020.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Electrodomésticos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_electrodom%C3%A9sticos-712515.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Pequeños electrodomésticos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_peque%C3%B1os-electrodom%C3%A9sticos-790027.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Belleza y salud",
                    url:
                      "\u002Fes\u002Fcategory\u002F_belleza-y-salud-790024.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Climatización y calefacción",
                    url:
                      "\u002Fes\u002Fcategory\u002F_climatizaci%C3%B3n-y-calefacci%C3%B3n-790025.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Deporte y movilidad",
                    url:
                      "\u002Fes\u002Fcategory\u002F_deporte-y-movilidad-790026.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Fotografía",
                    url:
                      "\u002Fes\u002Fcategory\u002F_fotograf%C3%ADa-712514.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Entretenimiento",
                    url:
                      "\u002Fes\u002Fcategory\u002F_entretenimiento-712516.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                ],
              ],
              [
                [
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Oportunidades",
                    url:
                      "\u002Fes\u002Fcategory\u002F_oportunidades-701125.html",
                    type: "EXTERNAL",
                    headline: true,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Informática",
                    url:
                      "\u002Fes\u002Fcategory\u002F_inform%C3%A1tica-790016.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Acc. informática",
                    url:
                      "\u002Fes\u002Fcategory\u002F_acc-inform%C3%A1tica-790011.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Telefonía",
                    url:
                      "\u002Fes\u002Fcategory\u002F_telefon%C3%ADa-790021.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Televisión",
                    url:
                      "\u002Fes\u002Fcategory\u002F_televisi%C3%B3n-790022.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Audio y HiFi",
                    url:
                      "\u002Fes\u002Fcategory\u002F_audio-y-hifi-790008.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Smart Home",
                    url:
                      "\u002Fes\u002Fcategory\u002F_smart-home-790019.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Electrodomésticos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_electrodom%C3%A9sticos-790010.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Pequeños electrodomésticos",
                    url:
                      "\u002Fes\u002Fcategory\u002F_peque%C3%B1os-electrodom%C3%A9sticos-790018.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Belleza y salud",
                    url:
                      "\u002Fes\u002Fcategory\u002F_belleza-y-salud-790012.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Climatización y calefacción",
                    url:
                      "\u002Fes\u002Fcategory\u002F_climatizaci%C3%B3n-y-calefacci%C3%B3n-790009.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Deporte y movilidad",
                    url:
                      "\u002Fes\u002Fcategory\u002F_deporte-y-movilidad-790013.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Fotografía",
                    url:
                      "\u002Fes\u002Fcategory\u002F_fotograf%C3%ADa-790015.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                  {
                    __typename: "GraphqlPwaHeaderCategoryNavItem",
                    label: "Entretenimiento",
                    url:
                      "\u002Fes\u002Fcategory\u002F_entretenimiento-790014.html",
                    type: "INTERNAL",
                    headline: false,
                  },
                ],
              ],
            ],
          },
        ],
        marketInputPlaceholder: "Código postal o ciudad",
        marketButtonLabel: "Mi tienda",
        marketChangeLabel: "Cambiar tienda",
        marketPageLabel: "Más información sobre tu tienda",
        marketShowAllLabel: "Todas las tiendas",
        marketChooseLabel: "Buscar tienda",
        marketYourMarketLabel: "Tu tienda",
        marketNoMarketSelectedLabel: "No has seleccionado una tienda",
        marketSearchLink: "\u002Fes\u002Fmarketselection.html",
        marketPageLink: "\u002Fredirect\u002Fmystoreinfos?outletId=",
        searchboxInputPlaceholder: "Buscar",
        mobileBackToRootLabel: "Volver al menú principal",
        mobileBackToCategoryPrefix: "Volver a",
        mobileMarketSelectorLabel: "Mi tienda",
        promo: null,
        navigationItems: [
          {
            __typename: "GraphqlPwaHeaderNavItem",
            label: "Ofertas",
            url:
              "\u002Fes\u002Fcategory\u002F_campa%C3%B1as-y-ofertas-701114.html",
            icon: null,
            type: "EXTERNAL",
          },
          {
            __typename: "GraphqlPwaHeaderNavItem",
            label: "Servicios",
            url: "\u002Fes\u002Fservice",
            icon: null,
            type: "EXTERNAL",
          },
          {
            __typename: "GraphqlPwaHeaderNavItem",
            label: "Empresas",
            url: "https:\u002F\u002Fspecials.mediamarkt.es\u002Fempresas",
            icon: null,
            type: "EXTERNAL",
          },
          {
            __typename: "GraphqlPwaHeaderNavItem",
            label: "Formaciones",
            url: "https:\u002F\u002Fspecials.mediamarkt.es\u002Ftraining",
            icon: null,
            type: "EXTERNAL",
          },
          {
            __typename: "GraphqlPwaHeaderNavItem",
            label: "MediaMarkt Club",
            url:
              "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fmyaccount\u002Floyalty-benefits",
            icon: null,
            type: "EXTERNAL",
          },
          {
            __typename: "GraphqlPwaHeaderNavItem",
            label: "Energía",
            url: "https:\u002F\u002Fspecials.mediamarkt.es\u002Fenergia",
            icon: null,
            type: "EXTERNAL",
          },
          {
            __typename: "GraphqlPwaHeaderNavItem",
            label: "Mejor precio garantizado",
            url:
              "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fspecials\u002Fmejor-precio-garantizado",
            icon: null,
            type: "EXTERNAL",
          },
          {
            __typename: "GraphqlPwaHeaderNavItem",
            label: "Personal Shopper",
            url:
              "https:\u002F\u002Fspecials.mediamarkt.es\u002Fpersonal-shopper",
            icon: null,
            type: "EXTERNAL",
          },
          {
            __typename: "GraphqlPwaHeaderNavItem",
            label: "Preguntas frecuentes",
            url: "https:\u002F\u002Fmm-es-es.custhelp.com\u002F",
            icon: "info",
            type: "EXTERNAL",
          },
        ],
        emergencyMessages: [
          {
            __typename: "GraphqlPwaHeaderEmergencyMessage",
            icon: "INFO_OUTLINED",
            urlPattern: null,
            content: {
              json: {
                nodeType: "document",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                      {
                        data: {},
                        marks: [],
                        value: "",
                        nodeType: "text",
                      },
                    ],
                  },
                ],
              },
              __typename: "EmergencymessagesMessageText",
            },
          },
        ],
        topBarUsps: [
          {
            json: {
              nodeType: "document",
              data: {},
              content: [
                {
                  nodeType: "paragraph",
                  data: {},
                  content: [
                    { data: {}, marks: [], value: "", nodeType: "text" },
                    {
                      nodeType: "hyperlink",
                      data: {
                        uri:
                          "https:\u002F\u002Fspecials.mediamarkt.es\u002Ftipos-envio",
                      },
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: "ENVÍO GRATIS a partir de 49€*",
                          nodeType: "text",
                        },
                      ],
                    },
                    { data: {}, marks: [], value: "", nodeType: "text" },
                  ],
                },
              ],
            },
            __typename: "TopbaruspsUsp",
          },
          {
            json: {
              nodeType: "document",
              data: {},
              content: [
                {
                  nodeType: "paragraph",
                  data: {},
                  content: [
                    { data: {}, marks: [], value: "", nodeType: "text" },
                    {
                      nodeType: "hyperlink",
                      data: {
                        uri:
                          "https:\u002F\u002Fspecials.mediamarkt.es\u002Ftipos-envio",
                      },
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: "ENVÍO EXPRESS! En 24\u002F48h",
                          nodeType: "text",
                        },
                      ],
                    },
                    { data: {}, marks: [], value: "", nodeType: "text" },
                  ],
                },
              ],
            },
            __typename: "TopbaruspsUsp",
          },
          {
            json: {
              nodeType: "document",
              data: {},
              content: [
                {
                  nodeType: "paragraph",
                  content: [
                    { nodeType: "text", value: "", marks: [], data: {} },
                    {
                      nodeType: "hyperlink",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "Con todas las medidas de seguridad sanitarias ",
                          marks: [],
                          data: {},
                        },
                      ],
                      data: {
                        uri:
                          "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fspecials\u002Fmedidas-covid",
                      },
                    },
                    { nodeType: "text", value: "", marks: [], data: {} },
                  ],
                  data: {},
                },
              ],
            },
            __typename: "TopbaruspsUsp",
          },
        ],
      },
      'specialPageContent({"uid":"teletrabajo-y-aula-virtual"})': {
        __typename: "GraphqlSpecialPageModel",
        documentName: "Teletrabajo y Aula Virtual",
        nameInBreadcrumb: "Teletrabajo y Aula Virtual",
        urlForBreadcrumb: null,
        pageTheme: "light",
        headline: [{ text: "La oficina en casa" }],
        headerImage: {
          desktop: {
            url:
              "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F7gR1IStmI5Uaq0odnyOda9\u002F5dcac18793b6c9e4479336f67f757083\u002F022126-Header_Teletrabajo_2944x816.png?q=80",
            description: null,
            __typename: "Asset",
          },
          tablet: {
            url:
              "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F4zNm9cURz8I3T5eb4kV4rA\u002F7e15641dfba217c622fec84378fb5c9e\u002F022126-Header_Teletrabajo_1472x408.jpg?q=80",
            description: null,
            __typename: "Asset",
          },
          mobile: {
            url:
              "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F1o1EYNTpPH7KwICpkNFBGQ\u002F2770ed503ec644d12381026698b03190\u002F022126-Header_Teletrabajo_1024x544.png?q=80",
            description: null,
            __typename: "Asset",
          },
          __typename: "MediaContainer",
        },
        headerImageSize: "big",
        metaTitle: "Teletrabajo y Aula Virtual | MediaMarkt",
        metaRobots: "noindex, follow",
        metaDescription: "Teletrabajo y Aula Virtual | MediaMarkt",
        canonical: {
          __typename: "GraphqlContentCanonical",
          linkType: null,
          url: null,
        },
        body: [
          {
            __typename: "GraphqlContentSiteMenu",
            type: "SiteMenuSection",
            fields: [
              {
                __typename: "GraphqlContentSiteMenuField",
                label: "Portátiles",
                anchorId: "site1",
              },
              {
                __typename: "GraphqlContentSiteMenuField",
                label: "Impresoras",
                anchorId: "site2",
              },
              {
                __typename: "GraphqlContentSiteMenuField",
                label: "PC de sobremesa",
                anchorId: "site3",
              },
              {
                __typename: "GraphqlContentSiteMenuField",
                label: "Tablets",
                anchorId: "site4",
              },
              {
                __typename: "GraphqlContentSiteMenuField",
                label: "Streaming",
                anchorId: "site5",
              },
            ],
          },
          { __typename: "GraphqlContentSpacer", type: "SpacerSection" },
          {
            __typename: "GraphqlContentRichText",
            type: null,
            richText: {
              json: {
                nodeType: "document",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Productos para el teletrabajo, trabaja cómodo y eficiente desde casa con nuestra selección de productos para tu oficina en casa, impresoras, monitores, ordenadores, teclados, ratones, almacenamiento, sillas, webcams siempre al mejor precio en MediaMarkt.",
                        marks: [],
                        data: {},
                      },
                    ],
                    data: {},
                  },
                ],
              },
              links: {
                assets: {
                  hyperlink: [],
                  __typename: "RichTextSectionRichTextAssets",
                },
                __typename: "RichTextSectionRichTextLinks",
              },
              __typename: "RichTextSectionRichText",
            },
            anchorId: null,
          },
          {
            __typename: "GraphqlContentImageAndText",
            type: "ImageGallerySection",
            fields: [
              {
                __typename: "GraphqlContentImageAndTextField",
                text: {
                  json: {
                    nodeType: "document",
                    data: {},
                    content: [
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "Portátiles",
                            marks: [{ type: "bold" }],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Elige el portátil que prefieras para poder empezar tus jornadas de teletrabajo de la mejor manera. Portátiles ligeros, portátiles 4K, portátiles HP, portátiles Apple, Chromebooks. Tú decides lo que quieres entre nuestra amplia gama.",
                            marks: [],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "",
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: "hyperlink",
                            content: [
                              {
                                nodeType: "text",
                                value: "\u003E Ver todos los portátiles",
                                marks: [],
                                data: {},
                              },
                            ],
                            data: {
                              uri:
                                "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcategory\u002F_port%C3%A1tiles-701175.html?view=PRODUCTGRID&page=1&sort=topseller",
                            },
                          },
                          {
                            nodeType: "text",
                            value: "",
                            marks: [],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                    ],
                  },
                  __typename: "ImageGalleryText",
                },
                image: {
                  entryTitle: null,
                  desktop: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002FpDgrlEinVNUXGAH4KQtkG\u002F5743ff585daf5d00393df31d004d3433\u002F022107_Landing_Trabajo_Image_640x3602.png?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  tablet: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F44wMV1mVccSnl2IEPawux7\u002F8c030ff625d8e71bd66af50f6fbc5894\u002F022107_Landing_Trabajo_Image_480x270_2.png?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  mobile: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F1rvGMLuW1wZGXYYgrtywc3\u002Fc1a15e209ce569e496cbacaa3277bdbb\u002F022107_Landing_Trabajo_Image_320x180_2.png?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  __typename: "MediaContainer",
                },
                titleInternal: "Portátiles",
                imageAlignment: "right",
                anchorId: "site1",
              },
            ],
          },
          {
            __typename: "GraphqlContentImageAndText",
            type: "ImageGallerySection",
            fields: [
              {
                __typename: "GraphqlContentImageAndTextField",
                text: {
                  json: {
                    nodeType: "document",
                    data: {},
                    content: [
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "Impresoras",
                            marks: [{ type: "bold" }],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Convierte tu hogar en una oficina doméstica con nuestras impresoras para todos tus proyectos y trabajos.",
                            marks: [],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "",
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: "hyperlink",
                            content: [
                              {
                                nodeType: "text",
                                value: "\u003E Ver todas las impresoras",
                                marks: [],
                                data: {},
                              },
                            ],
                            data: {
                              uri:
                                "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcategory\u002F_impresoras-701181.html",
                            },
                          },
                          {
                            nodeType: "text",
                            value: "",
                            marks: [],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                    ],
                  },
                  __typename: "ImageGalleryText",
                },
                image: {
                  entryTitle: "Impresoras ",
                  desktop: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F4fI9NvGJl1DL7z1N3q3XeP\u002F2b628b3e931697b67f2896aaf5f1932c\u002F022107_Landing_Trabajo_Image_640x3604.png?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  tablet: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F33RHWlMm9Wj2v2UiamDnUR\u002Fd2f8c1a1370fddf5eb1cd456671e7fac\u002F022107_Landing_Trabajo_Image_480x270_4.png?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  mobile: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002FIbSv8WVlab9Dr4GUdBucD\u002F9a973a79eb39eebefcfc3937b93affac\u002F022107_Landing_Trabajo_Image_320x180_4.png?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  __typename: "MediaContainer",
                },
                titleInternal: "Impresoras",
                imageAlignment: "left",
                anchorId: "site2",
              },
            ],
          },
          {
            __typename: "GraphqlContentCategoryOverview",
            type: "CategoryOverviewSectionCmsSpecialPage",
            headline: [
              {
                text: "Los complementos perfectos para tus dispositivos",
              },
            ],
            anchorId: null,
            categoryCollection: [
              {
                __typename: "GraphqlContentCategoryCollection",
                trackingName: "Ratones y Alfombrillas",
                title: "Ratones y alfombrillas",
                image: {
                  url:
                    "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F48MLDl8I22zWPySem877Ji\u002Ff6771d419322ae7d2ae01246d1e396a1\u002F102051-LP_Teletrabajo_300x300_NoName1.png?q=80",
                  description: null,
                  __typename: "Asset",
                },
                link: {
                  __typename: "GraphqlContentExternalLink",
                  url:
                    "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcategory\u002F_ratones-y-alfombrillas-701404.html",
                },
              },
              {
                __typename: "GraphqlContentCategoryCollection",
                trackingName: "Teclados",
                title: "Teclados",
                image: {
                  url:
                    "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F4RgAud0x0EgUzN800dfo45\u002F318e656a1359f496eba6004f651997a0\u002F102051-LP_Teletrabajo_300x300_NoName2.png?q=80",
                  description: null,
                  __typename: "Asset",
                },
                link: {
                  __typename: "GraphqlContentExternalLink",
                  url:
                    "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcategory\u002F_teclados-701408.html",
                },
              },
              {
                __typename: "GraphqlContentCategoryCollection",
                trackingName: "Sillas",
                title: "Sillas",
                image: {
                  url:
                    "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F6MbQ4J9xbV6HHOg4WFA3VY\u002F2e8970657c57ead97f3aa932c9526508\u002F102051-LP_Teletrabajo_300x300_NoName3.png?q=80",
                  description: null,
                  __typename: "Asset",
                },
                link: {
                  __typename: "GraphqlContentExternalLink",
                  url:
                    "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcategory\u002F_sillas-de-escritorio-770016.html",
                },
              },
              {
                __typename: "GraphqlContentCategoryCollection",
                trackingName: "Almacenamiento",
                title: "Almacenamiento",
                image: {
                  url:
                    "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F3rftjJwn5C9FYIJ4latU9L\u002Ff0018fc0a00115fe83a8e12f789bfe68\u002F102051-LP_Teletrabajo_300x300_NoName4.png?q=80",
                  description: null,
                  __typename: "Asset",
                },
                link: {
                  __typename: "GraphqlContentExternalLink",
                  url:
                    "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcategory\u002F_almacenamiento-701180.html",
                },
              },
              {
                __typename: "GraphqlContentCategoryCollection",
                trackingName: "Auriculares",
                title: "Auriculares",
                image: {
                  url:
                    "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F5c0WG5bEHj4UFie6jj6oH3\u002Ff0d6fa7b267db0b77725cf7465924d1d\u002F102051-LP_Teletrabajo_300x300_NoName5.png?q=80",
                  description: null,
                  __typename: "Asset",
                },
                link: {
                  __typename: "GraphqlContentExternalLink",
                  url:
                    "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcategory\u002F_auriculares-701390.html",
                },
              },
              {
                __typename: "GraphqlContentCategoryCollection",
                trackingName: "Webcams",
                title: "Webcams",
                image: {
                  url:
                    "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F3dX6AbaHiSZMOCImLPmnJ0\u002F1adebc83caebbe51ebdbc6f607f88169\u002F102051-LP_Teletrabajo_300x300_NoName6.png?q=80",
                  description: null,
                  __typename: "Asset",
                },
                link: {
                  __typename: "GraphqlContentExternalLink",
                  url:
                    "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcategory\u002F_webcams-701409.html",
                },
              },
            ],
          },
          {
            __typename: "GraphqlContentImageAndText",
            type: "ImageGallerySection",
            fields: [
              {
                __typename: "GraphqlContentImageAndTextField",
                text: {
                  json: {
                    nodeType: "document",
                    data: {},
                    content: [
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "PC de sobremesa",
                            marks: [{ type: "bold" }],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Tenemos todos los PC de sobremesa que necesitas para tu teletrabajo. Ordenadores, PC gaming, All in One, Mini PC, todo lo que buscas lo tenemos para ti.",
                            marks: [],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "",
                            marks: [],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "",
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: "hyperlink",
                            content: [
                              {
                                nodeType: "text",
                                value:
                                  "\u003EVer todos los PC's de sobremesa",
                                marks: [],
                                data: {},
                              },
                            ],
                            data: {
                              uri:
                                "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcategory\u002F_pc-sobremesa-701176.html",
                            },
                          },
                          {
                            nodeType: "text",
                            value: "",
                            marks: [],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                    ],
                  },
                  __typename: "ImageGalleryText",
                },
                image: {
                  entryTitle: "PC Sobremesa",
                  desktop: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002FrIs23n1BM54yGqgSgtjcD\u002F6431e2b38674fcf9a4ad21ddefcd498b\u002F022107_Landing_Trabajo_Image_640x360.png?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  tablet: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F3hAmedR2NbneyAcSwsqBGH\u002Fd7f88473f0c3c3bd351419d5eaee0847\u002F022107_Landing_Trabajo_Image_480x270_.png?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  mobile: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F59DRthFUln81XRTiQYsz8a\u002Fa3eaa8dd7cfc228c9342423475950454\u002F022107_Landing_Trabajo_Image_320x180_.png?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  __typename: "MediaContainer",
                },
                titleInternal: "PC Sobremesa",
                imageAlignment: "right",
                anchorId: "site3",
              },
            ],
          },
          {
            __typename: "GraphqlContentImageAndText",
            type: "ImageGallerySection",
            fields: [
              {
                __typename: "GraphqlContentImageAndTextField",
                text: {
                  json: {
                    nodeType: "document",
                    data: {},
                    content: [
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "Tablets",
                            marks: [{ type: "bold" }],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Revisa toda la información de tu negocio desde la palma de tu mano. Con nuestras tablets podrás llevar la oficina y tu negocio a todas partes.",
                            marks: [],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "",
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: "hyperlink",
                            content: [
                              {
                                nodeType: "text",
                                value: "\u003E Ver todas las tablets",
                                marks: [],
                                data: {},
                              },
                            ],
                            data: {
                              uri:
                                "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcategory\u002F_tablets-701178.html",
                            },
                          },
                          {
                            nodeType: "text",
                            value: "",
                            marks: [],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                    ],
                  },
                  __typename: "ImageGalleryText",
                },
                image: {
                  entryTitle: "Tablets",
                  desktop: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002FiQPTipzJrwSEVfRl4VcaR\u002Fc0599210eb9fdb4591cd348ed03db225\u002F022107_Landing_Trabajo_Image_640x3606.png?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  tablet: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F3d5McO2FobIqTH1p6FX4nW\u002F73e5a7becd69b0d27bb0ca31df6b8400\u002F022107_Landing_Trabajo_Image_480x270_6.png?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  mobile: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F7sdV42XIU6jAdfTlgy3aNN\u002Fae43b69c3eca0c23649c71d00c6de258\u002F022107_Landing_Trabajo_Image_320x180_6.png?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  __typename: "MediaContainer",
                },
                titleInternal: "Tablets",
                imageAlignment: "left",
                anchorId: "site4",
              },
            ],
          },
          {
            __typename: "GraphqlSpecialPageBodyProductCollection",
            headline: [{ text: null }],
            amount: 6,
            gridSize: null,
            anchorId: null,
            productCollection: {
              __ref: "GQLProductCollection:2sxIp9JnzTC5weaWLeVMhz",
            },
          },
          {
            __typename: "GraphqlContentImageAndText",
            type: "ImageGallerySection",
            fields: [
              {
                __typename: "GraphqlContentImageAndTextField",
                text: {
                  json: {
                    nodeType: "document",
                    data: {},
                    content: [
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "Streaming",
                            marks: [{ type: "bold" }],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "El teletrabajo, las clases virtuales y las videollamadas se han instaurado en nuestro día a día así que es importante escuchar y ver todo el contenido a la perfección. Puedes hacerte con nuestros productos streaming como webcams, auriculares, micrófonos, routers y todo lo que necesites.",
                            marks: [],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "",
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: "hyperlink",
                            content: [
                              {
                                nodeType: "text",
                                value: "\u003E Ver todos los productos",
                                marks: [],
                                data: {},
                              },
                            ],
                            data: {
                              uri:
                                "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcategory\u002F_reproductor-multimedia-702498.html",
                            },
                          },
                          {
                            nodeType: "text",
                            value: "",
                            marks: [],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                    ],
                  },
                  __typename: "ImageGalleryText",
                },
                image: {
                  entryTitle: "Streaming",
                  desktop: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F3JMlFlgbqkRfqZlUMsa2fJ\u002F98a84aa7d78c2315de3efcf91b5a9ab1\u002F022107_Landing_Trabajo_Image_640x3605.png?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  tablet: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F7LLy3bKU7AFetY8cnYjNTU\u002F5eeb43d5736df97affedfa49632b6130\u002F022107_Landing_Trabajo_Image_480x270_5.png?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  mobile: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F3lClnO2eDf7QvCEDhY9daK\u002F23063121687e4e76e5ec85251657636e\u002F022107_Landing_Trabajo_Image_320x180_5.png?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  __typename: "MediaContainer",
                },
                titleInternal: "Streaming",
                imageAlignment: "right",
                anchorId: "site5",
              },
            ],
          },
          {
            __typename: "GraphqlContentImageAndText",
            type: "ImageGallerySection",
            fields: [
              {
                __typename: "GraphqlContentImageAndTextField",
                text: {
                  json: {
                    nodeType: "document",
                    data: {},
                    content: [
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "Monitores",
                            marks: [{ type: "bold" }],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Pasamos muchas horas delante de una pantalla así que es tu oportunidad perfecta para hacerte con uno de nuestros mejores monitores y hacer un cambio. Disfruta también de impresoras para tus propios proyectos.",
                            marks: [],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "",
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: "hyperlink",
                            content: [
                              {
                                nodeType: "text",
                                value: "\u003E Ver todos los monitores",
                                marks: [],
                                data: {},
                              },
                            ],
                            data: {
                              uri:
                                "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcategory\u002F_monitores-701179.html",
                            },
                          },
                          {
                            nodeType: "text",
                            value: "",
                            marks: [],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                    ],
                  },
                  __typename: "ImageGalleryText",
                },
                image: {
                  entryTitle: "Monitores",
                  desktop: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F74znexPO9WAgDNT4JuYPsS\u002F9b98090471511b216e4ed648015d4eae\u002F022107_Landing_Trabajo_Image_640x3603.png?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  tablet: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F4ZMGa683DtkwKTMSmCOsJw\u002Ffaa96161c9b6383966a65a73940ba08f\u002F022107_Landing_Trabajo_Image_480x270_3.png?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  mobile: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F5fo1HldsaDMUbAmV1zO5KI\u002F534037436388fbb25484b4c087bf2ebf\u002F022107_Landing_Trabajo_Image_320x180_3.png?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  __typename: "MediaContainer",
                },
                titleInternal: "Monitores",
                imageAlignment: "left",
                anchorId: null,
              },
            ],
          },
          {
            __typename: "GraphqlContentCategoryOverview",
            type: "CategoryOverviewSectionCmsSpecialPage",
            headline: [
              {
                text:
                  "Acompaña la tecnología con nuestros mejores servicios",
              },
            ],
            anchorId: null,
            categoryCollection: [
              {
                __typename: "GraphqlContentCategoryCollection",
                trackingName: "Garantía Plus",
                title: "Garantía Plus",
                image: {
                  url:
                    "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F7GtJcUs0vz4IOkfxUbOAwW\u002Fb8f11366eabf55da396a1f161ff0d6cf\u002FGarant__aPlus_HOME_Overview_300x300_V1.png?q=80",
                  description: null,
                  __typename: "Asset",
                },
                link: {
                  __typename: "GraphqlContentExternalLink",
                  url:
                    "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fshop\u002Fgarantia-plus.html",
                },
              },
              {
                __typename: "GraphqlContentCategoryCollection",
                trackingName: "Any Tech",
                title: "Any Tech",
                image: {
                  url:
                    "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F746mUcf9sj4XICNVsqgVmC\u002Fe3500739c83e8f1586461834f1b4a28a\u002Fanytech_300x300.png?q=80",
                  description: null,
                  __typename: "Asset",
                },
                link: {
                  __typename: "GraphqlContentExternalLink",
                  url:
                    "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fshop\u002Fenjoy-technology.html",
                },
              },
              {
                __typename: "GraphqlContentCategoryCollection",
                trackingName: "Tarifas Telefonía",
                title: "Tarifas Telefonía",
                image: {
                  url:
                    "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F5CwuS2xPEtDX8gMXwrb1JO\u002Fe3c538c75fbf29a6ac3abd95a72ea633\u002Ftarifas_telefonica_300x300.png?q=80",
                  description: null,
                  __typename: "Asset",
                },
                link: {
                  __typename: "GraphqlContentExternalLink",
                  url:
                    "https:\u002F\u002Fspecials.mediamarkt.es\u002Ftarifas-moviles",
                },
              },
              {
                __typename: "GraphqlContentCategoryCollection",
                trackingName: "Personal Shopper",
                title: "Personal Shopper",
                image: {
                  url:
                    "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002FQcAsSQW2T36uwBShR84CT\u002Fadce69567840ee902b0ca7724549fdee\u002FPersonalShopper_HOME_Overview_300x300_V13.png?q=80",
                  description: null,
                  __typename: "Asset",
                },
                link: {
                  __typename: "GraphqlContentExternalLink",
                  url:
                    "https:\u002F\u002Fspecials.mediamarkt.es\u002Fpersonal-shopper",
                },
              },
              {
                __typename: "GraphqlContentCategoryCollection",
                trackingName: "Venta telefónica",
                title: "Venta telefónica",
                image: {
                  url:
                    "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F4jLitzno7aCiqs2TpJQqtc\u002F25dbee24c634d7510e9750fe7f62f409\u002Fventa_telefonica_300x300.png?q=80",
                  description: null,
                  __typename: "Asset",
                },
                link: {
                  __typename: "GraphqlContentExternalLink",
                  url:
                    "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fshop\u002Fventa-telefonica.html",
                },
              },
              {
                __typename: "GraphqlContentCategoryCollection",
                trackingName: "Financiación",
                title: "Financiación",
                image: {
                  url:
                    "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F56VRCefTZZ2u9llRqG48Zo\u002F4c0d9b0a2da55533968d50edf4d8adbe\u002Ffinanciaci__n_300x300.png?q=80",
                  description: null,
                  __typename: "Asset",
                },
                link: {
                  __typename: "GraphqlContentExternalLink",
                  url:
                    "https:\u002F\u002Fspecials.mediamarkt.es\u002Ffinanciacion",
                },
              },
            ],
          },
          {
            __typename: "GraphqlContentTeaser",
            teaserHeadline: [{ text: null }],
            type: "TeaserSection",
            typeOfTeaser: "(1x) Large Teaser with\u002Fwithout Image",
            anchorId: null,
            namedTrackingArea: null,
            fields: [
              {
                __typename: "GraphqlContentTeaserField",
                image: {
                  entryTitle: null,
                  desktop: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002FYnzQt1MnBhZRiSQQ294gs\u002F2b22b9469f7a1b735b6f8867b643083f\u002FChromebook_3.jpg?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  tablet: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F37ZUypd7xwDV9yGlSBDpU0\u002Fd5cc43a373df29c3d1db6b60d12ee38c\u002FChromebook_2.jpg?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  mobile: {
                    url:
                      "https:\u002F\u002Fcms-images.mmst.eu\u002Fosyynfyvlyjc\u002F17J32GedWUTFT3MYRVmmTh\u002F00ed2f2cac5b118506b2e0cadd557668\u002FChromebook_1.jpg?q=80",
                    description: null,
                    __typename: "Asset",
                  },
                  __typename: "MediaContainer",
                },
                linkText: null,
                contentText: "Descubre lo último en informática",
                headline: "Pásate a Chromebook",
                trackingName: null,
                badges: null,
                link: {
                  __typename: "GraphqlContentTeaserFieldLink",
                  url:
                    "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcategory\u002F_chromebooks-763521.html",
                  meta: null,
                  category: null,
                },
              },
            ],
          },
        ],
        endOfPage: [],
        parentPage: null,
      },
      pwaFooter: {
        __typename: "GraphqlPwaFooter",
        trustLabel: null,
        trustBadges: [],
        paymentLabel: "Métodos de pago",
        paymentMethods: [
          {
            __typename: "GraphqlPwaFooterLink",
            label: "VISA",
            icon: "VISA",
            url: null,
          },
          {
            __typename: "GraphqlPwaFooterLink",
            label: "Mastercard",
            icon: "MASTERCARD",
            url: null,
          },
          {
            __typename: "GraphqlPwaFooterLink",
            label: "Paypal",
            icon: "PAYPAL",
            url: null,
          },
          {
            __typename: "GraphqlPwaFooterLink",
            label: "Bizum",
            icon: "BIZUM",
            url: null,
          },
          {
            __typename: "GraphqlPwaFooterLink",
            label: "Amex",
            icon: "AMEX",
            url: null,
          },
          {
            __typename: "GraphqlPwaFooterLink",
            label: "Club Card",
            icon: "CLUBCARDES",
            url: null,
          },
          {
            __typename: "GraphqlPwaFooterLink",
            label: "Tarjeta regalo",
            icon: "GIFTCARDES",
            url: null,
          },
          {
            __typename: "GraphqlPwaFooterLink",
            label: "Pago en tienda",
            icon: "PAYMENTINSTOREES",
            url: null,
          },
        ],
        legalText: {
          json: {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value:
                      "Precios válidos para compras por Internet. Consulta los precios  aplicados en tiendas MediaMarkt en Península y Baleares. Envíos  únicamente a Penísula y Baleares.",
                    nodeType: "text",
                  },
                ],
                nodeType: "paragraph",
              },
            ],
            nodeType: "document",
          },
          __typename: "CmsWebshopFooterLegalText",
        },
        legalLinks: [
          {
            __typename: "GraphqlPwaFooterLink",
            label: "Condiciones de contratación",
            url:
              "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Flegal\u002Fcondiciones-de-contratacion",
          },
          {
            __typename: "GraphqlPwaFooterLink",
            label: "Condiciones de uso web",
            url:
              "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Flegal\u002Fcondiciones-de-uso-de-la-web",
          },
          {
            __typename: "GraphqlPwaFooterLink",
            label: "Privacidad",
            url:
              "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Flegal\u002Fpolitica-de-privacidad",
          },
          {
            __typename: "GraphqlPwaFooterLink",
            label: "Configurar cookies",
            url:
              "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fprivacy\u002Fsettings",
          },
        ],
        social: [
          {
            __typename: "GraphqlPwaFooterLink",
            label: "Facebook",
            icon: "FACEBOOK",
            url:
              "https:\u002F\u002Fwww.facebook.com\u002Fmediamarktes\u002F",
          },
          {
            __typename: "GraphqlPwaFooterLink",
            label: "Twitter",
            icon: "TWITTER",
            url: "https:\u002F\u002Ftwitter.com\u002FMediaMarkt_es",
          },
          {
            __typename: "GraphqlPwaFooterLink",
            label: "YouTube",
            icon: "YOUTUBE",
            url:
              "https:\u002F\u002Fwww.youtube.com\u002Fc\u002FMediaMarktEspa%C3%B1a",
          },
          {
            __typename: "GraphqlPwaFooterLink",
            label: "Instagram",
            icon: "INSTAGRAM",
            url:
              "https:\u002F\u002Fwww.instagram.com\u002Fmediamarkt_es\u002F?hl=es",
          },
        ],
        shippingLabel: "Envío seguro con",
        shippingPartners: [
          {
            __typename: "GraphqlPwaFooterLink",
            label: "UPS",
            icon: "UPS",
            url: null,
          },
          {
            __typename: "GraphqlPwaFooterLink",
            label: "MRW",
            icon: "MRW",
            url: null,
          },
          {
            __typename: "GraphqlPwaFooterLink",
            label: "Paack",
            icon: "PAACK",
            url: null,
          },
        ],
        contactLabel: "Contacto",
        contactMethods: [
          {
            __typename: "GraphqlPwaFooterLink",
            title: "Contacta con nosotros",
            label: "Formulario de contacto",
            icon: "MAIL",
            url: "https:\u002F\u002Fspecials.mediamarkt.es\u002Fcontacto",
          },
          {
            __typename: "GraphqlPwaFooterLink",
            title: "¿Necesitas ayuda?",
            label: "Preguntas frecuentes",
            icon: "FAQ",
            url:
              "https:\u002F\u002Fspecials.mediamarkt.es\u002Fatencion-al-cliente",
          },
          {
            __typename: "GraphqlPwaFooterLink",
            title: "Servicio técnico",
            label: "Garantías y reparaciones",
            icon: "FAQ",
            url:
              "https:\u002F\u002Fspecials.mediamarkt.es\u002Fatencion-al-cliente\u002Fgarantia-reparaciones",
          },
          {
            __typename: "GraphqlPwaFooterLink",
            title: "Devoluciones",
            label: "¿Cómo proceder?",
            icon: "FAQ",
            url:
              "https:\u002F\u002Fspecials.mediamarkt.es\u002Fatencion-al-cliente\u002Fdevoluciones",
          },
          {
            __typename: "GraphqlPwaFooterLink",
            title: "Envíos",
            label: "Tarifas y políticas de envío",
            icon: "FAQ",
            url:
              "https:\u002F\u002Fspecials.mediamarkt.es\u002Ftipos-envio",
          },
          {
            __typename: "GraphqlPwaFooterLink",
            title: "Factura",
            label: "Solicitar factura de tienda",
            icon: "FAQ",
            url:
              "https:\u002F\u002Fspecials.mediamarkt.es\u002Fgestiona-factura\u002Fsolicita-factura",
          },
        ],
        linkSections: [
          {
            __typename: "GraphqlPwaFooterLinkSection",
            title: "Nuestra empresa",
            links: [
              {
                __typename: "GraphqlPwaFooterLink",
                label: "¿Quiénes somos?",
                url:
                  "https:\u002F\u002Fspecials.mediamarkt.es\u002Fnuestra-empresa\u002Fhistoria",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Trabaja con nosotros",
                url:
                  "https:\u002F\u002Fspecials.mediamarkt.es\u002Fnuestra-empresa\u002Ftrabaja-con-nosotros",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Encuentra tu tienda",
                url:
                  "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fmarketselection.html",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Seguridad informática",
                url:
                  "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Flegal\u002Fseguridad-informatica",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Sostenibilidad",
                url:
                  "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fshop\u002Fsostenibilidad.html",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Mapa Web",
                url:
                  "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Flegal\u002Fsite-map",
              },
            ],
          },
          {
            __typename: "GraphqlPwaFooterLinkSection",
            title: "Servicios",
            links: [
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Mejor precio garantizado",
                url:
                  "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fspecials\u002Fmejor-precio-garantizado",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Tipos de envíos",
                url:
                  "https:\u002F\u002Fspecials.mediamarkt.es\u002Ftipos-envio",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Instalaciones y servicios",
                url:
                  "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fservice",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Garantía plus",
                url:
                  "https:\u002F\u002Fspecials.mediamarkt.es\u002Fgarantia-plus",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "MediaMarkt Empresas",
                url:
                  "https:\u002F\u002Fspecials.mediamarkt.es\u002Fempresas",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Financiación",
                url:
                  "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fmyaccount\u002Floyalty-benefits",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Tarifas telefonía",
                url:
                  "https:\u002F\u002Fspecials.mediamarkt.es\u002Ftarifas-moviles",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Tarifas energía",
                url:
                  "https:\u002F\u002Fspecials.mediamarkt.es\u002Fenergia",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Talleres y formaciones",
                url:
                  "https:\u002F\u002Fspecials.mediamarkt.es\u002Ftraining",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Revelado online",
                url: "https:\u002F\u002Frevelado.mediamarkt.es\u002F",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Tarjeta regalo",
                url:
                  "https:\u002F\u002Fspecials.mediamarkt.es\u002Ftarjeta-regalo-mediamarkt",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Cita previa",
                url:
                  "https:\u002F\u002Fspecials.mediamarkt.es\u002Fmi-cuenta\u002Fcita-previa",
              },
            ],
          },
          {
            __typename: "GraphqlPwaFooterLinkSection",
            title: "Ofertas y campañas",
            links: [
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Black Friday",
                url:
                  "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcategory\u002F_black-friday-706013.html",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Día sin IVA",
                url:
                  "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcampaign\u002Fdia-sin-iva",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Cyber Monday",
                url:
                  "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcampaign\u002Fcyber-monday",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Semana de Internet",
                url:
                  "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcampaign\u002Fsemana-web",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Blue Monday",
                url:
                  "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcampaign\u002Fblue-monday",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Red night",
                url:
                  "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcampaign\u002Fred-night",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Folleto y ofertas",
                url:
                  "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fcategory\u002F_campa%C3%B1as-y-ofertas-701114.html",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "El gran simpa",
                url:
                  "https:\u002F\u002Fspecials.mediamarkt.es\u002Fel-gran-sinpa",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Folleto loco",
                url:
                  "https:\u002F\u002Fspecials.mediamarkt.es\u002Fproductos-locos",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Newsletter",
                url:
                  "https:\u002F\u002Fspecials.mediamarkt.es\u002F10-euros-de-bienvenida",
              },
              {
                __typename: "GraphqlPwaFooterLink",
                label: "Marcas",
                url:
                  "https:\u002F\u002Fwww.mediamarkt.es\u002Fmcs\u002Fbrandsoverview\u002Fbrands,121956.html?langId=-5",
              },
            ],
          },
        ],
        chatActive: true,
        chatUrlPattern: "\u002F*",
        chatLinks: [
          {
            __typename: "GraphqlPwaFooterLink",
            label: "¿Te ayudamos?",
            url: "https:\u002F\u002Fmm-es-es.custhelp.com\u002Fapp\u002F",
          },
          {
            __typename: "GraphqlPwaFooterLink",
            label: "Asesoramiento-Personal Shopper",
            url:
              "https:\u002F\u002Fspecials.mediamarkt.es\u002Fpersonal-shopper",
          },
          {
            __typename: "GraphqlPwaFooterLink",
            label: "Encuentra tu tienda",
            url:
              "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fmarketselection.html",
          },
        ],
        chatWeekdayOpen: "09:00",
        chatWeekdayClosed: "20:00",
        chatSaturdayOpen: "09:00",
        chatSaturdayClosed: "20:00",
        chatSundayOpen: null,
        chatSundayClosed: null,
        chatEmployeeImage: null,
      },
      'redirect({"path":"\u002Fes\u002Fspecials\u002Fteletrabajo-y-aula-virtual"})': [],
      productConfig: {
        __typename: "GraphqlProductConfig",
        richContentCnet: [
          "BENQ",
          "BROTHER",
          "CORSAIR",
          "DELL",
          "D-LINK",
          "EL GATO TV",
          "FELLOWES",
          "G TECHNOLOGY",
          "LACIE",
          "LOGITECH",
          "MICROSOFT",
          "MICROSOFT IRELAND (SOFT)",
          "STARTECH",
          "EPSON",
          "HP",
          "SANDISK",
          "WESTERN DIGITAL",
          "G TECHNOLOGY",
        ],
        richContentLoadbee: [
          "AOC",
          "BALAY",
          "BOSCH",
          "CANDY",
          "CORSAIR",
          "ECOVACS",
          "JABRA",
          "MIELE",
          "NESPRESSO",
          "NETATMO",
          "RITTER",
          "SENNHEISER",
          "SHARKOON",
          "SIEMENS",
          "STEEL SERIES",
          "WACOM",
          "DE LONGHI",
          "KRUPS",
          "LEIFHEIT",
          "SOEHNLE",
          "LOGITECH",
          "LOGITECH-G",
          "ULTIMATE EARS",
          "ASTRO GAMING",
          "TRUST",
          "SAGE",
          "GIGASET",
        ],
        richContentFlixmedia: [
          "ACER",
          "AEG",
          "ALCATEL",
          "AMAZON",
          "AMD",
          "ASUS",
          "BAUKNECHT",
          "BEATS",
          "BEKO",
          "BRAUN",
          "CALOR",
          "CANDY",
          "CANON",
          "CROCKPOT",
          "DJI",
          "DE LONGHI",
          "DYSON",
          "ELECTROLUX",
          "FITBIT",
          "FOODSAVER",
          "GOPRO",
          "GROUPE SEB",
          "HARMAN ",
          "HARMAN KARDON",
          "HISENSE",
          "HOOVER",
          "HOTPOINT",
          "I ROBOT ROOMBA",
          "INDESIT",
          "INTEL",
          "JBL",
          "KENWOOD",
          "LG",
          "LG ELECTRONICS",
          "MSI",
          "NEATO",
          "NIKON",
          "PANASONIC",
          "PHILIPS",
          "RAZER",
          "RAZOR",
          "REMINGTON",
          "ROWENTA",
          "RUSSELL HOBBS",
          "SAMSUNG",
          "SEAGATE",
          "SONOS",
          "SONY",
          "TEFAL",
          "TLC",
          "TOM TOM",
          "TP VISION",
          "VOGELS",
          "WHIRLPOOL",
          "ZANUSSI",
          "TCL",
          "GOOGLE",
          "LENOVO",
          "NEST",
          "KITCHEN-AID",
          "HAIER",
          "ORAL-B",
          "TEKA",
          "JABRA",
          "MCAFEE",
          "DENON",
          "MARANTZ",
          "POLK",
          "KRUPS",
          "MOULINEX",
          "BOSE",
          "WMF",
          "BREVILLE",
          "FACEBOOK OCULUS",
          "POLK AUDIO",
        ],
        richContentExclusions: [
          "2186870",
          "2246310",
          "2246307",
          "2246306",
          "2246308",
          "2246311",
          "2246309",
          "2172416",
          "2231605",
          "2172460",
          "2172461",
          "2172467",
          "2172468",
          "2172465",
          "2172466",
          "2143671",
          "2172453",
          "2172418",
          "2173925",
          "2172452",
          "2211823",
          "2173443",
          "2244000",
          "2244003",
          "2173108",
          "2125539",
          "2172877",
          "2241280",
          "2236028",
          "2236027",
          "2236021",
          "2236020",
          "2236025",
          "2195518",
          "2226512",
          "2092697",
          "2035999",
          "2127027",
          "2127028",
          "2095642",
          "2173108",
        ],
        rentableProducts: [],
      },
    },
    "GraphqlProduct:1465208": {
      id: "1465208",
      __typename: "GraphqlProduct",
      title:
        'Convertible 2 en 1 -  Microsoft Surface Pro 7, 12.3", Intel® Core™ i5-1035G4, 8GB RAM, 128GB, W10',
      url: "\u002Fes\u002Fproduct\u002F-1465208.html",
      ean: "0889842481778",
      titleImageId: "ASSET_MMS_82431693",
      manufacturer: "MICROSOFT",
      onlineReleasedAt: "2019-10-22T00:00:00.000Z",
      assortmentType: null,
      isSfsEnabledProduct: false,
      breadcrumbs: [
        {
          __typename: "GraphqlBreadcrumb",
          name: "Informática",
          link: "\u002Fde\u002Fcategory\u002F_-701127.html",
        },
        {
          __typename: "GraphqlBreadcrumb",
          name: "Portátiles",
          link: "\u002Fde\u002Fcategory\u002F_-701175.html",
        },
        {
          __typename: "GraphqlBreadcrumb",
          name: "Portátiles táctiles",
          link: "\u002Fde\u002Fcategory\u002F_-701425.html",
        },
      ],
      energyEfficiency: {
        __typename: "GraphqlProductEnergyEfficiency",
        color: null,
        required: false,
        class: null,
        label: null,
        isLegacyEEL: true,
      },
      basePrice: {
        __typename: "GraphqlBasePrice",
        calculationFactor: null,
        info: null,
      },
    },
    "GraphqlProduct:1493784": {
      id: "1493784",
      __typename: "GraphqlProduct",
      title:
        'Portátil - LG Gram 17Z95N-G.AA78B, 17" WQXGA, Intel® Core™ i7-1165G7, 16 GB, 512 GB SSD, Iris® Plus, W10',
      url: "\u002Fes\u002Fproduct\u002F-1493784.html",
      ean: "8806091156266",
      titleImageId: "ASSET_MMS_79042460",
      manufacturer: "LG ELECTRONICS",
      onlineReleasedAt: null,
      assortmentType: null,
      isSfsEnabledProduct: false,
      breadcrumbs: [
        {
          __typename: "GraphqlBreadcrumb",
          name: "Informática",
          link: "\u002Fde\u002Fcategory\u002F_-701127.html",
        },
        {
          __typename: "GraphqlBreadcrumb",
          name: "Portátiles",
          link: "\u002Fde\u002Fcategory\u002F_-701175.html",
        },
        {
          __typename: "GraphqlBreadcrumb",
          name: 'Portátiles de 14" a 16.9"',
          link: "\u002Fde\u002Fcategory\u002F_-701422.html",
        },
      ],
      energyEfficiency: {
        __typename: "GraphqlProductEnergyEfficiency",
        color: null,
        required: false,
        class: null,
        label: null,
        isLegacyEEL: true,
      },
      basePrice: {
        __typename: "GraphqlBasePrice",
        calculationFactor: null,
        info: null,
      },
    },
    "GraphqlProduct:1477131": {
      id: "1477131",
      __typename: "GraphqlProduct",
      title:
        'Portátil - Huawei MateBook D15, 15.6" FHD, Intel® Core™ i5-10210U, 8 GB, 256 SSD, W10, Plata',
      url: "\u002Fes\u002Fproduct\u002F-1477131.html",
      ean: "6901443368181",
      titleImageId: "ASSET_MMS_74558001",
      manufacturer: "HUAWEI",
      onlineReleasedAt: null,
      assortmentType: null,
      isSfsEnabledProduct: false,
      breadcrumbs: [
        {
          __typename: "GraphqlBreadcrumb",
          name: "Informática",
          link: "\u002Fde\u002Fcategory\u002F_-701127.html",
        },
        {
          __typename: "GraphqlBreadcrumb",
          name: "Portátiles",
          link: "\u002Fde\u002Fcategory\u002F_-701175.html",
        },
        {
          __typename: "GraphqlBreadcrumb",
          name: 'Portátiles de 14" a 16.9"',
          link: "\u002Fde\u002Fcategory\u002F_-701422.html",
        },
      ],
      energyEfficiency: {
        __typename: "GraphqlProductEnergyEfficiency",
        color: null,
        required: false,
        class: null,
        label: null,
        isLegacyEEL: true,
      },
      basePrice: {
        __typename: "GraphqlBasePrice",
        calculationFactor: null,
        info: null,
      },
    },
    "GraphqlProduct:1485228": {
      id: "1485228",
      __typename: "GraphqlProduct",
      title:
        "PC Sobremesa - HP Pavilion TP01-1005ns, Intel® Core™ i5-10400, 8GB, 512GB SSD, UHD Graphics 630, W10, Plata",
      url: "\u002Fes\u002Fproduct\u002F-1485228.html",
      ean: "0194850647680",
      titleImageId: "ASSET_MMS_79010625",
      manufacturer: "HP",
      onlineReleasedAt: null,
      assortmentType: null,
      isSfsEnabledProduct: false,
      breadcrumbs: [
        {
          __typename: "GraphqlBreadcrumb",
          name: "Informática",
          link: "\u002Fde\u002Fcategory\u002F_-701127.html",
        },
        {
          __typename: "GraphqlBreadcrumb",
          name: "PC sobremesa",
          link: "\u002Fde\u002Fcategory\u002F_-701176.html",
        },
        {
          __typename: "GraphqlBreadcrumb",
          name: "Ordenadores",
          link: "\u002Fde\u002Fcategory\u002F_-701427.html",
        },
      ],
      energyEfficiency: {
        __typename: "GraphqlProductEnergyEfficiency",
        color: null,
        required: false,
        class: null,
        label: null,
        isLegacyEEL: true,
      },
      basePrice: {
        __typename: "GraphqlBasePrice",
        calculationFactor: null,
        info: null,
      },
    },
    "GraphqlProduct:1489800": {
      id: "1489800",
      __typename: "GraphqlProduct",
      title:
        "PC Sobremesa - HP M01-F0059ns, AMD Ryzen™ 5 3400G, 8 GB, 512 GB SSD, Radeon™ RX Vega 11, FreeDOS, Negro",
      url: "\u002Fes\u002Fproduct\u002F-1489800.html",
      ean: "0194850875311",
      titleImageId: "ASSET_MMS_78260729",
      manufacturer: "HP",
      onlineReleasedAt: null,
      assortmentType: null,
      isSfsEnabledProduct: false,
      breadcrumbs: [
        {
          __typename: "GraphqlBreadcrumb",
          name: "Informática",
          link: "\u002Fde\u002Fcategory\u002F_-701127.html",
        },
        {
          __typename: "GraphqlBreadcrumb",
          name: "PC sobremesa",
          link: "\u002Fde\u002Fcategory\u002F_-701176.html",
        },
        {
          __typename: "GraphqlBreadcrumb",
          name: "Ordenadores",
          link: "\u002Fde\u002Fcategory\u002F_-701427.html",
        },
      ],
      energyEfficiency: {
        __typename: "GraphqlProductEnergyEfficiency",
        color: null,
        required: false,
        class: null,
        label: null,
        isLegacyEEL: true,
      },
      basePrice: {
        __typename: "GraphqlBasePrice",
        calculationFactor: null,
        info: null,
      },
    },
    "GraphqlProduct:1486690": {
      id: "1486690",
      __typename: "GraphqlProduct",
      title:
        "PC Sobremesa - Asus S425MC-R5240G020T, AMD® Ryzen™ 5 2400G, 16 GB, 512 GB SSD, RX Vega 11, W10, Negro",
      url: "\u002Fes\u002Fproduct\u002F-1486690.html",
      ean: "4718017780285",
      titleImageId: "ASSET_MMS_77343910",
      manufacturer: "ASUS",
      onlineReleasedAt: null,
      assortmentType: null,
      isSfsEnabledProduct: false,
      breadcrumbs: [
        {
          __typename: "GraphqlBreadcrumb",
          name: "Informática",
          link: "\u002Fde\u002Fcategory\u002F_-701127.html",
        },
        {
          __typename: "GraphqlBreadcrumb",
          name: "PC sobremesa",
          link: "\u002Fde\u002Fcategory\u002F_-701176.html",
        },
        {
          __typename: "GraphqlBreadcrumb",
          name: "Ordenadores",
          link: "\u002Fde\u002Fcategory\u002F_-701427.html",
        },
      ],
      energyEfficiency: {
        __typename: "GraphqlProductEnergyEfficiency",
        color: null,
        required: false,
        class: null,
        label: null,
        isLegacyEEL: true,
      },
      basePrice: {
        __typename: "GraphqlBasePrice",
        calculationFactor: null,
        info: null,
      },
    },
    "GQLProductCollection:2sxIp9JnzTC5weaWLeVMhz": {
      id: "2sxIp9JnzTC5weaWLeVMhz",
      __typename: "GQLProductCollection",
      title: [
        { type: "heading2", text: "Product Collection", spans: [] },
      ],
      image: null,
      totalProducts: 30,
      items: {
        __typename: "GQLProductCollectionItems",
        visible: [
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1465208",
            product: { __ref: "GraphqlProduct:1465208" },
            priceOverride: null,
            price: {
              __typename: "GraphqlPrice",
              currency: "EUR",
              price: 1049,
              strikePrice: null,
              strikePriceType: null,
              unitPrice: null,
            },
            availability: {
              __typename: "Availability",
              productId: "1465208",
              delivery: {
                __typename: "GraphqlDeliveryTime",
                availabilityType: "IN_WAREHOUSE",
                earliest: "2021-04-23T10:28:47.129Z",
                latest: "2021-04-26T10:28:47.129Z",
                quantity: 1,
              },
              "pickup({})": null,
            },
            shipping: {
              __typename: "ShippingCost",
              cost: 2.99,
              label: "incl. VAT excl. shipping",
              freeShipping: "Free shipping",
            },
            rating: {
              __typename: "GraphqlReviewStatistic",
              average: 4.1875,
              count: 16,
            },
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1493784",
            product: { __ref: "GraphqlProduct:1493784" },
            priceOverride: null,
            price: {
              __typename: "GraphqlPrice",
              currency: "EUR",
              price: 1849,
              strikePrice: null,
              strikePriceType: null,
              unitPrice: null,
            },
            availability: {
              __typename: "Availability",
              productId: "1493784",
              delivery: {
                __typename: "GraphqlDeliveryTime",
                availabilityType: "IN_WAREHOUSE",
                earliest: "2021-04-23T10:30:41.262Z",
                latest: "2021-04-26T10:30:41.262Z",
                quantity: 1,
              },
              "pickup({})": null,
            },
            shipping: {
              __typename: "ShippingCost",
              cost: 5.99,
              label: "incl. VAT excl. shipping",
              freeShipping: null,
            },
            rating: {
              __typename: "GraphqlReviewStatistic",
              average: 4.3333,
              count: 6,
            },
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1477131",
            product: { __ref: "GraphqlProduct:1477131" },
            priceOverride: null,
            price: {
              __typename: "GraphqlPrice",
              currency: "EUR",
              price: 749,
              strikePrice: null,
              strikePriceType: null,
              unitPrice: null,
            },
            availability: {
              __typename: "Availability",
              productId: "1477131",
              delivery: {
                __typename: "GraphqlDeliveryTime",
                availabilityType: "IN_WAREHOUSE",
                earliest: "2021-04-23T10:30:41.262Z",
                latest: "2021-04-26T10:30:41.262Z",
                quantity: 1,
              },
              "pickup({})": null,
            },
            shipping: {
              __typename: "ShippingCost",
              cost: 5.99,
              label: "incl. VAT excl. shipping",
              freeShipping: "Free shipping",
            },
            rating: {
              __typename: "GraphqlReviewStatistic",
              average: 4.6154,
              count: 13,
            },
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1485228",
            product: { __ref: "GraphqlProduct:1485228" },
            priceOverride: null,
            price: {
              __typename: "GraphqlPrice",
              currency: "EUR",
              price: 599,
              strikePrice: null,
              strikePriceType: null,
              unitPrice: null,
            },
            availability: {
              __typename: "Availability",
              productId: "1485228",
              delivery: {
                __typename: "GraphqlDeliveryTime",
                availabilityType: "IN_WAREHOUSE",
                earliest: "2021-04-23T10:30:41.262Z",
                latest: "2021-04-26T10:30:41.262Z",
                quantity: 1,
              },
              "pickup({})": null,
            },
            shipping: {
              __typename: "ShippingCost",
              cost: 5.99,
              label: "incl. VAT excl. shipping",
              freeShipping: "Free shipping",
            },
            rating: {
              __typename: "GraphqlReviewStatistic",
              average: 5,
              count: 10,
            },
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1489800",
            product: { __ref: "GraphqlProduct:1489800" },
            priceOverride: null,
            price: {
              __typename: "GraphqlPrice",
              currency: "EUR",
              price: 459,
              strikePrice: null,
              strikePriceType: null,
              unitPrice: null,
            },
            availability: {
              __typename: "Availability",
              productId: "1489800",
              delivery: {
                __typename: "GraphqlDeliveryTime",
                availabilityType: "NONE",
                earliest: null,
                latest: null,
                quantity: 0,
              },
              "pickup({})": null,
            },
            shipping: {
              __typename: "ShippingCost",
              cost: 5.99,
              label: "incl. VAT excl. shipping",
              freeShipping: null,
            },
            rating: {
              __typename: "GraphqlReviewStatistic",
              average: 3.6667,
              count: 6,
            },
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1486690",
            product: { __ref: "GraphqlProduct:1486690" },
            priceOverride: null,
            price: {
              __typename: "GraphqlPrice",
              currency: "EUR",
              price: 649,
              strikePrice: null,
              strikePriceType: null,
              unitPrice: null,
            },
            availability: {
              __typename: "Availability",
              productId: "1486690",
              delivery: {
                __typename: "GraphqlDeliveryTime",
                availabilityType: "IN_WAREHOUSE",
                earliest: "2021-04-23T10:30:41.262Z",
                latest: "2021-04-26T10:30:41.262Z",
                quantity: 1,
              },
              "pickup({})": null,
            },
            shipping: {
              __typename: "ShippingCost",
              cost: 5.99,
              label: "incl. VAT excl. shipping",
              freeShipping: "Free shipping",
            },
            rating: {
              __typename: "GraphqlReviewStatistic",
              average: 5,
              count: 1,
            },
          },
        ],
        hidden: [
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1473138",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1343958",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1341784",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1486383",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1496249",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1492553",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1497202",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1492549",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1492640",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1494581",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1480857",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1462124",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1378215",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1474943",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1472636",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1438618",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1483258",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1492553",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1497202",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1492549",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1492640",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1494581",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1480857",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
          {
            __typename: "GQLProductCollectionProduct",
            productId: "1462124",
            product: null,
            priceOverride: null,
            price: null,
            availability: null,
            shipping: null,
            rating: null,
          },
        ],
      },
    },
  },
  optimizelyDataFile: {
    version: "4",
    rollouts: [
      {
        experiments: [
          {
            status: "Running",
            audienceIds: [],
            variations: [
              {
                variables: [
                  { id: "20156054565", value: "0.0" },
                  { id: "20159664141", value: "" },
                  { id: "18634082651", value: '{"a":"asf"}' },
                ],
                id: "18684440003",
                key: "18684440003",
                featureEnabled: true,
              },
            ],
            id: "18655062635",
            key: "18655062635",
            layerId: "18635772927",
            trafficAllocation: [],
            forcedVariations: {},
          },
        ],
        id: "18635772927",
      },
      {
        experiments: [
          {
            status: "Running",
            audienceIds: [],
            variations: [
              {
                variables: [{ id: "18632221363", value: "true" }],
                id: "18608782497",
                key: "18608782497",
                featureEnabled: true,
              },
            ],
            id: "18639680980",
            key: "18639680980",
            layerId: "18649641415",
            trafficAllocation: [],
            forcedVariations: {},
          },
        ],
        id: "18649641415",
      },
    ],
    typedAudiences: [
      {
        id: "20176806202",
        conditions: [
          "and",
          [
            "or",
            [
              "or",
              {
                value: "\u002Fcategory",
                type: "custom_attribute",
                name: "urlPath",
                match: "substring",
              },
              {
                value: "\u002Fsearch",
                type: "custom_attribute",
                name: "urlPath",
                match: "substring",
              },
              {
                value: "\u002Flist",
                type: "custom_attribute",
                name: "urlPath",
                match: "substring",
              },
            ],
          ],
        ],
        name: "PLP \u002F SRP Viewer",
      },
    ],
    anonymizeIP: true,
    projectId: "18443411739",
    variables: [],
    featureFlags: [
      {
        experimentIds: [],
        rolloutId: "18649641415",
        variables: [
          {
            defaultValue: "false",
            type: "boolean",
            id: "18632221363",
            key: "isContentfulActive",
          },
        ],
        id: "18608851310",
        key: "optimizely_test_feature",
      },
      {
        experimentIds: [],
        rolloutId: "18635772927",
        variables: [
          {
            defaultValue: '{"a":"asf"}',
            type: "json",
            id: "18634082651",
            key: "first_key",
          },
          {
            defaultValue: "0.0",
            type: "double",
            id: "20156054565",
            key: "double_example",
          },
          {
            defaultValue: "",
            type: "string",
            id: "20159664141",
            key: "string__example",
          },
        ],
        id: "18676490005",
        key: "my_test_feature",
      },
    ],
    experiments: [
      {
        status: "Running",
        audienceConditions: [
          "and",
          "19064062651",
          "19739629645",
          "19044814137",
          "20093663261",
        ],
        audienceIds: ["$opt_dummy_audience"],
        variations: [
          { variables: [], id: "20088382386", key: "control" },
          { variables: [], id: "20076572127", key: "financing-top" },
        ],
        id: "20091681746",
        key: "checkout-payment-sorting",
        layerId: "20103562726",
        trafficAllocation: [
          { entityId: "20076572127", endOfRange: 5000 },
          { entityId: "20088382386", endOfRange: 10000 },
        ],
        forcedVariations: {},
      },
      {
        status: "Running",
        audienceConditions: [
          "and",
          "19036513318",
          "19044814137",
          "19064062651",
          "20176806202",
        ],
        audienceIds: ["$opt_dummy_audience"],
        variations: [
          { variables: [], id: "20142730659", key: "default" },
          {
            variables: [],
            id: "20150230496",
            key: "show_financing_variant",
          },
          { variables: [], id: "20156846137", key: "hide_financing" },
        ],
        id: "20142680819",
        key: "financing_info_display_for_saturn_plp_srp_products",
        layerId: "20153420650",
        trafficAllocation: [
          { entityId: "20142730659", endOfRange: 5000 },
          { entityId: "20156846137", endOfRange: 10000 },
        ],
        forcedVariations: {},
      },
    ],
    audiences: [
      {
        id: "19036513318",
        conditions:
          '["and", ["or", ["or", {"match": "exact", "name": "salesLine", "type": "custom_attribute", "value": "Saturn"}]]]',
        name: "Sales Line Saturn",
      },
      {
        id: "19739629645",
        conditions:
          '["and", ["or", ["or", {"match": "exact", "name": "salesLine", "type": "custom_attribute", "value": "Media"}]]]',
        name: "Sales Line MediaMarkt",
      },
      {
        id: "19044814137",
        conditions:
          '["and", ["or", ["or", {"match": "exact", "name": "language", "type": "custom_attribute", "value": "de"}]]]',
        name: "Language DE",
      },
      {
        id: "20176806202",
        conditions:
          '["or", {"match": "exact", "name": "$opt_dummy_attribute", "type": "custom_attribute", "value": "$opt_dummy_value"}]',
        name: "PLP \u002F SRP Viewer",
      },
      {
        id: "19064062651",
        conditions:
          '["and", ["or", ["or", {"match": "exact", "name": "countryCode", "type": "custom_attribute", "value": "DE"}]]]',
        name: "Country DE",
      },
      {
        id: "20093663261",
        conditions:
          '["and", ["or", ["or", {"match": "exact", "name": "urlPath", "type": "custom_attribute", "value": "\u002Fcheckout\u002Fpayment"}]]]',
        name: "Checkout Payment Page",
      },
      {
        conditions:
          '["or", {"match": "exact", "name": "$opt_dummy_attribute", "type": "custom_attribute", "value": "$opt_dummy_value"}]',
        id: "$opt_dummy_audience",
        name: "Optimizely-Generated Audience for Backwards Compatibility",
      },
    ],
    groups: [],
    attributes: [
      { id: "18731822351", key: "urlPath" },
      { id: "19059744016", key: "salesLine" },
      { id: "19075843692", key: "deviceCategory" },
      { id: "19079463604", key: "deviceType" },
      { id: "19081183056", key: "countryCode" },
      { id: "19141080016", key: "language" },
      { id: "19752156222", key: "environment" },
    ],
    botFiltering: false,
    accountId: "18443411739",
    events: [
      {
        experimentIds: [],
        id: "18630311362",
        key: "optimizely_test_feature_used",
      },
      {
        experimentIds: ["20091681746", "20142680819"],
        id: "18653120769",
        key: "purchase",
      },
      { experimentIds: [], id: "18980692636", key: "add_to_cart" },
      { experimentIds: [], id: "19077143037", key: "add_to_cart_sticky" },
      { experimentIds: [], id: "19231191121", key: "pdp_view" },
      { experimentIds: [], id: "19887630336", key: "add_to_cart_bundle" },
      {
        experimentIds: [],
        id: "19945444458",
        key: "auth_register_loyalty",
      },
      { experimentIds: [], id: "19949313499", key: "auth_login" },
      {
        experimentIds: [],
        id: "19956976773",
        key: "auth_subscribe_newsletter",
      },
      {
        experimentIds: [],
        id: "19957015121",
        key: "auth_register_default",
      },
      {
        experimentIds: [],
        id: "19958964166",
        key: "auth_register_prefill",
      },
      {
        experimentIds: [],
        id: "20050480921",
        key: "category_teaser_click",
      },
      {
        experimentIds: ["20091681746"],
        id: "20076563128",
        key: "payment_financing",
      },
      { experimentIds: [], id: "20103631090", key: "suggestion_click" },
      {
        experimentIds: ["20091681746"],
        id: "20105840845",
        key: "payment_paypal",
      },
      {
        experimentIds: [],
        id: "20117172052",
        key: "payment_financing_top",
      },
      {
        experimentIds: [],
        id: "20155248374",
        key: "add_to_cart_warranty",
      },
      {
        experimentIds: ["20142680819"],
        id: "20161040341",
        key: "plp_srp_product_click",
      },
      {
        experimentIds: [],
        id: "20161932472",
        key: "add_to_cart_accessory",
      },
      {
        experimentIds: [],
        id: "20175671643",
        key: "add_to_cart_service",
      },
    ],
    revision: "367",
  },
  i18nextLanguage: "es",
  i18nextStore: {
    es: {
      root: {
        headline: "Bienvenido a la App Shell",
        cookieLayer: {
          headline: "¡Bienvenido a mediamarkt.es!",
          infoText:
            "Para proporcionarle una experiencia online agradable, utilizamos cookies en nuestro sitio web. Al continuar navegando por mediamarkt.es, usted acepta el uso de cookies. Información detallada y cómo puede oponerse al uso de cookies en cualquier momento se puede encontrar en nuestra política de privacidad \u003Ca href='https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fshop\u002Fdatenschutzhinweis_shop.html' target='_blank'\u003E„Cookies, servicios de análisis web y medios de comunicación social“\u003C\u002Fa\u003E.",
          button: "De acuerdo",
        },
        howItWorks: "Funciona asi",
        liveChat: {
          headline: "Hola {{customer}}",
          subline: "¿Cómo podemos ayudarte?",
          chatHeadline: "¿Preguntas?",
          chatSublineWeekday:
            "Puedes comunicarte con nosotros de lunes a viernes de \u003Cbold\u003E{{openFrom}}\u003C\u002Fbold\u003E a \u003Cbold\u003E{{closedOn}}\u003C\u002Fbold\u003E",
          chatSublineSaturday:
            "Puedes comunicarte con nosotros los sábados desde \u003Cbold\u003E{{openFrom}}\u003C\u002Fbold\u003E a \u003Cbold\u003E{{closedOn}}\u003C\u002Fbold\u003E",
          chatSublineSaturdayClosed:
            "Puedes comunicarte con nosotros nuevamente de lunes a viernes de \u003Cbold\u003E{{weekdayOpenFrom}}\u003C\u002Fbold\u003E a \u003Cbold\u003E{{weekdayClosedOn}}\u003C\u002Fbold\u003E",
          chatSublineSunday:
            " Puedes comunicarte con nosotros los domingos desde \u003Cbold\u003E{{openFrom}}\u003C\u002Fbold\u003E a \u003Cbold\u003E{{closedOn}}\u003C\u002Fbold\u003E",
          chatSublineSundayClosed:
            "Puedes comunicarte con nosotros nuevamente de lunes a viernes de \u003Cbold\u003E{{weekdayOpenFrom}}\u003C\u002Fbold\u003E a \u003Cbold\u003E{{weekdayClosedOn}}\u003C\u002Fbold\u003E",
          chatButtonLabel: "Chatear ahora",
          consentSubline:
            "Para poder utilizar nuestro chat, debes activar las cookies de personalización.",
          consentLinkLabel: "Más información.",
          consentButtonLabel: "Activar",
        },
        authentication: {
          passwordSafety: {
            passwordStrengthErrorLabel:
              "Seguridad de la contraseña: Baja",
            passwordStrengthSuccessLabel:
              "Seguridad de la contraseña: Alta",
            passwordLengthLabel: "al menos 8 caracteres",
            passwordLettersLabel: "al menos una letra",
            passwordMinConsecutivesLabel:
              "máximo de 3 números o letras seguidos",
            passwordMaxSameLabel: "máximo 4 letras iguales",
            passwordMaxLengthLabel: "máximo 15 letras",
          },
        },
        routes: {
          orderHistory: "Mis compras",
          wishList: "Lista de deseos",
          accountDetailPage: "Datos personales",
          service: "Servicio",
          faq: "FAQ",
          contact: "Contacto",
          coupons: "Cupones",
          loyalty: "MediaMarkt Club",
          addressBook: "Agenda de direcciones",
          login: "Log in",
          registration: "Registro",
        },
        errorPage: {
          somethingWentWrong: "¡Ups! ¡Algo ha ido mal!",
          notfound: {
            subtext:
              "Lo siento, esta página ha desaparecido, enviaremos a alguien a buscarla inmediatamente.",
            goHome: "A la página de inicio",
          },
          technicalError: {
            subtext:
              "Se ha producido un error técnico. Ya estamos trabajando en la solución.",
            reload: "Recargar la página",
          },
          offlineError: {
            headline: "No hay conexión a Internet",
            subtext:
              "No hay problema, recargaremos esta página tan pronto como vuelvas a estar en línea.",
            reload: "Recargar la página",
          },
        },
        market: {
          availability: {
            delivery: "no se puede recoger",
            deliveryPickup: "Listo para la recogida después del pedido",
            noPickupPossible: "La recogida en tienda no está disponible",
          },
          selectorModal: {
            selected: "Seleccionado",
            nearbyStores: "Tiendas cerca",
            selectMarket: "Seleccionar tienda",
            searchPlaceholder: "Código postal\u002FCiudad",
            noNearbyStores:
              "Comprueba la disponibilidad en tu tienda más cercana",
            error:
              "Lo siento, la búsqueda de tienda no está disponible en este momento",
            noResults: "Código postal \u002F Ciudad no válida",
          },
          consent: {
            body:
              "Usamos datos de Google Maps para que puedas encontrar tu tienda cerca más rápido. Para continuar tienes que activar la categoría confort. \u003Ca target='_blank' href='{{link}}'\u003EMás información\u003C\u002Fa\u003E",
            activate: "Activar",
          },
          redirectModal: {
            hint: "Consejo",
            redirectTimer:
              "Te redirecionaremos tras {{timer}} segundos...",
            remainButtonLabel: "Quedarse en Península y Baleares",
          },
        },
        basket: {
          continueShopping: "Zum Seguir comprando",
          goToBasket: "Ir al carrito",
          addToBasket: "Añadir al carrito",
          successfullAdded:
            "Su producto fue añadido con éxito al carrito",
          multiSuccessfullAdded:
            "Sus productos han sido añadidos con éxito al carrito",
          hintAdded: "El producto ya está en el carrito",
          multiHintAdded:
            "No todos los productos pueden ser añadidos al carrito de la compra",
          errorAdded: "Su producto no pudo ser añadido al carrito",
          multiErrorAdded:
            "Sus productos no pudieron ser añadidos al carrito",
          messageCodes: {
            200: "El producto ha sido añadido",
            109020:
              "Se ha superado la cantidad máxima de pedidos de este producto",
            111004:
              "Lo sentimos, hay un problema técnico. Por favor, inténtelo de nuevo más tarde",
            201000: "No se encontró ningún precio para este producto",
            401000: "El producto no fue encontrado.",
            401001:
              "La garantía no puede ser añadida al producto principal",
            401002:
              "El servicio no puede ser añadido al producto principal",
            409001: "El producto no existe",
            409006: "Se ha superado la cantidad máxima de pedido",
            409007:
              "Se ha superado la cantidad máxima de pedidos de este producto",
            409008: "Ha habido un error. Por favor, retire la garantía.",
          },
        },
        marketDelivery: {
          marketLabel: "Tienda",
          available:
            "\u003Cspan\u003E Recoger en tienda\u003C\u002Fspan\u003E",
          notAvailable:
            "\u003Cspan\u003E No es posible recoger en tienda \u003C\u002Fspan\u003E",
          available_compact: "Recogida en tienda",
          notAvailable_compact:
            "Actualmente no hay posibilidad de recogida en tienda",
          marketPickup: "Recogida en tienda",
          marketPickupOn: "Recogida en tienda a partir de {{date}}",
          marketPickupOnPdp:
            "Disponible para recoger en tienda en {{date}}",
          marketPickupExact: "Recogida en tienda disponible en 30 min",
          marketPickupExactPdp: "Recogida en tienda disponible en 30 min",
          noPickupPossible:
            "Desafortunadamente no hay posibilidad de recoger en tienda",
          noPickupPossiblePdp: "Recogida no disponible en esta tienda",
          noPickupPossibleCampaigns: "Recogida en tienda",
          preorderNow: "Pre-compra ahora con precio garantizado",
          title: "Recogida",
          noMarketSelected: "No hay tienda seleccionada",
          selectMarket: "( seleccionar tienda )",
          changeMarket: "( cambiar tienda )",
          pickMarket: "",
          marketError: "La tienda no pudo ser establecida",
          pickupAt: "Listo para ser recogido a partir de {{pickupDate}}",
          pickupAvailableOn:
            "Listo para ser recogido a partir de la fecha de lanzamiento {{releaseDate}} después del pedido",
          pickupReady: "Recogida en tienda disponible en 30 min",
          marketNotification:
            "Selecciona tu tienda más cercana para comprobar la disponibilidad",
        },
        onlineDelivery: {
          onlineLabel: "Online",
          downloadAvailable: "Disponible inmediatamente",
          downloadInfo: [
            "Después de la compra, se le enviará el código de descarga por correo electrónico",
            "Canjee el código de descarga de acuerdo con las instrucciones del fabricante",
            "¡Su producto está activado!",
          ],
          available:
            "\u003Cspan\u003EDisponible online\u003C\u002Fspan\u003E",
          available_compact: "disponible online",
          soonAvailable:
            "\u003Cspan\u003Edisponible online\u003C\u002Fspan\u003E",
          delivery: "Entrega",
          deliveryOn: "Entrega {{earliest}} - {{latest}}",
          deliveryOnExact: "Entrega {{latest}}",
          onlyXAvailable: "Sólo {{amount}} unidades disponibles",
          noDeliveryPossible: "Desafortunadamente no hay entrega posible",
          preorderNow: "Pre-compra ahora con precio garantizado",
          deliveryAvailableOn: "Entrega a partir de {{date}}",
          permanentlyNotAvailable: "No se incluye en el rango",
        },
        shippingAndTaxLabels: {
          withTaxAndFreeShipping: "IVA incl. con envío gratis",
          withTaxAndShipping: "IVA incl. con gastos de envío",
        },
        financing: {
          installments:
            "Financiación {{interest_rate}}%: {{price_formatted}} en {{month_number}} cuotas **",
        },
        servicesLayer: {
          alreadySelected: "ya seleccionado",
          selectService: "Seleccionar servicio",
          selectWarrantyPackage: "Selecciona la garantía",
          closeServiceLayer: "Cerrar",
        },
        wishList: {
          add: "Añadir a la lista de favoritos",
          remove: "quitar de la lista de favoritos",
          added:
            "Añadido con éxito a tu lista de favoritos! Encontrarás tu lista de favoritos en Mi cuenta.",
          removed: "¡Retirado con éxito de tu lista de favoritos!",
        },
        contacts: {
          hotline: "900 205 000",
          "hotline-loyalty": "900 205 000",
          "email-loyalty": "kontakt@mediamarkt.club",
        },
        urls: {
          contactForm:
            "https:\u002F\u002Fspecials.mediamarkt.es\u002Fcontacto",
          "contactForm-app":
            "https:\u002F\u002Fspecials.mediamarkt.es\u002Fcontacto",
          "dataProtection-loyalty":
            "https:\u002F\u002Fmediamarkt.es\u002Fes\u002Flegal\u002Fpolitica-de-privacidad",
          "termsAndConditions-loyalty":
            "https:\u002F\u002Fmediamarkt.es\u002Fes\u002Flegal\u002Fcondiciones-de-contratacion",
          dataProtection:
            "https:\u002F\u002Fmediamarkt.es\u002Fes\u002Flegal\u002Fpolitica-de-privacidad",
          termsAndConditions:
            "https:\u002F\u002Fmediamarkt.es\u002Fes\u002Flegal\u002Fcondiciones-de-contratacion",
          shopFinder:
            "https:\u002F\u002Fwww.mediamarkt.es\u002Fes\u002Fmarketselection.html",
          privacySettings:
            "https:\u002F\u002Fmediamarkt.es\u002Fes\u002Flegal\u002Fpolitica-de-privacidad",
        },
        recommendationSlider: {
          consent: {
            marketingCookies: "Permitr recomendaciones de productos",
            description:
              "Podemos recomendarte productos seleccionados especialmente para ti. Para esto necesitamos que actives la categoría de personalización.",
            moreInformation: {
              label: "Más información.",
              url:
                "\u002Flegal\u002Fpolitica-de-cookies#cookies_personalizacion",
            },
            cta: "Activar",
          },
        },
        consent: {
          allow: "Permitir",
          googleReCaptcha:
            "Usamos la tecnología “Google reCAPTCHA” en nuestro sitio web. Esta tecnología está destinada a garantizar que los datos sean ingresados ​​en nuestro sitio web por una persona física y no por un programa automatizado para proteger nuestro sitio web de espionaje inadecuado y SPAM. Puede encontrar más información aquí: ",
        },
        badges: {
          loyalty: {
            member: "Precio exclusivo MediaMarkt Club",
            "non-member": "Descuento para miembros de MediaMarkt Club",
          },
          freeShipping: "envío gratis",
        },
        preCheckoutLayer: {
          modal: {
            closeButton: "Seguir comprando",
            addToCartButton: "Ir al carrito",
          },
          services: {
            addSuccess: "Servicio ha añadido a carrito",
            removeSuccess: "Se ha eliminado el servicio del carrito",
          },
          warranties: {
            addSuccess: "Garantía añadida a carrito",
            removeSuccess: "Se ha eliminado la garantía del carrito",
          },
        },
        price: {
          uvp: "PVR",
          strikePriceTooltip_UVP:
            "Este es el precio recomendado por el fabricante",
          sop: "Último precio del producto",
        },
        searchSuggestion: { bestPrice: "precios reducidos" },
        eefDatasheet: { title: "Página de detalle del producto" },
        appHeader: {
          reduced: {
            checkout: "Pedido seguro",
            "myaccount-login": "Acceso seguro",
            "myaccount-registration": "Registro seguro",
          },
        },
        servicesAndWarranties: {},
      },
      content: {
        booking: {
          headline: "Appointment at the store",
          sectionTextLine1:
            "From now on by booking an appointment you can again visit our store.",
          more: "More appointments",
          empty:
            "Unfortunately no available date for selected time slot.",
          error: "Sorry, an error has occurred.",
          form: {
            yourContactInformation: "Your contact information",
            reservationRequest:
              "Enter your contact information to set up an appointment on the {{date}} at {{time}} o'clock. Please note that a separate appointment must be made for each person - even from the same household.",
            firstName: "First Name",
            lastName: "Last Name",
            email: "E-Mail",
            phoneNumber: "Phone Number",
            zipCode: "Zip Code",
            city: "City",
            street: "Street",
            houseNr: "House Number",
            acceptConsent:
              "I accept the \u003C0\u003Edata protection information\u003C\u002F0\u003E.",
            confirmBooking: "Confirm booking",
            dataProtectionInformation: "data protection information",
            dataTransferConsentPdfUrl:
              "ADD YOUR COUNTRY SPECIFIC URL TO THE CONSENT PDF FOR THE DATA TRANSFER",
            errorMessages: {
              form: "There is an error. Please check and try again.",
              slotUnavailable:
                "This slot is not available anymore. Please choose another one.",
              slotDenied:
                "Your booking was denied. Please use another slot.",
              city: "Please enter a valid city.",
              email: "Please enter a valid email address.",
              firstName: "Please enter your first name.",
              houseNr: "Please enter your house number.",
              lastName: "Please enter your last name.",
              phoneNumber:
                "Your phone number has to include the country code after the + and should have a length up to 14 characters. Empty spaces and special characters are not allowed.",
              zipCode: "Please enter a valid zip code.",
              street: "Please enter a valid street.",
              acceptConsent: "Please accept the consent.",
            },
            infoScreen: {
              bookingTime: "{{date}} at {{time}} o'clock",
              appointmentReserved:
                "Thanks! Your appointment for {{storeName}} is reserved.",
              appointmentConfirmed:
                "Thanks! Your appointment for {{storeName}} was confirmed.",
              appointmentCanceled:
                "Thanks! Your appointment for {{storeName}} was canceled.",
              appointmentAlreadyCanceled:
                "Your appointment for {{storeName}} was already canceled. Please book a new one.",
              yourDisplayId: "Your code is",
              visitInformation:
                "When visiting please bring this code with you. You will get this code also per email. See you soon!",
              confirmationEmailInfo:
                "Please accept the wished appointment in the next 30 minutes. You will get an email with a link for that - only by accepting the appointment is booked. Otherwise another customer can make use of the slot.",
              lookingForwardForVisit:
                " We are looking forward for your visit!",
              confirmWithLink:
                "Please accept in the next 30 minutes your wished appointment.",
              bookNewAppointment: "Book new appointment",
            },
          },
        },
        priceCalculator: {
          loadMore: "Ver más",
          brandNotFound: "Marca no encontrada",
          findMarket: "Buscar tienda",
          onOffer: "En oferta",
          displayReplace: "Reemplazo de dispositivo",
          batteryReplace: "Reemplazo de batería",
          displayBatteryReplaceSet:
            "Precio establecido de reemplazo de batería y pantalla",
          calculatePlusWarranty: "Calcula ahora Garantía Plus",
          calculatePlusProtection: "Calcula Servicio más protección ",
          smartphone: "Smartphone, teléfono móvil",
          wearable: "Smartwatch",
          headphones: "Auriculares, audio móvil",
          navigation: "Navegación",
          hardDrive: "Disco duro",
          notebooksDesktopPc:
            "Portátil, Notebook, convertible, PC de sobremesa",
          tablet: "Tablet",
          photo: "Foto",
          smallElectroDevices:
            "Pequeños dispositivos electrónicos, monitores, impresoras",
          officeCommunication:
            "Comunicación para oficina, DVD \u002F Blu-Ray",
          gameConsole: "Consolas",
          tvHifi: "Televisores, receptores de TV",
          appliances:
            "Frigoríficos \u002F congeladores, fregaderos, hornos \u002F cocinas, microondas",
          fridgeStove:
            "Frigoríficos \u002F congeladores, fregaderos, hornos \u002F cocinas, microondas",
          coffeeMachine: "Máquinas de café totalmente automáticas",
        },
        consent: {
          zoovu: {
            headline:
              "Herramienta de recomendación de compras de terceros",
            text:
              "Para poder ayudarte con tus dudas y tu selección de productos, ofrecemos asesores interactivos y solicitamos datos a terceros proveedores. Para continuar tienes que activar la categoría de personalización en las cookies.",
            moreInformation: "Más información",
            accept: "Aceptar",
          },
          googleMaps: {
            headline: "",
            text:
              "Usamos datos de Google Maps para que puedas encontrar tu tienda más cercana. Para continuar tienes que activar la categoría de personalización en las cookies.",
            moreInformation: "Más información",
            accept: "Activar",
          },
          youTube: {
            headline: "External Content",
            text:
              "To show you videos, we use data from YouTube. To continue you must activate the comfort category.",
            moreInformation: "More informations",
            accept: "Accept",
          },
          livebuy: {
            headline: "External Content",
            text:
              "To show you livestreams, we use data from Livebuy. To continue you must activate the comfort category.",
            moreInformation: "More informations",
            accept: "Accept",
          },
        },
        uid: {
          plusGuarantee: "Garantía Plus",
          plusProtection: "Protección Plus",
        },
        general: { back: "volver" },
        errorMessages: {
          defaultHeadline: "Algo ha salido mal...",
          defaultText:
            "Desafortunadamente algunos datos se han perdido y algunas partes de la web pueden no mostrarse de forma correcta.",
        },
        phoneLabel: "Teléfono:",
        emailLabel: "Email:",
        faxLabel: "Fax:",
        "marketplace-seller-registration-sent": {
          title:
            "Gracias por tu interés. Tu solicitud se ha enviado correctamente.",
        },
        "marketplace-seller-registration-error": {
          title:
            "Lamentablemente no se ha podido enviar tu solicitud. Vuelve a intentarlo más tarde.",
        },
        "marketplace-seller-registration-texts": {
          question:
            "Muy bien, ¿y cómo puedo empezar a usar mediamarkt.es?",
          answer:
            "Todo lo que tienes que hacer es completar el siguiente formulario. Luego nos comunicaremos contigo y discutiremos los siguientes pasos.",
          legal:
            "Tus datos solo se procesarán con el fin de establecer contacto y se eliminarán una vez finalizado el propósito.",
        },
        "marketplace-seller-registration-form": {
          "article-types-label": "Tipología de productos",
          "article-types": {
            audio: "Hi-Fi, audio y componentes",
            tv: "Televisión y cine en casa",
            telephone: "Teléfonos y comunicaciones para oficina",
            others: "Otros",
            handies: "Smartphone, teléfono móvil y accesorios",
            car: "Navegación y HiFi para el coche",
            "music-instruments": "Instrumentos musicales y mesas de DJ",
            audiovisuals:
              "Música, vídeos, películas, videojuegos y software",
            kitchen: "Cocina y electrodomésticos",
            wellness:
              "Cuidado personal y bienestar (dispositivos electrónicos de cuidado personal)",
            "wires-adapter":
              "Cables, adaptadores y accesorios electrónicos",
            hausehold: "Hogar",
            foto: "Foto y cámara",
            fitness: "Fitness y salud",
            "electrical-appliance": "Grandes electrodomésticos",
            computers: "Hardware y accesorios informáticos",
            "baby-products": "Productos para bebés",
          },
          "legal-types": {
            AG: "AG",
            EG: "EG",
            GbR: "GbR",
            GmbH: "GmbH",
            KG: "KG",
            KGaA: "KGaA",
            OHG: "OHG",
            ONEMANBUSINESS: "Einzelunternehmen",
            SILENTSOCIETY: "Stille Gesellschaft",
            UG: "UG",
          },
          "articles-quantity": "Número de artículos ",
          "boolean-input": { yes: "Sí", no: "No" },
          comment: "Tu comentario",
          "company-name": "Nombre de la empresa",
          "company-type": "Forma jurídica",
          "warehouse-available":
            "¿Tu empresa entrega desde un almacén en EU?",
          "e-mail": "Dirección de correo electrónico comercial",
          "first-name": "Nombre",
          "last-name": "Apellido",
          "marketplace-aggregator":
            "¿Estás conectado con proveedores de servicios de datos?",
          "sell-in-other-markets": "¿Ya vendes en otras tiendas?",
          submit: "Registrarse como cliente potencial",
          "telephone-number": "Número de teléfono",
          "url-label": "Tu página de productos (URL)",
        },
        storeFinder: {
          allmarkets: "Ir a todas las tiendas",
          zipOrCity: "Introduce la ciudad o el código postal",
          locationAccessNotGranted:
            "La localización no está activada para esta página en el navegador.",
          tenClosestStoresInfo: "Las 10 tiendas MediaMarkt más cercanas:",
          toStorePage: "Ir a la página de la tienda",
          toStorePageWithClickAndMeet:
            "To the store page and book an appointment",
        },
        localStore: {
          addressAndContact: "Dirección y contacto",
          closed: "Cerrado",
          closesAtTime: "Cierra a las {{time}}",
          currentlyClosed: "Cerrada actualmente",
          dayNames: {
            MONDAY: "Lunes",
            TUESDAY: "Martes",
            WEDNESDAY: "Miércoles",
            THURSDAY: "Jueves",
            FRIDAY: "Viernes",
            SATURDAY: "Sábado",
            SUNDAY: "Domingo",
            HOLIDAY: "Festivo",
          },
          sendUsAnEmail: "Send us an email",
          telephoneLinkLabel: "Telf.",
          helpAndFAQ: "Ayuda y preguntas frecuentes",
          open: "Abierto",
          openingTimes: "Horario de apertura",
          openingTimesExceptions: "Closed Dates\u002FHolidays",
          navigateToStore: "Navegar por la tienda",
          imprint: {
            headline: "Imprint",
            management: "Management",
            tradeRegisterEntry: "Trade Register Entry",
            tradeRegister: "Trade Register",
            tradeRegisterId: "Trade Register Id",
            vatId: "Vat ID",
          },
          fallbackPage: {
            headerImage: {
              desktop:
                "https:\u002F\u002Fcms-images.mmst.eu\u002F2rj3gcd43pmw\u002FXvxGa3PnBFlEroI2nXBss\u002F86974fdf8f887d0df486ed6a8514ef9c\u002FStore_MM_HeaderImage_2944x816.jpg",
              tablet:
                "https:\u002F\u002Fcms-images.mmst.eu\u002F2rj3gcd43pmw\u002F49lEZLsVhboVSZQtm8dLze\u002Fbc5ee540d8f42d615cb7ce8492cbe07e\u002FStore_MM_HeaderImage_1472x408.jpg",
              mobile:
                "https:\u002F\u002Fcms-images.mmst.eu\u002F2rj3gcd43pmw\u002FA6T1YTqxnTK0MhliqoVEf\u002Ff09719ca28c828d0f6ebef4f1272239f\u002FStore_MM_HeaderImage_512x272.jpg",
            },
          },
        },
        productCollection: {
          grid: {
            outof: "de",
            more: "más",
            soldOut: "Agotado",
            uvp: "PVR",
            loaded: "Cargado",
          },
        },
        quote: { label: { opened: "ver más", closed: "ver menos" } },
        legalPage: {
          "legal-agb": { print: "Imprimir \u002F guardar" },
          phoneLabel: "Teléfono:",
          emailLabel: "Email:",
          faxLabel: "Fax:",
          addressFormat:
            "{{name}}, {{street}} {{houseNumber}}, {{zipCode}} {{city}}",
        },
        comparisonTable: {
          addToBasketLabel: "Añadir al carrito",
          productDataSheet: "Detalles del producto",
        },
        productConfigurator: {
          fromPrice: "from",
          steps: {
            one: "Step 1\u002F3",
            two: "Step 2\u002F3",
            three: "Step 3\u002F3",
          },
          addToBasketLabel: "Add to basket",
          backToConfigurator: "Back to configurator",
          backToConfiguratorMobile: "Back",
          summary: {
            changeModel: "Change model",
            installments:
              "{{priceFormatted}} in {{monthNumber}} installments, {{interestRate}}% financing",
            selectMarket: "Select market",
            title: "Summary",
            total: "Total",
          },
          warranty: {
            chooseWarranty: "Choose a protection",
            subscriptionTime: "\u002F month",
            subscriptionTimeMobile: "per month",
            manufacturerWarranty:
              "Manufacturer warranty for two years inclusive.",
            information: "More information",
            seeDetails: "See details",
            addExtraWarranty:
              "You can add extra protection from MediaMarktSaturn.",
            modalTitle: "Extra protection for your new device",
            moreWarranty: "More",
            noExtraWarranty: "No extra protection",
          },
        },
        editorialPage: { more: "More", less: "Less" },
      },
    },
  },
  locale: "es",
};
</script>
<script
id="__LOADABLE_REQUIRED_CHUNKS__"
type="application/json"
crossorigin="anonymous"
>
[0, 60, 1, 2, 24]
</script>
<script
id="__LOADABLE_REQUIRED_CHUNKS___ext"
type="application/json"
crossorigin="anonymous"
>
{ "namedChunks": ["app-content-SpecialPage"] }
</script>
<script
async
data-chunk="main"
src="https://asset.mediamarkt.es/webmobile-pwa-public-assets-dev/7ff8ec4/b0a1f060c5fedd1c4912_vendors~main.js"
crossorigin="anonymous"
></script>
<script
async
data-chunk="main"
src="https://asset.mediamarkt.es/webmobile-pwa-public-assets-dev/7ff8ec4/b0a1f060c5fedd1c4912_main.js"
crossorigin="anonymous"
></script>
<script
async
data-chunk="app-content-SpecialPage"
src="https://asset.mediamarkt.es/webmobile-pwa-public-assets-dev/7ff8ec4/b0a1f060c5fedd1c4912_vendors~app-checkout-CheckoutPage~app-consent-CookieDetailsPage~app-consent-CookieSettingsPage~app-c~64e3369d.js"
crossorigin="anonymous"
></script>
<script
async
data-chunk="app-content-SpecialPage"
src="https://asset.mediamarkt.es/webmobile-pwa-public-assets-dev/7ff8ec4/b0a1f060c5fedd1c4912_vendors~app-content-SpecialPage.js"
crossorigin="anonymous"
></script>
<script
async
data-chunk="app-content-SpecialPage"
src="https://asset.mediamarkt.es/webmobile-pwa-public-assets-dev/7ff8ec4/b0a1f060c5fedd1c4912_app-content-AboutUsPage~app-content-EditorialPage~app-content-LegalPage~app-content-LocalStorePage~a~159ea6bd.js"
crossorigin="anonymous"
></script>
<script
async
data-chunk="app-content-SpecialPage"
src="https://asset.mediamarkt.es/webmobile-pwa-public-assets-dev/7ff8ec4/b0a1f060c5fedd1c4912_app-content-AboutUsPage~app-content-EditorialPage~app-content-LegalPage~app-content-ServicePage~app-~f1fe06ff.js"
crossorigin="anonymous"
></script>
<script
async
data-chunk="app-content-SpecialPage"
src="https://asset.mediamarkt.es/webmobile-pwa-public-assets-dev/7ff8ec4/b0a1f060c5fedd1c4912_app-content-SpecialPage.js"
crossorigin="anonymous"
></script>