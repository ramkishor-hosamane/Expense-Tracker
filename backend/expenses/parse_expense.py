import pdfplumber
import re
from datetime import datetime
from budgets.models import Category
class TransactionParser:
    def __init__(self, pdf_file):
        self.pdf_file = pdf_file
        self.text = None
        self.category_mapping = {
            'Food': r'\b(food|restaurant|cafe|diner|pizza|burger|taco|sushi|flipkart|lulu bangalore|avenue food plaza pvt ltd|upahara darshini|taco bell lulu mall bangalore|sangama bakery|tea plus|razorpayzomato|ssmart vv0079|hungerbox|amrutha condiments|smoke the sizzler house)\b',
            'Grocery': r'\b(grocery|supermarket|mart|market|water supply om shakti second stage|s lingaraju|chalapathy|prakasha m|pincode|ritwik batman|mahesha d s|swaraj super market - btm|shivanand madolli|c kupendra|e prabhakar reddy|ticketsimply|vinni)\b',
            'Gadgets': r'\b(gadgets|electronics|phone|tablet|laptop)\b',
            'Grooming': r'\b(grooming|salon|barber|haircut)\b',
            'Books': r'\b(books|bookstore|novel|magazine)\b',
            'Bike Maintainence': r'\b(bike|maintenance|repair|service)\b',
            'Utilities': r'\b(utilities|electricity|water|gas|internet)\b',
            'Commute': r'\b(commute|transportation|taxi|uber|bus|metro|ola)\b',
            'Entertainment': r'\b(entertainment|movie|concert|theater)\b',
            'Health': r'\b(health|doctor|hospital|medicine)\b',
            'Clothes': r'\b(clothes|apparel|fashion|shirt|dress)\b',
            'Recharge': r'\b(recharge|phone|mobile|top-up|jio prepaid recharges|vi)\b',
            'Others': r'\b(others|miscellaneous)\b',
            'Unknown': r'\b(unknown)\b',
            'Repairs': r'\b(repairs|fix)\b',
            'Rent': r'\b(rent|lease)\b',
        }

    def extract_text(self):
        with pdfplumber.open(self.pdf_file) as pdf:
            self.text = ""
            for page in pdf.pages:
                text = page.extract_text()
                self.text += f"\n{text}"

    def parse_transaction_statement(self):
        self.extract_text()
        if not self.text:
            raise ValueError("No text extracted from PDF. Call extract_text() first.")
        
        split_pattern = r"Paid by XXXXXXXXXX\d+"
        sections = re.split(split_pattern, self.text)

        date_pattern = r"([A-Za-z]{3} \d{2}, \d{4})"
        description_pattern = r"Paid to (.+?) DEBIT"
        amount_pattern = r"₹([\d,]+)"

        transactions = []
        for id, section in enumerate(sections, start=1):
            text = section.strip()
            date_match = re.search(date_pattern, text)
            if date_match:
                date_str = date_match.group(1)
                date = datetime.strptime(date_str, '%b %d, %Y').strftime('%Y-%m-%d')
            else:
                date = datetime.today().strptime(date_str, '%b %d, %Y').strftime('%Y-%m-%d')

            description_match = re.search(description_pattern, text)
            if description_match:
                description = description_match.group(1).strip()
            else:
                description = ""

            amount_match = re.search(amount_pattern, text)
            if amount_match:
                amount = float(amount_match.group(1).replace(',', ''))
            else:
                amount = None

            # Default category and matched keyword
            category =Category.objects.filter(name='Unknown').values()[0] 
            matched_keyword = None
            
            # Check if description is not None and try to match against category regex patterns
            if description:
                for cat, pattern in self.category_mapping.items():
                    match = re.search(pattern, description, re.IGNORECASE)
                    if match:
                        print("Categpry is ",cat)
                        category = Category.objects.filter(name=cat).values()[0]
                        if not category:
                            print("Category not found ",description,"---> ",'amount ---->',amount)
                        #category = cat
                        #matched_keyword = match.group()
                        break

            transactions.append({
                'identifier': id,
                'date': date,
                'description': description,
                'amount': amount,
                'category': category,
                #'matched_keyword': matched_keyword
            })
        #print(transactions)
        return transactions
