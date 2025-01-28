import re
from datetime import datetime

def validate_amount(amount):
    if not isinstance(amount, (int, float)):
        return "Invalid amount. Please enter a number."
    if amount <= 0:
        return "Amount must be greater than zero."
    return "Valid"

def validate_date(date):
    try:
        datetime.strptime(date, "%Y-%m-%d")
        return "Valid"
    except ValueError:
        return "Invalid date format. Please use YYYY-MM-DD."

def validate_description(description):
    if not description or not isinstance(description, str):
        return "Invalid description. Please enter a non-empty string."
    return "Valid"

def validate_transaction(transaction_type, amount, date, description):
    if transaction_type not in ["income", "expense"]:
        return "Invalid transaction type. Please use 'income' or 'expense'."
    
    amount_validation = validate_amount(amount)
    if amount_validation != "Valid":
        return amount_validation
    
    date_validation = validate_date(date)
    if date_validation != "Valid":
        return date_validation
    
    description_validation = validate_description(description)
    if description_validation != "Valid":
        return description_validation
    
    return "Transaction is valid."

# Example usage
transaction_type = "income"
amount = 1000
date = "2025-01-28"
description = "Salary"

validation_result = validate_transaction(transaction_type, amount, date, description)
print(validation_result)
