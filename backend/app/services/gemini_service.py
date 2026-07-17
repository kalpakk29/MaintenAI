import os
import json

from dotenv import load_dotenv

load_dotenv()

import google.generativeai as genai

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")


def ask_gemini(question: str, context: str):

    prompt = f"""
You are MaintenAI.

You are an industrial maintenance engineer.

Using ONLY the maintenance manual below, answer the user's question.

Also predict the health of the machine.

Return ONLY valid JSON.

{{
    "answer":"...",
    "status":"Healthy | Warning | Critical",
    "health_score":95,
    "diagnosis":"...",
    "recommendation":"..."
}}

Maintenance Manual:

{context}

Question:

{question}
"""

    response = model.generate_content(prompt)

    text = response.text.strip()

    text = text.replace("```json", "")
    text = text.replace("```", "")

    return json.loads(text)


# =====================================================
# REPORT GENERATOR
# =====================================================

def generate_report(machine):

    prompt = f"""
You are a senior industrial maintenance engineer.

Create a PROFESSIONAL maintenance report.

Write in an engineering report style.

Do NOT return JSON.

Machine Details

Name:
{machine.name}

Manufacturer:
{machine.manufacturer}

Model:
{machine.model}

Serial:
{machine.serial_number}

Location:
{machine.location}

Current AI Status:
{machine.ai_status}

Health Score:
{machine.health_score}

Diagnosis:
{machine.diagnosis}

Recommendation:
{machine.recommendation}

The report must contain the following sections.

# Executive Summary

# Machine Condition

# Technical Diagnosis

# Maintenance Recommendations

# Risk Assessment

# Conclusion

Keep it professional.
"""

    response = model.generate_content(prompt)

    return response.text