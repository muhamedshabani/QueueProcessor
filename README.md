# QueueProcessor

## Overview

QueueProcessor is a simulator that illustrates Task valuation methods for queues. It supports various valuation mechanisms and provides a different approach for each.
FCFS - First Come First Serve
Priority - Valuation of tasks based on Priority (High, Medium, Low)
S-Priority - Valuation of tasks Priority-First, if on same level of priority the algorithm checks for difference in segments (workload)
Allowance - not implemented

## Features

- Supports multiple queue systems (e.g., RabbitMQ, AWS SQS)
- High performance and scalability
- Easy integration with existing systems
- Comprehensive logging and error handling

## Usage

To start the QueueProcessor 1. Install Bootstrap by using the following command in terminal: npm i bootstrap@5.3.3 2. Start a live server from "index.html" file

## Configuration

QueueProcessor can be configured from `settings.js` file.
