    (function () {
        console.log('customjs')
  const style = document.createElement('style');
  style.type = 'text/css';

  style.textContent = `
    .checkout-step--customer .stepHeader-title.optimizedCheckout-headingPrimary {
      position: relative;
      font-size: 0px;
    }

    .checkout-step--customer .stepHeader-title.optimizedCheckout-headingPrimary::before {
      content: "Email";
      font-size: 1.9230769231rem;
    }

    #checkout-customer-guest #email-label {
      position: relative;
      display: block;
    }

    #checkout-customer-guest #email-label::after {
      content: "No account needed — just enter your email to continue";
      display: block;
      margin-top: 4px;
    }

    @media (max-width: 551px) {
      .customerEmail-body::after {
        content: "We’ll use this email to send your receipt and order updates.";
        display: block;
        font-size: 1rem;
        font-weight: 400;
      }
    }

    [data-test="checkout-shipping-comments"]::after {
      content: "Important for Virtual Pub Quiz attendees: enter your team name here.";
      display: block;
      font-size: 1.2rem;
      color: #6B7280;
      font-weight: 600;
    }

    @media (min-width: 551px) {
      .customer-login-link {
        position: relative;
        display: flex;
        font-size: 0.9rem;
      }

      .customer-login-link::before {
        content: "We’ll use this email to send your receipt and order updates.";
        display: block;
        font-size: 1rem;
        padding-right: 1.5rem;
      }

      .customerEmail-action {
        margin: 3.6rem 0 0 0 !important;
      }
    }
  `;

  document.head.appendChild(style);
})();
