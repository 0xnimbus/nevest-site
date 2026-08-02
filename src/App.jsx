import React, { useEffect, useState } from 'react';

const services = [
  {
    slug: 'doors-windows',
    title: 'Doors & Windows',
    description:
      'Custom-fit installations, upgrades, and weatherproofing for better insulation and curb appeal.',
    detailSections: [
      {
        title: 'Entry Door Installation & Replacement',
        visual: 'Front Entry Upgrade',
        cards: [
          {
            title: 'First impression that performs',
            text: 'Your front door does more than welcome guests. It provides security, weather protection, and an instant upgrade to your home’s curb appeal. We design and install entry doors that fit your home’s style, your budget, and your daily performance expectations.',
          },
          {
            title: 'Fit and finish that feels custom',
            text: 'Every installation begins with careful measurements, accurate alignment, and a product selection that complements your home’s exterior. We help you choose a door material, finish, layout, and hardware package that works beautifully with your entrance and your long-term maintenance goals.',
          },
          {
            title: 'Better security and energy control',
            text: 'Modern door systems offer stronger frames, improved insulation, and more dependable locking hardware than older, worn-out options. Replacing an outdated door can improve comfort, cut drafts, and create a more polished exterior look without the guesswork of a DIY install.',
          },
          {
            title: 'A clean installation from start to finish',
            text: 'Our team removes the old unit, prepares the opening, fits the new door precisely, and checks every seal, hinge, and lock to ensure smooth operation. The result is a cleaner, easier-to-use entry experience that feels refined and dependable.',
          },
        ],
      },
      {
        title: 'Window Replacement & Upgrade',
        visual: 'Energy-Smart Window Refresh',
        cards: [
          {
            title: 'Comfort begins with better glazing',
            text: 'Outdated windows can make a home feel drafty, noisy, and harder to heat or cool. Replacing older units with modern, energy-efficient windows improves indoor comfort while making the space brighter, quieter, and more polished.',
          },
          {
            title: 'Design choices that work with your space',
            text: 'From picture windows to double-hung styles and custom casement options, we help you choose the right configuration for each room. We balance visual appeal, ventilation, privacy, and daylight so each upgrade feels intentional.',
          },
          {
            title: 'Professional measurement matters',
            text: 'Accurate sizing is critical to proper performance. Our team measures the opening carefully, recommends the right system for that location, and ensures the finished product sits cleanly and functions smoothly for years to come.',
          },
          {
            title: 'Cleaner looking, stronger performing',
            text: 'Modern windows feature better seals, stronger frames, and more consistent operation than their older counterparts. The final result is a more comfortable interior, a more attractive exterior, and a more durable window system overall.',
          },
        ],
      },
      {
        title: 'Weatherproofing & Sealing',
        visual: 'Draft Control & Insulation',
        cards: [
          {
            title: 'Stop drafts before they become stress',
            text: 'Air leaks around doors and windows can quickly affect comfort, energy use, and the feel of a room. We assess the full assembly, including seals, thresholds, glazing, and framing, to identify where performance is being lost.',
          },
          {
            title: 'Sealing solutions that endure',
            text: 'Our recommendations are tailored to your home’s age, envelope condition, and exposure level. Whether the goal is a small weatherproofing improvement or a complete replacement strategy, we focus on long-term durability and consistent performance.',
          },
          {
            title: 'A smarter envelope upgrade',
            text: 'When your exterior openings are not sealing properly, the issue often extends beyond one component. We look at the full system so your new door or window works the way it should rather than masking the underlying problem.',
          },
          {
            title: 'Confidence in every transition',
            text: 'Proper flashing, seal placement, and installation sequencing are essential to keeping water and air infiltration under control. Our process ensures the home remains protected while the finished look stays clean and sharp.',
          },
        ],
      },
      {
        title: 'Hardware & Security Enhancements',
        visual: 'Lock & Finish Upgrade',
        cards: [
          {
            title: 'Security details make a difference',
            text: 'Strong hardware is essential to making a door or window feel secure, smooth, and easy to live with. We offer upgrades for locks, handles, hinges, and frame hardware that work with your selected product and improve daily usability.',
          },
          {
            title: 'More than a cosmetic touch',
            text: 'Upgraded hardware can improve alignment, reduce wear on the moving parts, and make a heavier entry door easier to open and close. It also helps support the long-term performance of the whole installation.',
          },
          {
            title: 'Built for everyday use',
            text: 'We make sure each hardware package is selected and installed for real-world use, not just visual appeal. That means secure operation, consistent finish quality, and a smoother overall experience from the moment you begin using the door or window.',
          },
          {
            title: 'A clean final detail',
            text: 'The right hardware brings everything together. It adds a refined visual finish, improves function, and gives your renovation a polished look that feels complete from every angle.',
          },
        ],
      },
    ],
  },
  {
    slug: 'plumbing',
    title: 'Plumbing',
    description:
      'Repairs, replacements, and full plumbing upgrades focused on reliability and efficiency.',
    detailSections: [
      {
        title: 'Plumbing Services',
        visual: 'Project Planning',
        cards: [
          {
            title: 'Clear recommendations',
            text: 'Plumbing problems can seem overwhelming, especially when you are worried about unexpected costs or major repairs. At [Insert Company Name], we make the entire process straightforward by providing honest recommendations, efficient service, and transparent pricing from the very beginning.',
          },
          {
            title: 'Smart long-term solutions',
            text: 'Whether your home has aging PEX, copper, galvanized, or other outdated plumbing systems, our experienced plumbers can assess the condition of your pipes and recommend the most effective long-term solution. We specialize in complete plumbing replacements, leak repairs, pipe upgrades, fixture installations, and water line services for homes of every age.',
          },
          {
            title: 'Simple quoting process',
            text: 'Getting a quote is quick and simple through our easy three-step process. First, take a clear photo of the plumbing issue you are experiencing and send it to our team. If your project involves a renovation or fixture upgrade, you can also send us an inspiration photo of the finished look you want, allowing us to better understand your vision and provide accurate recommendations.',
          },
          {
            title: 'Transparent estimate',
            text: 'Once we review your photos and discuss the details with you, we will provide a transparent estimate and, if necessary, schedule an on-site inspection to confirm the scope of work before any repairs begin. If you are dealing with hidden leaks, low water pressure, corroded pipes, or inconsistent hot water from your tank or water heater, we have the expertise to diagnose the cause and provide a lasting solution instead of a temporary fix.',
          },
          {
            title: 'Clean, efficient work',
            text: 'Our goal is to complete every project efficiently while minimizing disruption to your home and daily routine. We use quality materials, proven installation methods, and modern diagnostic equipment to ensure every repair and replacement is completed correctly the first time.',
          },
          {
            title: 'Qualified professionals',
            text: 'Our team is made up of fully licensed 306A plumbers who are WSIB cleared, giving you confidence that your project is being handled by qualified professionals who follow strict safety standards. Every plumbing service is completed in accordance with Toronto plumbing bylaws, permit requirements, and current building codes to ensure your home\'s plumbing system remains safe, reliable, and fully compliant.',
          },
          {
            title: 'Trusted outcome',
            text: 'When you choose [Insert Company Name], you are choosing experienced professionals who value clear communication, dependable workmanship, and plumbing solutions designed to protect your home for years to come.',
          },
        ],
      },
      {
        title: 'Toilet Repair & Installation',
        visual: 'Wall-Mounted Toilet Upgrade',
        cards: [
          {
            title: 'Modern bathroom advantage',
            text: 'Wall-mounted toilets are a modern, space-saving solution that adds a clean, contemporary look to any bathroom while making cleaning and maintenance much easier. At [Insert Company Name], we provide professional wall-mounted toilet installation, replacement, and repair services throughout Toronto and the Greater Toronto Area.',
          },
          {
            title: 'Safe installation planning',
            text: 'Whether you\'re renovating your bathroom or upgrading from a traditional floor-mounted toilet, our experienced plumbers ensure every installation is completed safely, securely, and in accordance with all plumbing codes. Installing a wall-mounted toilet requires careful planning, as the in-wall carrier system, concealed water tank, and plumbing connections must be properly positioned before the wall is finished.',
          },
          {
            title: 'Repair and replacement support',
            text: 'Our team handles every stage of the process, from rough-in plumbing and carrier frame installation to mounting the toilet, connecting the concealed cistern, and thoroughly testing the system for proper operation and leaks. If you\'re replacing an existing wall-mounted toilet, we can diagnose and repair common issues such as leaking seals, faulty flush plates, running water, weak flushing performance, or concealed tank components that are no longer functioning correctly.',
          },
          {
            title: 'Style and budget selection',
            text: 'When a replacement is the better long-term option, we\'ll help you choose a wall-mounted toilet that matches your bathroom\'s design, space requirements, and budget. Getting started is simple with our easy quoting process. Just send us photos of your existing bathroom along with inspiration photos of the wall-mounted toilet or bathroom style you\'d like to achieve.',
          },
          {
            title: 'Professional timeline and quote',
            text: 'Our team will review your project, explain the installation requirements, provide a transparent quote, and outline the project timeline before any work begins. Whether your project is part of a complete bathroom renovation or a single fixture upgrade, [Insert Company Name] delivers expert craftsmanship, quality materials, and reliable plumbing solutions that create a sleek, modern bathroom built to last.',
          },
        ],
      },
      {
        title: 'Water Heater Repair & Installation',
        visual: 'Hot Water System Upgrade',
        cards: [
          {
            title: 'Restoring daily comfort',
            text: 'Having no hot water can quickly disrupt your daily routine, whether you\'re taking a shower, washing dishes, or doing laundry. At [Insert Company Name], we provide professional water heater repair, replacement, and installation services throughout Toronto and the Greater Toronto Area to restore your home\'s hot water as quickly as possible.',
          },
          {
            title: 'Service for every system',
            text: 'Our licensed plumbers service and install both traditional tank water heaters and energy-efficient tankless (on-demand) systems for homes of all sizes. Whether your water heater is producing no hot water, not enough hot water, making unusual noises, leaking, experiencing pilot light issues, or suffering from thermostat or heating element failures, our team will accurately diagnose the problem and recommend the most cost-effective solution.',
          },
          {
            title: 'The right replacement plan',
            text: 'If repairs are no longer practical, we\'ll help you select the right replacement system based on your household\'s hot water demand, available space, energy efficiency goals, and budget. We take the time to explain the benefits of both tank and tankless water heaters so you can make an informed decision with confidence.',
          },
          {
            title: 'Safe, code-compliant installation',
            text: 'Our installation process includes safely disconnecting and removing your existing unit, installing the new water heater, completing all required gas, electrical, and plumbing connections, ensuring proper venting, and verifying that every component meets current building and safety codes. Before we leave, we thoroughly test the system to confirm it\'s operating efficiently and delivering reliable hot water throughout your home.',
          },
          {
            title: 'Simple quote and inspection',
            text: 'Getting started is simple with our easy quoting process. Just send us photos of your existing water heater along with details about the issue you\'re experiencing, and our team will review the information and provide a transparent estimate. If an on-site inspection is required, one of our licensed plumbers will assess your system, answer your questions, and explain the recommended solution before any work begins.',
          },
          {
            title: 'Dependable long-term support',
            text: 'When you choose [Insert Company Name], you\'re choosing experienced professionals committed to dependable workmanship, honest pricing, and long-lasting hot water solutions that keep your home running comfortably year-round.',
          },
        ],
      },
      {
        title: 'Weeping Tile Repair & Installation',
        visual: 'Drainage System Protection',
        cards: [
          {
            title: 'Foundational water protection',
            text: 'A properly functioning weeping tile system is one of the most important parts of protecting your home from water damage. Also known as a perimeter drain or French drain, a weeping tile system collects groundwater around your home\'s foundation and safely directs it to a sump pump or storm drainage system, helping to keep your basement dry and your foundation structurally sound.',
          },
          {
            title: 'Repairs, replacement, and new installation',
            text: 'At [Insert Company Name], we provide professional weeping tile repair, replacement, and new installation services throughout Toronto and the Greater Toronto Area for both residential renovations and new construction projects. Over time, older weeping tile systems can become clogged with dirt, sediment, and tree roots, or they may collapse and deteriorate due to age or soil pressure.',
          },
          {
            title: 'Warning signs to address early',
            text: 'When this happens, water can accumulate around your foundation, increasing the risk of basement leaks, foundation cracks, mould growth, and costly structural damage. Our experienced team carefully inspects your drainage system to identify the source of the problem and determine whether a targeted repair or complete replacement is the most effective solution.',
          },
          {
            title: 'Durable installation methods',
            text: 'We install both interior and exterior weeping tile systems using high-quality perforated drainage pipe, filter fabric, and properly graded gravel to maximize water flow and prevent future blockages. Every installation is completed using proven waterproofing techniques that help protect your home\'s foundation for years to come.',
          },
          {
            title: 'Straightforward quote process',
            text: 'Getting started is easy with our simple quoting process. Send us photos of the affected area along with details of any water intrusion or drainage issues you\'re experiencing, and our team will review the information and provide a transparent estimate. If further investigation is required, we\'ll schedule an on-site inspection to evaluate your foundation, drainage system, and surrounding conditions before recommending the best course of action.',
          },
          {
            title: 'Confidence in every basement project',
            text: 'Whether you\'re repairing an existing drainage system or installing a brand-new weeping tile system as part of a basement renovation or waterproofing project, [Insert Company Name] delivers dependable workmanship, quality materials, and long-lasting solutions that help keep your basement dry and your home protected.',
          },
        ],
      },
    ],
  },
  {
    slug: 'flooring',
    title: 'Flooring',
    description:
      'Durable floor replacements and refinishing with elegant finishes that suit every room.',
    detailSections: [
      {
        title: 'Hardwood Floor Installation',
        visual: 'Timeless Wood Finish',
        cards: [
          {
            title: 'A floor that elevates the room',
            text: 'Hardwood flooring adds warmth, character, and a premium feel to almost any space. We help homeowners choose the right wood species, tone, and plank layout to create a clean and timeless finished floor that complements the home.',
          },
          {
            title: 'Built for long-term use',
            text: 'Proper installation starts with a solid subfloor, the right moisture considerations, and careful planning for expansion and finish consistency. We take those details seriously so the floor performs beautifully for years.',
          },
          {
            title: 'Refined visual direction',
            text: 'Whether you want a light, modern look or a richer traditional tone, our team helps you select a finish and layout that suits your tastes and the footprint of the room. The goal is a floor that feels intentional, durable, and cohesive.',
          },
          {
            title: 'Precision from first board to final coat',
            text: 'Every board is installed with attention to alignment, transitions, and overall consistency. The finished result is a smooth, polished floor that feels dependable and visually striking.',
          },
        ],
      },
      {
        title: 'Luxury Vinyl & Tile',
        visual: 'Modern Surface Solution',
        cards: [
          {
            title: 'Practical beauty for busy homes',
            text: 'Luxury vinyl and tile flooring are excellent choices when you want durability, easy maintenance, and a refined look that can handle everyday wear. We help you select a product that matches your style while standing up to real life.',
          },
          {
            title: 'Comfort, longevity, and low upkeep',
            text: 'These surfaces are especially attractive for kitchens, bathrooms, and high-traffic areas where a hardwearing finish is essential. The right choice can deliver a premium appearance without the maintenance demands of more delicate materials.',
          },
          {
            title: 'Material guidance that fits your home',
            text: 'We walk through the differences in texture, pattern, and performance so you can choose something that feels right for your room. The result is a floor that looks polished while still serving your family’s daily needs.',
          },
          {
            title: 'Clean installation and lasting finish',
            text: 'From underlayment and layout planning to final trim work, we handle the details that make the flooring look seamless and durable. A proper installation is what allows the surface to continue looking fresh over time.',
          },
        ],
      },
      {
        title: 'Subfloor Preparation & Repairs',
        visual: 'Floor Base Correction',
        cards: [
          {
            title: 'The foundation determines the outcome',
            text: 'A beautiful floor starts with a stable and properly prepared base. If the subfloor has uneven areas, movement, or moisture concerns, those need to be addressed before the finish material goes down.',
          },
          {
            title: 'Repair before replacement',
            text: 'We assess the existing structure, determine whether any corrective work is needed, and make the necessary adjustments before installation begins. This approach reduces the risk of future movement, cracking, and visible imperfections.',
          },
          {
            title: 'Built to stay level and secure',
            text: 'From leveling compounds to reinforcement and moisture protection, the prep stage plays a major role in the final comfort and performance of the floor. Proper prep makes the full system more dependable.',
          },
          {
            title: 'A smoother, longer-lasting result',
            text: 'When the subfloor is addressed correctly, the floor installation looks cleaner, feels more even underfoot, and stands up better to everyday use over time.',
          },
        ],
      },
      {
        title: 'Refinishing & Finish Upgrades',
        visual: 'Surface Renewal',
        cards: [
          {
            title: 'Bring old floors back to life',
            text: 'If your current flooring is structurally sound but visually dated, resurfacing and refinishing can offer a dramatic upgrade without a full replacement. This is a great option when you want a more modern look at a lower overall cost.',
          },
          {
            title: 'A fresh finish with lasting quality',
            text: 'We repair the surface, sand and prepare it properly, and apply a durable finish that suits the room’s daily use. The result is a floor that feels cleaner, brighter, and more refined without sacrificing function.',
          },
          {
            title: 'Perfect for a style refresh',
            text: 'Refinishing is especially effective in homes where the footprint is already working, but the finish no longer matches the look you want. It’s a practical way to modernize the space without resetting the entire room.',
          },
          {
            title: 'Durability with design impact',
            text: 'A quality finish helps protect the floor from everyday wear while improving the room’s overall aesthetic. Whether you want a matte, satin, or richer glow, we help you select a finish that feels right for the space.',
          },
        ],
      },
    ],
  },
  {
    slug: 'painting',
    title: 'Painting',
    description:
      'Interior and exterior painting services that refresh your space with lasting color quality.',
    detailSections: [
      {
        title: 'Interior Painting & Finish Refresh',
        visual: 'Color-Driven Interior Upgrade',
        cards: [
          {
            title: 'A room update that feels immediate',
            text: 'Interior painting is one of the most effective ways to brighten a space, hide minor wear, and make a room feel more polished. We focus on clean lines, smooth coverage, and a finish that enhances the room instead of competing with it.',
          },
          {
            title: 'Preparation makes the finish better',
            text: 'Proper prep includes patching surface imperfections, cleaning, sanding where needed, and protecting the adjacent areas. These details help the paint apply more evenly and hold up better over time.',
          },
          {
            title: 'Color choices that support the space',
            text: 'We help you decide on the right tone, sheen, and finish for the room’s natural light and function. A thoughtful paint selection can make a home feel larger, calmer, or more welcoming depending on the design goal.',
          },
          {
            title: 'Professional finish with minimal disruption',
            text: 'Our team works carefully to keep the project tidy and efficient while protecting both your belongings and the surrounding surfaces. The result is a consistent finish that feels clean, modern, and intentionally styled.',
          },
        ],
      },
      {
        title: 'Exterior Painting & Protection',
        visual: 'Weather-Ready Exterior Finish',
        cards: [
          {
            title: 'Protect your exterior while improving curb appeal',
            text: 'Exterior paint does more than add visual charm. It helps shield surfaces from weather, seasonal wear, and the moisture that can slowly break down finishes over time. We focus on durable products and proper application methods.',
          },
          {
            title: 'Surface readiness is essential',
            text: 'We inspect the condition of siding, trim, and other surrounding exterior materials before recommending paint systems and finishes. Good prep is what allows the final coating to last longer and stay consistent in appearance.',
          },
          {
            title: 'Color and finish selection for impact',
            text: 'Exterior tones influence the whole look of the home. We help homeowners choose colors and finishes that are attractive, weather-appropriate, and cohesive with the property’s architectural style.',
          },
          {
            title: 'Built to stand up to the elements',
            text: 'From primer to final coats, each stage of the exterior paint process is selected for performance. The result is a clean, protective finish that contributes to both curb appeal and long-term maintenance value.',
          },
        ],
      },
      {
        title: 'Surface Prep, Patching & Repair',
        visual: 'Smooth Finish Preparation',
        cards: [
          {
            title: 'Preparation is the key to a lasting result',
            text: 'Paint performs best when the surface is properly prepared. That means addressing cracks, holes, rough patches, and old finish inconsistencies before the new coating is applied.',
          },
          {
            title: 'Small repairs, major visual improvement',
            text: 'Even minor damage can become noticeable once fresh paint goes on. We repair those areas carefully so the finished surface looks smooth, professional, and consistent from wall to wall.',
          },
          {
            title: 'Better adhesion, better durability',
            text: 'Good prep leads to stronger adhesion, better final appearance, and a paint job that wears more evenly over time. It also makes the final color look cleaner and more intentional.',
          },
          {
            title: 'A finish that looks clean and deliberate',
            text: 'From patching to sanding and masking, the prep work ensures the final result matches the quality of the product and the care you expect from a professional contractor.',
          },
        ],
      },
      {
        title: 'Color Consultation & Design Guidance',
        visual: 'Palette Planning',
        cards: [
          {
            title: 'The right color can change the feel of a space',
            text: 'Paint has a powerful impact on mood, light, and perceived size. We help homeowners navigate finish options, undertones, and room-by-room coordination so the final palette feels deliberate and cohesive.',
          },
          {
            title: 'Choose a finish that fits the room',
            text: 'Sheen selection matters just as much as color. A more durable finish may be better for high-touch or moisture-prone areas, while a softer sheen can create a warmer, more elegant effect in a living space.',
          },
          {
            title: 'Planning your look from the start',
            text: 'Our team can help you balance bold design choices with timeless, practical finishes so the updated painting project feels current without becoming quickly dated.',
          },
          {
            title: 'A more confident way to refresh the home',
            text: 'With the right guidance, painting becomes a design upgrade rather than just a coat of color. That leads to a finished look that feels both personalized and professionally refined.',
          },
        ],
      },
    ],
  },
  {
    slug: 'exterior',
    title: 'Exterior',
    description:
      'Siding, facades, trim, and exterior details that boost protection and visual impact.',
    detailSections: [
      {
        title: 'Siding & Cladding Improvements',
        visual: 'Weather-Tough Facade Upgrade',
        cards: [
          {
            title: 'A stronger outer shell',
            text: 'Siding and cladding are your home’s first line of defense against the weather. Updating worn or aging materials can dramatically improve both performance and appearance, especially when moisture or temperature control has become a concern.',
          },
          {
            title: 'Materials that match your goals',
            text: 'We help homeowners choose the right exterior solution based on durability, aesthetic preferences, and long-term maintenance expectations. That could mean a clean modern finish, a more traditional profile, or a practical replacement that improves weather resistance.',
          },
          {
            title: 'Better protection, better presentation',
            text: 'When siding is repaired or replaced properly, the home gains improved resilience, cleaner lines, and more reliable weather protection. A well-finished exterior also improves the overall impression of the property from the street.',
          },
          {
            title: 'An exterior upgrade that feels complete',
            text: 'A professional siding installation brings visual consistency to the home and reinforces the reliability of the full envelope. It’s one of the clearest ways to combine protection with curb appeal.',
          },
        ],
      },
      {
        title: 'Trim, Fascia & Porch Details',
        visual: 'Architectural Detail Refresh',
        cards: [
          {
            title: 'Finish the exterior with intention',
            text: 'Trim, fascia, and porch details are the elements that give the exterior its definition. When these areas are updated, the home feels more complete, more proportionate, and more carefully composed from every angle.',
          },
          {
            title: 'Small details with major visual payoff',
            text: 'These components often have a disproportionate impact on the appearance of a property. Replacing worn trim or refreshing porch features can define the character of the exterior and improve the home’s overall polish.',
          },
          {
            title: 'A cleaner shape and stronger silhouette',
            text: 'We take care of alignment, finishing, and proportion so those details feel crisp and intentional rather than patched together. This creates a more refined exterior profile and a stronger sense of craftsmanship.',
          },
          {
            title: 'The final polish that ties the project together',
            text: 'When the trim and accent elements are handled well, the outer envelope feels fully composed. That helps elevate the whole property, even if the larger renovation is simply focused on a few key exterior surfaces.',
          },
        ],
      },
      {
        title: 'Exterior Waterproofing & Envelope Upgrades',
        visual: 'Moisture Defense Layer',
        cards: [
          {
            title: 'Protection starts where the weather hits',
            text: 'Your home’s envelope is responsible for keeping water, wind, and temperature fluctuations from damaging the structure. Updating the exterior with attention to waterproofing can help protect the home long before a serious issue develops.',
          },
          {
            title: 'Defend the structure while improving the look',
            text: 'Exterior improvement projects give us the opportunity to address both aesthetics and performance. By coordinating materials, flashing, sealant, and finishes properly, we help strengthen the building envelope while maintaining a clean appearance.',
          },
          {
            title: 'An upgrade that supports the entire home',
            text: 'When the outer layers are working properly, the interior stays more comfortable and protected. That means better long-term durability, fewer maintenance issues, and a more stable environment throughout the property.',
          },
          {
            title: 'A stronger home from the outside in',
            text: 'Waterproofing and envelope improvements are often invisible from the curb but crucial to the home’s long-term health. That is why our exterior work focuses on both visible quality and dependable protection.',
          },
        ],
      },
      {
        title: 'Facade Refresh & Curb Appeal Enhancements',
        visual: 'Street Appeal Update',
        cards: [
          {
            title: 'The exterior should feel polished and intentional',
            text: 'A refreshed facade can dramatically improve the character of a home. Whether you want a cleaner contemporary finish or a more traditional, welcoming look, the right exterior updates can make a lasting first impression.',
          },
          {
            title: 'Improve the home before guests even enter',
            text: 'Curb appeal is not just about a fresh paint color or a new roofline. It is also about the way the surfaces, trim, and details work together to create a visually balanced and enduring exterior presence.',
          },
          {
            title: 'Upgrade with strategy, not just style',
            text: 'We help prioritize which elements will have the biggest design impact while also creating durability benefits. That ensures the home does not just look better, but also stands up better to the time and weather it faces each year.',
          },
          {
            title: 'A polished first impression',
            text: 'The goal of a facade refresh is to make the whole property feel more elevated, more maintained, and more tailored to your taste. The result is an exterior that looks complete, current, and worth noticing.',
          },
        ],
      },
    ],
  },
  {
    slug: 'kitchen-bath',
    title: 'Kitchen & Bath',
    description:
      'Smart remodels for modern kitchens and bath spaces designed for comfort and value.',
    detailSections: [
      {
        title: 'Kitchen & Bath Renovations',
        visual: 'Design Consultation',
        cards: [
          {
            title: 'A high-impact renovation choice',
            text: 'Upgrading your kitchen or bathroom is one of the most impactful improvements you can make to your home. These are the spaces you use every day, and a thoughtfully designed renovation can improve your comfort, increase your home\'s value, and create a space that better fits your lifestyle.',
          },
          {
            title: 'Guidance at every step',
            text: 'Although the idea of remodeling may seem overwhelming at first, the process becomes much easier with the right team guiding you every step of the way. Homeowners are often faced with countless decisions, from choosing the perfect layout and design to selecting cabinetry, countertops, flooring, fixtures, lighting, and finishes that complement one another while staying within budget.',
          },
          {
            title: 'Clear decision-making support',
            text: 'At [Insert Company Name], we simplify the entire renovation process by helping you make informed decisions that suit your style, needs, and investment. Whether you envision a modern, minimalist kitchen, a timeless traditional design, or a luxurious spa-inspired bathroom, our experienced team works closely with you to bring your ideas to life.',
          },
          {
            title: 'Simple quoting process',
            text: 'Getting started is easy with our simple quoting process. Just send us a few photos of your existing kitchen or bathroom along with inspiration photos of the style or design you would like to achieve. Our team will review your project, discuss your goals, recommend materials and finishes that match your vision and budget, and provide a transparent estimate before any work begins.',
          },
          {
            title: 'On-site consultation and coordination',
            text: 'If needed, we will schedule an on-site consultation to take measurements, confirm project details, and answer any questions you may have. From demolition and plumbing to electrical work, cabinetry, tile installation, and the finishing touches, we coordinate every stage of your renovation with precision and attention to detail.',
          },
          {
            title: 'Quality craftsmanship and lasting results',
            text: 'We use high-quality materials and trusted installation methods to ensure your new kitchen or bathroom is as durable as it is beautiful. Our goal is to minimize disruption to your home while delivering exceptional craftsmanship and a finished space you\'ll enjoy every day. When you choose [Insert Company Name], you\'re choosing a team dedicated to quality, transparency, and creating beautiful, functional spaces designed to last for years to come.',
          },
        ],
      },
      {
        title: 'Bathroom Renovation',
        visual: 'Spa-Inspired Upgrade',
        cards: [
          {
            title: 'A complex project that needs expert coordination',
            text: 'A bathroom renovation is one of the most complex projects in any home because it combines multiple skilled trades into a relatively small space. Plumbing, electrical, ventilation, waterproofing, tiling, and finishing work must all be completed correctly and in the proper sequence to ensure a safe, functional, and long-lasting bathroom.',
          },
          {
            title: 'Qualified trade expertise under one team',
            text: 'At [Insert Company Name], our team includes fully licensed 306A plumbers and 309A (ECRA/ESA) electricians, allowing us to complete every stage of your renovation to Ontario Building Code requirements while maintaining the highest standards of quality and safety. We follow all applicable building codes, including proper waterproofing, ventilation, plumbing, and electrical installation requirements, ensuring your new bathroom is built to perform reliably for years to come.',
          },
          {
            title: 'Planning from the first consultation',
            text: 'Every renovation begins with a detailed consultation where we discuss your goals, preferred design, material selections, and budget so we can create a plan tailored to your home. Getting started is simple—just send us photos of your existing bathroom along with inspiration photos of the style or layout you\'d like to achieve. Our team will review your project, recommend products and finishes that fit your vision, and provide a transparent, itemized quote outlining labour, materials, and every stage of the renovation.',
          },
          {
            title: 'Clear expectations and accountability',
            text: 'We also provide a written workmanship warranty and clearly defined payment milestones, so you always know what to expect before construction begins. From demolition and rough-in plumbing to electrical upgrades, waterproofing, tile installation, cabinetry, fixtures, lighting, painting, and final finishing, every detail is completed with precision and care.',
          },
          {
            title: 'Long-term protection matters',
            text: 'We use premium waterproofing systems and proven installation methods because we know that investing in quality workmanship today helps prevent costly issues such as water damage, mould, and structural repairs in the future. Whether you\'re updating a powder room, creating a luxury ensuite, or completing a full bathroom remodel, our experienced team manages every aspect of the project from start to finish.',
          },
          {
            title: 'Material and permit guidance',
            text: 'We also guide homeowners through fixture and material selection, helping you choose durable products that perform well in Toronto\'s climate while complementing your home\'s style and budget. If your renovation requires permits or inspections due to plumbing or electrical modifications, we\'ll explain the process, ensure all work complies with local regulations, and coordinate everything necessary for a smooth renovation experience. We can also discuss available government programs, rebates, or tax credits that may apply to eligible accessibility or home improvement projects, helping you maximize the value of your investment.',
          },
          {
            title: 'A renovation built to last',
            text: 'When you choose [Insert Company Name], you\'re choosing experienced professionals dedicated to transparent communication, exceptional craftsmanship, and bathroom renovations designed to add comfort, beauty, and lasting value to your home.',
          },
        ],
      },
      {
        title: 'Cabinet Installation & Refacing',
        visual: 'Cabinet Update',
        cards: [
          {
            title: 'The visual centrepiece of the room',
            text: 'Cabinets are one of the most noticeable features in any kitchen, bathroom, laundry room, or living space, making them a key element in both the appearance and functionality of your home. At [Insert Company Name], we provide professional cabinet installation and cabinet refacing services throughout Toronto and the Greater Toronto Area, helping homeowners transform their spaces with beautifully crafted cabinetry that suits their lifestyle and budget.',
          },
          {
            title: 'Custom solutions for every room',
            text: 'Whether you\'re completing a full renovation or simply refreshing the look of an existing room, our experienced team delivers precise installation and exceptional craftsmanship from start to finish. We install custom, semi-custom, and stock cabinets for kitchens, bathrooms, laundry rooms, mudrooms, home offices, entertainment units, and built-in storage solutions, ensuring every cabinet is installed securely and functions perfectly.',
          },
          {
            title: 'Quoting and layout planning',
            text: 'Getting started is simple with our easy quoting process. Just send us photos of your existing cabinets along with inspiration photos of the style, colour, or layout you\'d like to achieve, and our team will review your project and provide a detailed, transparent estimate. We\'ll help you compare cabinet styles, materials, finishes, and hardware options so you can choose a solution that complements your home\'s design while staying within your budget.',
          },
          {
            title: 'Precision installation',
            text: 'Every installation begins with careful measurements and layout planning to ensure a perfect fit. Our installers securely fasten each cabinet to wall studs, precisely level every unit, install hardware, adjust doors and drawers for smooth operation, and complete the finishing details that create a clean, seamless appearance.',
          },
          {
            title: 'Refacing when full replacement is not necessary',
            text: 'If your existing cabinet boxes are still in excellent condition, cabinet refacing can be a cost-effective alternative to complete replacement. Our refacing service includes replacing cabinet doors and drawer fronts, applying new veneer or laminate finishes to the cabinet boxes, and installing new handles or hardware to give your kitchen or bathroom a completely updated appearance without the cost or disruption of a full renovation.',
          },
          {
            title: 'Built for beauty and day-to-day use',
            text: 'Using premium materials and trusted manufacturers, we create cabinetry that is both durable and visually stunning. When you choose [Insert Company Name], you can expect transparent pricing, dependable communication, and expertly installed cabinetry designed to enhance the beauty, organization, and value of your home for years to come.',
          },
        ],
      },
      {
        title: 'Countertop Replacement',
        visual: 'Surface Upgrade',
        cards: [
          {
            title: 'An instant style refresh',
            text: 'Upgrading your countertops is one of the fastest and most effective ways to transform the look and functionality of your kitchen, bathroom, laundry room, or workspace. At [Insert Company Name], we provide professional countertop installation and replacement services throughout Toronto and the Greater Toronto Area, helping homeowners achieve beautiful, durable surfaces that complement their home\'s style and increase its value.',
          },
          {
            title: 'Material options to match your design',
            text: 'Whether you\'re completing a full renovation or simply replacing outdated countertops, our experienced team ensures every installation is completed with precision and attention to detail. We install a wide variety of countertop materials, including quartz, granite, marble, butcher block, laminate, and solid surface countertops, allowing you to choose the perfect combination of appearance, durability, maintenance, and budget.',
          },
          {
            title: 'From photo review to template fitting',
            text: 'Getting started is simple with our easy quoting process. Just send us photos of your existing countertops along with inspiration photos of the style, edge profile, or material you\'d like to install, and our team will review your project and provide a transparent estimate. We\'ll help you compare countertop materials, explaining the advantages of each option so you can confidently select the best surface for your home and lifestyle.',
          },
          {
            title: 'Precision fit and dependable installation',
            text: 'Once your design is finalized, we take precise measurements and create a custom template to ensure your new countertops are fabricated for a perfect fit. Our installation process includes the safe removal and disposal of your existing countertops, professional installation with proper support and leveling, precision sink and fixture cutouts, and sealing where required to maximize durability and performance.',
          },
          {
            title: 'Long-term performance in daily use',
            text: 'We work with trusted fabricators and premium materials to deliver countertops that are both functional and visually stunning. Whether you prefer the modern elegance of quartz, the natural beauty of granite and marble, the warmth of butcher block, or the affordability of laminate, we\'ll help you create a space that reflects your personal style. When you choose [Insert Company Name], you can expect expert craftsmanship, transparent communication, and professionally installed countertops that enhance the beauty, value, and everyday functionality of your home for years to come.',
          },
        ],
      },
      {
        title: 'Backsplash Tiling & Installation',
        visual: 'Feature Wall',
        cards: [
          {
            title: 'A practical style upgrade',
            text: 'A professionally installed backsplash is one of the easiest ways to enhance the beauty of your kitchen while protecting your walls from everyday wear. At [Insert Company Name], we provide expert backsplash installation services throughout Toronto and the Greater Toronto Area, creating stunning feature walls that combine style, durability, and functionality.',
          },
          {
            title: 'Material variety for every design',
            text: 'Whether you\'re completing a full kitchen renovation or updating your existing space, a new backsplash adds character while protecting your walls from water, grease, food splashes, and everyday cooking messes. We install a wide variety of backsplash materials, including ceramic, porcelain, glass, natural stone, mosaic, and large-format tiles, giving you endless design possibilities to match your cabinetry, countertops, and overall kitchen aesthetic.',
          },
          {
            title: 'Quote and design support',
            text: 'Getting started is simple with our easy quoting process. Just send us photos of your existing kitchen along with inspiration photos of the backsplash style or tile pattern you\'d like to achieve, and our team will review your project and provide a transparent estimate before any work begins. We\'ll help you compare tile materials, colours, layouts, grout options, and finishes to ensure your backsplash complements the rest of your kitchen while staying within your budget.',
          },
          {
            title: 'Clean preparation and skilled installation',
            text: 'Every installation begins with proper surface preparation and careful layout planning to create balanced patterns and clean, symmetrical lines. Our experienced installers use premium thinset adhesives, maintain consistent grout spacing, and complete every detail with precision to achieve a flawless finish.',
          },
          {
            title: 'Design detail that makes the room feel finished',
            text: 'We specialize in everything from timeless subway tile and modern large-format installations to intricate herringbone, stacked, chevron, and mosaic patterns that add a unique design element to your space. Special attention is given to outlet cutouts, window trim, cabinet edges, and finishing profiles to ensure a seamless, professional appearance from every angle. If you\'re also replacing your countertops or cabinets, we can coordinate the entire installation to create a cohesive and beautifully finished kitchen.',
          },
          {
            title: 'Better protection and stronger visual appeal',
            text: 'When you choose [Insert Company Name], you can expect expert craftsmanship, premium materials, transparent communication, and a custom backsplash designed to enhance the beauty, functionality, and value of your home for years to come.',
          },
        ],
      },
      {
        title: 'Bathtub Installation',
        visual: 'Comfort Upgrade',
        cards: [
          {
            title: 'The centrepiece of a relaxing bathroom',
            text: 'A new bathtub can completely transform your bathroom, creating a more comfortable, functional, and relaxing space while adding lasting value to your home. At [Insert Company Name], we provide professional bathtub installation and replacement services throughout Toronto and the Greater Toronto Area, delivering quality craftsmanship and reliable plumbing solutions for every project.',
          },
          {
            title: 'Styles for every home and routine',
            text: 'Whether you\'re renovating your entire bathroom or replacing an outdated bathtub, our experienced team will help you choose the perfect style to suit your space, lifestyle, and budget. We install all types of bathtubs, including alcove tubs, freestanding tubs, drop-in tubs, corner tubs, deep soaker tubs, and accessible walk-in tubs, offering options for every home and design preference.',
          },
          {
            title: 'Easy quoting and planning',
            text: 'Getting started is easy with our simple quoting process. Simply send us photos of your existing bathroom along with inspiration photos of the bathtub or bathroom design you\'d like to achieve, and our team will review your project and provide a detailed, transparent estimate. We\'ll discuss the installation requirements, plumbing modifications, and material options so you know exactly what to expect before work begins.',
          },
          {
            title: 'Proper preparation and plumbing care',
            text: 'Every bathtub installation starts with the careful removal and disposal of your existing tub when required, followed by a thorough inspection of the surrounding plumbing and framing to ensure everything is ready for your new installation. If plumbing adjustments are needed, our licensed plumbers complete all modifications to meet current building codes and ensure reliable long-term performance.',
          },
          {
            title: 'A finish that protects as well as looks great',
            text: 'We carefully level and secure the bathtub, connect the drain and overflow assemblies, test all plumbing connections for leaks, and complete the surrounding waterproofing and finishing work to protect your bathroom from moisture damage. Whether your project includes a custom tile surround, shower conversion, or a complete bathroom renovation, our team coordinates every stage of the installation to deliver a seamless result.',
          },
          {
            title: 'Comfort, durability, and lasting value',
            text: 'Using premium materials and proven installation techniques, we ensure your new bathtub is built for comfort, durability, and everyday use. When you choose [Insert Company Name], you can expect transparent communication, expert workmanship, and a professionally installed bathtub that enhances the beauty, functionality, and value of your home for years to come.',
          },
        ],
      },
      {
        title: 'Walk-in Closet Custom Build',
        visual: 'Storage Upgrade',
        cards: [
          {
            title: 'Luxury organization in everyday life',
            text: 'Transform an underused bedroom, spare room, or hallway into a beautifully designed walk-in closet that combines luxury, organization, and everyday functionality. At [Insert Company Name], we provide professional custom walk-in closet design and installation services throughout Toronto and the Greater Toronto Area, creating personalized storage solutions that maximize every square foot of your home.',
          },
          {
            title: 'A practical upgrade with strong value',
            text: 'As modern homes place greater emphasis on spacious primary suites and organized living, a custom walk-in closet has become one of the most desirable upgrades, adding both convenience and long-term property value. Whether you\'re looking for a simple, budget-friendly storage solution or a fully customized dressing room, our team works closely with you to design a space that fits your lifestyle, wardrobe, and budget.',
          },
          {
            title: 'Photo review and layout planning',
            text: 'Getting started is easy with our simple quoting process. Just send us photos of your existing space along with inspiration photos of the closet design you\'d like to achieve, and our team will review your project and provide a detailed, transparent estimate before any work begins. We\'ll help you plan the ideal layout by considering your storage needs, including hanging space, shelving, drawers, shoe storage, accessories, and specialty compartments to keep everything organized and easily accessible.',
          },
          {
            title: 'Solutions for every budget and style',
            text: 'We offer solutions for every budget, from professionally installed IKEA PAX systems to fully custom millwork featuring premium finishes, solid wood or MDF cabinetry, soft-close drawers, glass display cabinets, integrated LED lighting, jewellery organizers, built-in safes, centre islands, and decorative hardware. Every closet is carefully measured, custom planned, and professionally installed to ensure a seamless fit and a high-end appearance.',
          },
          {
            title: 'Built to improve everyday comfort',
            text: 'Our experienced team focuses on quality craftsmanship, durable materials, and thoughtful design to create a closet that is both beautiful and practical for everyday use. Whether you\'re creating a luxury dressing room, upgrading your primary bedroom, or maximizing storage in a smaller home, [Insert Company Name] delivers custom walk-in closet solutions that enhance your home\'s organization, functionality, and value for years to come.',
          },
        ],
      },
      {
        title: 'Schluter Shower System Installation',
        visual: 'Drainage & Waterproofing',
        cards: [
          {
            title: 'A strong shower starts behind the tile',
            text: 'A professionally built shower starts behind the tile, where proper waterproofing is essential to protecting your home from moisture damage and ensuring years of reliable performance. At [Insert Company Name], we specialize in installing complete Schluter® Kerdi waterproof shower systems throughout Toronto and the Greater Toronto Area, providing homeowners with premium shower installations that combine durability, functionality, and modern design.',
          },
          {
            title: 'Complete systems for a long-lasting result',
            text: 'Whether you\'re renovating an existing bathroom or building a custom walk-in shower, our experienced team follows industry-leading waterproofing methods to create a leak-free foundation before any tile is installed. We install complete Schluter® shower systems, including Kerdi-Board® waterproof wall panels, Kerdi waterproof membranes, Kerdi-Drain® linear and centre drains, shower curbs, niches, benches, and custom tile finishes.',
          },
          {
            title: 'Quality installation and manufacturer standards',
            text: 'Every installation begins with proper framing preparation and waterproofing to ensure water remains contained within the shower system and never reaches the walls or subfloor. We carefully install each component according to manufacturer specifications before completing the tile installation with precision, ensuring clean grout lines, level surfaces, and a flawless finish.',
          },
          {
            title: 'A polished, durable finish',
            text: 'Getting started is simple with our easy quoting process. Just send us photos of your existing bathroom along with inspiration photos of the shower design you\'d like to create, and our team will review your project and provide a transparent estimate outlining materials, labour, and the project timeline. Whether you prefer large-format porcelain tile, natural stone, mosaic accents, or a fully custom shower design, we\'ll help you select the right materials to complement your bathroom and budget.',
          },
          {
            title: 'Protection against future moisture damage',
            text: 'By using premium Schluter® waterproofing systems, we help prevent leaks, mould, and moisture-related damage while extending the life of your shower. When you choose [Insert Company Name], you can expect expert craftsmanship, code-compliant installation, and a beautiful custom shower that\'s built to perform for years to come.',
          },
        ],
      },
      {
        title: 'Shower Glass Enclosure Installation',
        visual: 'Glass Finish',
        cards: [
          {
            title: 'A modern finishing touch',
            text: 'A frameless glass shower enclosure is the perfect finishing touch for a modern bathroom, creating an open, elegant look while showcasing your tile work and making the space feel larger and brighter. At [Insert Company Name], we provide professional frameless shower glass enclosure installation services throughout Toronto and the Greater Toronto Area, delivering custom-fitted solutions designed for beauty, durability, and everyday performance.',
          },
          {
            title: 'Custom fit and premium hardware',
            text: 'Every enclosure is custom measured to ensure a precise fit, regardless of your shower\'s size or layout. We install premium 10 mm tempered safety glass, providing exceptional strength, stability, and long-lasting reliability while meeting current building and safety standards. Whether you\'re designing a walk-in shower, corner enclosure, sliding shower, or hinged glass door, our team will help you choose the ideal configuration to complement your bathroom\'s design.',
          },
          {
            title: 'Design details that complete the look',
            text: 'We offer a variety of premium hardware finishes, including polished chrome, brushed nickel, matte black, and other modern options to perfectly match your fixtures and overall aesthetic. Getting started is simple with our easy quoting process. Just send us photos of your existing bathroom along with inspiration photos of the frameless shower design you\'d like to achieve, and our team will review your project and provide a transparent estimate before scheduling a site visit for final measurements.',
          },
          {
            title: 'Precision installation and smooth operation',
            text: 'Once your custom glass panels have been fabricated, our experienced installers carefully mount every component, align the doors for smooth operation, install premium hardware, and seal the enclosure to provide a watertight finish without compromising its clean, minimalist appearance. Whether your frameless shower enclosure is part of a complete bathroom renovation or the final upgrade to an existing space, we ensure every detail is completed with precision and care.',
          },
          {
            title: 'A refined final result',
            text: 'When you choose [Insert Company Name], you can expect expert craftsmanship, premium materials, transparent communication, and a custom frameless glass shower enclosure that enhances the beauty, functionality, and value of your home for years to come.',
          },
        ],
      },
      {
        title: 'Range Hood Installation',
        visual: 'Ventilation Upgrade',
        cards: [
          {
            title: 'Kitchen ventilation that keeps the space comfortable',
            text: 'A properly installed range hood does more than remove cooking odours—it helps improve your home\'s air quality by venting smoke, grease, moisture, and airborne contaminants outside. At [Insert Company Name], we provide professional range hood and make-up air (MUA) installation services throughout Toronto and the Greater Toronto Area, ensuring your kitchen ventilation system operates safely, efficiently, and in compliance with current building codes.',
          },
          {
            title: 'Matching ventilation to your cooking style',
            text: 'Whether you\'re renovating your kitchen or upgrading an existing exhaust system, our experienced team designs and installs ventilation solutions that deliver optimal airflow while protecting your home from excess moisture and grease buildup. We install under-cabinet, wall-mounted, chimney-style, island, insert, and custom range hoods from leading manufacturers, tailored to your kitchen\'s layout and cooking needs.',
          },
          {
            title: 'Designed for clean, safe performance',
            text: 'Getting started is easy with our simple quoting process. Simply send us photos of your existing kitchen along with inspiration photos of the range hood or kitchen design you\'d like to achieve, and our team will review your project and provide a detailed, transparent estimate. Every installation includes careful planning of the ductwork to create the most efficient exterior venting route, whether through an exterior wall, soffit, or roof penetration.',
          },
          {
            title: 'Reliable sealing and code-compliant airflow',
            text: 'We ensure all penetrations are professionally sealed and weatherproofed to protect your home from water intrusion and air leaks. For high-capacity range hoods, we also install code-compliant make-up air (MUA) systems and dampers that replace the air exhausted from your home, helping maintain balanced air pressure and ensuring your ventilation system performs safely and efficiently.',
          },
          {
            title: 'A cleaner, healthier kitchen environment',
            text: 'Our licensed trades coordinate all required electrical work, duct installation, and finishing details to provide a clean, professional installation with minimal disruption to your home. Whether your project is part of a complete kitchen renovation or a standalone appliance upgrade, [Insert Company Name] delivers expert craftsmanship, premium materials, and ventilation systems designed to improve comfort, safety, and long-term performance.',
          },
        ],
      },
      {
        title: 'Kitchen Island Installation',
        visual: 'Island Feature',
        cards: [
          {
            title: 'A centrepiece that improves function',
            text: 'A custom kitchen island is one of the most valuable additions you can make to your kitchen, providing extra workspace, storage, seating, and a beautiful focal point for your home. At [Insert Company Name], we specialize in custom kitchen island design and installation services throughout Toronto and the Greater Toronto Area, creating functional, stylish islands that are tailored to your space and the way you live.',
          },
          {
            title: 'A fit for your layout and daily routine',
            text: 'Whether you\'re adding a standalone island to an existing kitchen or incorporating one into a complete renovation, our experienced team will design a solution that complements your layout while maximizing efficiency and flow. Getting started is simple with our easy quoting process. Just send us photos of your existing kitchen along with inspiration photos of the island style you\'d like to create, and our team will review your project, discuss your goals, and provide a detailed, transparent estimate before any work begins.',
          },
          {
            title: 'Every island planned around how you use the kitchen',
            text: 'We help you choose the ideal island size, cabinet configuration, countertop material, seating arrangement, and storage features to suit your family\'s needs and your budget. Our complete installation service includes custom cabinetry, countertop installation, electrical rough-ins and code-compliant outlets, lighting preparation, plumbing rough-ins for prep or bar sinks, appliance connections where required, and all finishing details.',
          },
          {
            title: 'Elegant details that elevate the room',
            text: 'If you\'re looking to create a high-end, modern appearance, we also install stunning waterfall-edge countertops in quartz, granite, marble, and other premium materials that add elegance and durability to your kitchen. Every island is carefully measured, professionally installed, and built to integrate seamlessly with your existing kitchen or new renovation.',
          },
          {
            title: 'Storage, seating, and style in one feature',
            text: 'From additional drawer storage and hidden waste bins to integrated seating and beverage stations, we customize every detail to improve both the beauty and functionality of your space. When you choose [Insert Company Name], you can expect exceptional craftsmanship, transparent communication, and a custom kitchen island that\'s designed to become the centerpiece of your home for years to come.',
          },
        ],
      },
      {
        title: 'Pantry Buildout',
        visual: 'Storage Planning',
        cards: [
          {
            title: 'A more organized kitchen starts here',
            text: 'A custom walk-in pantry is one of the most practical upgrades you can add to your kitchen, providing organized storage, additional workspace, and easy access to everyday essentials. At [Insert Company Name], we design and build custom walk-in pantries throughout Toronto and the Greater Toronto Area, creating functional storage solutions that maximize every inch of available space.',
          },
          {
            title: 'Designed around your routines',
            text: 'Whether you\'re converting an unused closet, expanding your existing pantry, or incorporating a new pantry into a kitchen renovation, our experienced team will design a layout tailored to your storage needs and lifestyle. Getting started is simple with our easy quoting process. Just send us photos of your existing space along with inspiration photos of the pantry design you\'d like to achieve, and our team will review your project and provide a detailed, transparent estimate before any work begins.',
          },
          {
            title: 'Smart storage features that make daily use easier',
            text: 'We work closely with you to plan shelving heights, drawer configurations, countertop space, and storage zones for small appliances, cookware, pantry items, and household essentials, ensuring everything has its place. Our custom pantry installations include durable shelving systems, soft-close drawer banks, custom cabinetry, countertop work surfaces, and strategically placed electrical outlets for coffee stations, microwaves, mixers, and other countertop appliances.',
          },
          {
            title: 'A pantry that feels built into the home',
            text: 'We can also incorporate pull-out baskets, spice storage, wine racks, adjustable shelving, built-in lighting, and hidden storage solutions to create a pantry that\'s as functional as it is beautiful. Every pantry is carefully measured, professionally installed, and finished to seamlessly match the style of your kitchen and home.',
          },
          {
            title: 'Organization, efficiency, and lasting value',
            text: 'Whether you\'re looking for a simple, organized storage room or a fully customized walk-in pantry with premium finishes and integrated features, [Insert Company Name] delivers expert craftsmanship, transparent communication, and storage solutions designed to improve your home\'s organization, efficiency, and value for years to come.',
          },
        ],
      },
    ],
    features: ['Cabinet updates', 'Vanity and fixture improvements', 'Modern layout redesign'],
  },
];

const buildSectionSlug = (title) =>
  title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const buildSectionSummary = (section) => {
  if (section.summary) return section.summary;

  const firstCardText = section.cards?.[0]?.text;
  if (!firstCardText) return 'Explore the details for this service area.';

  const firstSentence = firstCardText.split('. ')[0].trim();
  return `${firstSentence}.`;
};

const stats = [
  { value: '12+', label: 'Years of craftsmanship' },
  { value: '350+', label: 'Projects completed' },
  { value: '98%', label: 'Client satisfaction' },
];

const blankContactForm = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

function HomePage({ onOpenContact }) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Trusted home renovation experts</p>
          <h1>Built for comfort, crafted for everyday living.</h1>
          <p className="hero-text">
            From doors and windows to complete kitchen and bath upgrades, we bring
            quality workmanship and practical design to every renovation project.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={onOpenContact}>
              Request a Quote
            </button>
            <a className="btn btn-secondary" href="#services">
              Explore Services
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-media" aria-hidden="true" />
          <div className="hero-stat-grid">
            {stats.map((item) => (
              <div key={item.label} className="mini-stat">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <p className="eyebrow">Our services</p>
          <h2>Renovation solutions tailored to your home.</h2>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className={`service-visual service-visual--${service.slug}`} aria-hidden="true" />
              <div className="service-icon">✦</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a className="btn btn-secondary service-link" href={`#service-${service.slug}`}>
                View Service
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="why-us" id="why-us">
        <div className="section-heading">
          <p className="eyebrow">Why choose us</p>
          <h2>Detail-driven work that feels as good as it looks.</h2>
        </div>

        <div className="benefits-grid">
          <div className="benefit-box">
            <h3>Professional finish</h3>
            <p>Clean execution, precise installation, and dependable timelines.</p>
          </div>
          <div className="benefit-box">
            <h3>Transparent process</h3>
            <p>Clear estimates, responsive communication, and respectful service.</p>
          </div>
          <div className="benefit-box">
            <h3>End-to-end support</h3>
            <p>We handle everything from planning and prep through final cleanup.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Let’s build your next upgrade</p>
            <h2>Schedule your renovation consultation.</h2>
          </div>
          <button type="button" className="btn btn-primary" onClick={onOpenContact}>
            Request a Quote
          </button>
        </div>
      </section>
    </>
  );
}

function ServicePage({ service, selectedSectionSlug, onOpenContact }) {
  const renderedSections = service.detailSections
    ? service.detailSections
    : [
        {
          title: service.title,
          paragraphs: service.detail.split(/(?<=\.)\s+(?=[A-Z])/g),
        },
      ];

  const selectedSection = renderedSections.find(
    (section) => buildSectionSlug(section.title) === selectedSectionSlug,
  );

  if (selectedSection && selectedSection.cards) {
    return (
      <section className="service-detail">
        <div className="section-heading">
          <p className="eyebrow">Service detail</p>
          <h2>{service.title}</h2>
        </div>

        <div className="detail-card">
          <div className="detail-section">
            <div className="detail-section-header">
              <div>
                <h3>{selectedSection.title}</h3>
              </div>
              {selectedSection.visual ? (
                <div className="detail-visual" aria-hidden="true">
                  {selectedSection.visual}
                </div>
              ) : null}
            </div>

            <div className="detail-section-body">
              <div className="detail-cards-grid">
                {selectedSection.cards.map((card, index) => (
                  <article key={`${selectedSection.title}-${index}`} className="detail-card-item">
                    <h4>{card.title}</h4>
                    <p>{card.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="detail-actions">
            <a className="btn btn-secondary" href={`#service-${service.slug}`}>
              Back to {service.title}
            </a>
            <button type="button" className="btn btn-primary" onClick={onOpenContact}>
              Request a Quote
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="service-detail">
      <div className="section-heading">
        <p className="eyebrow">Service detail</p>
        <h2>{service.title}</h2>
      </div>

      <div className="detail-card">
        <div className="detail-section-grid">
          {renderedSections.map((section) => (
            <article key={section.title} className="detail-summary-card">
              <div className="detail-summary-top">
                <h3>{section.title}</h3>
                {section.visual ? (
                  <div className="detail-visual small" aria-hidden="true">
                    {section.visual}
                  </div>
                ) : null}
              </div>

              <p>{buildSectionSummary(section)}</p>

              <a
                className="btn btn-secondary"
                href={`#service-${service.slug}/${buildSectionSlug(section.title)}`}
              >
                Read more
              </a>
            </article>
          ))}
        </div>

        {!service.detailSections && (
          <ul className="detail-list">
            {service.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}

        <div className="detail-actions">
          <button type="button" className="btn btn-primary" onClick={onOpenContact}>
            Request a Quote
          </button>
          <a className="btn btn-secondary" href="#services">
            Back to Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactForm, setContactForm] = useState(blankContactForm);
  const [contactStatus, setContactStatus] = useState('');

  useEffect(() => {
    const syncHash = () => setCurrentHash(window.location.hash);
    syncHash();
    window.addEventListener('hashchange', syncHash);

    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  const selectedService = services.find((service) => {
    const serviceHash = `#service-${service.slug}`;
    return currentHash === serviceHash || currentHash.startsWith(`${serviceHash}/`);
  });

  const selectedSectionSlug = selectedService
    ? currentHash.replace(`#service-${selectedService.slug}/`, '')
    : null;

  const openContactModal = () => {
    setContactStatus('');
    setIsContactOpen(true);
  };

  const closeContactModal = () => {
    setIsContactOpen(false);
    setContactStatus('');
  };

  const handleContactFieldChange = (event) => {
    const { name, value } = event.target;
    setContactForm((currentValue) => ({
      ...currentValue,
      [name]: value,
    }));
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setContactStatus('Thanks for reaching out — our team will be in touch shortly.');
    setContactForm(blankContactForm);
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#">
          <div className="brand-mark">N</div>
          <div>
            <p className="brand-name">Nevest Renovation</p>
            <span className="brand-tag">Transforming spaces beautifully</span>
          </div>
        </a>

        <div className="header-nav-stack">
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#why-us">Why Us</a>
            <a href="#contact">Contact</a>
          </nav>

          <nav className="service-category-nav" aria-label="Service categories">
            {services.map((service) => {
              const serviceSlug = `#service-${service.slug}`;
              const isActive = selectedService?.slug === service.slug;

              return (
                <div key={service.slug} className="service-category-item">
                  <a
                    className={`category-pill ${isActive ? 'is-active' : ''}`}
                    href={serviceSlug}
                  >
                    {service.title}
                  </a>

                  {service.detailSections ? (
                    <nav className="subcategory-nav" aria-label={`${service.title} subcategories`}>
                      {service.detailSections.map((section) => {
                        const sectionSlug = buildSectionSlug(section.title);
                        const isCurrent =
                          currentHash === `${serviceSlug}/${sectionSlug}` ||
                          (isActive && selectedSectionSlug === sectionSlug);

                        return (
                          <a
                            key={section.title}
                            className={`subcategory-pill ${isCurrent ? 'is-active' : ''}`}
                            href={`${serviceSlug}/${sectionSlug}`}
                          >
                            {section.title}
                          </a>
                        );
                      })}
                    </nav>
                  ) : null}
                </div>
              );
            })}
          </nav>
        </div>
      </header>

      <main>
        {selectedService ? (
          <ServicePage
            service={selectedService}
            selectedSectionSlug={selectedSectionSlug}
            onOpenContact={openContactModal}
          />
        ) : (
          <HomePage onOpenContact={openContactModal} />
        )}
      </main>

      {isContactOpen ? (
        <div className="contact-modal-backdrop" onClick={closeContactModal}>
          <div
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Request a quote"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="contact-modal-header">
              <div>
                <p className="eyebrow">Request a quote</p>
                <h2>Tell us about your project</h2>
              </div>
              <button
                type="button"
                className="contact-modal-close"
                onClick={closeContactModal}
                aria-label="Close contact form"
              >
                ×
              </button>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactFieldChange}
                  required
                />
              </label>

              <label>
                <span>Phone number</span>
                <input
                  type="tel"
                  name="phone"
                  value={contactForm.phone}
                  onChange={handleContactFieldChange}
                  required
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactFieldChange}
                  required
                />
              </label>

              <label>
                <span>Which service are you interested in?</span>
                <textarea
                  name="message"
                  rows="5"
                  value={contactForm.message}
                  onChange={handleContactFieldChange}
                  placeholder="Describe the project or service you want to discuss"
                  required
                />
              </label>

              <div className="contact-form-actions">
                <button type="submit" className="btn btn-primary">
                  Submit request
                </button>
                <button type="button" className="btn btn-secondary" onClick={closeContactModal}>
                  Cancel
                </button>
              </div>

              {contactStatus ? <p className="contact-status">{contactStatus}</p> : null}
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
