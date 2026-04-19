import React from "react";

function Pricing() {

  const scrollToBooking = (plan) => {
    console.log("Selected Plan:", plan);

    const section = document.getElementById("booking");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const plans = [
    {
      icon: "fas fa-sun",
      name: "Daily Pass",
      price: 49,
      period: "per session (4–5 hours)",
      features: [
        "1 Time Slot",
        "Free WiFi Access",
        "RO Water",
        "AC Room"
      ],
      type: "daily"
    },
    {
      icon: "fas fa-calendar-week",
      name: "Monthly Plan",
      price: 799,
      period: "per month · unlimited access",
      features: [
        "Unlimited Slots",
        "Reserved Seat",
        "Priority Support",
        "Locker Access"
      ],
      type: "monthly",
      featured: true
    },
    {
      icon: "fas fa-users",
      name: "Full Day",
      price: 99,
      period: "per day · all slots",
      features: [
        "Full Day Access",
        "Free WiFi + Charging",
        "RO Water",
        "Flexible Timing"
      ],
      type: "fullday"
    }
  ];

  return (
    <section id="pricing">
      <div className="section-header text-center fade-up">
        <div className="section-label">Pricing Plans</div>
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-desc">
          No hidden charges. Pick the plan that suits your schedule.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card fade-up ${plan.featured ? "featured" : ""}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            {plan.featured && <div className="pricing-badge">POPULAR</div>}

            <div className="pricing-icon">
              <i className={plan.icon}></i>
            </div>

            <div className="pricing-name">{plan.name}</div>

            <div className="pricing-price">
              <span>₹</span>{plan.price}
            </div>

            <div className="pricing-period">{plan.period}</div>

            <ul className="pricing-features">
              {plan.features.map((item, i) => (
                <li key={i}>
                  <i className="fas fa-check-circle"></i> {item}
                </li>
              ))}
            </ul>

            <button
              className="btn-book"
              onClick={() => scrollToBooking(plan.type)}
            >
              {plan.featured ? "Get Monthly Plan" : `Book ${plan.name}`}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;