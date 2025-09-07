/**
 * FLAMAS MATRIX - TRANSLATIONS
 * Multilingual content management system
 * Primary: Spanish (Español)
 * Secondary: English, German (Deutsch)
 */

const translations = {
  es: {
    // Meta and SEO
    title: "Flamas Matrix - Experiencias Transformadoras en la Naturaleza | Consciencia y Conexión",
    description: "Descubre una transformación profunda a través de experiencias inmersivas en la naturaleza. Únete a Flamas Matrix para aventuras que expanden la consciencia y te conectan con el poder sanador de la naturaleza.",
    keywords: "experiencias en la naturaleza, expansión de consciencia, retiros transformadores, aventuras de bienestar, mindfulness en la naturaleza, despertar espiritual, ecoterapia, baños de bosque, conexión con la naturaleza",

    // Navigation
    nav: {
      home: "Inicio",
      experiences: "Experiencias",
      gallery: "Galería",
      about: "Acerca de",
      contact: "Contacto",
      book: "Reservar"
    },

    // Language Selector
    language: {
      current: "Español",
      switch: "Cambiar idioma",
      es: "Español",
      en: "English",
      de: "Deutsch"
    },

    // Hero Section
    hero: {
      title: "Despierta Tu Consciencia",
      subtitle: "Experimenta la Transformación Profunda",
      description: "Conecta con el poder ancestral de la naturaleza a través de experiencias inmersivas diseñadas para expandir tu consciencia y despertar tu verdadero ser.",
      cta: "Comienza Tu Transformación",
      scroll: "Descubre más"
    },

    // Experiences Section
    experiences: {
      title: "Experiencias Transformadoras",
      subtitle: "Elige Tu Sendero de Consciencia",
      
      weekend: {
        name: "Despertar de Fin de Semana",
        duration: "2 días",
        price: "€297",
        description: "Una introducción profunda a la conexión consciente con la naturaleza",
        features: [
          "Meditación en movimiento al aire libre",
          "Ceremonias de conexión con elementos naturales",
          "Técnicas de respiración consciente",
          "Círculos de reflexión y compartir"
        ],
        cta: "Reservar Despertar"
      },

      retreat: {
        name: "Retiro de Conexión Profunda",
        duration: "7 días",
        price: "€1,997",
        popular: "Más Popular",
        description: "Inmersión completa para transformar tu relación contigo mismo y la naturaleza",
        features: [
          "Vivencia completa en entorno natural prístino",
          "Ceremonias ancestrales de conexión",
          "Técnicas avanzadas de expansión de consciencia",
          "Acompañamiento personalizado 24/7",
          "Alimentación consciente y sanadora"
        ],
        cta: "Reservar Retiro"
      },

      intensive: {
        name: "Intensivo de Consciencia",
        duration: "21 días",
        price: "€4,997",
        description: "Transformación completa del ser para líderes de la nueva consciencia",
        features: [
          "Proceso de transformación integral",
          "Entrenamiento en técnicas de facilitación",
          "Desarrollo de liderazgo consciente",
          "Certificación como guía de experiencias",
          "Comunidad de práctica permanente"
        ],
        cta: "Reservar Intensivo"
      }
    },

    // Gallery Section
    gallery: {
      title: "Momentos de Transformación",
      subtitle: "Testimonios Visuales de Nuestras Experiencias",
      categories: {
        all: "Todo",
        ceremonies: "Ceremonias",
        nature: "Naturaleza",
        community: "Comunidad",
        transformation: "Transformación"
      },
      view: "Ver imagen completa",
      close: "Cerrar"
    },

    // About Section
    about: {
      title: "Nuestra Misión",
      subtitle: "Facilitando Transformación Auténtica",
      mission: "En Flamas Matrix, creemos que la naturaleza es nuestro maestro más sabio. Facilitamos experiencias profundas que despiertan la consciencia dormida y restauran la conexión sagrada entre el ser humano y la Tierra.",
      
      approach: {
        title: "Nuestro Enfoque",
        description: "Combinamos sabiduría ancestral con técnicas modernas de transformación personal, creando un espacio seguro para el crecimiento auténtico y la expansión de consciencia.",
        points: [
          "Técnicas ancestrales de conexión",
          "Acompañamiento personalizado",
          "Entornos naturales sagrados",
          "Comunidad de práctica"
        ]
      },

      stats: {
        participants: "500+",
        participantsLabel: "Almas Transformadas",
        satisfaction: "98%",
        satisfactionLabel: "Satisfacción",
        locations: "12",
        locationsLabel: "Lugares Sagrados",
        experience: "8+",
        experienceLabel: "Años de Experiencia"
      }
    },

    // Testimonials
    testimonials: {
      title: "Voces de Transformación",
      subtitle: "Historias Reales de Despertar",
      
      testimonial1: {
        text: "Flamas Matrix cambió mi vida completamente. Encontré una conexión profunda conmigo mismo que nunca pensé que fuera posible. La experiencia fue transformadora en todos los sentidos.",
        name: "María Elena González",
        role: "Participante del Retiro de Conexión Profunda",
        location: "Madrid, España"
      },

      testimonial2: {
        text: "Los facilitadores de Flamas Matrix tienen un don especial para crear espacios seguros donde puede ocurrir la verdadera transformación. Recomiendo esta experiencia a cualquiera que busque despertar su consciencia.",
        name: "Carlos Mendoza",
        role: "Graduado del Intensivo de Consciencia",
        location: "Ciudad de México, México"
      },

      testimonial3: {
        text: "Después del Despertar de Fin de Semana, mi perspectiva de la vida cambió radicalmente. Ahora vivo con más presencia, gratitud y conexión con todo lo que me rodea.",
        name: "Ana Sofía Ruiz",
        role: "Participante del Despertar de Fin de Semana",
        location: "Barcelona, España"
      }
    },

    // Booking Section
    booking: {
      title: "Reserva Tu Transformación",
      subtitle: "El cambio comienza con un solo paso",
      
      steps: {
        step1: "Elige tu experiencia",
        step2: "Información personal",
        step3: "Pago seguro",
        step4: "Confirmación"
      },

      form: {
        experience: "Experiencia seleccionada",
        firstName: "Nombre",
        lastName: "Apellidos",
        email: "Correo electrónico",
        phone: "Teléfono",
        date: "Fecha preferida",
        dietary: "Restricciones alimentarias",
        medical: "Condiciones médicas importantes",
        motivation: "¿Qué te motiva a participar?",
        emergency: "Contacto de emergencia",
        terms: "Acepto los términos y condiciones",
        privacy: "Acepto la política de privacidad",
        
        placeholders: {
          firstName: "Tu nombre",
          lastName: "Tus apellidos", 
          email: "tu@correo.com",
          phone: "+34 123 456 789",
          dietary: "Vegetariano, sin gluten, etc.",
          medical: "Alergias, medicamentos, etc.",
          motivation: "Comparte tu intención para esta experiencia...",
          emergency: "Nombre y teléfono de contacto de emergencia"
        },

        validation: {
          required: "Este campo es obligatorio",
          email: "Introduce un correo electrónico válido",
          phone: "Introduce un número de teléfono válido",
          terms: "Debes aceptar los términos y condiciones"
        }
      },

      payment: {
        total: "Total a pagar",
        processing: "Procesando pago...",
        success: "¡Pago confirmado!",
        error: "Error en el pago. Intenta de nuevo.",
        secure: "Pago 100% seguro con encriptación SSL"
      },

      confirmation: {
        title: "¡Reserva Confirmada!",
        message: "Gracias por elegir Flamas Matrix. Te hemos enviado un correo de confirmación con todos los detalles.",
        next: "Próximos pasos:",
        steps: [
          "Recibirás un correo con la información completa",
          "Te contactaremos para coordinar los detalles",
          "Prepárate para tu transformación"
        ],
        support: "Si tienes preguntas, contáctanos"
      },

      buttons: {
        select: "Seleccionar",
        continue: "Continuar",
        back: "Volver",
        book: "Reservar Ahora",
        processing: "Procesando...",
        newBooking: "Nueva Reserva"
      }
    },

    // Contact Section
    contact: {
      title: "Conecta con Nosotros",
      subtitle: "¿Listo para comenzar tu transformación?",
      
      info: {
        phone: "+34 123 456 789",
        email: "hola@flamasmatrix.com",
        address: "Centros de Retiro en Espacios Naturales Sagrados",
        hours: "Lun - Vie: 9:00 - 18:00"
      },

      form: {
        name: "Nombre completo",
        email: "Correo electrónico",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado exitosamente!",
        error: "Error al enviar. Intenta de nuevo.",
        
        placeholders: {
          name: "Tu nombre completo",
          email: "tu@correo.com",
          subject: "¿En qué podemos ayudarte?",
          message: "Cuéntanos sobre tu interés en las experiencias de Flamas Matrix..."
        }
      },

      social: {
        title: "Síguenos",
        instagram: "Instagram",
        facebook: "Facebook",
        youtube: "YouTube"
      }
    },

    // Footer
    footer: {
      description: "Facilitando experiencias transformadoras que despiertan la consciencia y restauran la conexión sagrada con la naturaleza.",
      
      links: {
        experiences: "Nuestras Experiencias",
        about: "Acerca de Nosotros",
        gallery: "Galería",
        contact: "Contacto",
        blog: "Blog",
        faq: "Preguntas Frecuentes"
      },

      legal: {
        terms: "Términos y Condiciones",
        privacy: "Política de Privacidad",
        cookies: "Política de Cookies"
      },

      contact: {
        title: "Contacto",
        phone: "+34 123 456 789",
        email: "hola@flamasmatrix.com",
        location: "España y México"
      },

      newsletter: {
        title: "Mantente Conectado",
        description: "Recibe inspiración y contenido exclusivo sobre transformación y consciencia",
        placeholder: "tu@correo.com",
        subscribe: "Suscribirse",
        success: "¡Gracias por suscribirte!"
      },

      copyright: "© 2024 Flamas Matrix. Todos los derechos reservados.",
      made: "Hecho con consciencia y amor"
    },

    // Common/Utility
    common: {
      loading: "Cargando...",
      error: "Ha ocurrido un error",
      tryAgain: "Intentar de nuevo",
      close: "Cerrar",
      next: "Siguiente",
      previous: "Anterior",
      save: "Guardar",
      cancel: "Cancelar",
      confirm: "Confirmar",
      yes: "Sí",
      no: "No",
      or: "o",
      and: "y"
    }
  },

  en: {
    // Meta and SEO
    title: "Flamas Matrix - Transformative Nature Experiences | Consciousness & Connection",
    description: "Discover profound transformation through immersive nature experiences. Join Flamas Matrix for consciousness-expanding adventures that connect you with nature's healing power.",
    keywords: "nature experiences, consciousness expansion, transformative retreats, wellness adventures, mindfulness in nature, spiritual awakening, eco therapy, forest bathing, nature connection",

    // Navigation
    nav: {
      home: "Home",
      experiences: "Experiences",
      gallery: "Gallery",
      about: "About",
      contact: "Contact",
      book: "Book"
    },

    // Language Selector
    language: {
      current: "English",
      switch: "Switch language",
      es: "Español",
      en: "English",
      de: "Deutsch"
    },

    // Hero Section
    hero: {
      title: "Awaken Your Consciousness",
      subtitle: "Experience Profound Transformation",
      description: "Connect with nature's ancestral power through immersive experiences designed to expand your consciousness and awaken your true self.",
      cta: "Begin Your Transformation",
      scroll: "Discover more"
    },

    // Experiences Section
    experiences: {
      title: "Transformative Experiences",
      subtitle: "Choose Your Consciousness Path",
      
      weekend: {
        name: "Weekend Awakening",
        duration: "2 days",
        price: "€297",
        description: "A deep introduction to conscious connection with nature",
        features: [
          "Outdoor moving meditation",
          "Natural element connection ceremonies",
          "Conscious breathing techniques",
          "Reflection and sharing circles"
        ],
        cta: "Book Awakening"
      },

      retreat: {
        name: "Deep Connection Retreat",
        duration: "7 days",
        price: "€1,997",
        popular: "Most Popular",
        description: "Complete immersion to transform your relationship with yourself and nature",
        features: [
          "Full experience in pristine natural environment",
          "Ancestral connection ceremonies",
          "Advanced consciousness expansion techniques",
          "24/7 personalized guidance",
          "Conscious and healing nutrition"
        ],
        cta: "Book Retreat"
      },

      intensive: {
        name: "Consciousness Intensive",
        duration: "21 days",
        price: "€4,997",
        description: "Complete being transformation for new consciousness leaders",
        features: [
          "Integral transformation process",
          "Facilitation techniques training",
          "Conscious leadership development",
          "Experience guide certification",
          "Permanent practice community"
        ],
        cta: "Book Intensive"
      }
    },

    // Gallery Section
    gallery: {
      title: "Moments of Transformation",
      subtitle: "Visual Testimonies of Our Experiences",
      categories: {
        all: "All",
        ceremonies: "Ceremonies",
        nature: "Nature",
        community: "Community",
        transformation: "Transformation"
      },
      view: "View full image",
      close: "Close"
    },

    // About Section
    about: {
      title: "Our Mission",
      subtitle: "Facilitating Authentic Transformation",
      mission: "At Flamas Matrix, we believe nature is our wisest teacher. We facilitate profound experiences that awaken dormant consciousness and restore the sacred connection between humans and Earth.",
      
      approach: {
        title: "Our Approach",
        description: "We combine ancestral wisdom with modern personal transformation techniques, creating a safe space for authentic growth and consciousness expansion.",
        points: [
          "Ancestral connection techniques",
          "Personalized guidance",
          "Sacred natural environments",
          "Practice community"
        ]
      },

      stats: {
        participants: "500+",
        participantsLabel: "Transformed Souls",
        satisfaction: "98%",
        satisfactionLabel: "Satisfaction",
        locations: "12",
        locationsLabel: "Sacred Places",
        experience: "8+",
        experienceLabel: "Years Experience"
      }
    },

    // Testimonials
    testimonials: {
      title: "Voices of Transformation",
      subtitle: "Real Stories of Awakening",
      
      testimonial1: {
        text: "Flamas Matrix completely changed my life. I found a deep connection with myself that I never thought possible. The experience was transformative in every sense.",
        name: "María Elena González",
        role: "Deep Connection Retreat Participant",
        location: "Madrid, Spain"
      },

      testimonial2: {
        text: "Flamas Matrix facilitators have a special gift for creating safe spaces where true transformation can occur. I recommend this experience to anyone seeking to awaken their consciousness.",
        name: "Carlos Mendoza",
        role: "Consciousness Intensive Graduate",
        location: "Mexico City, Mexico"
      },

      testimonial3: {
        text: "After the Weekend Awakening, my life perspective changed radically. Now I live with more presence, gratitude and connection with everything around me.",
        name: "Ana Sofía Ruiz",
        role: "Weekend Awakening Participant",
        location: "Barcelona, Spain"
      }
    },

    // Booking Section
    booking: {
      title: "Book Your Transformation",
      subtitle: "Change begins with a single step",
      
      steps: {
        step1: "Choose your experience",
        step2: "Personal information",
        step3: "Secure payment",
        step4: "Confirmation"
      },

      form: {
        experience: "Selected experience",
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        phone: "Phone",
        date: "Preferred date",
        dietary: "Dietary restrictions",
        medical: "Important medical conditions",
        motivation: "What motivates you to participate?",
        emergency: "Emergency contact",
        terms: "I accept the terms and conditions",
        privacy: "I accept the privacy policy",
        
        placeholders: {
          firstName: "Your first name",
          lastName: "Your last name",
          email: "you@email.com",
          phone: "+1 123 456 789",
          dietary: "Vegetarian, gluten-free, etc.",
          medical: "Allergies, medications, etc.",
          motivation: "Share your intention for this experience...",
          emergency: "Emergency contact name and phone"
        },

        validation: {
          required: "This field is required",
          email: "Enter a valid email address",
          phone: "Enter a valid phone number",
          terms: "You must accept the terms and conditions"
        }
      },

      payment: {
        total: "Total to pay",
        processing: "Processing payment...",
        success: "Payment confirmed!",
        error: "Payment error. Please try again.",
        secure: "100% secure payment with SSL encryption"
      },

      confirmation: {
        title: "Booking Confirmed!",
        message: "Thank you for choosing Flamas Matrix. We've sent you a confirmation email with all the details.",
        next: "Next steps:",
        steps: [
          "You'll receive an email with complete information",
          "We'll contact you to coordinate details",
          "Prepare for your transformation"
        ],
        support: "If you have questions, contact us"
      },

      buttons: {
        select: "Select",
        continue: "Continue",
        back: "Back",
        book: "Book Now",
        processing: "Processing...",
        newBooking: "New Booking"
      }
    },

    // Contact Section
    contact: {
      title: "Connect with Us",
      subtitle: "Ready to begin your transformation?",
      
      info: {
        phone: "+34 123 456 789",
        email: "hello@flamasmatrix.com",
        address: "Retreat Centers in Sacred Natural Spaces",
        hours: "Mon - Fri: 9:00 - 18:00"
      },

      form: {
        name: "Full name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Error sending. Please try again.",
        
        placeholders: {
          name: "Your full name",
          email: "you@email.com",
          subject: "How can we help you?",
          message: "Tell us about your interest in Flamas Matrix experiences..."
        }
      },

      social: {
        title: "Follow Us",
        instagram: "Instagram",
        facebook: "Facebook",
        youtube: "YouTube"
      }
    },

    // Footer
    footer: {
      description: "Facilitating transformative experiences that awaken consciousness and restore sacred connection with nature.",
      
      links: {
        experiences: "Our Experiences",
        about: "About Us",
        gallery: "Gallery",
        contact: "Contact",
        blog: "Blog",
        faq: "FAQ"
      },

      legal: {
        terms: "Terms & Conditions",
        privacy: "Privacy Policy",
        cookies: "Cookie Policy"
      },

      contact: {
        title: "Contact",
        phone: "+34 123 456 789",
        email: "hello@flamasmatrix.com",
        location: "Spain and Mexico"
      },

      newsletter: {
        title: "Stay Connected",
        description: "Receive inspiration and exclusive content about transformation and consciousness",
        placeholder: "you@email.com",
        subscribe: "Subscribe",
        success: "Thank you for subscribing!"
      },

      copyright: "© 2024 Flamas Matrix. All rights reserved.",
      made: "Made with consciousness and love"
    },

    // Common/Utility
    common: {
      loading: "Loading...",
      error: "An error occurred",
      tryAgain: "Try again",
      close: "Close",
      next: "Next",
      previous: "Previous",
      save: "Save",
      cancel: "Cancel",
      confirm: "Confirm",
      yes: "Yes",
      no: "No",
      or: "or",
      and: "and"
    }
  },

  de: {
    // Meta and SEO
    title: "Flamas Matrix - Transformative Naturerfahrungen | Bewusstsein & Verbindung",
    description: "Entdecken Sie tiefgreifende Transformation durch immersive Naturerfahrungen. Schließen Sie sich Flamas Matrix für bewusstseinserweiternde Abenteuer an, die Sie mit der Heilkraft der Natur verbinden.",
    keywords: "Naturerfahrungen, Bewusstseinserweiterung, transformative Retreats, Wellness-Abenteuer, Achtsamkeit in der Natur, spirituelles Erwachen, Ökotherapie, Waldbaden, Naturverbindung",

    // Navigation
    nav: {
      home: "Start",
      experiences: "Erfahrungen",
      gallery: "Galerie",
      about: "Über uns",
      contact: "Kontakt",
      book: "Buchen"
    },

    // Language Selector
    language: {
      current: "Deutsch",
      switch: "Sprache wechseln",
      es: "Español",
      en: "English",
      de: "Deutsch"
    },

    // Hero Section
    hero: {
      title: "Erwecken Sie Ihr Bewusstsein",
      subtitle: "Erleben Sie Tiefgreifende Transformation",
      description: "Verbinden Sie sich mit der uralten Kraft der Natur durch immersive Erfahrungen, die darauf ausgelegt sind, Ihr Bewusstsein zu erweitern und Ihr wahres Selbst zu erwecken.",
      cta: "Beginnen Sie Ihre Transformation",
      scroll: "Mehr entdecken"
    },

    // Experiences Section
    experiences: {
      title: "Transformative Erfahrungen",
      subtitle: "Wählen Sie Ihren Bewusstseinsweg",
      
      weekend: {
        name: "Wochenend-Erwachen",
        duration: "2 Tage",
        price: "€297",
        description: "Eine tiefe Einführung in die bewusste Verbindung mit der Natur",
        features: [
          "Bewegungsmeditation im Freien",
          "Zeremonien der Verbindung mit natürlichen Elementen",
          "Bewusste Atemtechniken",
          "Reflexions- und Austauschkreise"
        ],
        cta: "Erwachen Buchen"
      },

      retreat: {
        name: "Tiefe Verbindungsretreat",
        duration: "7 Tage",
        price: "€1.997",
        popular: "Am Beliebtesten",
        description: "Vollständige Immersion zur Transformation Ihrer Beziehung zu sich selbst und der Natur",
        features: [
          "Vollständige Erfahrung in unberührter natürlicher Umgebung",
          "Uralte Verbindungszeremonien",
          "Fortgeschrittene Bewusstseinserweiterungstechniken",
          "24/7 personalisierte Betreuung",
          "Bewusste und heilende Ernährung"
        ],
        cta: "Retreat Buchen"
      },

      intensive: {
        name: "Bewusstseins-Intensiv",
        duration: "21 Tage",
        price: "€4.997",
        description: "Vollständige Wesensverwandlung für Führungskräfte des neuen Bewusstseins",
        features: [
          "Integraler Transformationsprozess",
          "Training in Facilitationstechniken",
          "Entwicklung bewusster Führung",
          "Zertifizierung als Erfahrungsguide",
          "Dauerhafte Praxisgemeinschaft"
        ],
        cta: "Intensiv Buchen"
      }
    },

    // Gallery Section
    gallery: {
      title: "Momente der Transformation",
      subtitle: "Visuelle Zeugnisse Unserer Erfahrungen",
      categories: {
        all: "Alle",
        ceremonies: "Zeremonien",
        nature: "Natur",
        community: "Gemeinschaft",
        transformation: "Transformation"
      },
      view: "Vollbild ansehen",
      close: "Schließen"
    },

    // About Section
    about: {
      title: "Unsere Mission",
      subtitle: "Authentische Transformation Ermöglichen",
      mission: "Bei Flamas Matrix glauben wir, dass die Natur unser weisester Lehrer ist. Wir ermöglichen tiefgreifende Erfahrungen, die schlafendes Bewusstsein erwecken und die heilige Verbindung zwischen Mensch und Erde wiederherstellen.",
      
      approach: {
        title: "Unser Ansatz",
        description: "Wir kombinieren uralte Weisheit mit modernen Techniken der Persönlichkeitstransformation und schaffen einen sicheren Raum für authentisches Wachstum und Bewusstseinserweiterung.",
        points: [
          "Uralte Verbindungstechniken",
          "Personalisierte Betreuung",
          "Heilige natürliche Umgebungen",
          "Praxisgemeinschaft"
        ]
      },

      stats: {
        participants: "500+",
        participantsLabel: "Transformierte Seelen",
        satisfaction: "98%",
        satisfactionLabel: "Zufriedenheit",
        locations: "12",
        locationsLabel: "Heilige Orte",
        experience: "8+",
        experienceLabel: "Jahre Erfahrung"
      }
    },

    // Testimonials
    testimonials: {
      title: "Stimmen der Transformation",
      subtitle: "Wahre Geschichten des Erwachens",
      
      testimonial1: {
        text: "Flamas Matrix hat mein Leben völlig verändert. Ich fand eine tiefe Verbindung zu mir selbst, die ich nie für möglich gehalten hätte. Die Erfahrung war in jeder Hinsicht transformativ.",
        name: "María Elena González",
        role: "Teilnehmerin des Tiefen Verbindungsretreats",
        location: "Madrid, Spanien"
      },

      testimonial2: {
        text: "Die Facilitatoren von Flamas Matrix haben eine besondere Gabe, sichere Räume zu schaffen, in denen wahre Transformation stattfinden kann. Ich empfehle diese Erfahrung jedem, der sein Bewusstsein erwecken möchte.",
        name: "Carlos Mendoza",
        role: "Absolvent des Bewusstseins-Intensivs",
        location: "Mexiko-Stadt, Mexiko"
      },

      testimonial3: {
        text: "Nach dem Wochenend-Erwachen änderte sich meine Lebensperspektive radikal. Jetzt lebe ich mit mehr Präsenz, Dankbarkeit und Verbindung zu allem um mich herum.",
        name: "Ana Sofía Ruiz",
        role: "Teilnehmerin des Wochenend-Erwachens",
        location: "Barcelona, Spanien"
      }
    },

    // Booking Section
    booking: {
      title: "Buchen Sie Ihre Transformation",
      subtitle: "Veränderung beginnt mit einem einzigen Schritt",
      
      steps: {
        step1: "Wählen Sie Ihre Erfahrung",
        step2: "Persönliche Informationen",
        step3: "Sichere Zahlung",
        step4: "Bestätigung"
      },

      form: {
        experience: "Gewählte Erfahrung",
        firstName: "Vorname",
        lastName: "Nachname",
        email: "E-Mail",
        phone: "Telefon",
        date: "Bevorzugtes Datum",
        dietary: "Ernährungseinschränkungen",
        medical: "Wichtige medizinische Bedingungen",
        motivation: "Was motiviert Sie zur Teilnahme?",
        emergency: "Notfallkontakt",
        terms: "Ich akzeptiere die Allgemeinen Geschäftsbedingungen",
        privacy: "Ich akzeptiere die Datenschutzrichtlinie",
        
        placeholders: {
          firstName: "Ihr Vorname",
          lastName: "Ihr Nachname",
          email: "sie@email.com",
          phone: "+49 123 456 789",
          dietary: "Vegetarisch, glutenfrei, etc.",
          medical: "Allergien, Medikamente, etc.",
          motivation: "Teilen Sie Ihre Absicht für diese Erfahrung...",
          emergency: "Name und Telefon des Notfallkontakts"
        },

        validation: {
          required: "Dieses Feld ist erforderlich",
          email: "Geben Sie eine gültige E-Mail-Adresse ein",
          phone: "Geben Sie eine gültige Telefonnummer ein",
          terms: "Sie müssen die Allgemeinen Geschäftsbedingungen akzeptieren"
        }
      },

      payment: {
        total: "Zu zahlender Betrag",
        processing: "Zahlung wird verarbeitet...",
        success: "Zahlung bestätigt!",
        error: "Zahlungsfehler. Bitte versuchen Sie es erneut.",
        secure: "100% sichere Zahlung mit SSL-Verschlüsselung"
      },

      confirmation: {
        title: "Buchung Bestätigt!",
        message: "Vielen Dank, dass Sie sich für Flamas Matrix entschieden haben. Wir haben Ihnen eine Bestätigungsmail mit allen Details gesendet.",
        next: "Nächste Schritte:",
        steps: [
          "Sie erhalten eine E-Mail mit vollständigen Informationen",
          "Wir kontaktieren Sie zur Koordination der Details",
          "Bereiten Sie sich auf Ihre Transformation vor"
        ],
        support: "Bei Fragen kontaktieren Sie uns"
      },

      buttons: {
        select: "Auswählen",
        continue: "Weiter",
        back: "Zurück",
        book: "Jetzt Buchen",
        processing: "Verarbeitung...",
        newBooking: "Neue Buchung"
      }
    },

    // Contact Section
    contact: {
      title: "Verbinden Sie sich mit uns",
      subtitle: "Bereit, Ihre Transformation zu beginnen?",
      
      info: {
        phone: "+34 123 456 789",
        email: "hallo@flamasmatrix.com",
        address: "Retreat-Zentren in Heiligen Naturräumen",
        hours: "Mo - Fr: 9:00 - 18:00"
      },

      form: {
        name: "Vollständiger Name",
        email: "E-Mail",
        subject: "Betreff",
        message: "Nachricht",
        send: "Nachricht senden",
        sending: "Wird gesendet...",
        success: "Nachricht erfolgreich gesendet!",
        error: "Fehler beim Senden. Bitte versuchen Sie es erneut.",
        
        placeholders: {
          name: "Ihr vollständiger Name",
          email: "sie@email.com",
          subject: "Wie können wir Ihnen helfen?",
          message: "Erzählen Sie uns von Ihrem Interesse an Flamas Matrix Erfahrungen..."
        }
      },

      social: {
        title: "Folgen Sie uns",
        instagram: "Instagram",
        facebook: "Facebook",
        youtube: "YouTube"
      }
    },

    // Footer
    footer: {
      description: "Ermöglichung transformativer Erfahrungen, die das Bewusstsein erwecken und die heilige Verbindung mit der Natur wiederherstellen.",
      
      links: {
        experiences: "Unsere Erfahrungen",
        about: "Über uns",
        gallery: "Galerie",
        contact: "Kontakt",
        blog: "Blog",
        faq: "FAQ"
      },

      legal: {
        terms: "AGB",
        privacy: "Datenschutz",
        cookies: "Cookie-Richtlinie"
      },

      contact: {
        title: "Kontakt",
        phone: "+34 123 456 789",
        email: "hallo@flamasmatrix.com",
        location: "Spanien und Mexiko"
      },

      newsletter: {
        title: "Bleiben Sie Verbunden",
        description: "Erhalten Sie Inspiration und exklusive Inhalte über Transformation und Bewusstsein",
        placeholder: "sie@email.com",
        subscribe: "Abonnieren",
        success: "Danke fürs Abonnieren!"
      },

      copyright: "© 2024 Flamas Matrix. Alle Rechte vorbehalten.",
      made: "Mit Bewusstsein und Liebe gemacht"
    },

    // Common/Utility
    common: {
      loading: "Lädt...",
      error: "Ein Fehler ist aufgetreten",
      tryAgain: "Erneut versuchen",
      close: "Schließen",
      next: "Weiter",
      previous: "Zurück",
      save: "Speichern",
      cancel: "Abbrechen",
      confirm: "Bestätigen",
      yes: "Ja",
      no: "Nein",
      or: "oder",
      and: "und"
    }
  }
};

// Language management system
class LanguageManager {
  constructor() {
    this.currentLanguage = 'es'; // Spanish as primary
    this.defaultLanguage = 'es';
    this.supportedLanguages = ['es', 'en', 'de'];
    this.init();
  }

  init() {
    // Detect browser language preference, but default to Spanish
    const browserLang = navigator.language.substring(0, 2);
    const savedLang = localStorage.getItem('flamasmatrix-language');
    
    if (savedLang && this.supportedLanguages.includes(savedLang)) {
      this.currentLanguage = savedLang;
    } else if (this.supportedLanguages.includes(browserLang)) {
      this.currentLanguage = browserLang;
    } else {
      this.currentLanguage = this.defaultLanguage; // Spanish first
    }

    this.applyLanguage();
    this.setupLanguageSwitcher();
  }

  setLanguage(langCode) {
    if (!this.supportedLanguages.includes(langCode)) return;
    
    this.currentLanguage = langCode;
    localStorage.setItem('flamasmatrix-language', langCode);
    this.applyLanguage();
    this.updateUrl();
  }

  applyLanguage() {
    const lang = translations[this.currentLanguage];
    if (!lang) return;

    // Update HTML lang attribute
    document.documentElement.lang = this.currentLanguage;

    // Update meta tags
    document.title = lang.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', lang.description);
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', lang.keywords);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.getTranslation(key);
      
      if (translation) {
        if (element.hasAttribute('data-i18n-attr')) {
          const attr = element.getAttribute('data-i18n-attr');
          element.setAttribute(attr, translation);
        } else {
          element.textContent = translation;
        }
      }
    });

    // Update language selector
    this.updateLanguageSelector();
    
    // Trigger language change event
    document.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { language: this.currentLanguage }
    }));
  }

  getTranslation(key) {
    const keys = key.split('.');
    let translation = translations[this.currentLanguage];
    
    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        return null;
      }
    }
    
    return translation;
  }

  setupLanguageSwitcher() {
    // Create language selector if it doesn't exist
    const existingSelector = document.querySelector('.language-selector');
    if (!existingSelector) {
      this.createLanguageSelector();
    }

    // Setup event listeners
    document.querySelectorAll('.lang-switch').forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = button.getAttribute('data-lang');
        this.setLanguage(lang);
      });
    });
  }

  createLanguageSelector() {
    const selector = document.createElement('div');
    selector.className = 'language-selector';
    selector.innerHTML = `
      <div class="language-dropdown">
        <button class="current-language" aria-label="Select language">
          <span data-i18n="language.current">Español</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M10 4L6 8L2 4" stroke="currentColor" stroke-width="1.5" fill="none"/>
          </svg>
        </button>
        <div class="language-options">
          <button class="lang-switch" data-lang="es" data-i18n="language.es">Español</button>
          <button class="lang-switch" data-lang="en" data-i18n="language.en">English</button>
          <button class="lang-switch" data-lang="de" data-i18n="language.de">Deutsch</button>
        </div>
      </div>
    `;

    // Add to navigation
    const nav = document.querySelector('.nav-links');
    if (nav) {
      nav.appendChild(selector);
    }
  }

  updateLanguageSelector() {
    const currentLang = document.querySelector('.current-language span');
    if (currentLang) {
      currentLang.textContent = this.getTranslation('language.current');
    }
  }

  updateUrl() {
    // Update URL with language parameter
    const url = new URL(window.location);
    if (this.currentLanguage !== this.defaultLanguage) {
      url.searchParams.set('lang', this.currentLanguage);
    } else {
      url.searchParams.delete('lang');
    }
    
    history.replaceState({}, '', url);
  }

  // Utility method to get current language
  getCurrentLanguage() {
    return this.currentLanguage;
  }

  // Utility method to get translation for current language
  t(key) {
    return this.getTranslation(key);
  }
}

// Initialize language manager when DOM is loaded
if (typeof window !== 'undefined') {
  let languageManager;
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      languageManager = new LanguageManager();
      window.flamasMatrix = window.flamasMatrix || {};
      window.flamasMatrix.languageManager = languageManager;
    });
  } else {
    languageManager = new LanguageManager();
    window.flamasMatrix = window.flamasMatrix || {};
    window.flamasMatrix.languageManager = languageManager;
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translations, LanguageManager };
}