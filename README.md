# STOCK BOT AGENT
An AI Agent using Upstreet to forecast stock trends based on news and price history analysis.



https://github.com/user-attachments/assets/57959240-6c2f-444e-8fe7-bb0ab80dfe24


## Overview
StockBotAgent is an AI agent made using Upstreet's SDK designed to analyze and forecast stock trends by leveraging news sentiment and technical indicators. Built using the react-agents library, USDK it provides users with comprehensive insights and actionable recommendations on specific stock tickers.

## Features
### News Sentiment Analysis: 
Fetches and analyzes the latest news articles related to a stock to determine market sentiment.
### Historical Price Data Retrieval: 
Retrieves historical stock prices over a specified date range for in-depth analysis.
### Technical Indicators Calculation: 
Calculates key technical indicators such as Moving Average (MA), Exponential Moving Average (EMA), and Moving Average Convergence Divergence (MACD).
### Comprehensive Stock Analysis: 
Combines sentiment data and technical indicators to provide detailed analysis and forecasts.
### Actionable Recommendations: 
Offers explicit investment recommendations like strong buy, hold, or sell calls based on the analysis.

## How It Works
The agent follows a structured process to deliver accurate and insightful stock analyses:

### User Interaction: 
The user requests an analysis or prediction for a specific stock ticker.
### Fetching News Sentiment:
The agent retrieves sentiment analysis data for the stock over the last 30 days using the StockNewsAPI.
### Retrieving Historical Prices:
It fetches historical stock price data for the past 60 days using the Polygon.io API.
### Calculating Technical Indicators:
The agent calculates MA, EMA, and MACD based on the historical price data.
### Data Analysis: 
It combines the news sentiment and technical indicators to form a comprehensive analysis.
### Providing Recommendations:
Based on predefined criteria, the agent provides an explicit recommendation (e.g., strong buy, sell, hold).
### User Output: 
The analysis and recommendation are presented to the user in a detailed and understandable format.

## APIs Used
### 1. StockNewsAPI
Purpose: To fetch sentiment analysis from news articles related to a specific stock ticker.
Usage: Helps in gauging the market's perception and sentiment towards the stock based on recent news.
Documentation: [StockNewsAPI](https://stocknewsapi.com/documentation)
### 2. Polygon.io API
Purpose: To retrieve historical stock price data for a given ticker over a specified date range.
Usage: Provides the necessary data to calculate technical indicators for the stock.
Documentation: [Polygon.io Documentation](https://polygon.io/docs/stocks/getting-started)

## Getting Started
### Prerequisites
Node.js: Ensure you have Node.js installed (version 12 or higher).
npm: Comes packaged with Node.js.
USDK: Follow [this](https://docs.upstreet.ai/install) to install USDK.
API Keys: Obtain API keys for both StockNewsAPI and Polygon.io.
Sign up at StockNewsAPI for the news sentiment API key.
Sign up at Polygon.io for the stock price data API key.

## Installation
### Install USDK
Follow the [documentation](https://docs.upstreet.ai/install)


### Clone the Repository
```
git clone https://github.com/paradox-prx/StockBot.git

cd StockBot
```



### Configure Environment Variables

Add your API keys to the agent.tsx file:

```
POLYGON_API_KEY=your_polygon_api_key_here
STOCKNEWS_API_KEY=your_stocknews_api_key_here
```

### Run the Application

```
usdk chat stockBot
```
### Usage
Once the application is running, interact with the agent through its conversational interface.

Example Commands:

"Analyze stock AAPL."
"What's the forecast for TSLA?"
"Should I buy or sell GOOGL?"

## Acknowledgments
Upstreet: For the AI agent framework.

StockNewsAPI: For providing news sentiment data.

Polygon.io: For historical stock price data.

## Disclaimer
The information provided by StockBotAgent is for educational and informational purposes only and should not be construed as financial advice. Always consult with a professional financial advisor before making investment decisions.



