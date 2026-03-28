
def generate_rfq(product: str, quantity: int):
    return f"""Subject: RFQ for {quantity} {product}(s)

Dear Supplier,

Please provide a quote for {quantity} units of {product}.

Include:
- Unit price and total cost
- Delivery timeline
- Payment terms

Best regards,
Ajay
"""

def generate_followup(product: str):
    return f"""Subject: Follow-up on RFQ for {product}

Dear Supplier,

We are following up on our previous request for quotation regarding {product}.

Kindly share your quotation, including:
- Pricing details
- Delivery timeline
- Payment terms

Looking forward to your response.

Best regards,
Ajay
"""