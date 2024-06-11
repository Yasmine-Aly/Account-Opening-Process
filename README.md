# Account Opening Process Automation using IBM BPM BAW 

This repository documents the project for automating the Account Opening Process Request.

## Overview

This project aims to streamline the account opening process by automating it through BAW. Below is a step-by-step overview of the process:

1. **Creating Account Opening Request**:
   - The Branch Inputter initiates the process by creating an Account Opening Request through the Process Portal.

2. **Entering Account Information**:
   - Once the request is created, the Branch Inputter receives the Enter Account Information task in the Process Portal. They complete this task by filling in the mandatory data.

3. **Authorizing Account Information**:
   - After the information is entered, the Branch Authorizer receives the Authorize Account Information task in the Process Portal. If the Branch Authorizer approves the request, the process is completed.

4. **Handling Rejections**:
   - If the Branch Authorizer rejects the request, the process flow routes back to the Branch Inputter for further action.

## Documentation

This repository includes detailed implementation steps and videos for clarification.
